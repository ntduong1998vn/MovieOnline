package com.example.springsocial.repository;

import com.example.springsocial.model.Genre;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import java.awt.print.Pageable;
import java.util.List;
import java.util.Optional;

@Repository
public interface GenreRepository extends JpaRepository<Genre, Integer> {

    @Query("SELECT u FROM Genre u WHERE u.name LIKE CONCAT('%',:searchTerm,'%')")
    List<Genre> findByNameLike(@Param("searchTerm") String searchTerm);

}
