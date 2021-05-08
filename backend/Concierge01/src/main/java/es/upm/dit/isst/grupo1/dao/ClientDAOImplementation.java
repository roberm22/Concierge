package es.upm.dit.isst.grupo1.dao;

import java.util.List;

import org.hibernate.Session;

import es.upm.dit.isst.grupo1.model.Client;

public class ClientDAOImplementation implements ClientDAO{

	private static ClientDAOImplementation clientDAO;
	
	private ClientDAOImplementation() {}
	
	public static ClientDAOImplementation getInstancia() {
		if(clientDAO == null)
			clientDAO = new ClientDAOImplementation();
		return clientDAO;
	}
	
	
	@Override
	public Client create(Client client) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		try {
			session.save(client);
			session.getTransaction().commit();
			session.close();
		} catch(Exception e) {
			e.printStackTrace();
		}
		
		return client;
	}

	@Override
	public Client read(int id) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		Client client = null;
		
		client = session.get(Client.class, id);
		session.getTransaction().commit();
		session.close();
							
		return client;
	}

	@Override
	public Client update(Client client) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.saveOrUpdate(client);
		session.getTransaction().commit();
		session.close();
		
		return client;
	}

	@Override
	public Client delete(Client client) {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		session.delete(client);
		session.getTransaction().commit();
		session.close();
		
		return client;
	}

	@Override
	public List<Client> readAll() {
		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<Client> client = null;

		String query = "FROM Client";
		client = session.createQuery(query).list();
		session.getTransaction().commit();
		session.close();
	
		return client;
	}

	@Override
	public Client verificarLogin(String DNI, String room) {

		Session session = SessionFactoryService.get().openSession();
		session.beginTransaction();
		
		List<Client> clients = null;
		
		clients = session.createQuery("from Client").list();

		session.getTransaction().commit();
		session.close();

		for (Client c: clients) {
			if(c.getDNI()!=null && (c.getDNI().equals(DNI) && c.getRoom()== room))
				return c;
		}
		
		return null;
	}

}
