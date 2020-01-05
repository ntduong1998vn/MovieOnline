package com.example.springsocial.repository;

import com.example.springsocial.dto.CastDTO;
import com.example.springsocial.model.Cast;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface CastRepository extends JpaRepository<Cast,Integer> {

    @Query("select new com.example.springsocial.dto.CastDTO(u.id,u.name) from Cast u")
    List<CastDTO> getAllCastExceptImg();

}
