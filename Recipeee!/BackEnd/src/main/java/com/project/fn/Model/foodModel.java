package com.project.fn.Model;



import jakarta.persistence.Entity;
import jakarta.persistence.GeneratedValue;
import jakarta.persistence.GenerationType;
import jakarta.persistence.Id;
import jakarta.persistence.Table;

@Entity
@Table(name="food")
public class foodModel {
	@Id
	@GeneratedValue(strategy=GenerationType.IDENTITY)
	private int foodID;
	private String name;
	private String calories;
	private String Ingridients;
	private String Receipe;
	
	
	public foodModel() {
		super();
	}
	public foodModel(int foodID, String name, String calories, String ingridients, String receipe) {
		super();
		this.foodID = foodID;
		this.name = name;
		this.calories = calories;
		Ingridients = ingridients;
		Receipe = receipe;
	}
	public int getFoodID() {
		return foodID;
	}
	public void setFoodID(int foodID) {
		this.foodID = foodID;
	}
	@Override
	public String toString() {
		return "foodModel [name=" + name + ", calories=" + calories + ", Ingridients=" + Ingridients + ", Receipe="
				+ Receipe + "]";
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public String getCalories() {
		return calories;
	}
	public void setCalories(String calories) {
		this.calories = calories;
	}
	
	public String getIngridients() {
		return Ingridients;
	}
	public void setIngridients(String ingridients) {
		Ingridients = ingridients;
	}
	public String getReceipe() {
		return Receipe;
	}
	public void setReceipe(String receipe) {
		Receipe = receipe;
	}
	

}
