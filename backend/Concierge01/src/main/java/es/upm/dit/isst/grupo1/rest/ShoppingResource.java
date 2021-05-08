package es.upm.dit.isst.grupo1.rest;



import java.net.URI;
import java.net.URISyntaxException;
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

import es.upm.dit.isst.grupo1.dao.ShoppingDAOImplementation;
import es.upm.dit.isst.grupo1.model.Shopping;

@Path("/shopping")
public class ShoppingResource {
	@GET
	@Produces(MediaType.APPLICATION_JSON)
	public List<Shopping> readAll () {
	    return ShoppingDAOImplementation.getInstancia().readAll();
	}
	
	@PUT
	@Consumes(MediaType.APPLICATION_JSON)
	public Response create(Shopping rnew) throws URISyntaxException {
		Shopping c = ShoppingDAOImplementation.getInstancia().create(rnew);
	    if (c != null) {
	        URI uri = new URI("/Concierge01/rest/shopping/" + c.getId());
	        return Response.created(uri).build();
	    }
	    return Response.status(Response.Status.NOT_FOUND).build();
	}
	
	@GET
	@Path("{id}")
	@Produces(MediaType.APPLICATION_JSON)
	
	public Response read(@PathParam("id") int id) {
		Shopping c = ShoppingDAOImplementation.getInstancia().read(id);
	
	    if (c == null)
	      return Response.status(Response.Status.NOT_FOUND).build();
	
	    return Response.ok(c, MediaType.APPLICATION_JSON).build();
	 }        
	
	// Revisar por posibles errores en el if
	@POST 
	@Consumes(MediaType.APPLICATION_JSON)
	@Path("{id}")
	
	public Response update(@PathParam("id") int id, Shopping c) {
	
		System.out.println("Update request for" + id + " " + c.toString());
		
		Shopping told = ShoppingDAOImplementation.getInstancia().read(id);
		
		if ((told == null) || ( told.getId() != c.getId()))
		  return Response.notModified().build();
		
		ShoppingDAOImplementation.getInstancia().update(c);
		
		return Response.ok().build();                
	 }
	
	 @DELETE
	 @Path("{id}")
	
	 public Response delete(@PathParam("id") int id) {
	
		 Shopping rold = ShoppingDAOImplementation.getInstancia().read(id);
			
		if (rold == null)	
			return Response.notModified().build();
			
		ShoppingDAOImplementation.getInstancia().delete(rold);
			
		return Response.ok().build();
	 }
}