package it.units.programmazione_web;

import com.google.gson.Gson;
import org.bson.Document;

import javax.ws.rs.Consumes;
import javax.ws.rs.POST;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/auth")
public class AccessControl {

    Gson gson = new Gson();

    @Path("/signin")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.APPLICATION_JSON)
    public Response signin(String credentials_json) {
        Credential credential = gson.fromJson(credentials_json, Credential.class);
        if(credential.validateCredentials()){
            System.out.println("User authenticated");
            Document document = new Document()
                    .append("user", credential.getUserId())
                    .append("token", Token.generateToken(credential.getUserId(), credential.getEmail()));
            return Response.ok(document.toJson()).build();
        }
        else {
            return Response.status(400).entity("Authentication error").build();
        }
    }

    @Path("/register")
    @POST
    @Consumes(MediaType.APPLICATION_JSON)
    @Produces(MediaType.TEXT_PLAIN)
    public Response register(String credential_json){
        Credential credential = gson.fromJson(credential_json, Credential.class);
        try {
            credential.storeCredential();
        } catch ( Exception e) {
            return Response.status(400).entity(e.getMessage()).build();
        }

        return Response.ok("Registration completed successfully").build();
    }
}