package com.example.springsocial.controller;


import com.example.springsocial.model.Movie;
import com.example.springsocial.repository.MovieRepository;
import com.example.springsocial.service.MovieServiceImpl;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    @Autowired
    MovieServiceImpl service;

    @Autowired
    public MovieController(MovieServiceImpl movieRepository) {
        this.service = movieRepository;
    }

    @GetMapping("/")
    List<Movie> all() {
        List<Movie> rs = service.findAll();
        return service.findAll();
    }

    @GetMapping("/{id}")
    Optional<Movie> getOne(@PathVariable int id) {
        return service.findById(id);
    }

    @GetMapping("/topview")
    Page<Movie> getTopView(@RequestParam(defaultValue = "12") int limit, @RequestParam(defaultValue = "0") int page) {
        return service.getTopView(page, limit);
    }

    @GetMapping("/genre/{id}")
    Page<Movie> getMoviesByGenreId(@PathVariable(required = true) int id,
                                   @RequestParam(defaultValue = "0") int page,
                                   @RequestParam(defaultValue = "18") int limit) {
        return service.get

    }

    @GetMapping("/popular")
    Page<Movie> getPopularMovies(@RequestParam(defaultValue = "12") int limit, @RequestParam(defaultValue = "0") int page) {
        return service.getPopularMovies(page, limit);
    }

    @PostMapping("/")
    public ResponseEntity<Movie> saveProduct(@RequestBody Movie movie, UriComponentsBuilder builder) {

        service.save(movie);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/api/movies/{id}").buildAndExpand(movie.getId()).toUri());
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Movie> update(@RequestBody Movie movie) {
        Movie result = service.save(movie);
        if (result != null)
            return new ResponseEntity<>(movie, HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable int id) {
        try {
            service.deleteById(id);
            return new ResponseEntity(HttpStatus.RESET_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
