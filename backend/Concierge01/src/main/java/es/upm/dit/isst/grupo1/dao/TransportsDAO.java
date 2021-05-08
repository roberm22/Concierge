package es.upm.dit.isst.grupo1.dao;


import java.util.List;
import es.upm.dit.isst.grupo1.model.Transports;


public interface TransportsDAO {
	
	public Transports create(Transports transports);
	public Transports read(int id);
	public Transports update(Transports transports);
	public Transports delete(Transports transports);
	public List<Transports> readAll();
	
}