package com.example.springsocial.repository;

import com.example.springsocial.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

    @Query("select u from Movie u join u.genres p where p.id = :id")
    Page<Movie> findMoviesByGenreId(int id, Pageable pageable);
}
