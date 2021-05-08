package es.upm.dit.isst.grupo1.dao;


import java.util.List;
import es.upm.dit.isst.grupo1.model.Restaurants;


public interface RestaurantsDAO {
	
	public Restaurants create(Restaurants restaurant);
	public Restaurants read(int id);
	public Restaurants update(Restaurants restaurant);
	public Restaurants delete(Restaurants restaurant);
	public List<Restaurants> readAll();
	
}
