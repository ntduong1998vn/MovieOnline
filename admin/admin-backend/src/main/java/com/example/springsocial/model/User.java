package com.example.springsocial.model;
import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Getter;
import lombok.Setter;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotNull;
import java.util.Set;

@Setter
@Getter
@Entity
@Table(name = "users", uniqueConstraints = { @UniqueConstraint(columnNames = "email") })
public class User {
    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Long id;
    @Column(nullable = false)
    private String name;
    @Email
    @Column(nullable = false)
    private String email;
    private String imageUrl;
    @Column(nullable = false)
    private Boolean emailVerified = false;
    @JsonIgnore
    private String password;
    @Lob
    private byte[] avatar;
    @NotNull
    @Enumerated(EnumType.STRING)
    private AuthProvider provider;

    private String providerId;

    @Column(name = "role",columnDefinition = "varchar(10) default 'ROLE_USER' ")
    private String role;

    @JsonIgnore
    @OneToMany(mappedBy = "user_comment")
    Set<Comment> comments;
}
