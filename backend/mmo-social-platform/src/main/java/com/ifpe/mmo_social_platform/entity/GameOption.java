package com.ifpe.mmo_social_platform.entity;

public enum GameOption {
  WORLD_OF_WARCRAFT("World of Warcraft"),
  FINAL_FANTASY_XIV("Final Fantasy XIV"),
  GUILD_WARS_2("Guild Wars 2"),
  ELDER_SCROLLS_ONLINE("Elder Scrolls Online"),
  LOST_ARK("Lost Ark"),
  NEW_WORLD("New World"),
  BLACK_DESERT_ONLINE("Black Desert Online");

  private final String label;

  GameOption(String label) {
    this.label = label;
  }

  public String getLabel() {
    return label;
  }
}
