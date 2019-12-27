package com.example.springsocial.repository;

import com.example.springsocial.model.Cast;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CastRepository extends JpaRepository<Cast,Integer> {

//    @Query("select u from Cast u join u.movies p where p.id = :id")
//    List<Cast> getCastersByMovieId(int id);
}
