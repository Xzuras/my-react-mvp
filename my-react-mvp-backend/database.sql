DROP DATABASE IF EXISTS instruments;
CREATE DATABASE instruments;
DROP TABLE IF EXISTS instrument;

CREATE TABLE instrument (
    id SERIAL PRiMARY KEY,
    kind VARCHAR(20),
    family TEXT,
    model VARCHAR(20)
);

INSERT INTO instrument (kind, family, model) VALUES
('Trumpet', 'Brass', 'Jupiter'),
('Violin', 'String', 'Stradivarius'),
('Flute', 'Woodwinds', 'Yamaha');