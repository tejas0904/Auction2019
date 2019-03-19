package io.apl.springstarter.model;

public class Player {

	private String name;
	private int age;

	public Player(String name, int age) {
		this.name = name;
		this.age = age;
	}
	
	public String toString(){//overriding the toString() method  
		  return "NAME :: "+name+"\nAGE:: "+age;  
		 } 
}
