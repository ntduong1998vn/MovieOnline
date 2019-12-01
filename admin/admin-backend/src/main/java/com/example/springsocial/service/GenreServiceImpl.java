package com.example.springsocial.service;

import com.example.springsocial.model.Genre;
import com.example.springsocial.repository.GenreRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class GenreServiceImpl implements GenreService {

    @Autowired
    private GenreRepository genreRepository;

    @Override
    public Genre add(Genre genre) {
        return genreRepository.save(genre);
    }

    @Override
    public boolean delete(int id) {
//        Optional<Movie> genres = genreRepository.findAllMovieByGenreID(id);
//        if (genres.isPresent()) {
//            genreRepository.deleteById(id);
//            return true;
//        }
        try {
            genreRepository.deleteById(id);
            return true;
        } catch (Exception e) {
            System.out.println(e);
            return false;
        }

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
