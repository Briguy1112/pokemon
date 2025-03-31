function getBaseStats(id) {
  const baseStats = [
    { HP: 45, Attack: 49, Defense: 49, sp_atk: 65, sp_def: 65, Speed: 45 },   // Bulbasaur
    { HP: 60, Attack: 62, Defense: 63, sp_atk: 80, sp_def: 80, Speed: 60 },   // Ivysaur
    { HP: 80, Attack: 82, Defense: 83, sp_atk: 100, sp_def: 100, Speed: 80 }, // Venusaur
    { HP: 39, Attack: 52, Defense: 43, sp_atk: 60, sp_def: 50, Speed: 65 },   // Charmander
    { HP: 58, Attack: 64, Defense: 58, sp_atk: 80, sp_def: 65, Speed: 80 },   // Charmeleon
    { HP: 78, Attack: 84, Defense: 78, sp_atk: 109, sp_def: 85, Speed: 100 }, // Charizard
    { HP: 44, Attack: 48, Defense: 65, sp_atk: 50, sp_def: 64, Speed: 43 },   // Squirtle
    { HP: 59, Attack: 63, Defense: 80, sp_atk: 65, sp_def: 80, Speed: 58 },   // Wartortle
    { HP: 79, Attack: 83, Defense: 100, sp_atk: 85, sp_def: 105, Speed: 78 }, // Blastoise
    { HP: 45, Attack: 30, Defense: 35, sp_atk: 20, sp_def: 20, Speed: 45 },   // Caterpie
    { HP: 50, Attack: 20, Defense: 55, sp_atk: 25, sp_def: 25, Speed: 30 },   // Metapod
    { HP: 60, Attack: 45, Defense: 50, sp_atk: 90, sp_def: 80, Speed: 70 },   // Butterfree
    { HP: 40, Attack: 35, Defense: 30, sp_atk: 20, sp_def: 20, Speed: 50 },   // Weedle
    { HP: 45, Attack: 25, Defense: 50, sp_atk: 25, sp_def: 25, Speed: 35 },   // Kakuna
    { HP: 65, Attack: 90, Defense: 40, sp_atk: 45, sp_def: 80, Speed: 75 },   // Beedrill
    { HP: 40, Attack: 45, Defense: 40, sp_atk: 35, sp_def: 35, Speed: 56 },   // Pidgey
    { HP: 63, Attack: 60, Defense: 55, sp_atk: 50, sp_def: 50, Speed: 71 },   // Pidgeotto
    { HP: 83, Attack: 80, Defense: 75, sp_atk: 70, sp_def: 70, Speed: 101 },  // Pidgeot
    { HP: 30, Attack: 56, Defense: 35, sp_atk: 25, sp_def: 35, Speed: 72 },   // Rattata
    { HP: 55, Attack: 81, Defense: 60, sp_atk: 50, sp_def: 70, Speed: 97 },   // Raticate
    { HP: 40, Attack: 60, Defense: 30, sp_atk: 31, sp_def: 31, Speed: 70 },   // Spearow
    { HP: 65, Attack: 90, Defense: 65, sp_atk: 61, sp_def: 61, Speed: 100 },  // Fearow
    { HP: 35, Attack: 60, Defense: 44, sp_atk: 40, sp_def: 54, Speed: 55 },   // Ekans
    { HP: 60, Attack: 85, Defense: 69, sp_atk: 65, sp_def: 79, Speed: 80 },   // Arbok
    { HP: 35, Attack: 55, Defense: 40, sp_atk: 50, sp_def: 50, Speed: 90 },   // Pikachu
    { HP: 60, Attack: 90, Defense: 55, sp_atk: 90, sp_def: 80, Speed: 110 },  // Raichu
    { HP: 50, Attack: 75, Defense: 85, sp_atk: 20, sp_def: 30, Speed: 40 },   // Sandshrew
    { HP: 75, Attack: 100, Defense: 110, sp_atk: 45, sp_def: 55, Speed: 65 }, // Sandslash
    { HP: 55, Attack: 47, Defense: 52, sp_atk: 40, sp_def: 40, Speed: 41 },   // Nidoran♀
    { HP: 70, Attack: 62, Defense: 67, sp_atk: 55, sp_def: 55, Speed: 56 },   // Nidorina
    { HP: 90, Attack: 92, Defense: 87, sp_atk: 75, sp_def: 85, Speed: 76 },   // Nidoqueen
    { HP: 46, Attack: 57, Defense: 40, sp_atk: 40, sp_def: 40, Speed: 50 },   // Nidoran♂
    { HP: 61, Attack: 72, Defense: 57, sp_atk: 55, sp_def: 55, Speed: 65 },   // Nidorino
    { HP: 81, Attack: 102, Defense: 77, sp_atk: 85, sp_def: 75, Speed: 85 },  // Nidoking
    { HP: 70, Attack: 45, Defense: 48, sp_atk: 60, sp_def: 65, Speed: 35 },   // Clefairy
    { HP: 95, Attack: 70, Defense: 73, sp_atk: 95, sp_def: 90, Speed: 60 },   // Clefable
    { HP: 38, Attack: 41, Defense: 40, sp_atk: 50, sp_def: 65, Speed: 65 },   // Vulpix
    { HP: 73, Attack: 76, Defense: 75, sp_atk: 81, sp_def: 100, Speed: 100 }, // Ninetales
    { HP: 115, Attack: 45, Defense: 20, sp_atk: 45, sp_def: 25, Speed: 20 },  // Jigglypuff
    { HP: 140, Attack: 70, Defense: 45, sp_atk: 85, sp_def: 50, Speed: 45 },  // Wigglytuff
    { HP: 40, Attack: 45, Defense: 35, sp_atk: 30, sp_def: 40, Speed: 55 },   // Zubat
    { HP: 75, Attack: 80, Defense: 70, sp_atk: 65, sp_def: 75, Speed: 90 },   // Golbat
    { HP: 45, Attack: 25, Defense: 50, sp_atk: 25, sp_def: 25, Speed: 35 },   // Oddish
    { HP: 60, Attack: 40, Defense: 55, sp_atk: 40, sp_def: 55, Speed: 30 },   // Gloom
    { HP: 75, Attack: 80, Defense: 85, sp_atk: 110, sp_def: 90, Speed: 50 },  // Vileplume
    { HP: 35, Attack: 70, Defense: 55, sp_atk: 45, sp_def: 55, Speed: 25 },   // Paras
    { HP: 60, Attack: 95, Defense: 80, sp_atk: 60, sp_def: 80, Speed: 30 },   // Parasect
    { HP: 60, Attack: 55, Defense: 50, sp_atk: 40, sp_def: 55, Speed: 45 },   // Venonat
    { HP: 70, Attack: 65, Defense: 60, sp_atk: 90, sp_def: 75, Speed: 90 },   // Venomoth
    { HP: 10, Attack: 55, Defense: 25, sp_atk: 35, sp_def: 45, Speed: 95 },   // Diglett
    { HP: 35, Attack: 100, Defense: 50, sp_atk: 50, sp_def: 70, Speed: 120 }, // Dugtrio
    { HP: 40, Attack: 45, Defense: 35, sp_atk: 40, sp_def: 40, Speed: 90 },   // Meowth
    { HP: 65, Attack: 70, Defense: 60, sp_atk: 65, sp_def: 65, Speed: 115 },  // Persian
    { HP: 50, Attack: 75, Defense: 85, sp_atk: 20, sp_def: 30, Speed: 40 },   // Psyduck
    { HP: 80, Attack: 82, Defense: 78, sp_atk: 95, sp_def: 80, Speed: 85 },   // Golduck
    { HP: 52, Attack: 65, Defense: 55, sp_atk: 58, sp_def: 62, Speed: 60 },   // Mankey
    { HP: 80, Attack: 105, Defense: 65, sp_atk: 60, sp_def: 70, Speed: 95 },  // Primeape
    { HP: 40, Attack: 80, Defense: 35, sp_atk: 35, sp_def: 45, Speed: 70 },   // Growlithe
    { HP: 90, Attack: 110, Defense: 80, sp_atk: 100, sp_def: 80, Speed: 95 },  // Arcanine
		{ HP: 25, Attack: 20, Defense: 15, sp_atk: 105, sp_def: 55, Speed: 90 },  // Poliwag
    { HP: 40, Attack: 65, Defense: 65, sp_atk: 50, sp_def: 50, Speed: 90 },   // Poliwhirl
    { HP: 90, Attack: 95, Defense: 95, sp_atk: 70, sp_def: 90, Speed: 70 },   // Poliwrath
    { HP: 70, Attack: 45, Defense: 48, sp_atk: 60, sp_def: 65, Speed: 35 },   // Abra
    { HP: 55, Attack: 50, Defense: 45, sp_atk: 135, sp_def: 95, Speed: 120 }, // Kadabra
    { HP: 75, Attack: 65, Defense: 60, sp_atk: 135, sp_def: 95, Speed: 110 }, // Alakazam
    { HP: 60, Attack: 48, Defense: 45, sp_atk: 43, sp_def: 90, Speed: 42 },   // Machop
    { HP: 80, Attack: 78, Defense: 60, sp_atk: 65, sp_def: 85, Speed: 45 },   // Machoke
    { HP: 90, Attack: 130, Defense: 80, sp_atk: 65, sp_def: 85, Speed: 55 },  // Machamp
    { HP: 50, Attack: 52, Defense: 48, sp_atk: 65, sp_def: 50, Speed: 55 },   // Bellsprout
    { HP: 65, Attack: 67, Defense: 60, sp_atk: 85, sp_def: 65, Speed: 70 },   // Weepinbell
    { HP: 80, Attack: 105, Defense: 65, sp_atk: 100, sp_def: 70, Speed: 70 }, // Victreebel
    { HP: 40, Attack: 35, Defense: 30, sp_atk: 100, sp_def: 70, Speed: 105 }, // Tentacool
    { HP: 80, Attack: 70, Defense: 65, sp_atk: 80, sp_def: 120, Speed: 100 }, // Tentacruel
    { HP: 40, Attack: 80, Defense: 35, sp_atk: 35, sp_def: 45, Speed: 70 },   // Geodude
    { HP: 55, Attack: 95, Defense: 115, sp_atk: 45, sp_def: 45, Speed: 35 },  // Graveler
    { HP: 80, Attack: 120, Defense: 130, sp_atk: 55, sp_def: 65, Speed: 45 }, // Golem
    { HP: 40, Attack: 45, Defense: 35, sp_atk: 40, sp_def: 40, Speed: 90 },   // Ponyta
    { HP: 65, Attack: 100, Defense: 70, sp_atk: 80, sp_def: 80, Speed: 105 }, // Rapidash
    { HP: 50, Attack: 85, Defense: 55, sp_atk: 65, sp_def: 65, Speed: 90 },    // Slowpoke
		{ HP: 95, Attack: 75, Defense: 110, sp_atk: 100, sp_def: 80, Speed: 30 }, // Slowbro
    { HP: 25, Attack: 20, Defense: 15, sp_atk: 105, sp_def: 55, Speed: 90 },  // Magnemite
    { HP: 50, Attack: 60, Defense: 95, sp_atk: 120, sp_def: 70, Speed: 70 },  // Magneton
    { HP: 52, Attack: 65, Defense: 55, sp_atk: 58, sp_def: 62, Speed: 60 },   // Farfetch'd
    { HP: 35, Attack: 85, Defense: 45, sp_atk: 35, sp_def: 35, Speed: 75 },   // Doduo
    { HP: 60, Attack: 110, Defense: 70, sp_atk: 60, sp_def: 60, Speed: 100 }, // Dodrio
    { HP: 65, Attack: 45, Defense: 55, sp_atk: 45, sp_def: 70, Speed: 45 },   // Seel
    { HP: 90, Attack: 70, Defense: 80, sp_atk: 70, sp_def: 95, Speed: 70 },   // Dewgong
    { HP: 80, Attack: 80, Defense: 50, sp_atk: 40, sp_def: 50, Speed: 25 },   // Grimer
    { HP: 105, Attack: 105, Defense: 75, sp_atk: 65, sp_def: 100, Speed: 50 }, // Muk
    { HP: 30, Attack: 65, Defense: 100, sp_atk: 45, sp_def: 25, Speed: 40 },  // Shellder
    { HP: 50, Attack: 95, Defense: 180, sp_atk: 85, sp_def: 45, Speed: 70 },  // Cloyster
    { HP: 30, Attack: 35, Defense: 30, sp_atk: 100, sp_def: 35, Speed: 80 },  // Gastly
    { HP: 45, Attack: 50, Defense: 45, sp_atk: 115, sp_def: 55, Speed: 95 },  // Haunter
    { HP: 60, Attack: 65, Defense: 60, sp_atk: 130, sp_def: 75, Speed: 110 }, // Gengar
    { HP: 35, Attack: 45, Defense: 160, sp_atk: 30, sp_def: 45, Speed: 70 },  // Onix
    { HP: 60, Attack: 48, Defense: 45, sp_atk: 43, sp_def: 90, Speed: 42 },   // Drowzee
    { HP: 85, Attack: 73, Defense: 70, sp_atk: 73, sp_def: 115, Speed: 67 },  // Hypno
    { HP: 55, Attack: 55, Defense: 50, sp_atk: 45, sp_def: 65, Speed: 55 },   // Krabby
    { HP: 70, Attack: 130, Defense: 115, sp_atk: 50, sp_def: 50, Speed: 75 }, // Kingler
    { HP: 80, Attack: 82, Defense: 83, sp_atk: 100, sp_def: 100, Speed: 80 }, // Voltorb
    { HP: 60, Attack: 50, Defense: 70, sp_atk: 80, sp_def: 80, Speed: 140 },  // Electrode
    { HP: 40, Attack: 65, Defense: 95, sp_atk: 60, sp_def: 45, Speed: 35 },   // Exeggcute
    { HP: 95, Attack: 95, Defense: 85, sp_atk: 125, sp_def: 65, Speed: 55 },  // Exeggutor
    { HP: 50, Attack: 52, Defense: 48, sp_atk: 65, sp_def: 50, Speed: 55 },   // Cubone
    { HP: 60, Attack: 80, Defense: 110, sp_atk: 50, sp_def: 80, Speed: 45 },  // Marowak
    { HP: 50, Attack: 120, Defense: 53, sp_atk: 35, sp_def: 110, Speed: 87 },   // Hitmonlee
    { HP: 50, Attack: 105, Defense: 79, sp_atk: 35, sp_def: 110, Speed: 76 },   // Hitmonchan
    { HP: 90, Attack: 55, Defense: 75, sp_atk: 60, sp_def: 75, Speed: 30 },   // Lickitung
    { HP: 40, Attack: 65, Defense: 95, sp_atk: 60, sp_def: 45, Speed: 35 },   // Koffing
    { HP: 65, Attack: 90, Defense: 120, sp_atk: 85, sp_def: 70, Speed: 60 },   // Weezing
    { HP: 80, Attack: 85, Defense: 95, sp_atk: 30, sp_def: 30, Speed: 25 },   // Rhyhorn
    { HP: 105, Attack: 130, Defense: 120, sp_atk: 45, sp_def: 45, Speed: 40 },   // Rhydon
    { HP: 30, Attack: 40, Defense: 70, sp_atk: 70, sp_def: 25, Speed: 60 },   // Chansey
    { HP: 65, Attack: 95, Defense: 57, sp_atk: 100, sp_def: 85, Speed: 93 },   // Tangela
    { HP: 55, Attack: 55, Defense: 50, sp_atk: 45, sp_def: 65, Speed: 55 },   // Kangaskhan
    { HP: 45, Attack: 67, Defense: 60, sp_atk: 35, sp_def: 50, Speed: 63 },   // Horsea
    { HP: 55, Attack: 77, Defense: 60, sp_atk: 50, sp_def: 50, Speed: 83 },   // Seadra
    { HP: 45, Attack: 50, Defense: 45, sp_atk: 115, sp_def: 55, Speed: 95 },   // Goldeen
    { HP: 80, Attack: 92, Defense: 65, sp_atk: 65, sp_def: 80, Speed: 68 },   // Seaking
    { HP: 80, Attack: 82, Defense: 83, sp_atk: 100, sp_def: 100, Speed: 80 },   // Staryu
		{ HP: 60, Attack: 75, Defense: 85, sp_atk: 100, sp_def: 85, Speed: 115 },  // Starmie
    { HP: 40, Attack: 45, Defense: 35, sp_atk: 40, sp_def: 40, Speed: 90 },   // Mr. Mime
    { HP: 50, Attack: 65, Defense: 65, sp_atk: 50, sp_def: 50, Speed: 90 },   // Scyther
    { HP: 65, Attack: 130, Defense: 60, sp_atk: 75, sp_def: 60, Speed: 75 },  // Jynx
    { HP: 65, Attack: 125, Defense: 100, sp_atk: 55, sp_def: 70, Speed: 85 },  // Electabuzz
    { HP: 65, Attack: 83, Defense: 57, sp_atk: 95, sp_def: 85, Speed: 105 },  // Magmar
    { HP: 65, Attack: 95, Defense: 57, sp_atk: 100, sp_def: 85, Speed: 93 },  // Pinsir
    { HP: 75, Attack: 100, Defense: 95, sp_atk: 40, sp_def: 70, Speed: 110 },  // Tauros
    { HP: 20, Attack: 10, Defense: 55, sp_atk: 15, sp_def: 20, Speed: 80 },   // Magikarp
    { HP: 95, Attack: 125, Defense: 79, sp_atk: 60, sp_def: 100, Speed: 81 }, // Gyarados
    { HP: 130, Attack: 85, Defense: 80, sp_atk: 85, sp_def: 95, Speed: 60 },  // Lapras
    { HP: 48, Attack: 48, Defense: 48, sp_atk: 48, sp_def: 48, Speed: 48 },   // Ditto
    { HP: 55, Attack: 55, Defense: 50, sp_atk: 45, sp_def: 65, Speed: 55 },   // Eevee
    { HP: 130, Attack: 65, Defense: 60, sp_atk: 110, sp_def: 95, Speed: 65 }, // Vaporeon
    { HP: 65, Attack: 65, Defense: 60, sp_atk: 110, sp_def: 95, Speed: 130 }, // Jolteon
    { HP: 65, Attack: 65, Defense: 60, sp_atk: 95, sp_def: 110, Speed: 65 },  // Flareon
    { HP: 65, Attack: 95, Defense: 95, sp_atk: 95, sp_def: 95, Speed: 85 },   // Porygon
		{ HP: 35, Attack: 40, Defense: 100, sp_atk: 90, sp_def: 55, Speed: 35 },   // Omanyte
    { HP: 70, Attack: 60, Defense: 125, sp_atk: 115, sp_def: 70, Speed: 55 },   // Omastar
    { HP: 30, Attack: 80, Defense: 90, sp_atk: 55, sp_def: 45, Speed: 55 },   // Kabuto
    { HP: 60, Attack: 115, Defense: 105, sp_atk: 65, sp_def: 70, Speed: 80 },   // Kabutops
    { HP: 80, Attack: 105, Defense: 65, sp_atk: 60, sp_def: 70, Speed: 130 },   // Aerodactyl
    { HP: 160, Attack: 110, Defense: 65, sp_atk: 65, sp_def: 110, Speed: 30 },   // Snorlax
    { HP: 90, Attack: 85, Defense: 100, sp_atk: 95, sp_def: 125, Speed: 85 },   // Articuno
    { HP: 90, Attack: 90, Defense: 85, sp_atk: 125, sp_def: 90, Speed: 100 },   // Zapdos
    { HP: 90, Attack: 100, Defense: 90, sp_atk: 125, sp_def: 85, Speed: 90 },   // Moltres
    { HP: 41, Attack: 64, Defense: 45, sp_atk: 50, sp_def: 50, Speed: 50 },   // Dratini
    { HP: 61, Attack: 84, Defense: 65, sp_atk: 70, sp_def: 70, Speed: 70 },   // Dragonair
    { HP: 91, Attack: 134, Defense: 95, sp_atk: 100, sp_def: 100, Speed: 80 },   // Dragonite
    { HP: 48, Attack: 48, Defense: 48, sp_atk: 48, sp_def: 48, Speed: 48 },   // Mewtwo
    { HP: 100, Attack: 100, Defense: 100, sp_atk: 100, sp_def: 100, Speed: 100 }    // Mew
  ];
	
  return baseStats[id - 1];
	
}

