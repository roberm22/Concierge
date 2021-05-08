package es.upm.dit.isst.grupo1.rest;

import java.io.IOException;

import javax.ws.rs.container.ContainerRequestContext;
import javax.ws.rs.container.ContainerResponseContext;
import javax.ws.rs.container.ContainerResponseFilter;
import javax.ws.rs.ext.Provider;

@Provider
public class CorsPolicy implements ContainerResponseFilter {

	@Override
	public void filter(ContainerRequestContext request, ContainerResponseContext response) throws IOException {
		response.getHeaders().add("Access-Control-Allow-Origin", "*");
		response.getHeaders().add("Access-Control-Allow-Headers", "origin, content-type, accept, Authorization");
		response.getHeaders().add("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS, HEAD");
	}
}