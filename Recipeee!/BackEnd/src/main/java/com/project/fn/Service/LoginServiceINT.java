package com.project.fn.Service;

import java.util.List;

import com.project.fn.Model.LoginModel;

public interface LoginServiceINT 
{
	public List<LoginModel> getlogin();
	public void deleteLogin(int id);
}
