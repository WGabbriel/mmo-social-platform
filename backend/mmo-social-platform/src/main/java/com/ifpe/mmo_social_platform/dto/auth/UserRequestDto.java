package com.ifpe.mmo_social_platform.dto.auth;

import jakarta.validation.constraints.Email;
import jakarta.validation.constraints.NotBlank;

public record UserRequestDto(

    @NotBlank(message = "Username is required") String username,

    @NotBlank(message = "Email is required") @Email(message = "Email should be valid") String email,

    @NotBlank(message = "Password is required") String password) {
}