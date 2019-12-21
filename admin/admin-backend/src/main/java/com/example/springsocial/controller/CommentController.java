package com.example.springsocial.controller;

import com.example.springsocial.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/comment")
public class CommentController {

    @Autowired
    CommentRepository commentRepository;

    @GetMapping("/{movieId}")
    public ResponseEntity<?> getCommentsByFilmId(@PathVariable int movieId ,
                                                 @RequestParam(name = "page",defaultValue = "0") int page){

    }
}
