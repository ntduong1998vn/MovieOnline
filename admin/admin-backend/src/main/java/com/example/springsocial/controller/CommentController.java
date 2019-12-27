package com.example.springsocial.controller;

import com.example.springsocial.model.Comment;
import com.example.springsocial.model.Movie;
import com.example.springsocial.model.User;
import com.example.springsocial.dto.CommentDTO;
import com.example.springsocial.dto.CommentRequest;
import com.example.springsocial.service.CommentService;
import com.example.springsocial.service.IMovieService;
import com.example.springsocial.service.UserService;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.dao.NonTransientDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Optional;

@RestController
@RequestMapping("/api/comment")
public class CommentController {

    private static final Logger logger = LoggerFactory.getLogger(CommentController.class);

    @Autowired
    private CommentService commentService;
    @Autowired
    private UserService userService;
    @Autowired
    private IMovieService movieService;

    @GetMapping("/{movieId}")
    public ResponseEntity<?> getCommentsByFilmId(@PathVariable int movieId,
                                                 @RequestParam(name = "page", defaultValue = "0") int page) {
        Page<CommentDTO> rs = commentService.findByMovieId(movieId, page);
        return ResponseEntity.ok(rs);
    }

    @PostMapping("/")
    public ResponseEntity<?> saveComment(@Valid @RequestBody CommentRequest commentRequest) {

        Optional<User> user = userService.findById(commentRequest.getUserId());
        Optional<Movie> movie = movieService.findById(commentRequest.getMovieId());

        if (user.isPresent() && movie.isPresent()) {
            Comment comment = new Comment();
            comment.setUser_comment(user.get());
            comment.setMovie_comment(movie.get());
            comment.setContent(commentRequest.getContent());

            try {
                commentService.saveComment(comment);
                return ResponseEntity.ok("Save successful !");
            } catch (DataAccessException e) {
                logger.error(e.getMessage());
                return ResponseEntity.status(500).body(e.getMessage());
            }
        }
        return ResponseEntity.status(500).body("UserId or MovieId NOT FOUND !");
    }

    @DeleteMapping("/{commentId}")
    public ResponseEntity<?> deleteComment(@PathVariable int commentId){
        try {
            commentService.deleteComment(commentId);
            return ResponseEntity.status(HttpStatus.ACCEPTED).body("Delete successful !");
        } catch (NonTransientDataAccessException e) {
            logger.error(e.getMessage());
            return ResponseEntity.status(HttpStatus.NOT_FOUND).body("Not found!");
        }
    }

}
