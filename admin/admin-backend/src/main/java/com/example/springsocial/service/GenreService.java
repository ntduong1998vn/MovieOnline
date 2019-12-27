package com.example.springsocial.service;

import com.example.springsocial.model.Genre;
import com.example.springsocial.model.Movie;
import com.example.springsocial.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;
import java.util.Set;

@Service
public class GenreService implements IGenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Override
    public Genre add(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public boolean delete(int id) {
        Optional<Genre> result  = genreRepository.findById(id);
        if(result.isPresent()){
            Genre genre = result.get();
            // Delete all relationships with the others movie
//            Set<Movie> movies = genre.getMovies();
            for (Movie movie:genre.getMovies()) {
                movie.getGenres().remove(genre);
            }
            // Delete this genre
            genreRepository.deleteById(id);
            return true;
        }
        return false;
    }

    @Override
    public Genre update(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public List<Genre> findAll() {
        return genreRepository.findAll();
    }

    @Override
    public Optional<Genre> findById(int id) {
        return genreRepository.findById(id);
    }

    @Override
    public List<Genre> findByName(String name) {
        return genreRepository.findByNameLike(name);
    }

}
