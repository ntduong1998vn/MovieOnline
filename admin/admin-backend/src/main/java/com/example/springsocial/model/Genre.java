package com.example.springsocial.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.*;
import org.springframework.hateoas.ResourceSupport;
import javax.persistence.*;
import java.io.Serializable;
import java.util.HashSet;
import java.util.Set;

@Entity
@Table(name = "genre")
@NoArgsConstructor
@Getter
@Setter
public class Genre implements Serializable {

    private static final long serialVersionUID = -297553281792804396L;

    @Id
    @GeneratedValue(strategy =GenerationType.IDENTITY)
    private int id;
    @Column(name = "name", nullable = false)
    private String name;
    @JsonIgnore
    @ManyToMany(fetch = FetchType.LAZY,mappedBy = "genres")
    private Set<Movie> post = new HashSet<>();


}
