package com.ifpe.mmo_social_platform.controller;

import java.net.URI;
import java.util.List;

import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.ifpe.mmo_social_platform.dto.character.CharacterRequestDto;
import com.ifpe.mmo_social_platform.dto.character.CharacterResponseDto;
import com.ifpe.mmo_social_platform.dto.character.GameOptionDto;
import com.ifpe.mmo_social_platform.service.CharacterService;

import jakarta.validation.Valid;

@RestController
@RequestMapping
public class CharacterController {

  private final CharacterService characterService;

  public CharacterController(CharacterService characterService) {
    this.characterService = characterService;
  }

  @GetMapping("/games")
  public List<GameOptionDto> listGames() {
    return characterService.listGameOptions();
  }

  @GetMapping("/characters")
  public List<CharacterResponseDto> listMyCharacters() {
    return characterService.listMine();
  }

  @GetMapping("/characters/{id}")
  public CharacterResponseDto getMyCharacter(@PathVariable Long id) {
    return characterService.getMineById(id);
  }

  @PostMapping("/characters")
  public ResponseEntity<CharacterResponseDto> createCharacter(@Valid @RequestBody CharacterRequestDto request) {
    CharacterResponseDto character = characterService.create(request);
    return ResponseEntity.created(URI.create("/characters/" + character.id())).body(character);
  }
}
