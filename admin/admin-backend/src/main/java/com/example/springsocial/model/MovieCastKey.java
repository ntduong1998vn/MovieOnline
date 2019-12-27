package com.example.springsocial.model;

import lombok.*;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@Data
public class MovieCastKey implements Serializable {

    @Column(name = "movie_id")
    int movieId;

    @Column(name = "cast_id")
    int castId;

    // Must be override methods Equals and HashCode
}
