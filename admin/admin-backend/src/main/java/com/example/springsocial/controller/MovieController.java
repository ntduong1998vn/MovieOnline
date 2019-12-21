package com.example.springsocial.controller;


import com.example.springsocial.model.Movie;
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

    @GetMapping("/all")
    List<Movie> all() {
        List<Movie> rs = movieService.findAll();
        return movieService.findAll();
    }

    @GetMapping("/")
    ResponseEntity<?> getListByPage(@RequestParam(name = "page") int page, @RequestParam(name = "size", defaultValue = "24") int size) {
        Page<Movie> rs = movieService.findAll(page, size);
        System.out.println("****************************************************");
        System.out.println("Page , Size : " + page + " " + size);
        return ResponseEntity.ok(rs);
    }

    @GetMapping("/{id}")
    Optional<Movie> getOne(@PathVariable int id) {
        System.out.println("******************* ID: " + id + " ****************************");
        return movieService.findById(id);
    }

    //    @GetMapping("/{id}/link")
//    List<LinkMovie> getLinks(@PathVariable int id) {
//        System.out.println("******************* ID: "+id+" ****************************");
//        return linkService.findById();
//    }
    @GetMapping("/topview")
    Page<Movie> getTopView(@RequestParam(defaultValue = "12") int limit, @RequestParam(defaultValue = "0") int page) {
        return movieService.getTopView(page, limit);
    }

    @GetMapping("/genre")
    Page<Movie> getMoviesByGenreId(@RequestParam(name = "id", required = true) int id,
                                   @RequestParam(name = "page", defaultValue = "0") int page,
                                   @RequestParam(name = "size", defaultValue = "18") int size) {
        System.out.println("*********** ID: " + id + " *************");
        return movieService.getMoviesByGenreId(id, page, size);
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
