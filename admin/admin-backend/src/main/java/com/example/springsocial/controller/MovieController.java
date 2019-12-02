package com.example.springsocial.controller;


import com.example.springsocial.model.Movie;
import com.example.springsocial.service.GenreService;
import com.example.springsocial.service.GenreServiceImpl;
import com.example.springsocial.service.MovieServiceImpl;
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

    private MovieServiceImpl movieService;

    @Autowired
    public MovieController(MovieServiceImpl movieService) {
        this.movieService = movieService;
    }

    @GetMapping("/")
    List<Movie> all() {
        List<Movie> rs = movieService.findAll();
        return movieService.findAll();
    }

    @GetMapping("/{id}")
    Optional<Movie> getOne(@PathVariable int id) {
        System.out.println("******************* ID: "+id+" ****************************");
        return movieService.findById(id);
    }

    @GetMapping("/topview")
    Page<Movie> getTopView(@RequestParam(defaultValue = "12") int limit, @RequestParam(defaultValue = "0") int page) {
        return movieService.getTopView(page, limit);
    }

    @GetMapping("/genre/{id}")
    Page<Movie> getMoviesByGenreId(@PathVariable(required = true) int id,
                                   @RequestParam(defaultValue = "0") int page,
                                   @RequestParam(defaultValue = "18") int limit) {
        System.out.println("*********** ID: "+id+" *************");
        return movieService.getMoviesByGenreId(id,page,limit);
    }

    @GetMapping("/popular")
    Page<Movie> getPopularMovies(@RequestParam(defaultValue = "12") int limit, @RequestParam(defaultValue = "0") int page) {
        return movieService.getPopularMovies(page, limit);
    }

    @PostMapping("/")
    public ResponseEntity<Movie> saveProduct(@RequestBody Movie movie, UriComponentsBuilder builder) {
        movieService.save(movie);
        HttpHeaders headers = new HttpHeaders();
        headers.setLocation(builder.path("/api/movies/{id}").buildAndExpand(movie.getId()).toUri());
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Movie> update(@RequestBody Movie movie) {
        Movie result = movieService.save(movie);
        if (result != null)
            return new ResponseEntity<>(movie, HttpStatus.OK);

        return new ResponseEntity<>(HttpStatus.INTERNAL_SERVER_ERROR);
    }

    @DeleteMapping("/{id}")
    public ResponseEntity delete(@PathVariable int id) {
        try {
            movieService.deleteById(id);
            return new ResponseEntity(HttpStatus.RESET_CONTENT);
        } catch (Exception e) {
            return new ResponseEntity(HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
}
