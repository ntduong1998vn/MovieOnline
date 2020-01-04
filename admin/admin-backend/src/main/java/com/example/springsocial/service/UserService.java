package com.example.springsocial.service;


import com.example.springsocial.model.User;
import com.example.springsocial.repository.UserRepository;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.DataAccessException;
import org.springframework.stereotype.Service;
import org.springframework.web.multipart.MultipartFile;

import javax.xml.crypto.Data;
import java.io.IOException;
import java.util.Optional;

@Service
public class UserService implements IUserService {

    private static final Logger logger = LoggerFactory.getLogger(UserService.class);
    @Autowired
    private UserRepository repository;
    @Autowired
    private EmailService emailService;

    @Override
    public Optional<User> findById(long id) {
        return repository.findById(id);
    }

    @Override
    public boolean updateUser(long id, String name, MultipartFile file) {
        Optional<User> result = repository.findById(id);
        if (result.isPresent()) {
            User user = result.get();
            user.setName(name);
            if(file != null){
                if(!file.isEmpty()){
                    try {
                        user.setAvatar(file.getBytes());
                    } catch (IOException e) {
                        logger.error(e.getMessage());
                        return false;
                    }
                }
            }

            try {
                repository.save(user);
                return true;
            } catch (DataAccessException e) {
                logger.error(e.getMessage());
                return false;
            }
        }
        return false;
    }

    @Override
    public boolean updateVip(long id) {
        Optional<User> result = repository.findById(id);
        if(result.isPresent()){
            User user=result.get();
            user.setRole("ROLE_VIP");
            repository.save(user);
            emailService.sendSimpleMessage(user.getEmail(), "WEBSITE XEM PHIM TRỰC TUYẾN", "XÁC NHẬN NÂNG CẤP TÀI KHOẢN VIP THÀNH CÔNG!");
            return true;
        }
        return false;
    }


}
