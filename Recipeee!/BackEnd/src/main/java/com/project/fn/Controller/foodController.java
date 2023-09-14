package com.project.fn.Controller;

import java.util.List;
import java.util.Optional;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.project.fn.Model.foodModel;
import com.project.fn.Service.foodService;

@RestController
@CrossOrigin("http://localhost:3000")
public class foodController {
	@Autowired  
	private foodService fooo;
	@GetMapping("/gfood")
	public List<foodModel> gettt()
	{
		return fooo.getfoodDetails();
	}
	
	@GetMapping("/getfood/{foodID}")
	public Optional<foodModel> getttt(@PathVariable int foodID)
	{
		return fooo.getfoodDetailsById(foodID);
	}
	
	@PostMapping("/pfood")
	public String createFood(@RequestBody foodModel fm)
	{
		fooo.postFood(fm);
		return "Added!";
	}
		
	@PutMapping("/upfood/{foodID}")
	public String upFood(@RequestBody foodModel fm, @PathVariable int foodID)
	{
		fm.setFoodID(foodID);
		fooo.updateFood(fm);
		return "Updated!!!🤩";
	}
	
	@DeleteMapping("/delfood/{foodID}")
	public String delFood(@PathVariable int foodID)
	{
		fooo.deleteFood(foodID);
		return "Deleted!";
	}
}
