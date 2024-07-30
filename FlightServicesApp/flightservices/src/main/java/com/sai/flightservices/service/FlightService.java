package com.sai.flightservices.service;

import java.util.Date;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.sai.flightservices.dao.FlightRepository;
import com.sai.flightservices.entities.Flight;

@Service
public class FlightService {
	
	@Autowired
	FlightRepository flightRepo;
	
	public List<Flight> findFlights(String from,String to, Date departureDate){
		return flightRepo.findFlights(from, to, departureDate);
	}

	public Flight findFlightById(int id) {
		return flightRepo.findById(id).get();
	}
}
