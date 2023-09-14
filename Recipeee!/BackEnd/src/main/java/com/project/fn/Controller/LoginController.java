package com.project.fn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.fn.Model.LoginModel;
import com.project.fn.Service.LoginService;

@RestController
public class LoginController 
{
	@Autowired
	public LoginService l;
	
	@GetMapping("/glogin")
	public List<LoginModel> get()
	{
		return l.getlogin();
	}
	
	@DeleteMapping("/dellogin")
	public String delete(@RequestParam int id)
	{
		l.deleteLogin(id);
		return "ID "+id+" is deleted";
	}
}
