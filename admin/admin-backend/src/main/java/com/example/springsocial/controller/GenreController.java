package com.example.springsocial.controller;

import com.example.springsocial.model.Genre;
import com.example.springsocial.dto.GenreRequest;
import com.example.springsocial.service.IGenreService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;
import java.util.Optional;

@RestController
@RequestMapping("/api/genres")
public class GenreController {

    @Autowired
    private IGenreService service;

    @GetMapping("/")
    public ResponseEntity<?> getAll() {
        List<Genre> genres = service.findAll();
        return ResponseEntity.ok(genres);
    }

    @PostMapping("/")
    public HttpEntity save(@Valid @RequestBody GenreRequest genreRequest) {
        Genre genre = new Genre();
        genre.setName(genreRequest.getName());

        Genre rs = service.add(genre);

        if (rs != null) {
            return ResponseEntity.status(HttpStatus.CREATED).body("Successful creation of a resource");
        } else
            return ResponseEntity.status(HttpStatus.BAD_REQUEST).body("Error creating resource");
    }

    @GetMapping("/{id}")
    public ResponseEntity<?> getOne(@PathVariable int id) {
        Optional<Genre> result = service.findById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can't find genre with id="+id);
    }

    @PutMapping("/{genreId}")
    public ResponseEntity<?> update(@PathVariable int genreId,
                                    @Valid @RequestBody GenreRequest genreRequest) {
        Optional<Genre> rs = service.findById(genreId);
        if(rs.isPresent()){
            Genre updateGenre = rs.get();
            updateGenre.setName(genreRequest.getName());
            Genre result = service.update(updateGenre);
            if (result != null) return ResponseEntity.ok("Update successfully");
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Can't find genre with id="+genreId);
    }

    @DeleteMapping("/{genreId}")
    public ResponseEntity<String> delete(@PathVariable int genreId) {
        boolean result = service.delete(genreId);
            if(result) return ResponseEntity.ok("Delete successfully!");

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Failed!");
    }

    @GetMapping("/search")
    public ResponseEntity<?> searchByName(@RequestParam(name="name") String name){
        List<Genre> result = service.findByName(name);
       return ResponseEntity.ok(result);
    }

}
