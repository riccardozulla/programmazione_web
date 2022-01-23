package it.units.programmazione_web;

import com.auth0.jwt.JWT;
import com.auth0.jwt.JWTVerifier;
import com.auth0.jwt.algorithms.Algorithm;
import com.auth0.jwt.exceptions.JWTCreationException;
import com.auth0.jwt.exceptions.JWTVerificationException;
import com.auth0.jwt.interfaces.DecodedJWT;

import javax.security.auth.login.CredentialExpiredException;
import java.util.Date;

public class Token{
    static final  String SECRET = "5ZROh57ADpZaQXhhI5tpI9OW7Omx8rarSSgye9IBMhzhujWQecOOkn"; //64 byte > 32 byte min
    static final String ISSUER = "programmazione_web";
    static final long VALIDITY_TOKEN_IN_MILLIS = 900000;//900000;
    public static String generateToken(int userId, String email){
        String token="";
        try {
            Algorithm algorithm = Algorithm.HMAC256(SECRET);
            token = JWT.create()
                    .withIssuer(ISSUER)
                    .withSubject(String.valueOf(userId))
                    .withExpiresAt(new Date(new Date().getTime()+VALIDITY_TOKEN_IN_MILLIS))
                    .withClaim("email", email)
                    .sign(algorithm);
        } catch (JWTCreationException e){
            e.printStackTrace();
            System.err.println("ERROR");
        }
        return token;
    }

    public static DecodedJWT validateToken(String token) throws CredentialExpiredException {
        DecodedJWT jwt;
        try {
            Algorithm algorithm = Algorithm.HMAC256(SECRET);
            JWTVerifier verifier = JWT.require(algorithm)
                    .withIssuer(ISSUER)
                    .build(); //Reusable verifier instance
            jwt = verifier.verify(token);
        } catch (JWTVerificationException exception){
            throw new CredentialExpiredException("Token not valid");
        }
        return jwt;
    }

}
