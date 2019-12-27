package com.example.springsocial.dto;

import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Set;

@Getter
@Setter
@NoArgsConstructor
public class GenreListDTO {
    private Set<Integer> genreList;

}
