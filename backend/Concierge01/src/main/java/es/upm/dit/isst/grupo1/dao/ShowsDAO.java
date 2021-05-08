package es.upm.dit.isst.grupo1.dao;



import java.util.List;
import es.upm.dit.isst.grupo1.model.Shows;


public interface ShowsDAO {
	
	public Shows create(Shows shows);
	public Shows read(int id);
	public Shows update(Shows shows);
	public Shows delete(Shows shows);
	public List<Shows> readAll();
	
}