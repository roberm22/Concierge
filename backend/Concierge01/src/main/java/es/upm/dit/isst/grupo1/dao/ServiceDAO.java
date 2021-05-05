package es.upm.dit.isst.grupo1.dao;

import java.util.List;
import es.upm.dit.isst.grupo1.model.Service;


public interface ServiceDAO {
	public Service create(Service service);
	public Service read(int id);
	public Service update(Service service);
	public Service delete(Service service);
	public List<Service> readAll();
	

}
