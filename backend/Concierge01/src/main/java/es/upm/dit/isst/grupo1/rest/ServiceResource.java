package es.upm.dit.isst.grupo1.rest;

import java.net.URI;
import java.net.URISyntaxException;
import java.util.ArrayList;
import java.util.List;

import javax.ws.rs.Consumes;
import javax.ws.rs.DELETE;
import javax.ws.rs.GET;
import javax.ws.rs.POST;
import javax.ws.rs.PUT;
import javax.ws.rs.Path;
import javax.ws.rs.PathParam;
import javax.ws.rs.Produces;
import javax.ws.rs.core.MediaType;
import javax.ws.rs.core.Response;


import es.upm.dit.isst.grupo1.dao.ServiceDAOImplementation;
import es.upm.dit.isst.grupo1.model.Service;

@Path("/service")
public class ServiceResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Service> readAll () {
	    return ServiceDAOImplementation.getInstancia().readAll();
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Service cnew) throws URISyntaxException {
		Service c = ServiceDAOImplementation.getInstancia().create(cnew);
		
	    if (c != null) {
	        URI uri = new URI("/Concierge01/rest/service/" + c.getId());
	        return Response.created(uri).build();
	    }
	    return Response.status(Response.Status.NOT_FOUND).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	public Response read(@PathParam("id") int id) {
	    Service s = ServiceDAOImplementation.getInstancia().read(id);
	
	    if (s == null)
	      return Response.status(Response.Status.NOT_FOUND).build();
	
	    return Response.ok(s, MediaType.APPLICATION_JSON).build();
	 }  
	
	
	// Revisar por posibles errores en el if
	@POST 
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	public Response update(@PathParam("id") int id, Service s) {
	
		System.out.println("Update request for" + id + " " + s.toString());
		
		Service told = ServiceDAOImplementation.getInstancia().read(id);
		
		if ((told == null) || ( told.getId() != s.getId()))
		  return Response.notModified().build();
		
		ServiceDAOImplementation.getInstancia().update(s);
		
		return Response.ok().build();                
	 }
	
	 @DELETE
	 @Path("{id}")
	
	 public Response delete(@PathParam("id") int id) {
	
		Service rold = ServiceDAOImplementation.getInstancia().read(id);
			
		if (rold == null)	
			return Response.notModified().build();
			
		ServiceDAOImplementation.getInstancia().delete(rold);
			
		return Response.ok().build();
	 }
	 
	 @GET
	 @Path("/clients/{id}")
	 @Produces(MediaType.APPLICATION_JSON)
	 public Response getClientServicies(@PathParam("id") int id) {
		List<Service> services = ServiceDAOImplementation.getInstancia().readAll();
		List<Service> services_client = new ArrayList<Service>();
		for(Service s : services) {
			if(s.getCliente().getId() == id)
				services_client.add(s);
		}
		
		return Response.ok(services_client.toArray(), MediaType.APPLICATION_JSON).build();
	}  
	 
}
