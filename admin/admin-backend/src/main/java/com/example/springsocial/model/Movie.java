package com.example.springsocial.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.*;
import javax.persistence.*;
import java.io.Serializable;
import java.util.Date;
import java.util.HashSet;
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

    @Column(name = "title", nullable = false, length = 300)
    private String title;

    private int runtime;

    @Column(name = "release_date")
    @Temporal(TemporalType.DATE)
    private Date release_date;

    @Column(name = "overview", length = 1000)
    private String overview;

    private float vote_average;

    @JsonProperty("countries")
    private String production_countries;

    private float popularity;

    private String language;

    private String poster_path;

    private String backdrop_path;

    private long views;

    @ManyToMany(fetch = FetchType.LAZY)
    @ToString.Exclude
    @EqualsAndHashCode.Exclude
    @JoinTable(
            name = "genre_movie",
            joinColumns = @JoinColumn(name = "movie_id"),
            inverseJoinColumns = @JoinColumn(name = "genre_id")
    )
    Set<Genre> genres = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "movie_cast",fetch = FetchType.LAZY)
    Set<MovieCast> casters = new HashSet<>() ;

    @OneToMany(mappedBy = "link_movie",fetch = FetchType.LAZY)
    Set<LinkMovie> links = new HashSet<>();

    @JsonIgnore
    @OneToMany(mappedBy = "movie_comment",fetch = FetchType.LAZY)
    Set<Comment> comments = new HashSet<>();

    @Lob
    private byte[] poster;


    public void addGenre(Genre genre){
        this.genres.add(genre);
        genre.getMovies().add(this);
    }

    public void removeGenre(Genre genre){
        this.genres.remove(genre);
//        genre.getMovies().remove(this);
    }

    public void addComment(Comment comment){
        this.comments.add(comment);
    }
}
