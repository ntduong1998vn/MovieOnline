package com.example.springsocial.repository;

import com.example.springsocial.model.Comment;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Integer> {

    @Query("select u from ")
    List<Comment> findByMovieId(int movieId);
}
