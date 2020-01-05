package com.example.springsocial.model;


import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;

import javax.persistence.*;

@Entity
@Table(name = "movie_cast")
@Data
public class MovieCast {

    @JsonIgnore
    @EmbeddedId
    MovieCastKey movieCastKey;

    @JsonIgnore
    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("movie_id")
    @JoinColumn(name = "movie_id")
    Movie movie_cast;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("cast_id")
    @JoinColumn(name = "cast_id")
    @JsonProperty("cast")
    Cast cast_movie;

    String character;
}
