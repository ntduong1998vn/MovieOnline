package com.example.springsocial.service;

import com.example.springsocial.model.Comment;
import com.example.springsocial.dto.CommentDTO;
import com.example.springsocial.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.NonTransientDataAccessException;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.stereotype.Service;

@Service
public class CommentService implements ICommentService {


    private static final int PAGE_SIZE = 6;

    @Autowired
    private CommentRepository repository;

    @Override
    public Page<CommentDTO> findByMovieId(int movieId, int page) {
        return repository.findByMovieId(movieId, PageRequest.of(page, PAGE_SIZE));
    }

    @Override
    public void saveComment(Comment comment) {
        repository.save(comment);
    }

    @Override
    public void deleteComment(int commentId) throws NonTransientDataAccessException {
        repository.deleteById(commentId);
    }
}
