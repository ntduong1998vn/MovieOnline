package com.example.springsocial.controller;

import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.service.EmailService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailService emailService;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER')")
        public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    @GetMapping("/sendmail")
    @PreAuthorize("hasRole('USER')")
    public void sendMail(@CurrentUser UserPrincipal userPrincipal){
        emailService.sendSimpleMessage("ntduong1998vn@gmail.com","WEBSITE XEM PHIM TRỰC TUYẾN","XÁC NHẬN NÂNG CẤP TÀI KHOẢN VIP THÀNH CÔNG!");
    }

    @GetMapping("/forgetpassword")
    public void forgetPassword(){
        emailService.sendSimpleMessage("ntduong1998vn@gmail.com","WEBSITE XEM PHIM TRỰC TUYẾN","MẬT KHẨU CỦA BẠN LÀ PASSWORD");
    }
}
