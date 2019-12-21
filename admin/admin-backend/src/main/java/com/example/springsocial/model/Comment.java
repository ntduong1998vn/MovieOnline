package com.example.springsocial.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;

import javax.persistence.*;
import java.io.Serializable;

@Entity
@Table(name = "comment")
@Data
public class Comment  implements Serializable {

    private static final long serialVersionUID = -297553281792804396L;

    @Id
    int id;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "user_id")
    User user;

    @JsonIgnore
    @ManyToOne
    @JoinColumn(name = "movie_id")
    Movie movie_comment;

    String content;

}
