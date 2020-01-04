package com.example.springsocial.service;

import com.example.springsocial.model.User;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

public interface IUserService {

    Optional<User> findById(long id);

    boolean updateUser(long id , String name, MultipartFile file);

    boolean updateVip(long id);
}
