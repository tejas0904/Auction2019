package io.apl.springstarter.resources;

import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import io.apl.springstarter.model.Player;

@RestController
public class APLAuctionDetailsController {

	
	@RequestMapping("/hello")
    public String index() {
        return "Greetings from Spring Boot!";
    }

	@PostMapping("/post")
	public ResponseEntity<?> newBazz(@RequestParam("name") String name){
	    return new ResponseEntity<>(new Player(name,5).toString(), HttpStatus.OK);
	}
}
