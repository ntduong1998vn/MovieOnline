package com.example.springsocial.service;


import com.example.springsocial.model.Comment;
import com.example.springsocial.dto.CommentDTO;
import org.springframework.data.domain.Page;

public interface ICommentService {

    Page<CommentDTO> findByMovieId(int movieId,int page);

    void saveComment(Comment comment);

    void deleteComment(int commentId);
}
