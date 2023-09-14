package com.project.fn.Service;

import java.util.List;

import com.project.fn.Model.SignUpModel;

public interface SignUpServiceINT 
{
	public List<SignUpModel> getSignUpDetails();
	public void create(SignUpModel sm);
	public void update(SignUpModel sm);
	public void delete(int id);
}
