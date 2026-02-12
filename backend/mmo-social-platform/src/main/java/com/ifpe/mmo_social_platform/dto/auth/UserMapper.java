package com.ifpe.mmo_social_platform.dto.auth;

import org.mapstruct.Mapper;

import com.ifpe.mmo_social_platform.entity.User;

@Mapper(componentModel = "spring")
public interface UserMapper {

  User toEntity(UserRequestDto dto);

  UserResponseDto toResponseDTO(User user);
}