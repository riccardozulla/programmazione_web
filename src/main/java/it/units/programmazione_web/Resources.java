package it.units.programmazione_web;

import com.auth0.jwt.interfaces.DecodedJWT;
import com.google.gson.Gson;
import org.bson.Document;

import javax.security.auth.login.CredentialExpiredException;
import javax.ws.rs.*;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;
import java.util.ArrayList;
import java.util.Calendar;

@Path("/trips")
public class Resources {
    Gson gson = new Gson();

    @GET
    @Path("/date/{year}/{month}/{day}")
    @Produces(MediaType.APPLICATION_JSON)
    public Response getTrips(@HeaderParam("Authorization") String token, @PathParam("year") int year, @PathParam("month") int month, @PathParam("day") int day){
        ArrayList<Document> jsonArray = new ArrayList<>();
        try {
            int userId = getUserId(token.split(" ")[1]);
            Calendar calendar = Calendar.getInstance();
            calendar.set(year, month, day);
            System.out.println(calendar.getTime());
            for(Document doc : MongoDBWrapper.getInstance().getTrips(userId, calendar.getTime())){
                jsonArray.add(doc);
            }

            return Response.ok(gson.toJson(jsonArray)).build();
        } catch (CredentialExpiredException e) {
            return Response.status(440).entity(e.getMessage()).build();
        } catch (Exception e) {
            return Response.serverError().build();
        }

    }

    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response setTrip(@HeaderParam("Authorization") String token, String json){
        try {
            Trip trip = gson.fromJson(json, Trip.class);
            trip.setOwnerId(getUserId(token.split(" ")[1]));
            System.out.println(trip);
            return Response.status(201).entity(gson.toJson(MongoDBWrapper.getInstance().addTrip(trip))).build();
        } catch (CredentialExpiredException e) {
            return Response.status(440).entity(e.getMessage()).build();
        } catch ( Exception e){
            return Response.serverError().build();
        }
    }

    @PUT
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response updateTrip(@HeaderParam("Authorization") String token, String json){
        try {
            Trip trip = gson.fromJson(json, Trip.class);
            int owner = getUserId(token.split(" ")[1]);
            return Response.status(201).entity(gson.toJson(MongoDBWrapper.getInstance().updateTrip(trip, owner))).build();
        } catch (CredentialExpiredException e) {
            return Response.status(440).entity(e.getMessage()).build();
        } catch ( Exception e){
            e.printStackTrace();
            return Response.serverError().build();
        }
    }


    @DELETE
    @Path("/{id}")
    public Response deleteTrip(@HeaderParam("Authorization") String token, @PathParam("id") int id ){
        try {
            int owner = getUserId(token.split(" ")[1]);

            MongoDBWrapper.getInstance().deleteTrip(id, owner);
            return Response.status(201).build();
        } catch (CredentialExpiredException e) {
            return Response.status(440).entity(e.getMessage()).build();
        } catch ( Exception e){
            e.printStackTrace();
            return Response.serverError().build();
        }
    }


    private int getUserId( String token ) throws CredentialExpiredException {
        DecodedJWT jwt = Token.validateToken(token);
        return Integer.parseInt(jwt.getSubject());
    }
}
