package com.project.fn.Service;

import java.util.List;
import java.util.Optional;

import com.project.fn.Model.foodModel;

public interface foodINT {
	public List<foodModel> getfoodDetails();
	public Optional<foodModel> getfoodDetailsById(int foodID);
	public void postFood(foodModel fm);
	public void updateFood(foodModel fm);
	void deleteFood(int foodID);
}

