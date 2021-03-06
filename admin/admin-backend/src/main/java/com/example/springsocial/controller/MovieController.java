package com.example.springsocial.controller;

import com.example.springsocial.dto.ApiResponse;
import com.example.springsocial.dto.MovieDTO;
import com.example.springsocial.model.LinkMovie;
import com.example.springsocial.model.Movie;
import com.example.springsocial.model.User;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.service.CustomUserDetailsService;
import com.example.springsocial.service.MovieService;
import com.example.springsocial.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AnonymousAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.util.UriComponentsBuilder;

import java.security.Principal;
import java.util.ArrayList;
import java.util.List;
import java.util.Optional;
import java.util.Set;
import java.util.stream.Collectors;

@RestController
@RequestMapping("/api/movies")
public class MovieController {

    private MovieService movieService;
    private UserService userService;

    @Autowired
    public MovieController(MovieService movieService) {
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
    public ResponseEntity<?> getOne(@PathVariable int id) {
        System.out.println("******************* ID: " + id + " ****************************");
        Optional<Movie> result = movieService.findById(id);
        if (result.isPresent()) {
            return ResponseEntity.ok(result.get());
        }
        return ResponseEntity.status(HttpStatus.NOT_FOUND).body("NOT FOUND!");
    }

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

    @GetMapping("/search")
    ResponseEntity<?> searchByKeyword(@RequestParam(name = "keyword", defaultValue = "") String keyword) {
        List<Movie> result = movieService.findByTitle(keyword);
        return ResponseEntity.ok(result);
    }


    @GetMapping("/popular")
    Page<Movie> getPopularMovies(@RequestParam(defaultValue = "12") int limit, @RequestParam(defaultValue = "0") int page) {
        return movieService.getPopularMovies(page, limit);
    }

    @PostMapping("/")
    public ResponseEntity<Movie> saveProduct(@RequestBody Movie movie, UriComponentsBuilder builder) {
        movieService.save(movie);
//        HttpHeaders headers = new HttpHeaders();
//        headers.setLocation(builder.path("/api/movies/{id}").buildAndExpand(movie.getId()).toUri());
        return new ResponseEntity<>(movie, HttpStatus.CREATED);
    }

    @PutMapping("/{movieId}")
    public ResponseEntity update(@PathVariable int movieId, @RequestBody MovieDTO movie) {
        boolean result = movieService.update(movieId, movie);

        if (result)
            return ResponseEntity.ok(new ApiResponse(true, "Update movie successfully!"));
        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body(new ApiResponse(true, "Error!"));
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

    @GetMapping("/list")
    public ResponseEntity<List<Movie>> getListByLetter(@RequestParam(name = "letter", defaultValue = "[0-9]") String letter) {
        List<Movie> result = movieService.findByLetterBegin(letter);
        return ResponseEntity.ok(result);
    }

    @GetMapping("/{movieId}/getlink")
    public ResponseEntity getLink(@PathVariable int movieId) {
        Optional<Movie> result1 = movieService.findById(movieId);
        if (result1.isPresent()) {
            Movie movie = result1.get();
            Set<LinkMovie> links = movie.getLinks();
            List<LinkMovie> linkMovies = new ArrayList<>(links);
            Authentication authentication = SecurityContextHolder.getContext().getAuthentication();

            if (!(authentication instanceof AnonymousAuthenticationToken)) {
                UserPrincipal userDetails = (UserPrincipal) authentication.getPrincipal();
                Optional<User> result = userService.findById(userDetails.getId());
                if (result.isPresent()) {
                    User user = result.get();
                    if (user.getRole().contains("VIP") || user.getRole().contains("ADMIN")) {
                        return ResponseEntity.ok(linkMovies.get(1));
                    }
                }
            }
            return ResponseEntity.ok(linkMovies.get(0));
        }

        return ResponseEntity.status(HttpStatus.NOT_FOUND).body(new ApiResponse(false, "Khong tim thay movie!"));
    }
}
