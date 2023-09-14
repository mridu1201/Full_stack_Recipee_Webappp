package com.project.fn.Model;

import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="signup")
public class LoginModel 
{  
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int id;
	private String Email;
	
	private String pass;
	
	
	public LoginModel() {
		super();
	}

	public LoginModel(int id, String email, String pass) {
		super();
		this.id = id;
		Email = email;
		this.pass = pass;
	}

	public int getId() {
		return id;
	}

	public void setId(int id) {
		this.id = id;
	}

	@Override
	
	public String toString() {
		return "Login:\nEmail=" + Email + "\npass=" + pass;
	}

	public LoginModel(String email, String pass) {
		super();
		Email = email;
		this.pass = pass;
	}

	public String getEmail() {
		return Email;
	}
	public void setEmail(String email) {
		Email = email;
	}
	public String getPass() {
		return pass;
	}
	public void setPass(String pass) {
		this.pass = pass;
	}
	
	
}
