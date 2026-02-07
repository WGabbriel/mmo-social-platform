package com.ifpe.mmo_social_platform.repository;

import org.springframework.data.jpa.repository.JpaRepository;

import com.ifpe.mmo_social_platform.entity.User;

public interface UserRepository extends JpaRepository<User, Long> {

}
