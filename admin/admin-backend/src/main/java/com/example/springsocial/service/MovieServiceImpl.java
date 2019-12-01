package com.example.springsocial.service;

import com.example.springsocial.model.Genre;
import com.example.springsocial.model.Movie;
import com.example.springsocial.repository.GenreRepository;
import com.example.springsocial.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class MovieServiceImpl implements MovieService {

    @Autowired
    private MovieRepository movieRepository;

    @Autowired
    private GenreRepository genreRepository;

    @Override
    public List<Movie> findAll() {
        return movieRepository.findAll();
    }

    @Override
    public Page<Movie> getTopView(int page,int limit) {
        Pageable pageable = PageRequest.of(page, limit, Sort.by("views").descending());
        return  movieRepository.findAll(pageable);
    }

    @Override
    public Page<Movie> getPopularMovies(int page,int limit) {
        Pageable pageable = PageRequest.of(page, limit, Sort.by("popularity").descending());
        return movieRepository.findAll(pageable);
    }

    @Override
    public boolean deleteById(int id) {
        return false;
    }

    @Override
    public Optional<Movie> findById(int id) {
        return Optional.empty();
    }

    @Override
    public Page<Movie> getMoviesByGenreId(int id, int page, int limit) {
        Optional<Genre> ks = genreRepository.findById(id);
        if(ks.isPresent()){
            Genre genre = ks.get();
            Set<Movie> ls = genre.getMovies();

        }
    }

    @Override
    public Movie save(Movie movie) {
        return null;
    }


}