let bulbasaur;
let ivysaur;
let venusaur;
let charmander;
let charmeleon;
let charizard;
let squirtle;
let wartortle;
let blastoise;
let caterpie;
let metapod;
let butterfree;
let weedle;
let kakuna;
let beedrill;
let pidgey;
let pidgeotto;
let pidgeot;
let rattata;
let raticate;
let spearow;
let fearow;
let ekans;
let arbok;
let pikachu;
let raichu;
let sandshrew;
let sandslash;
let nidoran;
let nidorina;
let nidoqueen;
let nidorino;
let nidoking;
let clefairy;
let clefable;
let vulpix;
let ninetales;
let jigglypuff;
let wigglytuff;
let zubat;
let golbat;
let oddish;
let gloom;
let vileplume;
let paras;
let parasect;
let venonat;
let venomoth;
let diglett;
let dugtrio;
let meowth;
let persian;
let psyduck;
let golduck;
let mankey;
let primeape;
let growlithe;
let arcanine;
let poliwag;
let poliwhirl;
let poliwrath;
let abra;
let kadabra;
let alakazam;
let machop;
let machoke;
let machamp;
let bellsprout;
let weepinbell;
let victreebel;
let tentacool;
let tentacruel;
let geodude;
let graveler;
let golem;
let ponyta;
let rapidash;
let slowpoke;
let slowbro;
let magnemite;
let magneton;
let farfetchd;
let doduo;
let dodrio;
let seel;
let dewgong;
let grimer;
let muk;
let shellder;
let cloyster;
let gastly;
let haunter;
let gengar;
let onix;
let drowzee;
let hypno;
let krabby;
let kingler;
let voltorb;
let electrode;
let exeggcute;
let exeggutor;
let cubone;
let marowak;
let hitmonlee;
let hitmonchan;
let lickitung;
let koffing;
let weezing;
let rhyhorn;
let rhydon;
let chansey;
let tangela;
let kangaskhan;
let horsea;
let seadra;
let goldeen;
let seaking;
let staryu;
let starmie;
let mrMime;
let scyther;
let jynx;
let electabuzz;
let magmar;
let pinsir;
let tauros;
let magikarp;
let gyarados;
let lapras;
let ditto;
let eevee;
let vaporeon;
let jolteon;
let flareon;
let porygon;
let omanyte;
let omastar;
let kabuto;
let kabutops;
let aerodactyl;
let snorlax;
let articuno;
let zapdos;
let moltres;
let dratini;
let dragonair;
let dragonite;
let mewtwo;
let mew;

