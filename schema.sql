-- Drops the blogger if it exists currently --
DROP DATABASE IF EXISTS fermentor;
-- Creates the "blogger" database --
CREATE DATABASE fermentor;

USE fermentor;

CREATE TABLE greek_yogurt (
  id INT NOT NULL AUTO_INCREMENT,
  -- Time since the previous step in hours
  time_interval_hrs INT(10) NOT NULL,

  -- Ingredients as a string
  ingredients VARCHAR(1000000) NOT NULL,

  -- Cooking/frementing hardware as a string
  hardware VARCHAR(1000000) NOT NULL,

  -- Sub-steps of each individual step, as a string
  sub_steps VARCHAR(1000000) NOT NULL,

  --expected duration of all sub-steps in minutes
  duration_minutes INT (1000) NOT NULL,

  PRIMARY KEY (id)

);
 

