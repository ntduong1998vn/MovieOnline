package com.example.springsocial.controller;

import com.example.springsocial.model.Cast;
import com.example.springsocial.model.MovieCast;
import com.example.springsocial.dto.CastRequest;
import com.example.springsocial.repository.MovieCastRepository;
import com.example.springsocial.service.CastService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.List;

@RestController
@RequestMapping("/api/cast")
public class CastController {

    @Autowired
    private CastService service;
    @Autowired
    private MovieCastRepository repository;

    @GetMapping("/")
    public List<Cast> getAll() {
        return service.getAll();
    }

    @GetMapping("/movie")
    public List<MovieCast> getCastersByMovieId(@RequestParam(required = true, name = "id") int movieId) {
        return service.getCharactersByMovieId(movieId);
    }

    @PostMapping("/")
    public ResponseEntity<String> createCast(@Valid @RequestBody CastRequest castRequest) {
        Cast newCast = new Cast();
        newCast.setName(castRequest.getName());
        newCast.setProfile_path(castRequest.getProfile_path());
        boolean rs = service.create(newCast);
        if (rs)
            return ResponseEntity.status(HttpStatus.CREATED).body("Save successfully !");
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Luu khong thanh cong");
    }

    @PutMapping("/{castId}")
    public ResponseEntity<String> updateCast(@PathVariable int castId, @Valid @RequestBody CastRequest castRequest) {
        Cast newCast = new Cast();
        newCast.setName(castRequest.getName());
        newCast.setProfile_path(castRequest.getProfile_path());

        if (service.update(castId, newCast))
            return ResponseEntity.ok("Data update successfully !");

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NOT FOUND!");
    }

    @DeleteMapping("/{castId}")
    public ResponseEntity<String> deleteByCastId(@PathVariable int castId) {
        boolean result = service.delete(castId);
        if (result)
            return ResponseEntity.ok("Delete cast successfully!");

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("Failed!");
    }

}
