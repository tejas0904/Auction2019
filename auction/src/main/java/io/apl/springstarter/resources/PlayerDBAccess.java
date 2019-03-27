package io.apl.springstarter.resources;

import org.bson.Document;

import com.mongodb.client.MongoCollection;

import io.apl.helper.Constant;
import io.apl.helper.DatabaseConnection;
import io.apl.springstarter.model.Player;

public class PlayerDBAccess {
	DatabaseConnection dc;
	public boolean registerPlayer(Player newPlayer) {
		dc = new DatabaseConnection();
		MongoCollection<Document> players = dc.getCollection(Constant.PLAYERDATABASENAME);
		Document player = new Document();
		player.put("firstName", newPlayer.getFirstName());
		player.put("lastName", newPlayer.getLastName());
		player.put("address", newPlayer.getAddress());
		player.put("email", newPlayer.getEmail());
		player.put("mobileNumber", newPlayer.getMobileNumber());
		player.put("address", newPlayer.getAddress());
		player.put("streetAddress", newPlayer.getStreetAddress());
		player.put("city", newPlayer.getCity());
		
		player.put("state", newPlayer.getState());
		player.put("zipCode",newPlayer.getZipCode());
		player.put("country", newPlayer.getCountry());
		player.put("jerseyNumber", newPlayer.getJerseyNumber());
		player.put("sevaCollector", newPlayer.getSevaCollector());
		player.put("jerseySize", newPlayer.getJerseySize());
		player.put("isPaid", newPlayer.isPaid());
		player.put("photo", newPlayer.getPhoto());

		player.put("battingRating", newPlayer.getBattingRating());
		player.put("bowlingRating", newPlayer.getBowlingRating());
		player.put("fieldingRating", newPlayer.getFieldingRating());
		player.put("battingComment", newPlayer.getBattingComment());
		player.put("bowlingComment", newPlayer.getBowlingComment());
		player.put("fieldingComment", newPlayer.getFieldingComment());
		players.insertOne(player);
		dc.closeClient();
		return true;
	}
}
