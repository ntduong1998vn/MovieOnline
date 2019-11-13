package com.example.springsocial.model;

import lombok.*;
import org.springframework.hateoas.ResourceSupport;

import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.Set;

@Entity
@Table(name = "movie")
@NoArgsConstructor
@Getter
@Setter
public class Movie implements Serializable {

    private static final long serialVersionUID = -297553281792804396L;

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;
    @Column(name = "title", nullable = false, length = 255)
    private String title;
    @Column(name = "status", length = 45)
    private String status;
    @Column(name = "runtime")
    private int runtime;
    @Column(name = "release_date")
    @Temporal(TemporalType.DATE)
    private Date release_date;
    @Column(name = "description", length = 1000)
    private String description;
    @Column(name = "poster_path", length = 100)
    private String poster_path;
    @Column(name = "vote_average")
    private float vote_average;
    @Column(name = "production_countries")
    private String production_countries;

    @ManyToMany(fetch = FetchType.LAZY)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @JoinTable(
            name = "genre_movie",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    Set<Genre> genres;
}
