//R75XP
let mapCurrent;
let player;
let map = []
let textbox = []
let grassTimer;
let mouse;
let clickTimer = 10
function preload(){
	fightButtonImg = loadImage('buttonBattleScreen.png');
	grassTimer = 60
  mapCurrent = 3
	mouse = new Sprite()
	mouse.w=1
	mouse.h=1
	mouse.collider = 'n'
	mouse.visible=false
  map[0]=new Sprite()
	map[0].x=windowHeight/2
	map[0].y=windowHeight/2
	map[0].w=384
	map[0].h=352
	map[0].img = 'room1.png'
	map[0].scale = windowHeight/384
	map[0].visible = false
	map[0].collider = 'n'
	
	map[1]=new Sprite()
	map[1].x=windowHeight/2
	map[1].y=windowHeight/2
	map[1].w=384
	map[1].h=384
	map[1].img = 'room2_v2.png'
	map[1].scale = windowHeight/384
	map[1].visible = false
	map[1].collider = 'n'
	
	map[4]=new Sprite()
	map[4].x=windowHeight/2
	map[4].y=windowHeight/2
	map[4].w=384
	map[4].h=384
	map[4].img = 'proffesor_oaks_lab.png'
	map[4].scale = windowHeight/384
	map[4].visible = false
	map[4].collider = 'n'
	
	map[2]=new Sprite()
	map[2].x=windowHeight*30/24
	map[2].y=windowHeight*10/24
	map[2].w=1152
	map[2].h=768
	map[2].img = 'ballet_town.png'
	map[2].scale = windowHeight/384
	map[2].visible = false
	map[2].collider = 'n'
	map[2].pokemon = [16,19,43,52,58]
	map[2].levelmin = 2
	map[2].levelmax = 7
	
	map[3] = new Sprite()
	map[3].w=384
	map[3].h=384
	map[3].img = 'battlemap.png'
	map[3].addAni('battleAni','battleMapAni.png',{frameSize:[384,384],frames:28,frameDelay:3})
	map[3].scale = windowHeight/384
	map[3].ani.pause()
	map[3].visible = false
	map[3].collider = 'n'
	
	textbox[0] = new Sprite(windowHeight/2,windowHeight*4/24,windowHeight,windowHeight*8/24,'n')
	textbox[0].addAni('text','textBubble1.png',{frameSize:[384,128],frames:21,frameDelay:10})
  textbox[0].scale = windowHeight/576
	textbox[0].visible = false
	textbox[0].unused = true
}
function setup() {
	createCanvas(windowHeight, windowHeight);
	switchMap(0)
	background(100);
	player = new Sprite(windowHeight/2,windowHeight/2)
	player.pokemon = []
	player.w = 16
	player.collider = 'dynamic'
	player.h = 16
	player.scale = windowHeight*3/384
	player.rotationLock = true
	player.friction = 0
	player.interact = false
	player.addAni('player_walking_right','player_walking_right.png',{frameSize:[16,16],frames:4,frameDelay:8})
  player.addAni('player_walking_down','player_walking_down.png',{frameSize:[16,16],frames:4,frameDelay:8})
	player.addAni('player_walking_up','player_walking_up.png',{frameSize:[16,16],frames:4,frameDelay:8})
	player.addAni('player_idle','player_idle.png',{frameSize:[16,16],frames:2,frameDelay:1})
	player.pokemon[0] = makePokemon(6,'turkey',30)
	currentWildPokemon = new Sprite()
	currentWildPokemon.visible = false
	currentWildPokemon.collider = 'n'
	for(let i=0;i<6;i++){
	  currentPokemon[i] = player.pokemon[i] 
	}
}

