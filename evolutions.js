function getXPForLevel(level) {
  return level ** 3;
}
const evolutionData = {
  // Starters
  1: { level: 16, evolvesTo: 2 }, 2: { level: 32, evolvesTo: 3 },
  4: { level: 16, evolvesTo: 5 }, 5: { level: 36, evolvesTo: 6 },
  7: { level: 16, evolvesTo: 8 }, 8: { level: 36, evolvesTo: 9 },

  // Caterpie, Weedle lines
  10: { level: 7, evolvesTo: 11 }, 11: { level: 10, evolvesTo: 12 },
  13: { level: 7, evolvesTo: 14 }, 14: { level: 10, evolvesTo: 15 },

  // Birds & common route Pokémon
  16: { level: 18, evolvesTo: 17 }, 17: { level: 36, evolvesTo: 18 },
  19: { level: 20, evolvesTo: 20 },
  21: { level: 20, evolvesTo: 22 },
  23: { level: 22, evolvesTo: 24 },
  27: { level: 22, evolvesTo: 28 },

  // Nidoran lines
  29: { level: 16, evolvesTo: 30 }, 30: { level: 36, evolvesTo: 31 },
  32: { level: 16, evolvesTo: 33 }, 33: { level: 36, evolvesTo: 34 },

  // Clefairy, Jigglypuff, Vulpix
  35: { level: 30, evolvesTo: 36 },
  39: { level: 30, evolvesTo: 40 },
  37: { level: 36, evolvesTo: 38 },

  // Zubat, Oddish, Paras, Venonat
  41: { level: 22, evolvesTo: 42 },
  43: { level: 21, evolvesTo: 44 }, 44: { level: 36, evolvesTo: 45 },
  46: { level: 24, evolvesTo: 47 },
  48: { level: 31, evolvesTo: 49 },

  // Diglett, Meowth, Psyduck, Mankey
  50: { level: 26, evolvesTo: 51 },
  52: { level: 28, evolvesTo: 53 },
  54: { level: 33, evolvesTo: 55 },
  56: { level: 28, evolvesTo: 57 },

  // Growlithe
  58: { level: 36, evolvesTo: 59 },

  // Poliwag
  60: { level: 25, evolvesTo: 61 }, 61: { level: 40, evolvesTo: 62 },

  // Abra, Machop, Bellsprout
  63: { level: 16, evolvesTo: 64 }, 64: { level: 36, evolvesTo: 65 },
  66: { level: 28, evolvesTo: 67 }, 67: { level: 40, evolvesTo: 68 },
  69: { level: 21, evolvesTo: 70 }, 70: { level: 36, evolvesTo: 71 },

  // Tentacool
  72: { level: 30, evolvesTo: 73 },

  // Geodude
  74: { level: 25, evolvesTo: 75 }, 75: { level: 40, evolvesTo: 76 },

  // Ponyta
  77: { level: 40, evolvesTo: 78 },

  // Slowpoke
  79: { level: 37, evolvesTo: 80 },

  // Magnemite
  81: { level: 30, evolvesTo: 82 },

  // Doduo, Seel, Grimer
  84: { level: 31, evolvesTo: 85 },
  86: { level: 34, evolvesTo: 87 },
  88: { level: 38, evolvesTo: 89 },

  // Shellder
  90: { level: 36, evolvesTo: 91 },

  // Gastly
  92: { level: 25, evolvesTo: 93 }, 93: { level: 38, evolvesTo: 94 },

  // Drowzee
  96: { level: 26, evolvesTo: 97 },

  // Krabby, Voltorb
  98: { level: 28, evolvesTo: 99 },
  100: { level: 30, evolvesTo: 101 },

  // Exeggcute
  102: { level: 36, evolvesTo: 103 },

  // Cubone
  104: { level: 28, evolvesTo: 105 },

  // Koffing
  109: { level: 35, evolvesTo: 110 },

  // Rhyhorn
  111: { level: 42, evolvesTo: 112 },

  // Horsea
  116: { level: 32, evolvesTo: 117 },

  // Goldeen
  118: { level: 33, evolvesTo: 119 },

  // Staryu
  120: { level: 36, evolvesTo: 121 },

  // Magikarp
  129: { level: 20, evolvesTo: 130 },

  //Eevee
 133: { level: 36, evolvesTo: () => random(eevee_evolutions) },
 

  // Omanyte, Kabuto
  138: { level: 40, evolvesTo: 139 },
  140: { level: 40, evolvesTo: 141 },

  // Dratini
  147: { level: 30, evolvesTo: 148 }, 148: { level: 55, evolvesTo: 149 }
};

const eevee_evolutions = [134, 135, 136]; // Vaporeon, Jolteon, Flareon
function checkEvolution(pokemon, currentId) {
  const evo = evolutionData[currentId];
  if (!evo) return pokemon;

  if (pokemon.lvl >= evo.level) {
    let newId = typeof evo.evolvesTo === "function" ? evo.evolvesTo() : evo.evolvesTo;
    let newName = getPokemonNameById(newId);
    console.log(`${pokemon.name} is evolving into ${newName}!`);
    return makePokemon(newId, newName, pokemon.lvl);
  }

  return pokemon;
}
