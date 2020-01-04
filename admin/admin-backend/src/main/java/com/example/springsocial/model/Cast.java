package com.example.springsocial.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.data.annotation.LastModifiedBy;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.List;

@Entity
@Table(name = "cast")
@Data
@NoArgsConstructor
@AllArgsConstructor
public class Cast {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String profile_path;

    @Lob
    @Column(name="img",columnDefinition = "MEDIUMBLOB")
    private byte[] img;

    @JsonIgnore
    @OneToMany(mappedBy = "cast_movie",fetch = FetchType.LAZY)
    List<MovieCast> movies = new ArrayList<>();



}
