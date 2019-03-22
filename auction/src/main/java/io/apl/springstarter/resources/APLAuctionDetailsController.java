package io.apl.springstarter.resources;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.ResponseStatus;
import org.springframework.web.bind.annotation.RestController;

import io.apl.springstarter.model.Player;

@RestController
public class APLAuctionDetailsController {

	
	@RequestMapping("/hello")
    public String index() {
        return "Greetings from Spring Boot!";
    }

	
	@RequestMapping(value ="/playerdetails", method = RequestMethod.POST)
	@ResponseStatus(HttpStatus.OK)
	@ResponseBody
	@PostMapping("/post")
	public ResponseEntity<?> newBazz(@RequestBody Player playerDetail){
			PlayerDBAccess playerDB = new PlayerDBAccess();
			boolean isPlayerRegistered = false;
			if(playerDetail!=null)
				 isPlayerRegistered = playerDB.registerPlayer(playerDetail);
			
			if(isPlayerRegistered)
				return new ResponseEntity<>("Player successfully registered", HttpStatus.OK);
			else
				return new ResponseEntity<>("problem", HttpStatus.OK);
	}
}
