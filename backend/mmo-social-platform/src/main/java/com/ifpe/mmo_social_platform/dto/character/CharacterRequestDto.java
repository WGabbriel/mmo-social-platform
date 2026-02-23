package com.ifpe.mmo_social_platform.dto.character;

import com.ifpe.mmo_social_platform.entity.GameOption;

import jakarta.validation.constraints.NotBlank;
import jakarta.validation.constraints.NotNull;
import jakarta.validation.constraints.Size;

public record CharacterRequestDto(
    @NotBlank(message = "Character name is required")
    @Size(max = 80, message = "Character name must have at most 80 characters")
    String name,

    @NotNull(message = "Game is required")
    GameOption game) {
}
