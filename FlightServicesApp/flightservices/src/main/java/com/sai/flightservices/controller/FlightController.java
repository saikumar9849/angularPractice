package com.sai.flightservices.controller;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.format.annotation.DateTimeFormat;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import com.sai.flightservices.dao.FlightRepository;
import com.sai.flightservices.entities.Flight;
import com.sai.flightservices.service.FlightService;

@RestController
@CrossOrigin
public class FlightController {
	
	@Autowired
	private FlightService flightService;
	
	@Autowired
	private FlightRepository flightRepo;
	
	@GetMapping("/flights")
	public List<Flight> findFlights(@RequestParam("from") String from,@RequestParam("to") String to, @RequestParam("departureDate") @DateTimeFormat(pattern="MM-dd-yyyy") Date departureDate){
		return flightService.findFlights(from,to,departureDate);
	}
	
	@GetMapping("/flight")
	public List<Flight> findFlightss(){
		return flightRepo.findAll();
	}
	
	@GetMapping("/flights/{id}")
	public Flight findFlightById(@PathVariable("id") int id) {
		return flightService.findFlightById(id);
	}
}
