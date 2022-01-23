package it.units.programmazione_web;

import javax.ws.rs.GET;
import javax.ws.rs.Path;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;

@Path("/info")
public class Info {
    @GET
    @Produces(MediaType.TEXT_PLAIN)
    public Response getInfo(){
        return Response.ok("Info").build();
    }
}
