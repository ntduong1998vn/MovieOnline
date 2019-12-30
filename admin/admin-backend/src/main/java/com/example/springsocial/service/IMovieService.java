package com.example.springsocial.service;

import com.example.springsocial.dto.MovieDTO;
import com.example.springsocial.model.Genre;
import com.example.springsocial.model.Movie;
import com.example.springsocial.model.MovieCast;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;

import java.util.List;
import java.util.Map;
import java.util.Optional;
import java.util.Set;

public interface IMovieService {
    public List<Movie> findAll();

    public Page<Movie> findAll(int page, int size);

    public boolean deleteById(int id);

    public Optional<Movie> findById(int id);

    public Movie save(Movie movie);

    public boolean update(int movieId, MovieDTO movieDTO);

    public Page<Movie> getTopView(int page, int limit);

    public Page<Movie> getMoviesByGenreId(int id, int page, int limit);

    public Page<Movie> getPopularMovies(int page, int limit);

    public boolean addGenres(int movieId, List<Integer> addList);

    public boolean removeGenres(int movieId, List<Integer> deleteList);

    public List<Movie> findByTitle(String keyword);

    public List<Movie> findByLetterBegin(String letter);
}
