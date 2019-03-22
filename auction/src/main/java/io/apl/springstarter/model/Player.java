package io.apl.springstarter.model;

public class Player {

	private String name;
	private int age;
	private String email;
	private int mobileNumber;
	private String address;
	public int getBattingRating() {
		return battingRating;
	}


	public void setBattingRating(int battingRating) {
		this.battingRating = battingRating;
	}





	private int battingRating;
	private int bowlingRating;
	private int fieldingRating;
	private String battingComment;
	private String bowlingComment;
	private String fieldingComment;
	
	public Player() {}
	
	
	public String getName() {
		return name;
	}


	public void setName(String name) {
		this.name = name;
	}


	public int getAge() {
		return age;
	}


	public int getBowlingRating() {
		return bowlingRating;
	}


	public void setBowlingRating(int bowlingRating) {
		this.bowlingRating = bowlingRating;
	}


	public int getFieldingRating() {
		return fieldingRating;
	}


	public void setFieldingRating(int fieldingRating) {
		this.fieldingRating = fieldingRating;
	}


	public String getBattingComment() {
		return battingComment;
	}


	public void setBattingComment(String battingComment) {
		this.battingComment = battingComment;
	}


	public String getBowlingComment() {
		return bowlingComment;
	}


	public void setBowlingComment(String bowlingComment) {
		this.bowlingComment = bowlingComment;
	}


	public String getFieldingComment() {
		return fieldingComment;
	}


	public void setFieldingComment(String fieldingComment) {
		this.fieldingComment = fieldingComment;
	}


	public void setAge(int age) {
		this.age = age;
	}


	public String getEmail() {
		return email;
	}


	public void setEmail(String email) {
		this.email = email;
	}


	public int getMobileNumber() {
		return mobileNumber;
	}


	public void setMobileNumber(int mobileNumber) {
		this.mobileNumber = mobileNumber;
	}


	public String getAddress() {
		return address;
	}


	public void setAddress(String address) {
		this.address = address;
	}


	@Override
	public String toString() {
		return "Player [name=" + name + ", age=" + age + ", email=" + email + ", mobileNumber=" + mobileNumber
				+ ", address=" + address + ", battingRating=" + battingRating + ", bowlingRating=" + bowlingRating
				+ ", fieldingRating=" + fieldingRating + ", battingComment=" + battingComment + ", bowlingComment="
				+ bowlingComment + ", fieldingComment=" + fieldingComment + "]";
	}


	


	

	
}
