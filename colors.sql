DROP DATABASE IF EXISTS colors;
CREATE DATABASE colors;

\c colors;

CREATE TABLE color_selections (
  ID SERIAL PRIMARY KEY,
  red INTEGER,
  green INTEGER,
  blue INTEGER
);

INSERT INTO color_selections (red, green, blue)
  VALUES (100, 100, 100);