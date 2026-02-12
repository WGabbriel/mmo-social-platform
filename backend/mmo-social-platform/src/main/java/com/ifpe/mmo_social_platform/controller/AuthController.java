package com.ifpe.mmo_social_platform.controller;

import java.net.URI;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifpe.mmo_social_platform.dto.auth.LoginDto;
import com.ifpe.mmo_social_platform.dto.auth.UserRequestDto;
import com.ifpe.mmo_social_platform.dto.auth.UserResponseDto;
import com.ifpe.mmo_social_platform.service.AuthService;

import jakarta.validation.Valid;

@RestController
@RequestMapping("/auth")
public class AuthController {

  private final AuthService authService;

  public AuthController(AuthService authService) {
    this.authService = authService;

  }

  @PostMapping("/register")
  public ResponseEntity<UserResponseDto> create(@Valid @RequestBody UserRequestDto user) {
    UserResponseDto createdUser = authService.createNewUser(user);
    return ResponseEntity.created(URI.create("/users/" + createdUser.id())).body(createdUser);
  }

  @PostMapping("/login")
  public String login(@Valid @RequestBody LoginDto user) {
    String token = authService.authenticate(user);
    return token;
  }

}
