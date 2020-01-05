package com.example.springsocial.dto;

import com.example.springsocial.model.Cast;
import com.example.springsocial.model.Genre;
import com.example.springsocial.model.LinkMovie;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.*;

@Getter
@Setter
@NoArgsConstructor
public class MovieDTO {
    private int id;
    private String title;
    private int runtime;
    private Date release_date;
    private String overview;
    private float vote_average;
    @JsonProperty("countries")
    private String production_countries;
    private float popularity;
    private String language;
    private String poster_path;
    private String backdrop_path;
    private long views;

    Set<ActorDTO> casters = new HashSet<>();
    Set<LinkMovie> links = new HashSet<>();
    Set<GenreDTO> genres = new HashSet<>();

}