function draw() {
	map[3].draw()
	map[3].x=camera.x
	map[3].y=camera.y
	mouse.x=mouseX
	mouse.y=mouseY
	if(mapCurrent == 0 && textbox[0].unused){
			textbox[0].visible = true
		  textbox[0].unused = false
		}
  if(textbox[0].ani.frame==20){
		textbox[0].ani.stop()
	}
	
	if(textbox[0].unused == false && mapCurrent == 1){
		textbox[0].visible = false
	}
	if(mapCurrent ==0 && player.x>=windowHeight*19/24 && player.y<=windowHeight*7/24){
		switchMap(1)
		player.y = windowHeight*9/24
	}
	if(mapCurrent ==1 && player.x>=windowHeight*19/24 && player.y<=windowHeight*7/24){
		switchMap(0)
		player.y = windowHeight*9/24

	}
	if(mapCurrent ==1 && player.x>=windowHeight*11/24 && player.x<=windowHeight*13/24 && player.y>=windowHeight*20/24){
		switchMap(2)
		player.scale = windowHeight*1.5/384
		player.x = windowHeight*7.5/24
		player.y = windowHeight*6.5/24
	}
	if(mapCurrent == 2 && player.x>=windowHeight*7/24 && player.x<=windowHeight*8/24 && player.y<=windowHeight*6.4/24){
		switchMap(1)
		player.scale = windowHeight*3/384
		player.x = windowHeight/2
		player.y = windowHeight*19/24
	}
		if(mapCurrent == 2 && player.x>=windowHeight*17/24 && player.x<=windowHeight*19/24 && player.y<=windowHeight*12/24){
		switchMap(4)
		player.scale = windowHeight*1.5/384
		player.x = windowHeight*14/24
		player.y = windowHeight*22/24
		camera.x = windowHeight/2
		camera.y = windowHeight/2
	}
	
	drawingContext.imageSmoothingEnabled =false
	if(kb.pressing('w')){
		player.changeAni('player_walking_up')
		player.y-=(60*(player.scale))/frameRate()
	}
	else if(kb.pressing('s')){
		player.changeAni('player_walking_down')
		player.y+=(60*(player.scale))/frameRate()
	}
	else if(kb.pressing('a')){
		player.changeAni('player_walking_right')
		player.x-=(60*(player.scale))/frameRate()
		player.mirror.x = true
	}
	else if(kb.pressing('d')){
		player.changeAni('player_walking_right')
		player.x+=(60*(player.scale))/frameRate()
		player.mirror.x = false
	}
	else {
		player.changeAni('player_idle')
		player.mirror.x = false
	}
  if(kb.pressed(' ')){
		player.interact = true
	}
	
	
	if(mapCurrent == 2 &&  player.x>=map[2].w/6 && player.x<=map[2].w*4.5/6){
		camera.x = player.x;
	}
	if(mapCurrent == 2 && player.y>canvas.h/2 && player.y<canvas.h/2){
		camera.y = player.y;
	}
	
	// Reduce grass timer every frame
if (grassTimer > 0) {
  grassTimer--;
}
	if(map[3].ani.frame==27){
		map[3].ani.stop()
	}
	 if(currentPokemon.visible){
		 currentWildPokemon.visible = true
	 }
    currentWildPokemon.x =  windowHeight*19/24
	  currentWildPokemon.y = windowHeight*8/24
		currentPokemon[0].x = windowHeight*5.5/24
	  currentPokemon[0].y = windowHeight*12.5/24
	if(mapCurrent == 3){
		
	  battlePokemon(currentWildPokemon)
		currentWildPokemon.x =  windowHeight*19/24
	  currentWildPokemon.y = windowHeight*8/24
		currentPokemon[0].x = windowHeight*5.5/24
	  currentPokemon[0].y = windowHeight*12.5/24
		//currentWildPokemon.velocity = 0
		//currentPokemon.velocity = 0
		if(mouseIsPressed&&fight.pressed==true&&clickTimer<=0){
			 move1.visible = true
			 if (move1&&move1.overlapping(mouse)) {
	move1.changeAni('move1Button')
  move1.ani.frame = 1; // hover frame
	move1.ani.stop()
	
		  if(mouseIsPressed&&move1.pressed==false&&clickTimer<=0){
				applyMove(currentPokemon[0].moves[0].move,currentPokemon,currentWildPokemon)
				move1.pressed = true
				clickTimer=10
			}
			 }
			 if (move2&&move2.overlapping(mouse)&&move2.pressed==false) {
	move2.changeAni('move2Button')
  move2.ani.frame = 1; // hover frame
	move2.ani.stop()
				
				 if(mouseIsPressed && pokemon.moves.length>1&&clickTimer<=0){
				applyMove(currentPokemon[0].moves[1].move,currentPokemon,currentWildPokemon)
					  move2.pressed = true
					 clickTimer=10
			}
			 }
			 if (move3&&move3.overlapping(mouse)&&move3.pressed==false) {
	move3.changeAni('move3Button')
  move3.ani.frame = 1; // hover frame
	move3.ani.stop()
				 
				 if(mouseIsPressed && pokemon.moves.length>2&&clickTimer<=0){
				applyMove(currentPokemon[0].moves[2].move,currentPokemon,currentWildPokemon)
					 move3.pressed = true
					 clickTimer=10
			}
			 }
			 if (move4&&move4.overlapping(mouse)&&move4.pressed==false) {
	move4.changeAni('move4Button')
  move4.ani.frame = 1; // hover frame
	move4.ani.stop()
				 
				 if(mouseIsPressed && pokemon.moves.length>3&&clickTimer<=0){
				applyMove(currentPokemon[0].moves[3].move,currentPokemon,currentWildPokemon)
					 move4.pressed = true
					 clickTimer=10
			}
			 }
			 move2.visible = true
			 move3.visible = true
			 move4.visible = true
		 }
		camera.y = windowHeight/2
		camera.x= windowHeight/2
	 if (fight&&fight.overlapping(mouse)&&fight.pressed==false) {
	fight.changeAni('fightButton')
  fight.ani.frame = 1; // hover frame
	fight.ani.stop()
	if(mouseIsPressed&&clickTimer<=0){
		fight.pressed = true
		clickTimer=10
	}
		 
} else {
  fight.ani.frame = 0; // default frame
	fight.ani.stop()
  }
	 if (run&&run.overlapping(mouse)) {
	run.changeAni('runButton')
  run.ani.frame = 1; // hover frame
	run.ani.pause()
} else {
  run.ani.frame = 0; // default frame
	run.ani.pause()
  }
  if (bag&&bag.overlapping(mouse)) {
	bag.changeAni('bagButton')
  bag.ani.frame = 1; // hover frame
	bag.ani.stop()
  
} else {
  bag.ani.frame = 0; // default frame
	bag.ani.stop()
  }
	 if (pokemonBattleButton&&pokemonBattleButton.overlapping(mouse)) {
	pokemonBattleButton.changeAni('pokemonBattleButtonButton')
  pokemonBattleButton.ani.frame = 1; // hover frame
	pokemonBattleButton.ani.pause()
} else {
  pokemonBattleButton.ani.frame = 0; // default frame
	pokemonBattleButton.ani.pause()
}
	}

// Only trigger encounter if you're in grass, pressing a key, and the timer has expired
if (
  player.overlapping(currentGrass) &&
  (kb.pressing('a') || kb.pressing('w') || kb.pressing('s') || kb.pressing('d')) &&
  grassTimer <= 0
) {
	if(random(10)<=1){
  triggerWildEncounter(2); // mapIndex or other context
  grassTimer = 45;// reset cooldown
	}
}
	if(mapCurrent == 3){
	
	}
	clickTimer--
	console.log(currentWildPokemon.x,currentWildPokemon.y,camera.x,camera.y)
	
}

function switchMap(newMap) {
    map[mapCurrent].remove()  // Hide the current map
	  removeCurrentBoundaries()
	  removeCurrentGrass()
    mapCurrent = newMap;              // Change to the new map
    map[mapCurrent].visible = true;   // Show the new map
    createMapBoundaries(newMap)
	  createGrass(newMap)
}



