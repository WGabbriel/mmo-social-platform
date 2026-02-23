package com.ifpe.mmo_social_platform.repository;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ifpe.mmo_social_platform.entity.Character;

public interface CharacterRepository extends JpaRepository<Character, Long> {

  List<Character> findAllByUserIdOrderByIdDesc(Long userId);

  Optional<Character> findByIdAndUserId(Long id, Long userId);
}
