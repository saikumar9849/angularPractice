package com.sai.flightservices.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.sai.flightservices.dao.FlightRepository;
import com.sai.flightservices.dao.PassengerRepository;
import com.sai.flightservices.dao.ReservationRepository;
import com.sai.flightservices.entities.Flight;
import com.sai.flightservices.entities.Passenger;
import com.sai.flightservices.entities.Reservation;
import com.sai.flightservices.model.CreateReservationRequest;
import com.sai.flightservices.model.UpdateReservationRequest;

@Service
public class ReservationService {
	
	@Autowired
	private FlightRepository flightRepo;
	
	@Autowired
	private PassengerRepository passengerRepo;
	
	@Autowired
	private ReservationRepository reservationRepo;

	@Transactional
	public Reservation saveReservation(CreateReservationRequest reservationRequest) {
		Flight flight = flightRepo.findById(reservationRequest.getFlightId()).get();
		
		Passenger passenger = new Passenger();
		passenger.setFirstName(reservationRequest.getPassengerFirstName());
		passenger.setMiddlename(reservationRequest.getPassengerMiddleName());
		passenger.setLastName(reservationRequest.getPassengerLastName());
		passenger.setEmail(reservationRequest.getPassengerEmail());
		passenger.setPhone(reservationRequest.getPassengerPhone());
		
		Passenger savedPassenger= passengerRepo.save(passenger);
		
		Reservation reservation = new Reservation();
		reservation.setFlight(flight);
		reservation.setPassenger(savedPassenger);
		reservation.setCheckIn(false);
		
		return reservationRepo.save(reservation);
	}

	public Reservation getReservationById(int id) {
		return reservationRepo.findById(id).get();
	}

	public Reservation updateReservation(UpdateReservationRequest request) {
		Reservation reservation = reservationRepo.findById(request.getId()).get();
		reservation.setCheckIn(request.isCheckIn());
		reservation.setNoOfBags(request.getNumberOfBags());
		return reservationRepo.save(reservation);
	}

}
