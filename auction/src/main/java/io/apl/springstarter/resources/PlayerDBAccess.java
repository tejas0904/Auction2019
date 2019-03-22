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
		player.put("name", newPlayer.getName());
		player.put("age", newPlayer.getAge());
		player.put("address", newPlayer.getAddress());
		player.put("email", newPlayer.getEmail());
		player.put("mobileNumber", newPlayer.getMobileNumber());
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
