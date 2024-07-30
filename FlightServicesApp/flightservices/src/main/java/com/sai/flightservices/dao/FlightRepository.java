package com.sai.flightservices.dao;

import java.util.Date;
import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.sai.flightservices.entities.Flight;

@Repository
public interface FlightRepository extends JpaRepository<Flight, Integer>{
//	@Query("from flight where departureCity=:from and arrivalCity=:to and departureDate=:date")
//	List<Flight> findFlights(String from,String to, Date date);
	
	@Query("from Flight where departureCity=:departureCity and arrivalCity=:arrivalCity and departureDate=:departureDate")
	List<Flight> findFlights(@Param("departureCity") String from,@Param("arrivalCity") String to, @Param("departureDate") Date departureDate);
}
