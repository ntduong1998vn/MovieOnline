package com.example.springsocial.service;

import com.example.springsocial.model.Cast;
import com.example.springsocial.model.MovieCast;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface ICastService {

    public List<Cast> getAll();

    public List<MovieCast> getCharactersByMovieId(int movieId);

    public boolean create(Cast cast);

    public boolean update(int castId,Cast newCast);

    public boolean delete(int castId);

    public boolean createOne(String name, MultipartFile file);
}
