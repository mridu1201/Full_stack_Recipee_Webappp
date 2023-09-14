package com.project.fn.Service;


import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;


import com.project.fn.Model.SignUpModel;
import com.project.fn.Repo.signUpRepo;

@Service
public class SignUpService implements SignUpServiceINT 
{

	@Autowired
	public signUpRepo sr;

	@Override
	public List<SignUpModel> getSignUpDetails() {
		// TODO Auto-generated method stub
		return sr.findAll();
	}

	@Override
	public void create(SignUpModel sm) {
		// TODO Auto-generated method stub
		sr.save(sm);
	}

	@Override
	public void update(SignUpModel sm) {
		// TODO Auto-generated method stub
		sr.save(sm);
	}

	@Override
	public void delete(int id) {
		// TODO Auto-generated method stub
		sr.deleteById(id);
	}

	
	
}
