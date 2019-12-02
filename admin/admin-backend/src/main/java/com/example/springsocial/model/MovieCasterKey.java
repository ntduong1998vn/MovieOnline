package com.example.springsocial.model;

import lombok.AllArgsConstructor;
import lombok.EqualsAndHashCode;
import lombok.Getter;
import lombok.NoArgsConstructor;

import javax.persistence.Column;
import javax.persistence.Embeddable;
import java.io.Serializable;

@Embeddable
@EqualsAndHashCode
@AllArgsConstructor
@Getter
@NoArgsConstructor
public class MovieCasterKey implements Serializable {

    @Column(name = "movie_id")
    int movie_id;

    @Column(name = "cast_id")
    int cast_id;

    // Must be override methods Equals and HashCode
}
