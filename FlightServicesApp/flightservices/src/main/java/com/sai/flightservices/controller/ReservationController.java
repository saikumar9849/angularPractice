package com.sai.flightservices.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.sai.flightservices.entities.Reservation;
import com.sai.flightservices.model.CreateReservationRequest;
import com.sai.flightservices.model.UpdateReservationRequest;
import com.sai.flightservices.service.ReservationService;

@RestController
@CrossOrigin
public class ReservationController {
	
	@Autowired
	private ReservationService reservationService;
	
	@PostMapping("/reservations")
	public Reservation saveReservation(@RequestBody CreateReservationRequest reservationRequest) {
		return reservationService.saveReservation(reservationRequest);
	}
	
	@GetMapping("/reservations/{id}")
	public Reservation getReservationById(@PathVariable("id") int id) {
		return reservationService.getReservationById(id);
	}
	
	@PutMapping("/reservations")
	public Reservation updateReservation(@RequestBody UpdateReservationRequest request) {
		return reservationService.updateReservation(request);
	}
}
