package es.upm.dit.isst.grupo1.dao;


import java.util.List;
import es.upm.dit.isst.grupo1.model.Tours;


public interface ToursDAO {
	
	public Tours create(Tours tours);
	public Tours read(int id);
	public Tours update(Tours tours);
	public Tours delete(Tours tours);
	public List<Tours> readAll();
	
}