package com.ifpe.mmo_social_platform.service;

import java.text.SimpleDateFormat;
import java.util.Calendar;
import java.util.Date;

import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;

import com.ifpe.mmo_social_platform.dto.auth.register.UserMapper;
import com.ifpe.mmo_social_platform.dto.auth.register.UserRequestDto;
import com.ifpe.mmo_social_platform.dto.auth.register.UserResponseDto;
import com.ifpe.mmo_social_platform.entity.User;
import com.ifpe.mmo_social_platform.repository.UserRepository;
import com.ifpe.mmo_social_platform.security.JwtUtils;

@Service
public class AuthService {

  private final JwtUtils jwtUtils;
  private final UserMapper userMapper;
  private final UserRepository userRepository;
  private final PasswordEncoder passwordEncoder;

  public AuthService(JwtUtils jwtUtils, UserMapper userMapper, UserRepository userRepository,
      PasswordEncoder passwordEncoder) {
    this.jwtUtils = jwtUtils;
    this.userMapper = userMapper;
    this.userRepository = userRepository;
    this.passwordEncoder = passwordEncoder;
  }

  public UserResponseDto createNewUser(UserRequestDto request) {
    User user = new User();
    request.setPassword(passwordEncoder.encode(request.getPassword()));
    user = userMapper.toEntity(request);
    user.setCreatedAt(new SimpleDateFormat("dd/MM/yyyy").format(new Date()));
    return userMapper.toResponseDTO(userRepository.save(user));
  }

}
