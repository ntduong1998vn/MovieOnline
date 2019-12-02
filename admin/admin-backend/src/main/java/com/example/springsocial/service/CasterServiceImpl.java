package com.example.springsocial.service;


import com.example.springsocial.model.Cast;
import com.example.springsocial.repository.CasterRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class CasterServiceImpl implements CasterService {

    @Autowired
    CasterRepository casterRepository;

    @Override
    public List<Cast> getAll() {
        return casterRepository.findAll();
    }

    @Override
    public List<Cast> getCastersByMovieId(int id) {
        return casterRepository.getCastersByMovieId(id);
    }
}
