package com.example.springsocial.service;

import com.example.springsocial.model.Movie;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface MovieService {
    public List<Movie> findAll();

    public boolean deleteById(int id);

    public Optional<Movie> findById(int id);

    public Movie save(Movie movie);

    public Page<Movie> getTopView(int page,int limit);

    public Page<Movie> getMoviesByGenreId(int id,int page, int limit);

    public Page<Movie> getPopularMovies(int page,int limit);

}
