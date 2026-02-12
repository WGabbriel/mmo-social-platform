package com.ifpe.mmo_social_platform.dto.auth;

import jakarta.validation.constraints.NotBlank;

public record LoginDto(

    @NotBlank String email,
    
    @NotBlank String password) {
}
