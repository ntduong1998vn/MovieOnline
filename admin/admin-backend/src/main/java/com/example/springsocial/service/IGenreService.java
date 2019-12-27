package com.example.springsocial.service;

import com.example.springsocial.model.Genre;

import java.util.List;
import java.util.Optional;

public interface IGenreService {

    public Genre add(Genre genre);

    public boolean delete(int id);

    public Genre update(Genre genre);

    public List<Genre> findAll();

    public Optional<Genre> findById(int id);

    public List<Genre> findByName(String name);

}
