package com.example.springsocial.repository;


import com.example.springsocial.dto.ActorDTO;
import com.example.springsocial.model.MovieCast;
import com.example.springsocial.model.MovieCastKey;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieCastRepository extends JpaRepository<MovieCast, MovieCastKey> {

    @Query("select new com.example.springsocial.dto.ActorDTO(c.id,c.name,mc.character)" +
            "from MovieCast mc inner join mc.cast_movie c where mc.movieCastKey.movieId = :movieId ")
    List<ActorDTO> findByMovieCastKeyMovieId(int movieId);

    void deleteByMovieCastKeyCastId(int castId);
}
