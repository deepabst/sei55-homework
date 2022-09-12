

-- This file will create
-- 1. the structure of the 'pets' table
-- 2. several rows of 'seed'/test data to work with, i.e. several specific pets

-- By doing this in one file, we only need to run one sqlit3 command to 
-- re-initialise (restart) the whole database if we need to

-- This will nuke (remove) the pets table so we don't even have to
-- run 'rm database.db' before loading this pets.sql file
DROP TABLE IF EXISTS pets;

CREATE TABLE pets (
    
    id INTEGER PRIMARY KEY AUTOINCREMENT, -- manage IDs for us; we won't have to specify them
    name TEXT,
    species TEXT,
    description TEXT,
    roundness INTEGER,
    alive BOOLEAN,
    age INTEGER,
    image_url TEXT,
    owner_id INTEGER  -- each pet knows who it belongs to -- we MUST name this field using the singular form of the other table name
    -- This allows both pets to belong to an owner, AND an owner to have many pets--

);

INSERT INTO pets ( name, species, description, roundness, alive, age, image_url )
    VALUES (
        'Ruby',--
        'Canine',
        'The best dog',
        3, -- not very round, sadly
        1, -- is alive, ie true
        6,
        'https://place-puppy.com/300x300'

    );

INSERT INTO pets ( name, species, description, roundness, alive, age, image_url )
    VALUES (
        'Clarence Boddicker',
        'Human',
        'Baddie',
        9, -- not very round, sadly
        0, -- is alive, ie true
        50,
        'https://thenaturalaristocrat.com/wp-content/uploads/2021/06/kurtwood-smith-clarence-boddicker-robocop.jpeg'

    );

INSERT INTO pets ( name, species, description, roundness, alive, age, image_url )
    VALUES (
        'Kermit',
        'Desert Frog',
        'Extremely round, also quite sneaky',
        10, -- not very round, sadly
        1, -- is alive, ie true
        6,
        'https://allthatsinteresting.com/wordpress/wp-content/uploads/2019/03/desert-rain-frog-looks-at-camera-featured.jpg'

    );
