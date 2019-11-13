package com.example.springsocial.controller;


import com.example.springsocial.model.Movie;
import com.example.springsocial.repository.MovieRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api")
public class MovieController {

    private final MovieRepository movieRepository;

    @Autowired
    public MovieController(MovieRepository movieRepository){
        this.movieRepository = movieRepository;
    }

    @GetMapping("/movies")
    List<Movie> all(){
        List<Movie> rs = movieRepository.findAll();
        return movieRepository.findAll();
    }

    @GetMapping("/movies/{id}")
    Optional<Movie> getOne(@PathVariable int id){
        return movieRepository.findById(id);
    }

    @PostMapping("/movies")
    public ResponseEntity<Movie> saveProduct(@RequestBody Movie movie, UriComponentsBuilder builder){

        movieRepository.save(movie);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/api/movies/{id}").buildAndExpand(movie.getId()).toUri());
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PutMapping("/movies/{id}")
    public ResponseEntity<Movie> update(@RequestBody Movie movie){
        Movie result = movieRepository.saveAndFlush(movie);
        if(result!=null)
            return new ResponseEntity<>(movie, HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/movies/{id}")
    public ResponseEntity delete(@PathVariable int id){
        try{
            movieRepository.deleteById(id);
            return new ResponseEntity(HttpStatus.RESET_CONTENT);
        }catch (Exception e){
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
