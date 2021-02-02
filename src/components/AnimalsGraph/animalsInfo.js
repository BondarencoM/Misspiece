export default [
    { data: { id: 'Human', type: 'Proto' } },
    { data: { id: 'Bull', type: 'Proto' } },
    { data: { id: 'Bird', type: 'Proto' } },
    { data: { id: 'Dog', type: 'Proto' } },
    { data: { id: 'Lion', type: 'Proto' } },
    { data: { id: 'Scorpion', type: 'Proto' } },
    { data: { id: 'Snake', type: 'Proto' } },
    { data: { id: 'Bat', type: 'Proto' } },
    { data: { id: 'Lizard', type: 'Proto' } },
    { data: { id: 'Goat', type: 'Proto' } },
    { data: { id: 'Hippo', type: 'Proto' } },
    { data: { id: 'Fewer', type: 'Proto', label: 'Fewer Body Parts' } },
    { data: { id: 'More', type: 'Proto', label: 'More Body Parts' } },
    { data: { id: 'Scorpion', type: 'Proto', } },
    { data: { id: 'Horse', type: 'Proto', } },

    /* Werewolf */
    { data: { id: 'Werewolf', type: 'Animal' } },
    { data: { id: 'DogWerewolf', source: "Dog", target: "Werewolf", } },
    { data: { id: 'HumanWerewolf', source: "Human", target: "Werewolf", } },

    /* Chamrosch */
    { data: { id: 'Chamrosch', type: 'Animal' } },
    { data: { id: 'DogChamrosch', source: "Dog", target: "Chamrosch", } },
    { data: { id: 'BirdChamrosch', source: "Bird", target: "Chamrosch", } },

    /* Harpy */
    { data: { id: 'Harpy', type: 'Animal' } },
    { data: { id: 'HumanHarpy', source: "Human", target: "Harpy", } },
    { data: { id: 'BirdHarpy', source: "Bird", target: "Harpy", } },

    /* Sirin */
    { data: { id: 'Sirin', type: 'Animal' } },
    { data: { id: 'HumanSirin', source: "Human", target: "Sirin", } },
    { data: { id: 'BirdSirin', source: "Bird", target: "Sirin", } },


    /* Minotaur */
    { data: { id: 'Minotaur', type: 'Animal' } },
    { data: { id: 'HumanMinotaur', source: "Human", target: "Minotaur", } },
    { data: { id: 'BullMinotaur', source: "Bull", target: "Minotaur", } },

    /* Lamassu */
    { data: { id: 'Lamassu', type: 'Animal' } },
    { data: { id: 'HumanLamassu', source: "Human", target: "Lamassu", } },
    { data: { id: 'BirdLamassu', source: "Bird", target: "Lamassu", } },
    { data: { id: 'BullLamassu', source: "Bull", target: "Lamassu", } },

    /* Griffon */
    { data: { id: 'Griffon', type: 'Animal' } },
    { data: { id: 'BirdGriffon', source: "Bird", target: "Griffon", } },
    { data: { id: 'LionGriffon', source: "Lion", target: "Griffon", } },

    /* Sphinx */
    { data: { id: 'Sphinx', type: 'Animal' } },
    { data: { id: 'HumanSphinx', source: "Human", target: "Sphinx", } },
    { data: { id: 'LionSphinx', source: "Lion", target: "Sphinx", } },

    /* Manticore */
    { data: { id: 'Manticore', type: 'Animal' } },
    { data: { id: 'ScorpionManticore', source: "Scorpion", target: "Manticore", } },
    { data: { id: 'LionManticore', source: "Lion", target: "Manticore", } },
    { data: { id: 'HumanManticore', source: "Human", target: "Manticore", } },

    /* Gorgon */
    { data: { id: 'Gorgon', type: 'Animal' } },
    { data: { id: 'SnakeGorgon', source: "Snake", target: "Gorgon", } },
    { data: { id: 'HumanGorgon', source: "Human", target: "Gorgon", } },

    /* Typhon */
    { data: { id: 'Typhon', type: 'Animal' } },
    { data: { id: 'SnakeTyphon', source: "Snake", target: "Typhon", } },
    { data: { id: 'HumanTyphon', source: "Human", target: "Typhon", } },

    /* Zahhak */
    { data: { id: 'Zahhak', type: 'Animal' } },
    { data: { id: 'SnakeZahhak', source: "Snake", target: "Zahhak", } },
    { data: { id: 'HumanZahhak', source: "Human", target: "Zahhak", } },

    /* Echidna */
    { data: { id: 'Echidna', type: 'Animal' } },
    { data: { id: 'SnakeEchidna', source: "Snake", target: "Echidna", } },
    { data: { id: 'HumanEchidna', source: "Human", target: "Echidna", } },

    /* Ophitaurus */
    { data: { id: 'Ophitaurus', type: 'Animal' } },
    { data: { id: 'SnakeOphitaurus', source: "Snake", target: "Ophitaurus", } },
    { data: { id: 'BullOphitaurus', source: "Bull", target: "Ophitaurus", } },

    /* Cockatrice */
    { data: { id: 'Cockatrice', type: 'Animal' } },
    { data: { id: 'SnakeCockatrice', source: "Snake", target: "Cockatrice", } },
    { data: { id: 'BirdCockatrice', source: "Bird", target: "Cockatrice", } },

    /* Chimera */
    { data: { id: 'Chimera', type: 'Animal' } },
    { data: { id: 'SnakeChimera', source: "Snake", target: "Chimera", } },
    { data: { id: 'LionChimera', source: "Lion", target: "Chimera", } },
    { data: { id: 'GoatChimera', source: "Goat", target: "Chimera", } },

    /* Ammit */
    { data: { id: 'Ammit', type: 'Animal' } },
    { data: { id: 'LizardAmmit', source: "Lizard", target: "Ammit", } },
    { data: { id: 'LionChimera', source: "Lion", target: "Ammit", } },
    { data: { id: 'HippoAmmit', source: "Hippo", target: "Ammit", } },

    /* Vampire */
    { data: { id: 'Vampire', type: 'Animal' } },
    { data: { id: 'BatVampire', source: "Bat", target: "Vampire", } },
    { data: { id: 'HumanVampire', source: "Human", target: "Vampire", } },

    /* Dragon */
    { data: { id: 'Dragon', type: 'Animal' } },
    { data: { id: 'BatDragon', source: "Bat", target: "Dragon", } },
    { data: { id: 'LizardDragon', source: "Lizard", target: "Dragon", } },

    /* Wyvern */
    { data: { id: 'Wyvern', type: 'Animal' } },
    { data: { id: 'BatWyvern', source: "Bat", target: "Wyvern", } },
    { data: { id: 'LizardWyvern', source: "Lizard", target: "Wyvern", } },
    { data: { id: 'FewerWyvern', source: "Fewer", target: "Wyvern", } },

    /* Cyclops */
    { data: { id: 'Cyclops', type: 'Animal' } },
    { data: { id: 'HumanCyclops', source: "Human", target: "Cyclops", } },
    { data: { id: 'FewerCyclops', source: "Fewer", target: "Cyclops", } },

    /* Monopod */
    { data: { id: 'Monopod', type: 'Animal' } },
    { data: { id: 'HumanMonopod', source: "Human", target: "Monopod", } },
    { data: { id: 'FewerMonopod', source: "Fewer", target: "Monopod", } },

    /* Hydra */
    { data: { id: 'Hydra', type: 'Animal' } },
    { data: { id: 'LizardHydra', source: "Lizard", target: "Hydra", } },
    { data: { id: 'MoreHydra', source: "More", target: "Hydra", } },

    /* Basilisk */
    { data: { id: 'Basilisk', type: 'Animal' } },
    { data: { id: 'LizardBasilisk', source: "Lizard", target: "Basilisk", } },
    { data: { id: 'MoreBasilisk', source: "More", target: "Basilisk", } },

    /* Balaur */
    { data: { id: 'Balaur', type: 'Animal' } },
    { data: { id: 'LizardBalaur', source: "Lizard", target: "Balaur", } },
    { data: { id: 'MoreBalaur', source: "More", target: "Balaur", } },

    /* Ladon */
    { data: { id: 'Ladon', type: 'Animal' } },
    { data: { id: 'LizardLadon', source: "Lizard", target: "Ladon", } },
    { data: { id: 'MoreLadon', source: "More", target: "Ladon", } },

    /* Hecatonchires */
    { data: { id: 'Hecatonchires', type: 'Animal' } },
    { data: { id: 'HumanHecatonchires', source: "Human", target: "Hecatonchires", } },
    { data: { id: 'MoreHecatonchires', source: "More", target: "Hecatonchires", } },

    /* Argus */
    { data: { id: 'Argus', label: 'Argus Panoptes', type: 'Animal' } },
    { data: { id: 'HumanArgus', source: "Human", target: "Argus", } },
    { data: { id: 'MoreArgus', source: "More", target: "Argus", } },

    /* Geryon */
    { data: { id: 'Geryon', type: 'Animal' } },
    { data: { id: 'HumanGeryon', source: "Human", target: "Geryon", } },
    { data: { id: 'MoreGeryon', source: "More", target: "Geryon", } },

    /* Hecate */
    { data: { id: 'Hecate', type: 'Animal' } },
    { data: { id: 'HumanHecate', source: "Human", target: "Hecate", } },
    { data: { id: 'MoreHecate', source: "More", target: "Hecate", } },

    /* Baize */
    { data: { id: 'Baize', label: 'Bai Ze', type: 'Animal' } },
    { data: { id: 'HumanBaize', source: "Human", target: "Baize", } },
    { data: { id: 'MoreBaize', source: "More", target: "Baize", } },
    { data: { id: 'BullBaize', source: "Bull", target: "Baize", } },

    /* Pabilsag */
    { data: { id: 'Pabilsag', type: 'Animal' } },
    { data: { id: 'HumanPabilsag', source: "Human", target: "Pabilsag", } },
    { data: { id: 'ScorpionPabilsag', source: "Scorpion", target: "Pabilsag", } },
    { data: { id: 'BullPabilsag', source: "Bull", target: "Pabilsag", } },

    /* Manticore */
    { data: { id: 'Manticore', type: 'Animal' } },
    { data: { id: 'HumanManticore', source: "Human", target: "Manticore", } },
    { data: { id: 'ScorpionManticore', source: "Scorpion", target: "Manticore", } },
    { data: { id: 'LionManticore', source: "Lion", target: "Manticore", } },

    /* Manticore */
    { data: { id: 'Sleipnir', type: 'Animal' } },
    { data: { id: 'HorseSleipnir', source: "Horse", target: "Sleipnir", } },
    { data: { id: 'MoreSleipnir', source: "More", target: "Sleipnir", } },

    /* Uchchaihshravas */
    { data: { id: 'Uchchaihshravas', type: 'Animal' } },
    { data: { id: 'HorseUchchaihshravas', source: "Horse", target: "Uchchaihshravas", } },
    { data: { id: 'MoreUchchaihshravas', source: "More", target: "Uchchaihshravas", } },
    { data: { id: 'BirdUchchaihshravas', source: "Bird", target: "Uchchaihshravas", } },

    /* Pegasus */
    { data: { id: 'Pegasus', type: 'Animal' } },
    { data: { id: 'HorsePegasus', source: "Horse", target: "Pegasus", } },
    { data: { id: 'BirdPegasus', source: "Bird", target: "Pegasus", } },

    /* Hippogriff */
    { data: { id: 'Hippogriff', type: 'Animal' } },
    { data: { id: 'HorseHippogriff', source: "Horse", target: "Hippogriff", } },
    { data: { id: 'BirdHippogriff', source: "Bird", target: "Hippogriff", } },

    /* Hippalectryon */
    { data: { id: 'Hippalectryon', type: 'Animal' } },
    { data: { id: 'HorseHippalectryon', source: "Horse", target: "Hippalectryon", } },
    { data: { id: 'BirdHippalectryon', source: "Bird", target: "Hippalectryon", } },

]