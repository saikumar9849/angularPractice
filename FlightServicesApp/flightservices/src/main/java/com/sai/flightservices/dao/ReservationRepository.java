package com.sai.flightservices.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sai.flightservices.entities.Reservation;

@Repository
public interface ReservationRepository extends JpaRepository<Reservation, Integer> {

}
