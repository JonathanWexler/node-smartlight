-- heroku addons:create heroku-postgresql:hobby-dev
-- heroku pg:psql < h_colors.sql
DROP TABLE color_selections;

CREATE TABLE color_selections (
  ID SERIAL PRIMARY KEY,
  red INTEGER,
  green INTEGER,
  blue INTEGER
);

INSERT INTO color_selections (red, green, blue)
  VALUES (100, 100, 100);