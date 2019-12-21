package com.example.springsocial.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import javax.persistence.*;
import java.io.Serializable;
import java.util.IdentityHashMap;

@Entity
@Table(name ="linkmovie")
@Data
@NoArgsConstructor
@AllArgsConstructor
@IdClass(LinkMovieId.class)
public class LinkMovie implements Serializable {

    @Id
    @Column(name = "movie_id",insertable = false,updatable = false)
    private int movie_id;
    @Id
    private int type;

    private String movie_url;

    @JsonIgnore
    @ManyToOne(optional = false)
    @JoinColumn(name = "movie_id",nullable = false,referencedColumnName = "id",insertable = false,updatable = false)
    private Movie link_movie;
}
