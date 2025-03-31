let fight
let run
let bag
let pokemonBattleButton
let move1
let move2
let move3
let move4
let playerPokemonInfo
let currentPokemon=[]
let currentWildPokemon
function battlePokemon(pokemon){
	pokemon.visible = true
	pokemon.collider = 'n'
}
function startEncounter(wildPokemon){
	switchMap(3)
	map[3].ani.play()
	
	wildPokemon.velocity =0
	wildPokemon.x =  windowHeight*19/24
	wildPokemon.y = windowHeight*8/24
	wildPokemon.scale = windowHeight/384
	battlePokemon(wildPokemon)
	battlePokemon(currentPokemon[0])
	currentPokemon[0].x = windowHeight*7/24
	currentPokemon[0].y = windowHeight*14/24
	currentPokemon[0].scale =windowHeight*1.5/384
  currentPokemon[0].visible = true
	playerPokemonInfo = new Sprite(windowHeight*6/24,windowHeight*3/24,windowHeight*128/384,windowHeight*48/384)
	playerPokemonInfo.text = currentPokemon[0].name
	player.visible=false
	fight = new Sprite(windowHeight*15/24,windowHeight*20.5/24,48,16)
  fight.addAni('fightButton',fightButtonImg,{frameSize:[48,16],frames:2,frameDelay:20})
  fight.ani.pause()
	fight.textSize = 20
	fight.text = 'FIGHT'
	fight.scale = windowHeight*2/384
	fight.pressed = false
	fight.collider = 'n'
	run = new Sprite(windowHeight*21/24,windowHeight*22.5/24,48,16)
  run.addAni('runButton',fightButtonImg,{frameSize:[48,16],frames:2,frameDelay:20})
  run.ani.pause()
	run.textSize = 20
	run.text = 'RUN'
	run.pressed = false
	run.scale = windowHeight*2/384
	run.collider = 'n'
	bag = new Sprite(windowHeight*15/24,windowHeight*22.5/24,48,16)
  bag.addAni('bagButton',fightButtonImg,{frameSize:[48,16],frames:2,frameDelay:20})
  bag.ani.pause()
	bag.textSize = 20
	bag.text = 'BAG'
	bag.pressed = false
	bag.scale = windowHeight*2/384
	bag.collider = 'n'
	pokemonBattleButton = new Sprite(windowHeight*21/24,windowHeight*20.5/24,48,16)
  pokemonBattleButton.addAni('pokemonBattleButtonButton',fightButtonImg,{frameSize:[48,16],frames:2,frameDelay:20})
  pokemonBattleButton.ani.pause()
	pokemonBattleButton.textSize = 20
	pokemonBattleButton.text = 'POKEMON'
	pokemonBattleButton.scale = windowHeight*2/384
	pokemonBattleButton.collider = 'n'
	pokemonBattleButton.pressed = false
	
	move1 = new Sprite(windowHeight*3/24,windowHeight*20.5/24,48,16)
  move1.addAni('move1Button',fightButtonImg,{frameSize:[48,16],frames:2,frameDelay:20})
  move1.ani.pause()
  move1.textSize = 20
	move1.pressed = false
	if (currentPokemon[0].moves.length > 0) {
  move1.text = currentPokemon[0].moves[0].name;
}
	move1.scale = windowHeight*2/384
	move1.collider = 'n'
	move1.visible = false
	move4 = new Sprite(windowHeight*9/24,windowHeight*22.5/24,48,16)
  move4.addAni('move4Button',fightButtonImg,{frameSize:[48,16],frames:2,frameDelay:20})
  move4.ani.pause()
	move4.textSize = 20
	move4.pressed = false
	if (currentPokemon[0].moves.length > 3) {
  move4.text = currentPokemon[0].moves[3].name;
}
	move4.scale = windowHeight*2/384
	move4.collider = 'n'
	move4.visible = false
	move3 = new Sprite(windowHeight*3/24,windowHeight*22.5/24,48,16)
  move3.addAni('move3Button',fightButtonImg,{frameSize:[48,16],frames:2,frameDelay:20})
  move3.ani.pause()
	move3.textSize = 20
	move3.pressed = false
	if (currentPokemon[0].moves.length > 2) {
  move3.text = currentPokemon[0].moves[2].name;
}
	move3.scale = windowHeight*2/384
	move3.collider = 'n'
	move3.visible = false
	move2 = new Sprite(windowHeight*9/24,windowHeight*20.5/24,48,16)
  move2.addAni('move2Button',fightButtonImg,{frameSize:[48,16],frames:2,frameDelay:20})
  move2.ani.pause()
	move2.textSize = 20
	move2.pressed = false
	if (currentPokemon[0].moves.length > 1) {
  move2.text = currentPokemon[0].moves[1].name;
}
	move2.scale = windowHeight*2/384
	move2.collider = 'n'
	move2.visible = false
	playerPokemonInfo = new Sprite(windowHeight*19/24,windowHeight*16/24,windowHeight*128/384,windowHeight*48/384,'s')
	playerPokemonInfo.text = currentPokemon[0].name
	playerPokemonInfo.opacity = 0;
	currentWildPokemon = wildPokemon
	battlePokemon(currentWildPokemon)
  wildPokemon.remove()
}

function triggerWildEncounter(mapIndex) {
  const encounterList = map[mapIndex].pokemon;
  const min = map[mapIndex].levelmin || 2;
  const max = map[mapIndex].levelmax || 5;

  if (!encounterList || encounterList.length === 0) {
    console.warn("No wild Pokémon defined for map", mapIndex);
    return;
  }

  const id = random(encounterList); // pick random Pokémon ID from list
  const lvl = Math.floor(random(min, max + 1)); // inclusive
  const name = getName(id);
  const wildPokemon = makePokemon(id, name, lvl);

  startEncounter(wildPokemon);
}