let currentBorders = [];  // Store only the active map’s boundaries
let currentGrass;
function createMapBoundaries(mapIndex) {
    // Delete old boundaries before creating new ones
    removeCurrentBoundaries();

    if (mapIndex === 0) {
        currentBorders = [
            new Sprite(windowHeight / 96, windowHeight / 2, windowHeight / 24, windowHeight, 's'),
            new Sprite(windowHeight / 2, windowHeight * 9 / 96, windowHeight, windowHeight / 24, 's'),
            new Sprite(windowHeight / 2, windowHeight * 91 / 96, windowHeight, windowHeight / 24, 's'),
            new Sprite(windowHeight * 95 / 96, windowHeight / 2, windowHeight / 24, windowHeight, 's'),
            new Sprite(windowHeight * 14 / 48, windowHeight * 13 / 48, windowHeight * 5 / 24, windowHeight * 5 / 24, 's'),
            new Sprite(windowHeight * 77 / 96, windowHeight * 15 / 48, windowHeight / 96, windowHeight * 5 / 24, 's'),
            new Sprite(windowHeight * 5 / 48, windowHeight * 9 / 48, windowHeight / 12, windowHeight / 24, 's')
        ];
    } 
    else if (mapIndex === 1) {
        currentBorders = [
					//walls
            new Sprite(windowHeight / 96, windowHeight / 2, windowHeight / 24, windowHeight, 's'),
            new Sprite(windowHeight / 2, windowHeight * 9 / 96, windowHeight, windowHeight / 24, 's'),
            new Sprite(windowHeight / 2, windowHeight * 95 / 96, windowHeight, windowHeight / 24, 's'),
            new Sprite(windowHeight * 95 / 96, windowHeight / 2, windowHeight / 24, windowHeight, 's'),
					//table + couch
            new Sprite(windowHeight * 14 / 48, windowHeight * 22 / 48, windowHeight * 5 / 24, windowHeight * 7.5/ 24, 's'),
					//railing
            new Sprite(windowHeight * 77 / 96, windowHeight * 13 / 48, windowHeight / 96, windowHeight * 5 / 24, 's'),
					//left chair
            new Sprite(windowHeight * 5 / 48, windowHeight * 19 / 48, windowHeight / 12, windowHeight / 24, 's')
        ];
		}
		else if (mapIndex === 2) {
			currentBorders = [
				new Sprite(windowHeight*4/48,windowHeight/2,windowHeight/48,windowHeight, 's'),
			  new Sprite(windowHeight*36/48,windowHeight*9.5/48,windowHeight*15/48,windowHeight/2, 's'),
				new Sprite(windowHeight*30/48,windowHeight*12/48,windowHeight*3/48,windowHeight/2, 's'),
				new Sprite(windowHeight*43.5/48,windowHeight*12/48,windowHeight/384,windowHeight/2, 's'),
				new Sprite(windowHeight*49/48,windowHeight*12/48,windowHeight/384,windowHeight/2, 's'),
				new Sprite(windowHeight*77/48,windowHeight*12/48,windowHeight/384,windowHeight/2, 's'),
			  new Sprite(windowHeight*1.5,0,windowHeight*3,windowHeight/96, 's'),
				new Sprite(windowHeight*16.75/48,windowHeight*5/48,windowHeight*8/48,windowHeight*10/48, 's'),
				new Sprite(windowHeight*87.5/48,windowHeight*17/48,windowHeight*18/48,windowHeight*10/48, 's'),
				new Sprite(windowHeight*2.7,windowHeight*25/48,windowHeight*18/48,windowHeight*12/48, 's'),
				new Sprite(windowHeight*1.5,windowHeight*38.75/48,windowHeight*3,windowHeight/96,'s'),
				new Sprite(windowHeight*54/48,windowHeight*24.5/48,windowHeight*10/48,windowHeight/384,'s'),
				new Sprite(windowHeight*71/48,windowHeight*24.5/48,windowHeight*12/48,windowHeight/384,'s'),
				
				]
			}
	else if (mapIndex === 3) {
		
	}
	else if (mapIndex===4){
		currentBorders =[
		  new Sprite(windowHeight/4,windowHeight/2,windowHeight*10/24,windowHeight,'s'),
		  new Sprite(windowHeight/2,windowHeight*3/24,windowHeight,windowHeight/384,'s'),
			new Sprite(windowHeight/2,windowHeight*23/24,windowHeight,windowHeight/384,'s'),
			new Sprite(windowHeight*23/24,windowHeight/2,windowHeight/384,windowHeight,'s'),
			new Sprite(windowHeight*20/24,windowHeight*13/24,windowHeight*8/24,windowHeight/48,'s'),
			new Sprite(windowHeight*20/24,windowHeight*5/24,windowHeight*3/24,windowHeight*3/24)
			]
	}
    
	
	  // Make all borders invisible
    for (let i = 0; i < currentBorders.length; i++) {
        currentBorders[i].visible = true;  // Hide the sprite
        currentBorders[i].debug = true;    // Hide the debug outline
    }

}

function createGrass(mapIndex){
	if(mapIndex == 2){
		
	
	currentGrass = new Group();

// First patch of grass
let grass1 = new Sprite(windowHeight * 55 / 48, windowHeight * 13 / 48, windowHeight * 5 / 24, windowHeight * 11 / 24, 'n');
currentGrass.add(grass1);

// Second patch of grass
let grass2 = new Sprite(windowHeight * 70 / 48, windowHeight * 21 / 48, windowHeight * 6 / 24, windowHeight * 3 / 24, 'n');
currentGrass.add(grass2);

// Third patch of grass
let grass3 = new Sprite(windowHeight * 70 / 48, windowHeight * 5 / 48, windowHeight * 6 / 24, windowHeight * 3 / 24, 'n');
currentGrass.add(grass3);
		
	  
for (let g of currentGrass) {
            g.visible = false;
            g.debug = false;
        }
    
	}
}
function removeCurrentGrass() {
    
  if (currentGrass && currentGrass instanceof Group) {
    currentGrass.removeAll(); // Removes all sprites
  }
  currentGrass = new Group(); // Keep it a Group (not [])

}


function removeCurrentBoundaries() {
    for (let i = 0; i < currentBorders.length; i++) {
        currentBorders[i].remove(); // Properly deletes the sprite
    }
    currentBorders = []; // Empty the array
}