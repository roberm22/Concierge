package es.upm.dit.isst.grupo1.rest;

import javax.ws.rs.ApplicationPath;
import org.glassfish.jersey.server.ResourceConfig;

@ApplicationPath("rest")
public class ConciergeApp extends ResourceConfig {
    public ConciergeApp() {
            packages("es.upm.dit.isst.grupo1.rest");
    }
}