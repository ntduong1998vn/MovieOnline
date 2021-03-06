package com.example.springsocial.repository;

import com.example.springsocial.model.Movie;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Set;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Integer> {

    @Query("select u from Movie u join u.genres p where p.id = :id")
    Page<Movie> findMoviesByGenreId(int id, Pageable pageable);

    @Query("select g.id from Movie m inner join m.genres g where m.id = :movieId")
    List<Integer> getGenreIdList(int movieId);

    @Query("select m from Movie m where UPPER(m.title) like concat('%',UPPER(:keyword),'%')")
    List<Movie> findByTitleName(String keyword);

    @Query(nativeQuery = true,value="SELECT m.* FROM Movie m where UPPER(m.title)  regexp '^[0-9]'")
    List<Movie> findByNumberBegin();

    @Query("SELECT m FROM Movie m where UPPER(m.title) like concat(UPPER(:letter),'%')")
    List<Movie> findByLetterBegin(String letter);
}
