function calculateXPGain(faintedId, faintedLevel) {
  const baseXP = baseXPTable[faintedId] || 50; // default if missing
  return Math.floor((baseXP * faintedLevel) / 7);
}
function gainXP(pokemon, amount, currentId) {
  pokemon.xp = (pokemon.xp || 0) + amount;

  // Check for level up
  while (pokemon.xp >= getXPForLevel(pokemon.lvl + 1)) {
    pokemon.lvl += 1;
    console.log(`${pokemon.name} leveled up to ${pokemon.lvl}!`);

    // Recalculate stats
    pokemon.hp = calculateHP(pokemon.lvl, pokemon.baseStats.HP, pokemon.iv.HP, pokemon.ev.HP);
    pokemon.attack = calculateStat(pokemon.lvl, pokemon.baseStats.Attack, pokemon.iv.Attack, pokemon.ev.Attack);
    pokemon.defense = calculateStat(pokemon.lvl, pokemon.baseStats.Defense, pokemon.iv.Defense, pokemon.ev.Defense);
    pokemon.sp_atk = calculateStat(pokemon.lvl, pokemon.baseStats.sp_atk, pokemon.iv.sp_atk, pokemon.ev.sp_atk);
    pokemon.sp_def = calculateStat(pokemon.lvl, pokemon.baseStats.sp_def, pokemon.iv.sp_def, pokemon.ev.sp_def);
    pokemon.speed = calculateStat(pokemon.lvl, pokemon.baseStats.Speed, pokemon.iv.Speed, pokemon.ev.Speed);

    // Learn any new level-up moves
    learnLevelUpMoves(pokemon);

    // Evolution check
    const evolved = checkEvolution(pokemon, currentId);
    if (evolved !== pokemon) {
      console.log(`${pokemon.name} evolved into ${evolved.name}!`);
      return evolved; // Replace with evolved form
    }
  }

  return pokemon;
}
const baseXPTable = {
  1: 64,    // Bulbasaur
  2: 142,   // Ivysaur
  3: 236,   // Venusaur
  4: 62,    // Charmander
  5: 142,   // Charmeleon
  6: 240,   // Charizard
  7: 63,    // Squirtle
  8: 142,   // Wartortle
  9: 239,   // Blastoise
  10: 39,   // Caterpie
  11: 72,   // Metapod
  12: 178,  // Butterfree
  13: 39,   // Weedle
  14: 72,   // Kakuna
  15: 178,  // Beedrill
  16: 50,   // Pidgey
  17: 122,  // Pidgeotto
  18: 216,  // Pidgeot
  19: 51,   // Rattata
  20: 145,  // Raticate
  21: 52,   // Spearow
  22: 155,  // Fearow
  23: 58,   // Ekans
  24: 157,  // Arbok
  25: 112,  // Pikachu
  26: 218,  // Raichu
  27: 60,   // Sandshrew
  28: 158,  // Sandslash
  29: 55,   // Nidoran♀
  30: 128,  // Nidorina
  31: 227,  // Nidoqueen
  32: 55,   // Nidoran♂
  33: 128,  // Nidorino
  34: 227,  // Nidoking
  35: 68,   // Clefairy
  36: 217,  // Clefable
  37: 60,   // Vulpix
  38: 177,  // Ninetales
  39: 76,   // Jigglypuff
  40: 109,  // Wigglytuff
  41: 49,   // Zubat
  42: 159,  // Golbat
  43: 64,   // Oddish
  44: 138,  // Gloom
  45: 221,  // Vileplume
  46: 57,   // Paras
  47: 142,  // Parasect
  48: 61,   // Venonat
  49: 158,  // Venomoth
  50: 53,   // Diglett
  51: 149,  // Dugtrio
  52: 58,   // Meowth
  53: 154,  // Persian
  54: 64,   // Psyduck
  55: 175,  // Golduck
  56: 61,   // Mankey
  57: 159,  // Primeape
  58: 70,   // Growlithe
  59: 213,  // Arcanine
  60: 60,   // Poliwag
  61: 135,  // Poliwhirl
  62: 225,  // Poliwrath
  63: 62,   // Abra
  64: 140,  // Kadabra
  65: 221,  // Alakazam
  66: 61,   // Machop
  67: 142,  // Machoke
  68: 227,  // Machamp
  69: 60,   // Bellsprout
  70: 137,  // Weepinbell
  71: 221,  // Victreebel
  72: 67,   // Tentacool
  73: 180,  // Tentacruel
  74: 60,   // Geodude
  75: 137,  // Graveler
  76: 218,  // Golem
  77: 82,   // Ponyta
  78: 175,  // Rapidash
  79: 63,   // Slowpoke
  80: 172,  // Slowbro
  81: 65,   // Magnemite
  82: 163,  // Magneton
  83: 123,  // Farfetch’d
  84: 62,   // Doduo
  85: 165,  // Dodrio
  86: 65,   // Seel
  87: 166,  // Dewgong
  88: 65,   // Grimer
  89: 175,  // Muk
  90: 61,   // Shellder
  91: 184,  // Cloyster
  92: 62,   // Gastly
  93: 142,  // Haunter
  94: 225,  // Gengar
  95: 77,   // Onix
  96: 66,   // Drowzee
  97: 169,  // Hypno
  98: 65,   // Krabby
  99: 166,  // Kingler
  100: 66,  // Voltorb
  101: 168, // Electrode
  102: 98,  // Exeggcute
  103: 212, // Exeggutor
  104: 64,  // Cubone
  105: 149, // Marowak
  106: 159, // Hitmonlee
  107: 159, // Hitmonchan
  108: 77,  // Lickitung
  109: 68,  // Koffing
  110: 172, // Weezing
  111: 69,  // Rhyhorn
  112: 170, // Rhydon
  113: 255, // Chansey
  114: 87,  // Tangela
  115: 172, // Kangaskhan
  116: 59,  // Horsea
  117: 154, // Seadra
  118: 64,  // Goldeen
  119: 158, // Seaking
  120: 68,  // Staryu
  121: 182, // Starmie
  122: 161, // Mr. Mime
  123: 187, // Scyther
  124: 137, // Jynx
  125: 172, // Electabuzz
  126: 173, // Magmar
  127: 200, // Pinsir
  128: 172, // Tauros
  129: 20,  // Magikarp
  130: 214, // Gyarados
  131: 219, // Lapras
  132: 101, // Ditto
  133: 65,  // Eevee
  134: 184, // Vaporeon
  135: 184, // Jolteon
  136: 184, // Flareon
  137: 130, // Porygon
  138: 71,  // Omanyte
  139: 173, // Omastar
  140: 71,  // Kabuto
  141: 173, // Kabutops
  142: 202, // Aerodactyl
  143: 189, // Snorlax
  144: 261, // Articuno
  145: 261, // Zapdos
  146: 261, // Moltres
  147: 60,  // Dratini
  148: 147, // Dragonair
  149: 270, // Dragonite
  150: 306, // Mewtwo
  151: 270  // Mew
};
