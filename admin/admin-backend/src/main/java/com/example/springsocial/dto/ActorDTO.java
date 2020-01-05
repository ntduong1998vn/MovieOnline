package com.example.springsocial.dto;


import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@Getter
@Setter
@NoArgsConstructor
public class ActorDTO {
    private int id;
    private String name;
        private String character;

    public ActorDTO(int id, String name) {
        this.id = id;
        this.name = name;
    }

    public ActorDTO(int id, String name, String character) {
        this.id = id;
        this.name = name;
        this.character = character;
    }
}
