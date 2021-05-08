package es.upm.dit.isst.grupo1.dao;


import java.util.List;
import es.upm.dit.isst.grupo1.model.RoomService;


public interface RoomServiceDAO {
	
	public RoomService create(RoomService roomService);
	public RoomService read(int id);
	public RoomService update(RoomService roomService);
	public RoomService delete(RoomService roomService);
	public List<RoomService> readAll();
	
}