let bulbasaurIcon;
let ivysaurIcon;
let venusaurIcon;
let charmanderIcon;
let charmeleonIcon;
let charizardIcon;
let squirtleIcon;
let wartortleIcon;
let blastoiseIcon;
let caterpieIcon;
let metapodIcon;
let butterfreeIcon;
let weedleIcon;
let kakunaIcon;
let beedrillIcon;
let pidgeyIcon;
let pidgeottoIcon;
let pidgeotIcon;
let rattataIcon;
let raticateIcon;
let spearowIcon;
let fearowIcon;
let ekansIcon;
let arbokIcon;
let pikachuIcon;
let raichuIcon;
let sandshrewIcon;
let sandslashIcon;
let nidoranIcon;
let nidorinaIcon;
let nidoqueenIcon;
let nidorinoIcon;
let nidokingIcon;
let clefairyIcon;
let clefableIcon;
let vulpixIcon;
let ninetalesIcon;
let jigglypuffIcon;
let wigglytuffIcon;
let zubatIcon;
let golbatIcon;
let oddishIcon;
let gloomIcon;
let vileplumeIcon;
let parasIcon;
let parasectIcon;
let venonatIcon;
let venomothIcon;
let diglettIcon;
let dugtrioIcon;
let meowthIcon;
let persianIcon;
let psyduckIcon;
let golduckIcon;
let mankeyIcon;
let primeapeIcon;
let growlitheIcon;
let arcanineIcon;
let poliwagIcon;
let poliwhirlIcon;
let poliwrathIcon;
let abraIcon;
let kadabraIcon;
let alakazamIcon;
let machopIcon;
let machokeIcon;
let machampIcon;
let bellsproutIcon;
let weepinbellIcon;
let victreebelIcon;
let tentacoolIcon;
let tentacruelIcon;
let geodudeIcon;
let gravelerIcon;
let golemIcon;
let ponytaIcon;
let rapidashIcon;
let slowpokeIcon;
let slowbroIcon;
let magnemiteIcon;
let magnetonIcon;
let farfetchdIcon;
let doduoIcon;
let dodrioIcon;
let seelIcon;
let dewgongIcon;
let grimerIcon;
let mukIcon;
let shellderIcon;
let cloysterIcon;
let gastlyIcon;
let haunterIcon;
let gengarIcon;
let onixIcon;
let drowzeeIcon;
let hypnoIcon;
let krabbyIcon;
let kinglerIcon;
let voltorbIcon;
let electrodeIcon;
let exeggcuteIcon;
let exeggutorIcon;
let cuboneIcon;
let marowakIcon;
let hitmonleeIcon;
let hitmonchanIcon;
let lickitungIcon;
let koffingIcon;
let weezingIcon;
let rhyhornIcon;
let rhydonIcon;
let chanseyIcon;
let tangelaIcon;
let kangaskhanIcon;
let horseaIcon;
let seadraIcon;
let goldeenIcon;
let seakingIcon;
let staryuIcon;
let starmieIcon;
let mrMimeIcon;
let scytherIcon;
let jynxIcon;
let electabuzzIcon;
let magmarIcon;
let pinsirIcon;
let taurosIcon;
let magikarpIcon;
let gyaradosIcon;
let laprasIcon;
let dittoIcon;
let eeveeIcon;
let vaporeonIcon;
let jolteonIcon;
let flareonIcon;
let porygonIcon;
let omanyteIcon;
let omastarIcon;
let kabutoIcon;
let kabutopsIcon;
let aerodactylIcon;
let snorlaxIcon;
let articunoIcon;
let zapdosIcon;
let moltresIcon;
let dratiniIcon;
let dragonairIcon;
let dragoniteIcon;
let mewtwoIcon;
let mewIcon;
