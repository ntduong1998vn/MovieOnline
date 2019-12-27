package com.example.springsocial.dto;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import javax.validation.constraints.NotNull;

@Getter
@Setter
@NoArgsConstructor
public class GenreRequest {

    private int id;

    @NotNull
    private String name;
}
