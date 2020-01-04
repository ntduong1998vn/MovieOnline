package com.example.springsocial.controller;

import com.example.springsocial.dto.ApiResponse;
import com.example.springsocial.exception.ResourceNotFoundException;
import com.example.springsocial.model.User;
import com.example.springsocial.repository.UserRepository;
import com.example.springsocial.security.CurrentUser;
import com.example.springsocial.security.UserPrincipal;
import com.example.springsocial.service.EmailService;
import com.example.springsocial.service.UserService;
import lombok.Getter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.security.access.prepost.PostAuthorize;
import org.springframework.security.access.prepost.PreAuthorize;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.util.Optional;

@RestController
public class UserController {

    @Autowired
    private UserRepository userRepository;
    @Autowired
    private EmailService emailService;
    @Autowired
    private UserService userService;

    @GetMapping("/user/me")
    @PreAuthorize("hasRole('USER') or hasRole('VIP') or hasRole('ADMIN')")
    public User getCurrentUser(@CurrentUser UserPrincipal userPrincipal) {
        return userRepository.findById(userPrincipal.getId())
                .orElseThrow(() -> new ResourceNotFoundException("User", "id", userPrincipal.getId()));
    }

    @GetMapping("/sendmail")
    @PreAuthorize("hasRole('USER')")
    public ResponseEntity sendMail(@CurrentUser UserPrincipal userPrincipal) {
        userService.updateVip(userPrincipal.getId());
        return ResponseEntity.ok(new ApiResponse(true,"Nâng cấp thành công. Kiểm tra email để xác nhận!"));
    }

    @GetMapping("/forgetpassword")
    public void forgetPassword() {
        emailService.sendSimpleMessage("ntduong1998vn@gmail.com", "WEBSITE XEM PHIM TRỰC TUYẾN", "MẬT KHẨU CỦA BẠN LÀ PASSWORD");
    }


    @PatchMapping(value = "/user/", consumes = MediaType.MULTIPART_FORM_DATA_VALUE)
    @PreAuthorize("hasRole('USER') or hasRole('ADMIN')")
    public ResponseEntity updateUser(@CurrentUser UserPrincipal userPrincipal,
                                     @RequestParam(name = "file",required = false) MultipartFile file,
                                     @RequestParam(name = "name") String name) {
        boolean result = userService.updateUser(userPrincipal.getId(), name, file);
        if (result)
            return ResponseEntity.status(HttpStatus.ACCEPTED)
                    .body(new ApiResponse(true, "Success"));

        return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR)
                .body(new ApiResponse(false, "Failed!"));
    }
}
