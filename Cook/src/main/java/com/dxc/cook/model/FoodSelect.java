package com.dxc.cook.model;

import org.springframework.data.annotation.Id;

public class FoodSelect {
	@Id
	private String foodid;
	private String foodname;
	private String foodprice;
	private String foodquant;
	public FoodSelect() {
		super();
		// TODO Auto-generated constructor stub
	}
	public FoodSelect(String foodid, String foodname, String foodprice, String foodquant) {
		super();
		this.foodid = foodid;
		this.foodname = foodname;
		this.foodprice = foodprice;
		this.foodquant = foodquant;
	}
	public String getFoodid() {
		return foodid;
	}
	public void setFoodid(String foodid) {
		this.foodid = foodid;
	}
	public String getFoodname() {
		return foodname;
	}
	public void setFoodname(String foodname) {
		this.foodname = foodname;
	}
	public String getFoodprice() {
		return foodprice;
	}
	public void setFoodprice(String foodprice) {
		this.foodprice = foodprice;
	}
	public String getFoodquant() {
		return foodquant;
	}
	public void setFoodquant(String foodquant) {
		this.foodquant = foodquant;
	}
	
	
}
