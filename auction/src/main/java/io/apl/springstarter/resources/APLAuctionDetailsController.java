package io.apl.springstarter.resources;

import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class APLAuctionDetailsController {

	
	@RequestMapping("/hello")
    public String index() {
        return "Greetings from Spring Boot!";
    }
	
}
