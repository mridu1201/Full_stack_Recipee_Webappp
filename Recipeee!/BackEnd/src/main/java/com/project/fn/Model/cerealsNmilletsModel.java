package com.project.fn.Model;

import com.fasterxml.jackson.annotation.JsonProperty;

public class cerealsNmilletsModel 
{
	private String name;
	@JsonProperty("Calories per 100gm")
	private double calories;
	@JsonProperty("Nutritional Value")
	private String nutri;
	@JsonProperty("Against deficiency")
	private String defi;
	@Override
	public String toString() {
		return "cerealsNmilletsModel\nname=" + name + "\n calories=" + calories + "\n nutri=" + nutri + ", defi=" + defi;
	}
	public String getName() {
		return name;
	}
	public void setName(String name) {
		this.name = name;
	}
	public double getCalories() {
		return calories;
	}
	public void setCalories(double calories) {
		this.calories = calories;
	}
	public String getNutri() {
		return nutri;
	}
	public void setNutri(String nutri) {
		this.nutri = nutri;
	}
	public String getDefi() {
		return defi;
	}
	public void setDefi(String defi) {
		this.defi = defi;
	}
	
	
}
