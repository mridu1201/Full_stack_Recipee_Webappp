package com.project.fn.Service;


import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.project.fn.Model.foodModel;
import com.project.fn.Repo.foodRepo;

@Service
public class foodService implements foodINT{

	@Autowired
	public foodRepo frr;
	@Override
	public List<foodModel> getfoodDetails() {
		// TODO Auto-generated method stub
		return frr.findAll();
	}

	@Override
	public void postFood(foodModel fm) {
		// TODO Auto-generated method stub
		frr.save(fm);
	}

	@Override
	public void updateFood(foodModel fm) {
		// TODO Auto-generated method stub
		frr.save(fm);
	}

	@Override
	public void deleteFood(int foodID) {
		// TODO Auto-generated method stub
		frr.deleteById(foodID);
	}

	@Override
	public Optional<foodModel> getfoodDetailsById(int foodID) {
		// TODO Auto-generated method stub
		return frr.findById(foodID);
	}
	
}
