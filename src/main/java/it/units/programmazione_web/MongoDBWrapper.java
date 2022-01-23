package it.units.programmazione_web;

import com.mongodb.ConnectionString;
import com.mongodb.MongoException;
import com.mongodb.client.FindIterable;
import com.mongodb.client.MongoClient;
import com.mongodb.client.MongoClients;
import com.mongodb.client.MongoCollection;
import com.mongodb.client.model.UpdateOptions;
import com.mongodb.client.result.DeleteResult;
import com.mongodb.client.result.UpdateResult;
import org.bson.Document;
import org.bson.conversions.Bson;

import java.text.DateFormat;
import java.text.SimpleDateFormat;
import java.util.Date;

import static com.mongodb.client.model.Filters.and;
import static com.mongodb.client.model.Filters.eq;
import static com.mongodb.client.model.Sorts.ascending;
import static com.mongodb.client.model.Updates.combine;
import static com.mongodb.client.model.Updates.set;

public class MongoDBWrapper {
    private final ConnectionString connectionString = new ConnectionString("mongodb+srv://user:NmW6BTJhPg3iVJT@cluster0.o3rqj.mongodb.net/WebApp?retryWrites=true&w=majority");
    private static MongoDBWrapper instance = null;
    private MongoClient mongoClient;

    private MongoDBWrapper() {
        try {
            mongoClient = MongoClients.create(connectionString);
        } catch ( Exception e ) {
            System.err.println("Error creating instance MongoClient");
            System.err.println(e.getLocalizedMessage());
        }
    }

    public static MongoDBWrapper getInstance() {
        if (instance == null) {
            instance = new MongoDBWrapper();
        }
        return instance;
    }

    public Document getUser(String email) throws Exception {
        try {
            MongoCollection<Document> users = mongoClient.getDatabase("WebApp").getCollection("Users");
            Document document = users.find(eq("email", email)).first();
            if (document == null) {
                throw new Exception("User not found");
            }

            return document;
        } catch (MongoException e){
            System.err.println("Unable to get a user: " + e.getMessage());
            throw e;
        }
    }

    public void registerUser(Credential credential) throws Exception {
        try {
            MongoCollection<Document> usersCollection = mongoClient.getDatabase("WebApp").getCollection("Users");
            if (usersCollection.find(eq("email", credential.getEmail())).first() != null) {
                throw new Exception("User already registered");
            }
            int idMax;
            Document docMax = usersCollection.find().sort(new Document("id_user", -1)).first();
            if (docMax == null) {
                idMax = 1;
            } else {
                idMax = docMax.getInteger("id_user");
            }
            Document b = new Document();
            b.append("id_user", idMax+1)
                    .append("name", credential.getName())
                    .append("surname", credential.getSurname())
                    .append("email", credential.getEmail())
                    .append("salt", credential.getSalt())
                    .append("hash", credential.getHash());
            System.out.println(b);
            usersCollection.insertOne(b);
        } catch (MongoException e){
        System.err.println("Unable to getUser: " + e.getMessage());
        throw new Exception("Server error");
    }
    }

    public FindIterable<Document> getTrips(int userId, Date date) throws Exception {
        try {
            MongoCollection<Document> trips = mongoClient.getDatabase("WebApp").getCollection("Trips");
            DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            Date dateFormatted = formatter.parse(formatter.format(date));
            Bson query = and(eq("id_owner", userId), eq("date", dateFormatted));
            return trips.find(query).sort(ascending("date"));
        } catch (MongoException e){
            System.err.println("Unable to getTrips: " + e.getMessage());
            throw new Exception("Server error");
        }
    }

    public Document addTrip(Trip trip) throws Exception {
        try {
            MongoCollection<Document> tripsCollection = mongoClient.getDatabase("WebApp").getCollection("Trips");
            int idMax;
            Document docMax = tripsCollection.find().sort(new Document("id_trip", -1)).first();
            if (docMax == null) {
                idMax = 1;
            } else {
                idMax = docMax.getInteger("id_trip");
            }
            DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            Date dateFormatted = formatter.parse(formatter.format(trip.getDate()));
            System.out.println(dateFormatted);
            Document b = new Document();
            b.append("id_trip", idMax+1)
                    .append("id_owner", trip.getOwnerId())
                    .append("date", dateFormatted)
                    .append("type", trip.getType())
                    .append("properties", new Document()
                            .append("description", trip.getProperties().getDescription())
                            .append("vehicle", trip.getProperties().getVehicle())
                            .append("markers", trip.getProperties().getMarkers()))
                    .append("geometry", new Document()
                            .append("type", trip.getGeometry().getType())
                            .append("coordinates", trip.getGeometry().getCoordinates()));

            tripsCollection.insertOne(b);
            return b;
        } catch (MongoException e){
            System.err.println("Unable to add new trip: " + e.getMessage());
            throw new Exception("Server error");
        }
    }

    public Document updateTrip(Trip trip, int ownerId) throws Exception {
        try {
            MongoCollection<Document> tripsCollection = mongoClient.getDatabase("WebApp").getCollection("Trips");
            Bson filter = and(eq("id_trip", trip.getTripId()), eq("id_owner", ownerId));
            DateFormat formatter = new SimpleDateFormat("yyyy-MM-dd");
            Date dateFormatted = formatter.parse(formatter.format(trip.getDate()));
            Bson updateDate = set("date", dateFormatted);
            Bson updateDescription = set("properties.description", trip.getProperties().getDescription());
            Bson updateVehicle = set("properties.vehicle", trip.getProperties().getVehicle());
            Bson updateMarkers = set("properties.markers", trip.getProperties().getMarkers());
            Bson updateCoordinates = set("geometry.coordinates", trip.getGeometry().getCoordinates());
            Bson updateOperations = combine(updateDate, updateDescription, updateVehicle, updateMarkers, updateCoordinates);
            UpdateOptions options = new UpdateOptions().upsert(false);
            UpdateResult updateOne = tripsCollection.updateOne(filter, updateOperations, options);
            return tripsCollection.find(filter).first();
        } catch ( MongoException e){
            System.err.println("Unable to update the trip: " + e.getMessage());
            throw new Exception("Server error");
        }
    }


    public void deleteTrip(int id, int ownerId) throws Exception {
        try {
            MongoCollection<Document> tripsCollection = mongoClient.getDatabase("WebApp").getCollection("Trips");

            Bson filter = and(eq("id_trip", id), eq("id_owner", ownerId));
            DeleteResult deleteResult = tripsCollection.deleteOne(filter);
        } catch (MongoException e) {
            System.err.println("Unable to delete the trip: " +e.getMessage());
            throw new Exception("Server error");
        }
    }
}
