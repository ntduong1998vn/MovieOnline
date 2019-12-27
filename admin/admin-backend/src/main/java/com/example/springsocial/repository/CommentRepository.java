package com.example.springsocial.repository;

import com.example.springsocial.model.Comment;
import com.example.springsocial.dto.CommentDTO;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

@Repository
public interface CommentRepository extends JpaRepository<Comment,Integer> {

    @Query("select new com.example.springsocial.dto.CommentDTO(c.id,c.content,u.name,u.imageUrl) from Comment c inner join c.user_comment u where c.movie_comment.id = :movieId")
    Page<CommentDTO> findByMovieId(int movieId, Pageable page);

}
