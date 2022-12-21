package com.example.demo;

import java.util.Random;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api")
@CrossOrigin(origins = "http://localhost:8080/")
public class Add {

	
	@GetMapping("addresses")
	@ResponseBody
	public String validateAddress(@RequestParam String address) {
		return "Address Validated";
		
	}
	
	@GetMapping("creditcheck")
	@ResponseBody
	public String checkCredit(@RequestParam String username) {
		Random random = new Random();
		return username+" Credit Score = "+random.nextInt(11);
		
	}
	
	@PostMapping("accounts")
    public ResponseEntity process(@RequestBody UserDto user) {
        return ResponseEntity.ok()
            .body("Account Id : "+user.getfName());

    }
	}

	
/*
 
  http://localhost:8080/api/addresses?pin=90?state=tn
 
 
 
 http://localhost:8080/api/creditcheck?username=Shailesh
 
 */



/*

http://localhost:8080/api/accounts
----json----
{
"firstName" : "John",
"lastName"  :"Smith",
"age" : 10,
"address" : {
"streetName" : "Example Street",
"streetNumber" : "10A",
"postalCode" : "1QW34",
"city" : "Timisoara",
"country" : "Romania"
}
}

 */

	

