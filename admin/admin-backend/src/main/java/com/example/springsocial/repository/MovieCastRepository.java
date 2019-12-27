package com.example.springsocial.repository;


import com.example.springsocial.model.MovieCast;
import com.example.springsocial.model.MovieCastKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieCastRepository extends JpaRepository<MovieCast, MovieCastKey> {

    List<MovieCast> findByMovieCastKeyMovieId(int movieId);

    void deleteByMovieCastKeyCastId(int castId);
}
