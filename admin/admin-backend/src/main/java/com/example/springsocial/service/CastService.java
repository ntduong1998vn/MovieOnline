package com.example.springsocial.service;

import com.example.springsocial.dto.ActorDTO;
import com.example.springsocial.dto.CastDTO;
import com.example.springsocial.model.Cast;
import com.example.springsocial.model.MovieCast;
import com.example.springsocial.repository.CastRepository;
import com.example.springsocial.repository.MovieCastRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.util.List;
import java.util.Optional;

@Service
public class CastService implements ICastService {

    private static final Logger logger = LoggerFactory.getLogger(CastService.class);

    @Autowired
    private CastRepository castRepository;
    @Autowired
    private MovieCastRepository movieCastRepository;

    @Override
    public List<Cast> getAll() {
        return castRepository.findAll();
    }

    @Override
    public List<ActorDTO> getCharactersByMovieId(int movieId) {
        return movieCastRepository.findByMovieCastKeyMovieId(movieId);
    }

    @Override
    public boolean create(Cast cast) {
        Cast newCast = castRepository.save(cast);
        return newCast != null;
    }

    @Override
    public boolean update(int castId,String name,MultipartFile file) {
        Optional<Cast> result = castRepository.findById(castId);
        if(result.isPresent())
        {
            Cast cast = result.get();
            cast.setName(name);

            if(file != null){
                if(!file.isEmpty()){
                    try {
                        cast.setImg(file.getBytes());
                    } catch (IOException e) {
                        logger.error(e.getMessage());
                        return false;
                    }
                }
            }

            Cast updateCast = castRepository.save(cast);
            return updateCast != null;
        }
        return false;
    }

    @Override
    @Transactional
    public boolean delete(int castId) {
        Optional<Cast> result = castRepository.findById(castId);
        if(result.isPresent()){
            try{
                Cast cast = result.get();
                // Delete related information with others entities
                movieCastRepository.deleteByMovieCastKeyCastId(castId);
                // Delete this cast
                castRepository.deleteById(castId);
                return true;
            }catch (Exception e){
                logger.error(e.getMessage());
                return false;
            }
        }
        return false;
    }

    @Override
    public boolean createOne(String name, MultipartFile file) {
        Cast newCast = new Cast();
        newCast.setName(name);
        try {
            newCast.setImg(file.getBytes());
        } catch (IOException e) {
            e.printStackTrace();
        }
        castRepository.save(newCast);
//        newCast.setName(formData.get);
        return true;
    }

    @Override
    public List<CastDTO> loadAllCastExceptImg() {
        return castRepository.getAllCastExceptImg();
    }

    @Override
    public Optional<Cast> findByCastId(int castId){
        return castRepository.findById(castId);
    }
}
