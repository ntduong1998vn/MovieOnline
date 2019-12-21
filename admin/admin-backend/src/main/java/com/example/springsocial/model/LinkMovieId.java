package com.example.springsocial.model;

import lombok.*;
import org.hibernate.annotations.CollectionId;

import javax.persistence.Column;
import java.io.Serializable;

@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode
public class LinkMovieId implements Serializable {

    @Column(name = "movie_id")
    private int movie_id;

    private int type;

}
