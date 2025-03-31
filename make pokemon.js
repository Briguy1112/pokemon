function makePokemon(id, name, level) {
    let pokemon = new Sprite();
	  //pokemon.velocity =0
	  pokemon.collider = 'n'
	  pokemon.rotationLock = true
    pokemon.name = name;
    pokemon.lvl = level;
	  pokemon.xp = 0;
	  pokemon.types = getPokemonType(id)
	  pokemon.visible = false
    pokemon.iv = createIvs();
    pokemon.ev = createEvs();
	  pokemon.shiny = false
    pokemon.baseStats = getBaseStats(id); // Official base stats
    pokemon.hp = calculateHP(pokemon.lvl, pokemon.baseStats.HP, pokemon.iv.HP, pokemon.ev.HP);
    pokemon.attack = calculateStat(pokemon.lvl, pokemon.baseStats.Attack, pokemon.iv.Attack, pokemon.ev.Attack);
    pokemon.defense = calculateStat(pokemon.lvl, pokemon.baseStats.Defense, pokemon.iv.Defense, pokemon.ev.Defense);
    pokemon.sp_atk = calculateStat(pokemon.lvl, pokemon.baseStats.SpAtk, pokemon.iv.SpAtk, pokemon.ev.SpAtk);
    pokemon.sp_def = calculateStat(pokemon.lvl, pokemon.baseStats.SpDef, pokemon.iv.SpDef, pokemon.ev.SpDef);
    pokemon.speed = calculateStat(pokemon.lvl, pokemon.baseStats.Speed, pokemon.iv.Speed, pokemon.ev.Speed);
    pokemon.types = getPokemonType(id);
	  pokemon.isShiny = random(3) < 1;
	  if (pokemon.isShiny) {
  pokemon.img = `assets/shiny${id}.png`;
	pokemon.shiny = true
} else {
  pokemon.img = `assets/${id}.png`;
}
    switch (id) {
        case 1:
            // Bulbasaur
            pokemon.level_moves = [
                { level: 1, move: moves.growl },
                { level: 1, move: moves.tackle },
                { level: 3, move: moves.vineWhip },
                { level: 6, move: moves.growth },
                { level: 9, move: moves.leechSeed },
                { level: 12, move: moves.razorLeaf },
                { level: 15, move: moves.poisonPowder },
                { level: 15, move: moves.sleepPowder },
                { level: 18, move: moves.seedBomb },
                { level: 21, move: moves.takeDown },
                { level: 24, move: moves.sweetScent },
                { level: 27, move: moves.synthesis },
                { level: 30, move: moves.worrySeed },
                { level: 33, move: moves.powerWhip },
                { level: 36, move: moves.solarBeam }
            ];
            break;
        case 2:
            // Ivysaur
            pokemon.level_moves = [
                { level: 1, move: moves.growl },
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.vineWhip },
                { level: 6, move: moves.growth },
                { level: 9, move: moves.leechSeed },
                { level: 12, move: moves.razorLeaf },
                { level: 15, move: moves.poisonPowder },
                { level: 15, move: moves.sleepPowder },
                { level: 20, move: moves.seedBomb },
                { level: 23, move: moves.takeDown },
                { level: 28, move: moves.sweetScent },
                { level: 31, move: moves.synthesis },
                { level: 36, move: moves.worrySeed },
                { level: 39, move: moves.powerWhip },
                { level: 44, move: moves.solarBeam }
            ];
            break;
        case 3:
            // Venusaur
            pokemon.level_moves = [
                { level: 1, move: moves.growl },
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.vineWhip },
                { level: 1, move: moves.growth },
                { level: 9, move: moves.leechSeed },
                { level: 12, move: moves.razorLeaf },
                { level: 15, move: moves.poisonPowder },
                { level: 15, move: moves.sleepPowder },
                { level: 20, move: moves.seedBomb },
                { level: 23, move: moves.takeDown },
                { level: 28, move: moves.sweetScent },
                { level: 31, move: moves.synthesis },
                { level: 32, move: moves.petalDance },
                { level: 39, move: moves.worrySeed },
                { level: 45, move: moves.powerWhip },
                { level: 50, move: moves.solarBeam }
            ];
            break;
        case 4:
            // Charmander
            pokemon.level_moves = [
                { level: 1, move: moves.scratch },
                { level: 1, move: moves.growl },
                { level: 9, move: moves.ember },
                { level: 15, move: moves.leer },
                { level: 22, move: moves.rage },
                { level: 30, move: moves.slash },
                { level: 38, move: moves.flamethrower },
                { level: 46, move: moves.fireSpin }
            ];
            break;
        case 5:
            // Charmeleon
            pokemon.level_moves = [
                { level: 1, move: moves.scratch },
                { level: 1, move: moves.growl },
                { level: 1, move: moves.ember },
                { level: 15, move: moves.leer },
                { level: 24, move: moves.rage },
                { level: 33, move: moves.slash },
                { level: 42, move: moves.flamethrower },
                { level: 56, move: moves.fireSpin }
            ];
            break;
        case 6:
            // Charizard
            pokemon.level_moves = [
                { level: 1, move: moves.scratch },
                { level: 1, move: moves.growl },
                { level: 1, move: moves.ember },
                { level: 1, move: moves.leer },
                { level: 24, move: moves.rage },
                { level: 36, move: moves.slash },
                { level: 46, move: moves.flamethrower },
                { level: 55, move: moves.fireSpin }
            ];
				    break;
        case 7:
            // Squirtle
            pokemon.level_moves = [
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.tailWhip },
                { level: 3, move: moves.waterGun },
                { level: 6, move: moves.withdraw },
                { level: 9, move: moves.rapidSpin },
                { level: 12, move: moves.bite },
                { level: 15, move: moves.waterPulse },
                { level: 18, move: moves.protect },
                { level: 21, move: moves.rainDance },
                { level: 24, move: moves.aquaTail },
                { level: 27, move: moves.shellSmash },
                { level: 30, move: moves.ironDefense },
                { level: 33, move: moves.hydroPump },
                { level: 36, move: moves.skullBash }
            ];
            break;
        case 8:
            // Wartortle
            pokemon.level_moves = [
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.tailWhip },
                { level: 1, move: moves.waterGun },
                { level: 6, move: moves.withdraw },
                { level: 9, move: moves.rapidSpin },
                { level: 12, move: moves.bite },
                { level: 15, move: moves.waterPulse },
                { level: 20, move: moves.protect },
                { level: 25, move: moves.rainDance },
                { level: 30, move: moves.aquaTail },
                { level: 35, move: moves.shellSmash },
                { level: 40, move: moves.ironDefense },
                { level: 45, move: moves.hydroPump },
                { level: 50, move: moves.skullBash }
            ];
            break;
        case 9:
            // Blastoise
            pokemon.level_moves = [
                { level: 1, move: moves.flashCannon },
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.tailWhip },
                { level: 1, move: moves.waterGun },
                { level: 6, move: moves.withdraw },
                { level: 9, move: moves.rapidSpin },
                { level: 12, move: moves.bite },
                { level: 15, move: moves.waterPulse },
                { level: 20, move: moves.protect },
                { level: 25, move: moves.rainDance },
                { level: 30, move: moves.aquaTail },
                { level: 35, move: moves.shellSmash },
                { level: 40, move: moves.ironDefense },
                { level: 45, move: moves.hydroPump },
                { level: 50, move: moves.skullBash }
            ];
            break;
        case 10:
            // Caterpie
            pokemon.level_moves = [
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.stringShot },
                { level: 9, move: moves.bugBite }
            ];
            break;
        case 11:
            // Metapod
            pokemon.level_moves = [
                { level: 1, move: moves.harden }
            ];
            break;
        case 12:
             // Butterfree
            pokemon.level_moves = [
                { level: 1, move: moves.confusion },
                { level: 12, move: moves.confusion },
                { level: 15, move: moves.poisonPowder },
                { level: 16, move: moves.stunSpore },
                { level: 17, move: moves.sleepPowder },
                { level: 21, move: moves.supersonic },
                { level: 26, move: moves.whirlwind },
                { level: 32, move: moves.psybeam }
            ];
            break;
        case 13:
            // Weedle
            pokemon.level_moves = [
                { level: 1, move: moves.poisonSting },
                { level: 1, move: moves.stringShot },
                { level: 9, move: moves.bugBite }
            ];
            break;
        case 14:
            // Kakuna
            pokemon.level_moves = [
                { level: 1, move: moves.harden }
            ];
            break;
        case 15:
            // Beedrill
            pokemon.level_moves = [
                { level: 1, move: moves.furyAttack },
                { level: 12, move: moves.furyAttack },
                { level: 16, move: moves.focusEnergy },
                { level: 20, move: moves.twineedle },
                { level: 25, move: moves.rage },
                { level: 30, move: moves.pinMissile },
                { level: 35, move: moves.agility }
            ];
				 break;
        case 16:
            // Pidgey
            pokemon.level_moves = [
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.sandAttack },
                { level: 5, move: moves.gust },
                { level: 9, move: moves.quickAttack },
                { level: 13, move: moves.whirlwind },
                { level: 17, move: moves.twister },
                { level: 21, move: moves.featherDance },
                { level: 25, move: moves.agility },
                { level: 29, move: moves.wingAttack },
                { level: 33, move: moves.roost },
                { level: 37, move: moves.tailwind },
                { level: 41, move: moves.mirrorMove },
                { level: 45, move: moves.airSlash },
                { level: 49, move: moves.hurricane }
            ];
            break;
        case 17:
            // Pidgeotto
            pokemon.level_moves = [
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.sandAttack },
                { level: 1, move: moves.gust },
                { level: 9, move: moves.quickAttack },
                { level: 13, move: moves.whirlwind },
                { level: 17, move: moves.twister },
                { level: 22, move: moves.featherDance },
                { level: 27, move: moves.agility },
                { level: 32, move: moves.wingAttack },
                { level: 37, move: moves.roost },
                { level: 42, move: moves.tailwind },
                { level: 47, move: moves.mirrorMove },
                { level: 52, move: moves.airSlash },
                { level: 57, move: moves.hurricane }
            ];
            break;
        case 18:
            // Pidgeot
            pokemon.level_moves = [
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.sandAttack },
                { level: 1, move: moves.gust },
                { level: 1, move: moves.quickAttack },
                { level: 13, move: moves.whirlwind },
                { level: 17, move: moves.twister },
                { level: 22, move: moves.featherDance },
                { level: 27, move: moves.agility },
                { level: 32, move: moves.wingAttack },
                { level: 38, move: moves.roost },
                { level: 44, move: moves.tailwind },
                { level: 50, move: moves.mirrorMove },
                { level: 56, move: moves.airSlash },
                { level: 62, move: moves.hurricane }
            ];
            break;
        case 19:
            // Rattata
            pokemon.level_moves = [
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.tailWhip },
                { level: 4, move: moves.quickAttack },
                { level: 7, move: moves.focusEnergy },
                { level: 10, move: moves.bite },
                { level: 13, move: moves.pursuit },
                { level: 16, move: moves.hyperFang },
                { level: 19, move: moves.suckerPunch },
                { level: 22, move: moves.crunch },
                { level: 25, move: moves.assurance },
                { level: 28, move: moves.superFang },
                { level: 31, move: moves.doubleEdge }
            ];
            break;
        case 20:
            // Raticate
            pokemon.level_moves = [
                { level: 1, move: moves.swordsDance },
                { level: 1, move: moves.tackle },
                { level: 1, move: moves.tailWhip },
                { level: 1, move: moves.quickAttack },
                { level: 1, move: moves.focusEnergy },
                { level: 10, move: moves.bite },
                { level: 13, move: moves.pursuit },
                { level: 16, move: moves.hyperFang },
                { level: 19, move: moves.suckerPunch },
                { level: 24, move: moves.crunch },
                { level: 29, move: moves.assurance },
                { level: 34, move: moves.superFang },
                { level: 39, move: moves.doubleEdge }
            ];
            break;
				    case 21:
        // Spearow
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 1, move: moves.growl },
            { level: 9, move: moves.leer },
            { level: 15, move: moves.furyAttack },
            { level: 22, move: moves.mirrorMove },
            { level: 29, move: moves.drillPeck },
            { level: 36, move: moves.agility }
        ];
        break;
    case 22:
        // Fearow
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 1, move: moves.growl },
            { level: 1, move: moves.leer },
            { level: 1, move: moves.furyAttack },
            { level: 29, move: moves.mirrorMove },
            { level: 34, move: moves.drillPeck },
            { level: 43, move: moves.agility }
        ];
        break;
    case 23:
        // Ekans
        pokemon.level_moves = [
            { level: 1, move: moves.wrap },
            { level: 1, move: moves.leer },
            { level: 10, move: moves.poisonSting },
            { level: 17, move: moves.bite },
            { level: 24, move: moves.glare },
            { level: 31, move: moves.screech },
            { level: 38, move: moves.acid }
        ];
        break;
    case 24:
        // Arbok
        pokemon.level_moves = [
            { level: 1, move: moves.wrap },
            { level: 1, move: moves.leer },
            { level: 1, move: moves.poisonSting },
            { level: 1, move: moves.bite },
            { level: 27, move: moves.glare },
            { level: 36, move: moves.screech },
            { level: 47, move: moves.acid }
        ];
        break;
    case 25:
        // Pikachu
        pokemon.level_moves = [
            { level: 1, move: moves.growl },
            { level: 1, move: moves.thunderShock },
            { level: 9, move: moves.thunderWave },
            { level: 16, move: moves.quickAttack },
            { level: 26, move: moves.swift },
            { level: 33, move: moves.agility },
            { level: 43, move: moves.thunder }
        ];
        break;
    case 26:
        // Raichu
        // Raichu does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 27:
        // Sandshrew
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 10, move: moves.sandAttack },
            { level: 17, move: moves.slash },
            { level: 24, move: moves.poisonSting },
            { level: 31, move: moves.swift },
            { level: 38, move: moves.furySwipes }
        ];
        break;
    case 28:
        // Sandslash
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.sandAttack },
            { level: 1, move: moves.slash },
            { level: 27, move: moves.poisonSting },
            { level: 36, move: moves.swift },
            { level: 47, move: moves.furySwipes }
        ];
        break;
    case 29:
        // Nidoran♀
        pokemon.level_moves = [
            { level: 1, move: moves.growl },
            { level: 1, move: moves.tackle },
            { level: 8, move: moves.scratch },
            { level: 14, move: moves.poisonSting },
            { level: 21, move: moves.tailWhip },
            { level: 29, move: moves.bite },
            { level: 36, move: moves.furySwipes },
            { level: 43, move: moves.doubleKick }
        ];
        break;
    case 30:
        // Nidorina
        pokemon.level_moves = [
            { level: 1, move: moves.growl },
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.scratch },
            { level: 8, move: moves.scratch },
            { level: 14, move: moves.poisonSting },
            { level: 23, move: moves.tailWhip },
            { level: 32, move: moves.bite },
            { level: 41, move: moves.furySwipes },
            { level: 50, move: moves.doubleKick }
        ];
        break;
    case 31:
        // Nidoqueen
        // Nidoqueen does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 32:
        // Nidoran♂
        pokemon.level_moves = [
            { level: 1, move: moves.leer },
            { level: 1, move: moves.tackle },
            { level: 8, move: moves.hornAttack },
            { level: 14, move: moves.poisonSting },
            { level: 21, move: moves.focusEnergy },
            { level: 29, move: moves.furyAttack },
            { level: 36, move: moves.hornDrill },
            { level: 43, move: moves.doubleKick }
        ];
        break;
    case 33:
        // Nidorino
        pokemon.level_moves = [
            { level: 1, move: moves.leer },
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.hornAttack },
            { level: 8, move: moves.hornAttack },
            { level: 14, move: moves.poisonSting },
            { level: 23, move: moves.focusEnergy },
            { level: 32, move: moves.furyAttack },
            { level: 41, move: moves.hornDrill },
            { level: 50, move: moves.doubleKick }
        ];
        break;
    case 34:
        // Nidoking
        // Nidoking does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
				break;
				    case 35:
        // Clefairy
        pokemon.level_moves = [
            { level: 1, move: moves.pound },
            { level: 1, move: moves.growl },
            { level: 13, move: moves.sing },
            { level: 18, move: moves.doubleSlap },
            { level: 24, move: moves.minimize },
            { level: 31, move: moves.metronome },
            { level: 39, move: moves.defenseCurl },
            { level: 48, move: moves.lightScreen }
        ];
        break;
    case 36:
        // Clefable
        // Clefable does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 37:
        // Vulpix
        pokemon.level_moves = [
            { level: 1, move: moves.embar },
            { level: 1, move: moves.tailWhip },
            { level: 16, move: moves.quickAttack },
            { level: 21, move: moves.roar },
            { level: 28, move: moves.confuseRay },
            { level: 35, move: moves.flamethrower },
            { level: 42, move: moves.fireSpin }
        ];
        break;
    case 38:
        // Ninetales
        // Ninetales does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 39:
        // Jigglypuff
        pokemon.level_moves = [
            { level: 1, move: moves.sing },
            { level: 9, move: moves.pound },
            { level: 14, move: moves.disable },
            { level: 19, move: moves.defenseCurl },
            { level: 24, move: moves.doubleSlap },
            { level: 29, move: moves.rest },
            { level: 34, move: moves.bodySlam },
            { level: 39, move: moves.doubleEdge }
        ];
        break;
    case 40:
        // Wigglytuff
        // Wigglytuff does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 41:
        // Zubat
        pokemon.level_moves = [
            { level: 1, move: moves.leechLife },
            { level: 10, move: moves.supersonic },
            { level: 15, move: moves.bite },
            { level: 21, move: moves.confuseRay },
            { level: 28, move: moves.wingAttack },
            { level: 36, move: moves.haze }
        ];
        break;
    case 42:
        // Golbat
        pokemon.level_moves = [
            { level: 1, move: moves.leechLife },
            { level: 1, move: moves.supersonic },
            { level: 1, move: moves.bite },
            { level: 21, move: moves.confuseRay },
            { level: 32, move: moves.wingAttack },
            { level: 43, move: moves.haze }
        ];
        break;
    case 43:
        // Oddish
        pokemon.level_moves = [
            { level: 1, move: moves.absorb },
            { level: 15, move: moves.poisonPowder },
            { level: 17, move: moves.stunSpore },
            { level: 19, move: moves.sleepPowder },
            { level: 24, move: moves.acid },
            { level: 33, move: moves.petaldance },
            { level: 46, move: moves.solarBeam }
        ];
        break;
    case 44:
        // Gloom
        pokemon.level_moves = [
            { level: 1, move: moves.absorb },
            { level: 1, move: moves.poisonPowder },
            { level: 1, move: moves.stunSpore },
            { level: 1, move: moves.sleepPowder },
            { level: 28, move: moves.acid },
            { level: 38, move: moves.petaldance },
            { level: 52, move: moves.solarBeam }
        ];
        break;
    case 45:
        // Vileplume
        // Vileplume does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 46:
        // Paras
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 13, move: moves.stunSpore },
            { level: 20, move: moves.leechLife },
            { level: 27, move: moves.spore },
            { level: 34, move: moves.slash },
            { level: 41, move: moves.growth }
        ];
        break;
    case 47:
        // Parasect
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.stunSpore },
            { level: 1, move: moves.leechLife },
            { level: 27, move: moves.spore },
            { level: 35, move: moves.slash },
            { level: 43, move: moves.growth }
        ];
        break;
    case 48:
        // Venonat
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.disable },
            { level: 1, move: moves.leechLife },
            { level: 24, move: moves.poisonPowder },
            { level: 27, move: moves.stunSpore },
            { level: 30, move: moves.psychic },
            { level: 35, move: moves.sleepPowder }
        ];
        break;
    case 49:
        // Venomoth
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.disable },
            { level: 1, move: moves.leechLife },
            { level: 1, move: moves.poisonPowder },
            { level: 1, move: moves.stunSpore },
            { level: 1, move: moves.psychic },
            { level: 38, move: moves.sleepPowder }
        ];
        break;
				    case 50:
        // Diglett
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 15, move: moves.growl },
            { level: 19, move: moves.dig },
            { level: 24, move: moves.sandAttack },
            { level: 31, move: moves.slash },
            { level: 40, move: moves.earthquake }
        ];
        break;
    case 51:
        // Dugtrio
        pokemon.level_moves = [
            { level: 1, move: moves.triAttack },
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.growl },
            { level: 1, move: moves.dig },
            { level: 24, move: moves.sandAttack },
            { level: 35, move: moves.slash },
            { level: 47, move: moves.earthquake }
        ];
        break;
    case 52:
        // Meowth
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.growl },
            { level: 12, move: moves.bite },
            { level: 17, move: moves.payDay },
            { level: 24, move: moves.screech },
            { level: 33, move: moves.furySwipes },
            { level: 44, move: moves.slash }
        ];
        break;
    case 53:
        // Persian
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.growl },
            { level: 1, move: moves.bite },
            { level: 17, move: moves.payDay },
            { level: 37, move: moves.screech },
            { level: 51, move: moves.furySwipes },
            { level: 65, move: moves.slash }
        ];
        break;
    case 54:
        // Psyduck
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.tailWhip },
            { level: 28, move: moves.disable },
            { level: 31, move: moves.confusion },
            { level: 36, move: moves.furySwipes },
            { level: 43, move: moves.hydroPump }
        ];
        break;
    case 55:
        // Golduck
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.tailWhip },
            { level: 1, move: moves.disable },
            { level: 1, move: moves.confusion },
            { level: 39, move: moves.furySwipes },
            { level: 48, move: moves.hydroPump }
        ];
        break;
    case 56:
        // Mankey
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 9, move: moves.karateChop },
            { level: 15, move: moves.furySwipes },
            { level: 21, move: moves.focusEnergy },
            { level: 27, move: moves.seismicToss },
            { level: 33, move: moves.thrash }
        ];
        break;
    case 57:
        // Primeape
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.karateChop },
            { level: 1, move: moves.furySwipes },
            { level: 1, move: moves.focusEnergy },
            { level: 37, move: moves.seismicToss },
            { level: 46, move: moves.thrash }
        ];
        break;
    case 58:
        // Growlithe
        pokemon.level_moves = [
            { level: 1, move: moves.bite },
            { level: 1, move: moves.roar },
            { level: 18, move: moves.emer },
            { level: 23, move: moves.leer },
            { level: 30, move: moves.takeDown },
            { level: 39, move: moves.agility },
            { level: 50, move: moves.flamethrower }
        ];
        break;
    case 59:
        // Arcanine
        // Arcanine does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 60:
        // Poliwag
        pokemon.level_moves = [
            { level: 1, move: moves.bubble },
            { level: 16, move: moves.hypnosis },
            { level: 19, move: moves.waterGun },
            { level: 25, move: moves.doubleSlap },
            { level: 31, move: moves.bodySlam },
            { level: 38, move: moves.amnesia },
            { level: 45, move: moves.hydroPump }
        ];
        break;
    case 61:
        // Poliwhirl
        pokemon.level_moves = [
            { level: 1, move: moves.bubble },
            { level: 1, move: moves.hypnosis },
            { level: 1, move: moves.waterGun },
            { level: 1, move: moves.doubleSlap },
            { level: 26, move: moves.bodySlam },
            { level: 33, move: moves.amnesia },
            { level: 41, move: moves.hydroPump }
        ];
        break;
    case 62:
        // Poliwrath
        // Poliwrath does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 63:
        // Abra
        pokemon.level_moves = [
            { level: 1, move: moves.teleport }
        ];
        break;
    case 64:
        // Kadabra
        pokemon.level_moves = [
            { level: 1, move: moves.teleport },
            { level: 1, move: moves.kinesis },
            { level: 16, move: moves.confusion },
            { level: 20, move: moves.disable },
            { level: 27, move: moves.psybeam },
            { level: 31, move: moves.recover },
            { level: 38, move: moves.reflect },
            { level: 42, move: moves.psychic }
        ];
        break;
				    case 65:
        // Alakazam
        pokemon.level_moves = [
            { level: 1, move: moves.teleport },
            { level: 1, move: moves.kinesis },
            { level: 16, move: moves.confusion },
            { level: 20, move: moves.disable },
            { level: 27, move: moves.psybeam },
            { level: 31, move: moves.recover },
            { level: 38, move: moves.psychic },
            { level: 42, move: moves.reflect }
        ];
        break;
    case 66:
        // Machop
        pokemon.level_moves = [
            { level: 1, move: moves.lowKick },
            { level: 1, move: moves.leer },
            { level: 20, move: moves.karateChop },
            { level: 25, move: moves.seismicToss },
            { level: 32, move: moves.foresight },
            { level: 39, move: moves.submission }
        ];
        break;
    case 67:
        // Machoke
        pokemon.level_moves = [
            { level: 1, move: moves.lowKick },
            { level: 1, move: moves.leer },
            { level: 1, move: moves.karateChop },
            { level: 25, move: moves.seismicToss },
            { level: 36, move: moves.foresight },
            { level: 44, move: moves.submission }
        ];
        break;
    case 68:
        // Machamp
        pokemon.level_moves = [
            { level: 1, move: moves.lowKick },
            { level: 1, move: moves.leer },
            { level: 1, move: moves.karateChop },
            { level: 1, move: moves.seismicToss },
            { level: 36, move: moves.foresight },
            { level: 44, move: moves.submission }
        ];
        break;
    case 69:
        // Bellsprout
        pokemon.level_moves = [
            { level: 1, move: moves.vineWhip },
            { level: 1, move: moves.growth },
            { level: 13, move: moves.wrap },
            { level: 15, move: moves.poisonPowder },
            { level: 18, move: moves.sleepPowder },
            { level: 21, move: moves.stunSpore },
            { level: 23, move: moves.acid },
            { level: 26, move: moves.sweetScent },
            { level: 29, move: moves.razorLeaf },
            { level: 32, move: moves.slam }
        ];
        break;
    case 70:
        // Weepinbell
        pokemon.level_moves = [
            { level: 1, move: moves.vineWhip },
            { level: 1, move: moves.growth },
            { level: 1, move: moves.wrap },
            { level: 15, move: moves.poisonPowder },
            { level: 18, move: moves.sleepPowder },
            { level: 23, move: moves.acid },
            { level: 29, move: moves.sweetScent },
            { level: 38, move: moves.razorLeaf },
            { level: 49, move: moves.slam }
        ];
        break;
    case 71:
        // Victreebel
        // Victreebel does not learn new moves by leveling up in Generation 1.
        pokemon.level_moves = [];
        break;
    case 72:
        // Tentacool
        pokemon.level_moves = [
            { level: 1, move: moves.acid },
            { level: 1, move: moves.supersonic },
            { level: 7, move: moves.wrap },
            { level: 13, move: moves.poisonSting },
            { level: 19, move: moves.waterGun },
            { level: 25, move: moves.constrict },
            { level: 31, move: moves.barrier },
            { level: 37, move: moves.screech },
            { level: 43, move: moves.hydroPump }
        ];
        break;
    case 73:
        // Tentacruel
        pokemon.level_moves = [
            { level: 1, move: moves.acid },
            { level: 1, move: moves.supersonic },
            { level: 1, move: moves.wrap },
            { level: 1, move: moves.poisonSting },
            { level: 19, move: moves.waterGun },
            { level: 25, move: moves.constrict },
            { level: 35, move: moves.barrier },
            { level: 43, move: moves.screech },
            { level: 50, move: moves.hydroPump }
        ];
        break;
    case 74:
        // Geodude
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.defenseCurl },
            { level: 11, move: moves.rockThrow },
            { level: 16, move: moves.selfDestruct },
            { level: 21, move: moves.harden },
            { level: 26, move: moves.earthquake },
            { level: 31, move: moves.explosion }
        ];
        break;
    case 75:
        // Graveler
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.defenseCurl },
            { level: 1, move: moves.rockThrow },
            { level: 16, move: moves.selfDestruct },
            { level: 21, move: moves.harden },
            { level: 29, move: moves.earthquake },
            { level: 36, move: moves.explosion }
        ];
        break;
    case 76:
        // Golem
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.defenseCurl },
            { level: 1, move: moves.rockThrow },
            { level: 1, move: moves.selfDestruct },
            { level: 21, move: moves.harden },
            { level: 29, move: moves.earthquake },
            { level: 36, move: moves.explosion }
        ];
        break;
				case 77:
        // Ponyta
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.growl },
            { level: 5, move: moves.tailWhip },
            { level: 10, move: moves.emer },
            { level: 15, move: moves.stomp },
            { level: 20, move: moves.flameWheel },
            { level: 25, move: moves.agility },
            { level: 30, move: moves.fireSpin },
            { level: 35, move: moves.takeDown },
            { level: 40, move: moves.bounce },
            { level: 45, move: moves.flareBlitz }
        ];
        break;
    case 78:
        // Rapidash
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.growl },
            { level: 1, move: moves.quickAttack },
            { level: 1, move: moves.emer },
            { level: 5, move: moves.tailWhip },
            { level: 10, move: moves.emer },
            { level: 15, move: moves.stomp },
            { level: 20, move: moves.flameWheel },
            { level: 25, move: moves.agility },
            { level: 30, move: moves.fireSpin },
            { level: 35, move: moves.furyAttack },
            { level: 40, move: moves.bounce },
            { level: 45, move: moves.flareBlitz }
        ];
        break;
    case 79:
        // Slowpoke
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.curse },
            { level: 6, move: moves.yawn },
            { level: 9, move: moves.confusion },
            { level: 14, move: moves.disable },
            { level: 17, move: moves.waterPulse },
            { level: 22, move: moves.headbutt },
            { level: 25, move: moves.zapCannon },
            { level: 30, move: moves.amnesia },
            { level: 33, move: moves.surf },
            { level: 38, move: moves.psychic },
            { level: 41, move: moves.slackOff },
            { level: 46, move: moves.psychUp },
            { level: 49, move: moves.healPulse }
        ];
        break;
    case 80:
        // Slowbro
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.curse },
            { level: 1, move: moves.yawn },
            { level: 1, move: moves.confusion },
            { level: 14, move: moves.disable },
            { level: 17, move: moves.waterPulse },
            { level: 22, move: moves.headbutt },
            { level: 25, move: moves.zapCannon },
            { level: 30, move: moves.amnesia },
            { level: 33, move: moves.surf },
            { level: 36, move: moves.withdraw },
            { level: 41, move: moves.psychic },
            { level: 44, move: moves.slackOff },
            { level: 49, move: moves.psychUp },
            { level: 52, move: moves.healPulse }
        ];
        break;
    case 81:
        // Magnemite
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.supersonic },
            { level: 5, move: moves.thunderShock },
            { level: 7, move: moves.thunderWave },
            { level: 11, move: moves.sonicBoom },
            { level: 13, move: moves.spark },
            { level: 17, move: moves.metalSound },
            { level: 19, move: moves.electroBall },
            { level: 23, move: moves.flashCannon },
            { level: 25, move: moves.screech },
            { level: 29, move: moves.discharge },
            { level: 31, move: moves.lockOn },
            { level: 35, move: moves.magnetRise },
            { level: 37, move: moves.gyroBall },
            { level: 41, move: moves.zapCannon }
        ];
        break;
    case 82:
        // Magneton
        pokemon.level_moves = [
            { level: 1, move: moves.triAttack },
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.supersonic },
            { level: 1, move: moves.thunderShock },
            { level: 7, move: moves.thunderWave },
            { level: 11, move: moves.sonicBoom },
            { level: 13, move: moves.spark },
            { level: 17, move: moves.metalSound },
            { level: 19, move: moves.electroBall },
            { level: 23, move: moves.flashCannon },
            { level: 25, move: moves.screech },
            { level: 29, move: moves.discharge },
            { level: 33, move: moves.lockOn },
            { level: 39, move: moves.magnetRise },
            { level: 43, move: moves.gyroBall },
            { level: 49, move: moves.zapCannon }
        ];
        break;
				case 77:
        // Ponyta
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.growl },
            { level: 5, move: moves.tailWhip },
            { level: 10, move: moves.emer },
            { level: 15, move: moves.stomp },
            { level: 20, move: moves.flameWheel },
            { level: 25, move: moves.agility },
            { level: 30, move: moves.fireSpin },
            { level: 35, move: moves.takeDown },
            { level: 40, move: moves.bounce },
            { level: 45, move: moves.flareBlitz }
        ];
        break;
    case 78:
        // Rapidash
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.growl },
            { level: 1, move: moves.quickAttack },
            { level: 1, move: moves.emer },
            { level: 5, move: moves.tailWhip },
            { level: 10, move: moves.emer },
            { level: 15, move: moves.stomp },
            { level: 20, move: moves.flameWheel },
            { level: 25, move: moves.agility },
            { level: 30, move: moves.fireSpin },
            { level: 35, move: moves.furyAttack },
            { level: 40, move: moves.bounce },
            { level: 45, move: moves.flareBlitz }
        ];
        break;
    case 79:
        // Slowpoke
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.curse },
            { level: 6, move: moves.yawn },
            { level: 9, move: moves.confusion },
            { level: 14, move: moves.disable },
            { level: 17, move: moves.waterPulse },
            { level: 22, move: moves.headbutt },
            { level: 25, move: moves.zapCannon },
            { level: 30, move: moves.amnesia },
            { level: 33, move: moves.surf },
            { level: 38, move: moves.psychic },
            { level: 41, move: moves.slackOff },
            { level: 46, move: moves.psychUp },
            { level: 49, move: moves.healPulse }
        ];
        break;
    case 80:
        // Slowbro
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.curse },
            { level: 1, move: moves.yawn },
            { level: 1, move: moves.confusion },
            { level: 14, move: moves.disable },
            { level: 17, move: moves.waterPulse },
            { level: 22, move: moves.headbutt },
            { level: 25, move: moves.zapCannon },
            { level: 30, move: moves.amnesia },
            { level: 33, move: moves.surf },
            { level: 36, move: moves.withdraw },
            { level: 41, move: moves.psychic },
            { level: 44, move: moves.slackOff },
            { level: 49, move: moves.psychUp },
            { level: 52, move: moves.healPulse }
        ];
        break;
    case 81:
        // Magnemite
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.supersonic },
            { level: 5, move: moves.thunderShock },
            { level: 7, move: moves.thunderWave },
            { level: 11, move: moves.sonicBoom },
            { level: 13, move: moves.spark },
            { level: 17, move: moves.metalSound },
            { level: 19, move: moves.electroBall },
            { level: 23, move: moves.flashCannon },
            { level: 25, move: moves.screech },
            { level: 29, move: moves.discharge },
            { level: 31, move: moves.lockOn },
            { level: 35, move: moves.magnetRise },
            { level: 37, move: moves.gyroBall },
            { level: 41, move: moves.zapCannon }
        ];
        break;
    case 82:
        // Magneton
        pokemon.level_moves = [
            { level: 1, move: moves.triAttack },
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.supersonic },
            { level: 1, move: moves.thunderShock },
            { level: 7, move: moves.thunderWave },
            { level: 11, move: moves.sonicBoom },
            { level: 13, move: moves.spark },
            { level: 17, move: moves.metalSound },
            { level: 19, move: moves.electroBall },
            { level: 23, move: moves.flashCannon },
            { level: 25, move: moves.screech },
            { level: 29, move: moves.discharge },
            { level: 33, move: moves.lockOn },
            { level: 39, move: moves.magnetRise },
            { level: 43, move: moves.gyroBall },
            { level: 49, move: moves.zapCannon }
        ];
        break;
				case 84:
        // Doduo
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 20, move: moves.growl },
            { level: 24, move: moves.furyAttack },
            { level: 30, move: moves.drillPeck },
            { level: 36, move: moves.rage },
            { level: 40, move: moves.triAttack },
            { level: 44, move: moves.agility }
        ];
        break;
    case 85:
        // Dodrio
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 20, move: moves.growl },
            { level: 24, move: moves.furyAttack },
            { level: 30, move: moves.drillPeck },
            { level: 36, move: moves.rage },
            { level: 40, move: moves.triAttack },
            { level: 44, move: moves.agility }
        ];
        break;
    case 86:
        // Seel
        pokemon.level_moves = [
            { level: 1, move: moves.headbutt },
            { level: 30, move: moves.growl },
            { level: 35, move: moves.auroraBeam },
            { level: 40, move: moves.rest },
            { level: 45, move: moves.takeDown }
        ];
        break;
    case 87:
        // Dewgong
        pokemon.level_moves = [
            { level: 1, move: moves.headbutt },
            { level: 30, move: moves.growl },
            { level: 35, move: moves.auroraBeam },
            { level: 44, move: moves.rest },
            { level: 50, move: moves.takeDown }
        ];
        break;
    case 88:
        // Grimer
        pokemon.level_moves = [
            { level: 1, move: moves.pound },
            { level: 30, move: moves.disable },
            { level: 33, move: moves.poisonGas },
            { level: 37, move: moves.minimize },
            { level: 42, move: moves.sludge },
            { level: 48, move: moves.harden },
            { level: 55, move: moves.screech },
            { level: 63, move: moves.acidArmor }
        ];
        break;
    case 89:
        // Muk
        pokemon.level_moves = [
            { level: 1, move: moves.pound },
            { level: 30, move: moves.disable },
            { level: 33, move: moves.poisonGas },
            { level: 37, move: moves.minimize },
            { level: 45, move: moves.sludge },
            { level: 53, move: moves.harden },
            { level: 60, move: moves.screech },
            { level: 65, move: moves.acidArmor }
        ];
        break;
    case 90:
        // Shellder
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.withdraw },
            { level: 18, move: moves.supersonic },
            { level: 23, move: moves.clamp },
            { level: 30, move: moves.auroraBeam },
            { level: 39, move: moves.leer },
            { level: 50, move: moves.iceBeam }
        ];
        break;
    case 91:
        // Cloyster
        pokemon.level_moves = [
            { level: 1, move: moves.supersonic },
            { level: 1, move: moves.clamp },
            { level: 50, move: moves.spikeCannon }
        ];
        break;
    case 92:
        // Gastly
        pokemon.level_moves = [
            { level: 1, move: moves.lick },
            { level: 1, move: moves.confuseRay },
            { level: 1, move: moves.nightShade },
            { level: 27, move: moves.hypnosis },
            { level: 35, move: moves.dreamEater }
        ];
        break;
    case 93:
        // Haunter
        pokemon.level_moves = [
            { level: 1, move: moves.lick },
            { level: 1, move: moves.confuseRay },
            { level: 1, move: moves.nightShade },
            { level: 29, move: moves.hypnosis },
            { level: 38, move: moves.dreamEater }
        ];
        break;
    case 94:
        // Gengar
        pokemon.level_moves = [
            { level: 1, move: moves.lick },
            { level: 1, move: moves.confuseRay },
            { level: 1, move: moves.nightShade },
            { level: 29, move: moves.hypnosis },
            { level: 38, move: moves.dreamEater }
        ];
        break;
    case 95:
        // Onix
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.screech },
            { level: 15, move: moves.bind },
            { level: 19, move: moves.rockThrow },
            { level: 25, move: moves.rage },
            { level: 33, move: moves.slam },
            { level: 43, move: moves.harden }
        ];
        break;
    case 96:
        // Drowzee
        pokemon.level_moves = [
            { level: 1, move: moves.pound },
            { level: 1, move: moves.hypnosis },
            { level: 12, move: moves.disable },
            { level: 17, move: moves.confusion },
            { level: 24, move: moves.headbutt },
            { level: 29, move: moves.poisonGas },
            { level: 32, move: moves.psychic },
            { level: 37, move: moves.meditate }
        ];
        break;
    case 97:
        // Hypno
        pokemon.level_moves = [
            { level: 1, move: moves.pound },
            { level: 1, move: moves.hypnosis },
            { level: 12, move: moves.disable },
            { level: 17, move: moves.confusion },
            { level: 24, move: moves.headbutt },
            { level: 33, move: moves.poisonGas },
            { level: 37, move: moves.psychic },
            { level: 43, move: moves.meditate }
        ];
        break;
				case 98:
        // Krabby
        pokemon.level_moves = [
            { level: 1, move: moves.bubble },
            { level: 1, move: moves.viceGrip },
            { level: 20, move: moves.leer },
            { level: 25, move: moves.harden },
            { level: 30, move: moves.stomp },
            { level: 35, move: moves.guillotine },
            { level: 40, move: moves.crabhammer }
        ];
        break;
    case 99:
        // Kingler
        pokemon.level_moves = [
            { level: 1, move: moves.bubble },
            { level: 1, move: moves.viceGrip },
            { level: 20, move: moves.leer },
            { level: 25, move: moves.harden },
            { level: 34, move: moves.stomp },
            { level: 42, move: moves.guillotine },
            { level: 49, move: moves.crabhammer }
        ];
        break;
    case 100:
        // Voltorb
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.screech },
            { level: 17, move: moves.sonicBoom },
            { level: 22, move: moves.selfDestruct },
            { level: 29, move: moves.lightScreen },
            { level: 36, move: moves.explosion }
        ];
        break;
    case 101:
        // Electrode
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.screech },
            { level: 17, move: moves.sonicBoom },
            { level: 22, move: moves.selfDestruct },
            { level: 29, move: moves.lightScreen },
            { level: 40, move: moves.explosion }
        ];
        break;
    case 102:
        // Exeggcute
       pokemon.level_Moves = [
  { level: 1, move: 'Absorb' },
  { level: 1, move: 'Hypnosis' },
  { level: 5, move: 'Reflect' },
  { level: 10, move: 'Leech Seed' },
  { level: 15, move: 'Mega Drain' },
  { level: 20, move: 'Confusion' },
  { level: 25, move: 'Synthesis' },
  { level: 30, move: 'Bullet Seed' },
  { level: 35, move: 'Giga Drain' },
  { level: 40, move: 'Extrasensory' },
  { level: 45, move: 'Uproar' },
  { level: 50, move: 'Worry Seed' },
  { level: 55, move: 'Solar Beam' }
        ];
        break;
    case 103:
        // Exeggutor
        pokemon.level_moves = [
            { level: 1, move: moves.stomp }
        ];
        break;
    case 104:
        // Cubone
        pokemon.level_moves = [
            { level: 1, move: moves.growl },
            { level: 1, move: moves.boneClub },
            { level: 25, move: moves.headbutt },
            { level: 31, move: moves.leer },
            { level: 38, move: moves.focusEnergy },
            { level: 43, move: moves.thrash },
            { level: 46, move: moves.bonemerang },
            { level: 50, move: moves.rage }
        ];
        break;
    case 105:
        // Marowak
        pokemon.level_moves = [
            { level: 1, move: moves.growl },
            { level: 1, move: moves.boneClub },
            { level: 1, move: moves.headbutt },
            { level: 25, move: moves.headbutt },
            { level: 33, move: moves.leer },
            { level: 41, move: moves.focusEnergy },
            { level: 48, move: moves.thrash },
            { level: 55, move: moves.bonemerang },
            { level: 62, move: moves.rage }
        ];
        break;
    case 106:
        // Hitmonlee
        pokemon.level_moves = [
            { level: 1, move: moves.doubleKick },
            { level: 1, move: moves.meditate },
            { level: 33, move: moves.rollingKick },
            { level: 38, move: moves.jumpKick },
            { level: 43, move: moves.focusEnergy },
            { level: 48, move: moves.highJumpKick },
            { level: 53, move: moves.counter }
        ];
        break;
    case 107:
        // Hitmonchan
        pokemon.level_moves = [
            { level: 1, move: moves.cometPunch },
            { level: 1, move: moves.agility },
            { level: 33, move: moves.firePunch },
            { level: 38, move: moves.icePunch },
            { level: 43, move: moves.thunderPunch },
            { level: 48, move: moves.megaPunch },
            { level: 53, move: moves.counter }
        ];
        break;
    case 108:
        // Lickitung
        pokemon.level_moves = [
            { level: 1, move: moves.wrap },
            { level: 1, move: moves.supersonic },
            { level: 7, move: moves.stomp },
            { level: 15, move: moves.disable },
            { level: 23, move: moves.defenseCurl },
            { level: 31, move: moves.slam },
            { level: 39, move: moves.screech }
        ];
        break;
    case 109:
        // Koffing
        pokemon.level_moves = [
            { level: 1, move: moves.smog },
            { level: 1, move: moves.tackle },
            { level: 32, move: moves.sludge },
            { level: 37, move: moves.smokescreen },
            { level: 40, move: moves.selfDestruct },
            { level: 45, move: moves.haze },
            { level: 48, move: moves.explosion }
        ];
        break;
    case 110:
        // Weezing
        pokemon.level_moves = [
            { level: 1, move: moves.smog },
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.sludge },
            { level: 32, move: moves.sludge },
            { level: 39, move: moves.smokescreen },
            { level: 43, move: moves.selfDestruct },
            { level: 49, move: moves.haze },
            { level: 53, move: moves.explosion }
        ];
        break;
    case 111:
        // Rhyhorn
        pokemon.level_moves = [
            { level: 1, move: moves.hornAttack },
            { level: 1, move: moves.stomp },
            { level: 30, move: moves.tailWhip },
            { level: 35, move: moves.furyAttack },
            { level: 40, move: moves.leer },
            { level: 45, move: moves.takeDown },
            { level: 50, move: moves.hornDrill }
        ];
        break
				    case 112:
        // Rhydon
        pokemon.level_moves = [
            { level: 1, move: moves.hornAttack },
            { level: 1, move: moves.stomp },
            { level: 1, move: moves.tailWhip },
            { level: 1, move: moves.furyAttack },
            { level: 30, move: moves.tailWhip },
            { level: 35, move: moves.furyAttack },
            { level: 40, move: moves.leer },
            { level: 45, move: moves.takeDown },
            { level: 50, move: moves.hornDrill }
        ];
        break;
    case 113:
        // Chansey
        pokemon.level_moves = [
            { level: 1, move: moves.pound },
            { level: 1, move: moves.doubleslap },
            { level: 24, move: moves.sing },
            { level: 30, move: moves.growl },
            { level: 38, move: moves.minimize },
            { level: 44, move: moves.defenseCurl },
            { level: 48, move: moves.lightScreen },
            { level: 54, move: moves.doubleEdge }
        ];
        break;
    case 114:
        // Tangela
        pokemon.level_moves = [
            { level: 1, move: moves.constrict },
            { level: 1, move: moves.bind },
            { level: 29, move: moves.absorb },
            { level: 32, move: moves.poisonPowder },
            { level: 36, move: moves.stunSpore },
            { level: 39, move: moves.sleepPowder },
            { level: 45, move: moves.slam },
            { level: 49, move: moves.growth }
        ];
        break;
    case 115:
        // Kangaskhan
        pokemon.level_moves = [
            { level: 1, move: moves.cometPunch },
            { level: 1, move: moves.rage },
            { level: 26, move: moves.bite },
            { level: 31, move: moves.tailWhip },
            { level: 36, move: moves.megapunch },
            { level: 41, move: moves.lear },
            { level: 46, move: moves.dizzyPunch }
        ];
        break;
    case 116:
        // Horsea
        pokemon.level_moves = [
            { level: 1, move: moves.bubble },
            { level: 19, move: moves.smokescreen },
            { level: 24, move: moves.leer },
            { level: 30, move: moves.waterGun },
            { level: 37, move: moves.agility },
            { level: 45, move: moves.hydroPump }
        ];
        break;
    case 117:
        // Seadra
        pokemon.level_moves = [
            { level: 1, move: moves.bubble },
            { level: 1, move: moves.smokescreen },
            { level: 1, move: moves.leer },
            { level: 19, move: moves.smokescreen },
            { level: 24, move: moves.leer },
            { level: 30, move: moves.waterGun },
            { level: 41, move: moves.agility },
            { level: 52, move: moves.hydroPump }
        ];
        break;
    case 118:
        // Goldeen
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 1, move: moves.tailWhip },
            { level: 19, move: moves.supersonic },
            { level: 24, move: moves.hornAttack },
            { level: 30, move: moves.furyAttack },
            { level: 37, move: moves.waterfall },
            { level: 45, move: moves.hornDrill },
            { level: 54, move: moves.agility }
        ];
        break;
    case 119:
        // Seaking
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 1, move: moves.tailWhip },
            { level: 1, move: moves.supersonic },
            { level: 19, move: moves.supersonic },
            { level: 24, move: moves.hornAttack },
            { level: 30, move: moves.furyAttack },
            { level: 39, move: moves.waterfall },
            { level: 48, move: moves.hornDrill },
            { level: 54, move: moves.agility }
        ];
        break;
    case 120:
        // Staryu
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 17, move: moves.waterGun },
            { level: 22, move: moves.harden },
            { level: 27, move: moves.recover },
            { level: 32, move: moves.swift },
            { level: 37, move: moves.minimize },
            { level: 42, move: moves.lightScreen },
            { level: 47, move: moves.hydroPump }
        ];
        break;
    case 121:
        // Starmie
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.waterGun },
            { level: 1, move: moves.harden },
            { level: 1, move: moves.recover },
            { level: 1, move: moves.swift },
            { level: 1, move: moves.minimize },
            { level: 1, move: moves.lightScreen },
            { level: 1, move: moves.hydroPump }
        ];
        break;
    case 122:
        // Mr. Mime
        pokemon.level_moves = [
            { level: 1, move: moves.confusion },
            { level: 1, move: moves.barrier },
            { level: 23, move: moves.lightScreen },
            { level: 31, move: moves.doubleSlap },
            { level: 39, move: moves.meditate },
            { level: 47, move: moves.substitute }
        ];
        break;
    case 123:
        // Scyther
        pokemon.level_moves = [
            { level: 1, move: moves.quickAttack },
            { level: 17, move: moves.leer },
            { level: 20, move: moves.focusEnergy },
            { level: 24, move: moves.doubleTeam },
            { level: 29, move: moves.slash },
            { level: 35, move: moves.swordsDance },
            { level: 42, move: moves.agility }
        ];
        break;
				case 124:
        // Jynx
        pokemon.level_moves = [
            { level: 1, move: moves.pound },
            { level: 1, move: moves.lovelyKiss },
            { level: 18, move: moves.lick },
            { level: 23, move: moves.doubleSlap },
            { level: 31, move: moves.icePunch },
            { level: 39, move: moves.bodySlam },
            { level: 47, move: moves.thrash },
            { level: 58, move: moves.blizzard }
        ];
        break;
    case 125:
        // Electabuzz
        pokemon.level_moves = [
            { level: 1, move: moves.quickAttack },
            { level: 1, move: moves.leer },
            { level: 34, move: moves.thunderPunch },
            { level: 37, move: moves.screech },
            { level: 42, move: moves.lightScreen },
            { level: 49, move: moves.thunder }
        ];
        break;
    case 126:
        // Magmar
        pokemon.level_moves = [
            { level: 1, move: moves.ember },
            { level: 1, move: moves.leer },
            { level: 36, move: moves.confuseRay },
            { level: 39, move: moves.firePunch },
            { level: 43, move: moves.smokescreen },
            { level: 48, move: moves.smog },
            { level: 52, move: moves.flamethrower }
        ];
        break;
    case 127:
        // Pinsir
        pokemon.level_moves = [
            { level: 1, move: moves.viceGrip },
            { level: 25, move: moves.seismicToss },
            { level: 30, move: moves.guillotine },
            { level: 36, move: moves.focusEnergy },
            { level: 43, move: moves.harden },
            { level: 49, move: moves.slash },
            { level: 54, move: moves.swordsDance }
        ];
        break;
    case 128:
        // Tauros
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.stomp },
            { level: 21, move: moves.tailWhip },
            { level: 28, move: moves.leer },
            { level: 35, move: moves.rage },
            { level: 44, move: moves.takeDown }
        ];
        break;
    case 129:
        // Magikarp
        pokemon.level_moves = [
            { level: 1, move: moves.splash },
            { level: 15, move: moves.tackle }
        ];
        break;
    case 130:
        // Gyarados
        pokemon.level_moves = [
            { level: 1, move: moves.bite },
            { level: 1, move: moves.dragonRage },
            { level: 1, move: moves.leer },
            { level: 1, move: moves.hydroPump },
            { level: 20, move: moves.bite },
            { level: 25, move: moves.dragonRage },
            { level: 32, move: moves.leer },
            { level: 41, move: moves.hydroPump }
        ];
        break;
    case 131:
        // Lapras
        pokemon.level_moves = [
            { level: 1, move: moves.waterGun },
            { level: 1, move: moves.growl },
            { level: 16, move: moves.sing },
            { level: 20, move: moves.mist },
            { level: 25, move: moves.bodySlam },
            { level: 31, move: moves.confuseRay },
            { level: 38, move: moves.iceBeam },
            { level: 46, move: moves.hydroPump }
        ];
        break;
    case 132:
        // Ditto
        pokemon.level_moves = [
            { level: 1, move: moves.transform }
        ];
        break;
    case 133:
        // Eevee
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.tailWhip },
            { level: 27, move: moves.quickAttack },
            { level: 31, move: moves.bite },
            { level: 37, move: moves.takeDown }
        ];
        break;
    case 134:
        // Vaporeon
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.tailWhip },
            { level: 1, move: moves.quickAttack },
            { level: 1, move: moves.waterGun },
            { level: 27, move: moves.quickAttack },
            { level: 31, move: moves.waterGun },
            { level: 37, move: moves.bite },
            { level: 40, move: moves.acidArmor },
            { level: 42, move: moves.haze },
            { level: 44, move: moves.mist },
            { level: 48, move: moves.hydroPump }
        ];
        break;
    case 135:
        // Jolteon
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.tailWhip },
            { level: 1, move: moves.quickAttack },
            { level: 1, move: moves.thunderShock },
            { level: 27, move: moves.quickAttack },
            { level: 31, move: moves.thunderShock },
            { level: 37, move: moves.bite },
            { level: 40, move: moves.doubleKick },
            { level: 42, move: moves.pinMissile },
            { level: 44, move: moves.agility },
            { level: 48, move: moves.thunder }
        ];
        break;
				case 136:
        // Flareon
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.sandAttack },
            { level: 31, move: moves.embe },
            { level: 37, move: moves.quickAttack },
            { level: 40, move: moves.bite },
            { level: 44, move: moves.fireSpin },
            { level: 54, move: moves.flamethrower }
        ];
        break;
    case 137:
        // Porygon
        pokemon.level_moves = [
            { level: 1, move: moves.tackle },
            { level: 1, move: moves.conversion },
            { level: 23, move: moves.psybeam },
            { level: 28, move: moves.recover },
            { level: 35, move: moves.agility },
            { level: 42, move: moves.triAttack }
        ];
        break;
    case 138:
        // Omanyte
        pokemon.level_moves = [
            { level: 1, move: moves.constrict },
            { level: 1, move: moves.withdraw },
            { level: 34, move: moves.bite },
            { level: 39, move: moves.waterGun },
            { level: 46, move: moves.hornAttack },
            { level: 53, move: moves.leer },
            { level: 61, move: moves.spikeCannon },
            { level: 68, move: moves.hydroPump }
        ];
        break;
    case 139:
        // Omastar
        pokemon.level_moves = [
            { level: 1, move: moves.constrict },
            { level: 1, move: moves.withdraw },
            { level: 1, move: moves.bite },
            { level: 39, move: moves.waterGun },
            { level: 44, move: moves.hornAttack },
            { level: 49, move: moves.leer },
            { level: 55, move: moves.spikeCannon },
            { level: 60, move: moves.hydroPump }
        ];
        break;
    case 140:
        // Kabuto
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.harden },
            { level: 34, move: moves.absorb },
            { level: 39, move: moves.slash },
            { level: 44, move: moves.leer },
            { level: 49, move: moves.hydroPump }
        ];
        break;
    case 141:
        // Kabutops
        pokemon.level_moves = [
            { level: 1, move: moves.scratch },
            { level: 1, move: moves.harden },
            { level: 1, move: moves.absorb },
            { level: 39, move: moves.slash },
            { level: 44, move: moves.leer },
            { level: 49, move: moves.hydroPump }
        ];
        break;
    case 142:
        // Aerodactyl
        pokemon.level_moves = [
            { level: 1, move: moves.wingAttack },
            { level: 1, move: moves.agility },
            { level: 33, move: moves.supersonic },
            { level: 38, move: moves.bite },
            { level: 45, move: moves.takeDown },
            { level: 54, move: moves.hyperBeam }
        ];
        break;
    case 143:
        // Snorlax
        pokemon.level_moves = [
            { level: 1, move: moves.headbutt },
            { level: 1, move: moves.amnesia },
            { level: 1, move: moves.rest },
            { level: 35, move: moves.bodySlam },
            { level: 41, move: moves.harden },
            { level: 48, move: moves.doubleEdge },
            { level: 56, move: moves.hyperBeam }
        ];
        break;
    case 144:
        // Articuno
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 1, move: moves.iceBeam },
            { level: 51, move: moves.blizzard },
            { level: 55, move: moves.agility },
            { level: 60, move: moves.mist }
        ];
        break;
    case 145:
        // Zapdos
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 1, move: moves.thunderShock },
            { level: 51, move: moves.drillPeck },
            { level: 55, move: moves.agility },
            { level: 60, move: moves.lightScreen },
            { level: 64, move: moves.thunder }
        ];
        break;
    case 146:
        // Moltres
        pokemon.level_moves = [
            { level: 1, move: moves.peck },
            { level: 1, move: moves.fireSpin },
            { level: 51, move: moves.leer },
            { level: 55, move: moves.agility },
            { level: 60, move: moves.skyAttack }
        ];
        break;
    case 147:
        // Dratini
        pokemon.level_moves = [
            { level: 1, move: moves.wrap },
            { level: 1, move: moves.leer },
            { level: 10, move: moves.thunderWave },
            { level: 20, move: moves.agility },
            { level: 30, move: moves.slam },
            { level: 40, move: moves.dragonRage },
            { level: 50, move: moves.hyperBeam }
        ];
        break;
    case 148:
        // Dragonair
        pokemon.level_moves = [
            { level: 1, move: moves.wrap },
            { level: 1, move: moves.leer },
            { level: 1, move: moves.thunderWave },
            { level: 20, move: moves.agility },
            { level: 35, move: moves.slam },
            { level: 45, move: moves.dragonRage },
            { level: 55, move: moves.hyperBeam }
        ];
        break;
				case 149:
        // Dragonite
        pokemon.level_moves = [
            { level: 1, move: moves.wrap },
            { level: 1, move: moves.leer },
            { level: 1, move: moves.thunderWave },
            { level: 1, move: moves.agility },
            { level: 10, move: moves.thunderWave },
            { level: 20, move: moves.agility },
            { level: 35, move: moves.slam },
            { level: 45, move: moves.dragonRage },
            { level: 60, move: moves.hyperBeam }
        ];
        break;
    case 150:
        // Mewtwo
        pokemon.level_moves = [
            { level: 1, move: moves.confusion },
            { level: 1, move: moves.disable },
            { level: 1, move: moves.swift },
            { level: 1, move: moves.psychic },
            { level: 66, move: moves.barrier },
            { level: 75, move: moves.recover },
            { level: 81, move: moves.mist },
            { level: 88, move: moves.amnesia }
        ];
        break;
    case 151:
        // Mew
        pokemon.level_moves = [
            { level: 1, move: moves.pound },
            { level: 10, move: moves.transform },
            { level: 20, move: moves.megapunch },
            { level: 30, move: moves.metronome },
            { level: 40, move: moves.psychic },
            { level: 50, move: moves.barrier }
        ];
        break;
		}
	 pokemon.moves = getStartingMoves(pokemon.level_moves, pokemon.lvl);
	return pokemon
}
function getName(id) {
  const nameMap = {
    1: "Bulbasaur",
    2: "Ivysaur",
    3: "Venusaur",
    4: "Charmander",
    5: "Charmeleon",
    6: "Charizard",
    7: "Squirtle",
    8: "Wartortle",
    9: "Blastoise",
    10: "Caterpie",
    11: "Metapod",
    12: "Butterfree",
    13: "Weedle",
    14: "Kakuna",
    15: "Beedrill",
    16: "Pidgey",
    17: "Pidgeotto",
    18: "Pidgeot",
    19: "Rattata",
    20: "Raticate",
    21: "Spearow",
    22: "Fearow",
    23: "Ekans",
    24: "Arbok",
    25: "Pikachu",
    26: "Raichu",
    27: "Sandshrew",
    28: "Sandslash",
    29: "Nidoran♀",
    30: "Nidorina",
    31: "Nidoqueen",
    32: "Nidoran♂",
    33: "Nidorino",
    34: "Nidoking",
    35: "Clefairy",
    36: "Clefable",
    37: "Vulpix",
    38: "Ninetales",
    39: "Jigglypuff",
    40: "Wigglytuff",
    41: "Zubat",
    42: "Golbat",
    43: "Oddish",
    44: "Gloom",
    45: "Vileplume",
    46: "Paras",
    47: "Parasect",
    48: "Venonat",
    49: "Venomoth",
    50: "Diglett",
    51: "Dugtrio",
    52: "Meowth",
    53: "Persian",
    54: "Psyduck",
    55: "Golduck",
    56: "Mankey",
    57: "Primeape",
    58: "Growlithe",
    59: "Arcanine",
    60: "Poliwag",
    61: "Poliwhirl",
    62: "Poliwrath",
    63: "Abra",
    64: "Kadabra",
    65: "Alakazam",
    66: "Machop",
    67: "Machoke",
    68: "Machamp",
    69: "Bellsprout",
    70: "Weepinbell",
    71: "Victreebel",
    72: "Tentacool",
    73: "Tentacruel",
    74: "Geodude",
    75: "Graveler",
    76: "Golem",
    77: "Ponyta",
    78: "Rapidash",
    79: "Slowpoke",
    80: "Slowbro",
    81: "Magnemite",
    82: "Magneton",
    83: "Farfetch’d",
    84: "Doduo",
    85: "Dodrio",
    86: "Seel",
    87: "Dewgong",
    88: "Grimer",
    89: "Muk",
    90: "Shellder",
    91: "Cloyster",
    92: "Gastly",
    93: "Haunter",
    94: "Gengar",
    95: "Onix",
    96: "Drowzee",
    97: "Hypno",
    98: "Krabby",
    99: "Kingler",
    100: "Voltorb",
    101: "Electrode",
    102: "Exeggcute",
    103: "Exeggutor",
    104: "Cubone",
    105: "Marowak",
    106: "Hitmonlee",
    107: "Hitmonchan",
    108: "Lickitung",
    109: "Koffing",
    110: "Weezing",
    111: "Rhyhorn",
    112: "Rhydon",
    113: "Chansey",
    114: "Tangela",
    115: "Kangaskhan",
    116: "Horsea",
    117: "Seadra",
    118: "Goldeen",
    119: "Seaking",
    120: "Staryu",
    121: "Starmie",
    122: "Mr. Mime",
    123: "Scyther",
    124: "Jynx",
    125: "Electabuzz",
    126: "Magmar",
    127: "Pinsir",
    128: "Tauros",
    129: "Magikarp",
    130: "Gyarados",
    131: "Lapras",
    132: "Ditto",
    133: "Eevee",
    134: "Vaporeon",
    135: "Jolteon",
    136: "Flareon",
    137: "Porygon",
    138: "Omanyte",
    139: "Omastar",
    140: "Kabuto",
    141: "Kabutops",
    142: "Aerodactyl",
    143: "Snorlax",
    144: "Articuno",
    145: "Zapdos",
    146: "Moltres",
    147: "Dratini",
    148: "Dragonair",
    149: "Dragonite",
    150: "Mewtwo",
    151: "Mew"
  };
}

function getStartingMoves(levelMoves, level, maxMoves = 4) {
  const available = levelMoves
    .filter(entry => entry.level <= level && entry.move) // 🔒 require move exists
    .sort((a, b) => b.level - a.level);

  if (available.length === 0) return [];

  const selected = [];

  const first = available[0];
  selected.push({
    name: first.move.name || "Unknown Move",
    level: first.level,
    power: first.move.power ?? 0,
    move: first.move
  });

  for (let i = 1; i < available.length && selected.length < maxMoves; i++) {
    const entry = available[i];
    if (!selected.find(m => m.name === entry.move.name)) {
      selected.push({
        name: entry.move.name || "Unknown Move",
        level: entry.level,
        power: entry.move.power ?? 0,
        move: entry.move
      });
    }
  }

  return selected;
}