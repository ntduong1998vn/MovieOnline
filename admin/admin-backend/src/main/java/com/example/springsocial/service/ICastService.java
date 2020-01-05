package com.example.springsocial.service;

import com.example.springsocial.dto.ActorDTO;
import com.example.springsocial.dto.CastDTO;
import com.example.springsocial.model.Cast;
import com.example.springsocial.model.MovieCast;
import org.springframework.web.multipart.MultipartFile;

import java.util.List;
import java.util.Optional;

public interface ICastService {

    public List<Cast> getAll();

    public List<ActorDTO> getCharactersByMovieId(int movieId);

    public boolean create(Cast cast);

    public boolean update(int castId,String name,MultipartFile file);

    public boolean delete(int castId);

    public boolean createOne(String name, MultipartFile file);

    public List<CastDTO> loadAllCastExceptImg();

    public Optional<Cast> findByCastId(int castId);

}
