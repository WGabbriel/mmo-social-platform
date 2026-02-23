package com.ifpe.mmo_social_platform.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ifpe.mmo_social_platform.entity.Photo;

public interface PhotoRepository extends JpaRepository<Photo, Integer> {

  Optional<Photo> findByCharacterId(Long characterId);

  void deleteByCharacterId(Long characterId);
}
