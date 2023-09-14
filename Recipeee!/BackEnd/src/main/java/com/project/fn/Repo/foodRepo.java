package com.project.fn.Repo;



import org.springframework.data.jpa.repository.JpaRepository;

import com.project.fn.Model.foodModel;

public interface foodRepo extends JpaRepository<foodModel, Integer> {

	//public List<foodModel> findByFoodIDOrName(int foodID,String food);
}
