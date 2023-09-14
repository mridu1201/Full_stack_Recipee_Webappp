package com.project.fn.Service;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.fn.Model.LoginModel;
import com.project.fn.Repo.loginRepo;

@Service
public class LoginService implements LoginServiceINT 
{
	
	@Autowired
	public loginRepo lr;
	@Override
	public List<LoginModel> getlogin() 
	{
		return lr.findAll();
	}

	@Override
	public void deleteLogin(int id) 
	{
		lr.deleteById(id);
	}
}
