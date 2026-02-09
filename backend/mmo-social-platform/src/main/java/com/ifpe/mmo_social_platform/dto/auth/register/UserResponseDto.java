package com.ifpe.mmo_social_platform.dto.auth.register;

import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.Date;

public class UserResponseDto {

  private Long id;
  private String username;
  private String email;
  private Long createdAt;

  public Long getId() {
    return id;
  }

  public void setId(Long id) {
    this.id = id;
  }

  public String getUsername() {
    return username;
  }

  public void setUsername(String username) {
    this.username = username;
  }

  public String getEmail() {
    return email;
  }

  public void setEmail(String email) {
    this.email = email;
  }

  public String getCreatedAt() {
    return new SimpleDateFormat("dd/MM/yyyy").format(new Date(this.createdAt));
  }

  public void setCreatedAt(String createdAt) {
    try {
      this.createdAt = new SimpleDateFormat("dd/MM/yyyy").parse(createdAt).getTime();
    } catch (ParseException e) {
      e.printStackTrace();
    }
  }

}
