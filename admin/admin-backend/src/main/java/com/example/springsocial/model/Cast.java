package com.example.springsocial.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.persistence.*;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Entity(name = "cast")
@Getter
@Setter
@AllArgsConstructor
@NoArgsConstructor
public class Cast {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    private String name;

    private String profile_path;

    @JsonIgnore
    @OneToMany(mappedBy = "cast",fetch = FetchType.LAZY)
    List<MovieCaster> movies = new ArrayList<>();

}
