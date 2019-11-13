package com.example.springsocial.controller;


import com.example.springsocial.model.Genre;
import com.example.springsocial.service.GenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;


@RestController
@RequestMapping("/api/genres/")
public class GenreController {

    @Autowired
    private GenreService service;

    @GetMapping("/")
    public HttpEntity getAll() {
        List<Genre> genres = service.findAll();

        return new ResponseEntity<>(genres, HttpStatus.OK);
    }

    @PostMapping("/")
    public HttpEntity save(@RequestBody Genre genre) {
        Genre rs = service.add(genre);

        if (rs != null) {
            return new ResponseEntity<>(rs, HttpStatus.CREATED);
        } else
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
    }

    @GetMapping("/{id}")
    public HttpEntity<Genre> getOne(@PathVariable int id) {
        Optional<Genre> result = service.findById(id);
        if (result.isPresent()) {
            return new ResponseEntity<>(result.get(), HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @PutMapping("/{id}")
    public HttpEntity<Genre> update(@RequestBody Genre genre) {
        System.out.println(genre);
        Genre result = service.update(genre);
        if (result != null) return new ResponseEntity<>(result, HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/{id}")
    public HttpEntity delete(@PathVariable int id) {
        System.out.println(id);
        try {
            boolean rs = service.delete(id);
            if(rs)
            return new ResponseEntity<>(HttpStatus.RESET_CONTENT);

            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        } catch (Exception e) {
            System.out.println(e);
            return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }

    @GetMapping("/search")
    public HttpEntity searchByName(@RequestParam(name="name") String name){
        List<Genre> result = service.findByName(name);
        if(result !=null){
            return new ResponseEntity<>(result, HttpStatus.OK);
        }
        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
