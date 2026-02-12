package com.ifpe.mmo_social_platform.exception.custom;

public class EmailAlreadyExistsException extends RuntimeException {
  public EmailAlreadyExistsException(String message) {
    super(message);
  }

}
