package com.example.springsocial.service;

import com.example.springsocial.model.User;

import java.util.Optional;

public interface IUserService {

    Optional<User> findById(long id);
}
