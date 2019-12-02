package com.example.springsocial.model;


import lombok.*;

import javax.persistence.*;

@Entity(name = "movie_cast")
@Setter
@Getter
@NoArgsConstructor
@AllArgsConstructor
@EqualsAndHashCode
public class MovieCaster {

    @EmbeddedId
    MovieCasterKey  id;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("movie_id")
    @JoinColumn(name = "movie_id")
    Movie movie;

    @ManyToOne(fetch = FetchType.LAZY)
    @MapsId("cast_id")
    @JoinColumn(name = "cast_id")
    Cast cast;

    String character;
}
