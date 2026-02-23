package com.ifpe.mmo_social_platform.service;

import static org.springframework.http.HttpStatus.NOT_FOUND;

import java.util.Arrays;
import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.web.server.ResponseStatusException;

import com.ifpe.mmo_social_platform.dto.character.CharacterRequestDto;
import com.ifpe.mmo_social_platform.dto.character.CharacterResponseDto;
import com.ifpe.mmo_social_platform.dto.character.GameOptionDto;
import com.ifpe.mmo_social_platform.entity.Character;
import com.ifpe.mmo_social_platform.entity.GameOption;
import com.ifpe.mmo_social_platform.entity.User;
import com.ifpe.mmo_social_platform.repository.CharacterRepository;
import com.ifpe.mmo_social_platform.repository.UserRepository;
import com.ifpe.mmo_social_platform.security.JwtUtils;

@Service
public class CharacterService {

  private final CharacterRepository characterRepository;
  private final UserRepository userRepository;
  private final JwtUtils jwtUtils;

  public CharacterService(CharacterRepository characterRepository, UserRepository userRepository, JwtUtils jwtUtils) {
    this.characterRepository = characterRepository;
    this.userRepository = userRepository;
    this.jwtUtils = jwtUtils;
  }

  public CharacterResponseDto create(CharacterRequestDto request) {
    User user = getAuthenticatedUser();

    Character character = new Character();
    character.setName(request.name().trim());
    character.setGame(request.game());
    character.setUser(user);

    return toDto(characterRepository.save(character));
  }

  public List<CharacterResponseDto> listMine() {
    Long userId = getAuthenticatedUser().getId();
    return characterRepository.findAllByUserIdOrderByIdDesc(userId).stream().map(this::toDto).toList();
  }

  public CharacterResponseDto getMineById(Long id) {
    Long userId = getAuthenticatedUser().getId();
    Character character = characterRepository.findByIdAndUserId(id, userId)
        .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Character not found"));

    return toDto(character);
  }

  public List<GameOptionDto> listGameOptions() {
    return Arrays.stream(GameOption.values())
        .map(game -> new GameOptionDto(game.name(), game.getLabel()))
        .toList();
  }

  private CharacterResponseDto toDto(Character character) {
    return new CharacterResponseDto(
        character.getId(),
        character.getName(),
        character.getGame().name());
  }

  private User getAuthenticatedUser() {
    String email = jwtUtils.getAuthorizedId();
    return userRepository.findByEmail(email)
        .orElseThrow(() -> new ResponseStatusException(NOT_FOUND, "Authenticated user not found"));
  }
}
