package es.upm.dit.isst.grupo1.model;

import java.io.Serializable;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;

@Entity(name="Client")
public class Client implements Serializable {

		private static final long serialVersionUID = 1L;
		
		@Id
		@GeneratedValue(strategy=GenerationType.AUTO)
		private int id;
		private String room;
		private String DNI;
		
		private String stay;
		private int  tierVIP;
		private String name;
		private String email;
		private int phone;
		private int points;
		private double bill;
		//private Profile profile;
		
		public Client() {}
		
		public int getId() {
			return id;
		}
		public void setId(int id) {
			this.id = id;
		}
		public String getRoom() {
			return room;
		}
		public void setRoom(String room) {
			this.room = room;
		}
		public String getDNI() {
			return DNI;
		}
		public void setDNI(String dNI) {
			DNI = dNI;
		}
		public String getStay() {
			return stay;
		}
		public void setStay(String stay) {
			this.stay = stay;
		}
		public int getTierVIP() {
			return tierVIP;
		}
		public void setTierVIP(int tierVIP) {
			this.tierVIP = tierVIP;
		}
		public String getName() {
			return name;
		}
		public void setName(String name) {
			this.name = name;
		}
		public String getEmail() {
			return email;
		}
		public void setEmail(String email) {
			this.email = email;
		}
		public int getPhone() {
			return phone;
		}
		public void setPhone(int phone) {
			this.phone = phone;
		}
		public int getPoints() {
			return points;
		}
		public void setPoints(int points) {
			this.points = points;
		}
		public double getBill() {
			return bill;
		}
		public void setBill(double bill) {
			this.bill = bill;
		}
		public static long getSerialversionuid() {
			return serialVersionUID;
		}
		public Client(int id, String room, String dNI, String stay, int tierVIP, String name, String email, int phone,
				int points, double bill) {
			super();
			this.id = id;
			this.room = room;
			DNI = dNI;
			this.stay = stay;
			this.tierVIP = tierVIP;
			this.name = name;
			this.email = email;
			this.phone = phone;
			this.points = points;
			this.bill = bill;
		}
	
	
		
		
		
		
}
