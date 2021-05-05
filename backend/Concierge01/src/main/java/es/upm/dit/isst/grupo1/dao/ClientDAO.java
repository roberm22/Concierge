package es.upm.dit.isst.grupo1.dao;

import java.util.List;
import es.upm.dit.isst.grupo1.model.Client;


public interface ClientDAO {
	public Client create(Client client);
	public Client read(int id);
	public Client update(Client client);
	public Client delete(Client client);
	public List<Client> readAll();
	public Client verificarLogin(String DNI, String room);
}
