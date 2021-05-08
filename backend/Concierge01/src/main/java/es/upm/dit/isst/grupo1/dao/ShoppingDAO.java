package es.upm.dit.isst.grupo1.dao;


import java.util.List;
import es.upm.dit.isst.grupo1.model.Shopping;


public interface ShoppingDAO {
	
	public Shopping create(Shopping shopping);
	public Shopping read(int id);
	public Shopping update(Shopping shopping);
	public Shopping delete(Shopping shopping);
	public List<Shopping> readAll();
	
}