package it.units.programmazione_web;

import org.bson.Document;
import org.bson.types.Binary;

import javax.crypto.SecretKeyFactory;
import javax.crypto.spec.PBEKeySpec;
import java.security.NoSuchAlgorithmException;
import java.security.SecureRandom;
import java.security.spec.InvalidKeySpecException;
import java.security.spec.KeySpec;


public class Credential {
    private int userId;
    private String name;
    private String surname;
    private String email;
    private String password;
    private Binary salt;
    private Binary hash;

    public Credential(int userId, String name, String surname, String email, String password) {
        this.userId = userId;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.password = password;
    }


    public void storeCredential() throws Exception {
        try {
            salt = generateSalt();
            hash = computeHashPassword(salt, password);
            MongoDBWrapper.getInstance().registerUser(this);
        } catch (NoSuchAlgorithmException | InvalidKeySpecException e) {
            e.printStackTrace();
            throw new Exception("Server error");
        }
    }

    public boolean validateCredentials(){
        try {
            Document user = MongoDBWrapper.getInstance().getUser(this.email);
            this.userId = user.getInteger("id_user");
            if( (user.get("hash", Binary.class)).equals(computeHashPassword((user.get("salt", Binary.class)), this.password)) ){
                return true;
            }
        } catch (NoSuchAlgorithmException | InvalidKeySpecException e){
            e.printStackTrace();
        } catch (Exception e) {
            e.printStackTrace();
        }
        return false;
    }

    public Binary generateSalt() {
        SecureRandom random = new SecureRandom();
        byte[] salt = new byte[16];
        random.nextBytes(salt);
        return new Binary(salt);
    }
    public Binary computeHashPassword(Binary salt, String password) throws NoSuchAlgorithmException, InvalidKeySpecException {
        KeySpec spec = new PBEKeySpec(password.toCharArray(), salt.getData(), 65536, 128);
        SecretKeyFactory factory = SecretKeyFactory.getInstance("PBKDF2WithHmacSHA1");
        return new Binary(factory.generateSecret(spec).getEncoded());
    }


    public int getUserId() { return userId; }
    public String getName() {
        return name;
    }
    public String getSurname() {
        return surname;
    }
    public String getEmail() {
        return email;
    }
    public Binary getSalt() {
        return salt;
    }
    public Binary getHash() {
        return hash;
    }
}
