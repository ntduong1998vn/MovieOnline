package com.example.springsocial.dto;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.io.Serializable;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class CommentDTO implements Serializable {

    private int id;
    private String content;
    private String name;
    private String imageUrl;

}
