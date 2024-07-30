package com.sai.flightservices.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import com.sai.flightservices.entities.Passenger;

@Repository
public interface PassengerRepository extends JpaRepository<Passenger, Integer> {

}
