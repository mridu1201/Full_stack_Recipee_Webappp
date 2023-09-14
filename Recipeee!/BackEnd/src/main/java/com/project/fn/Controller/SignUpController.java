package com.project.fn.Controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.project.fn.Model.SignUpModel;
import com.project.fn.Service.SignUpService;

@RestController
public class SignUpController 
{
	@Autowired
	private SignUpService s;
	
	@GetMapping("/viewusers")
	public List<SignUpModel> getSignDetails()
	{
		return s.getSignUpDetails();
	}
	
	@PostMapping("/user")
	public String createAcc(@RequestBody SignUpModel sm)
	{
		s.create(sm);
		return "Account Created!";
	}
		
	@PutMapping("/update")
	public String createAcc(@RequestBody SignUpModel sm, @RequestParam int id)
	{
		sm.setId(id);
		s.update(sm);
		return "Account Updated!";
	}
	
	@DeleteMapping("/delete")
	public String delAcc(int id)
	{
		s.delete(id);
		return "Deleted!";
	}
}
