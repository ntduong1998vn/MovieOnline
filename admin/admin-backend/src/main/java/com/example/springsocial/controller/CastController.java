package com.example.springsocial.controller;

import com.example.springsocial.model.Cast;
import com.example.springsocial.repository.CasterRepository;
import com.example.springsocial.service.CasterService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import java.util.List;

@RestController
@RequestMapping("/api/cast")
public class CastController {

    @Autowired
    CasterService service;

    @GetMapping("/")
    public List<Cast> getAll(){
        return service.getAll();
    }

    @GetMapping("/movie")
    public List<Cast> getCastersByMovieId(@RequestParam(required = true) int id){
        return service.getCastersByMovieId(id);
    }
}
