
function createMove(name, power, accuracy, pp, reqLevel, type, effect = null) {
    return {
        name,
        power,
        accuracy,
        pp,
        reqLevel,
        type,
        superEffective: typeChart[type]?.superEffective || [],
        notEffective: typeChart[type]?.notEffective || [],
        noEffect: typeChart[type]?.noEffect || [],
        effect // This is a function that will apply the move’s effect (if any)
    };
}

// Function to apply move effects (like Growl reducing attack)
function applyMoveEffect(move, user, target) {
    if (move.effect) {
        move.effect(user, target);
    }
}

function learnLevelUpMoves(pokemon) {
    pokemon.level_moves.forEach(entry => {
        if (entry.level === pokemon.lvl && !pokemon.moves.includes(entry.move)) {
            learnMoveWithReplacement(pokemon, entry.move);
        }
    });
}

function learnMoveWithReplacement(pokemon, newMove) {
    if (pokemon.moves.length < 4) {
        pokemon.moves.push(newMove);
        console.log(`${pokemon.name} learned ${newMove.name}!`);
    } else {
        console.log(`${pokemon.name} wants to learn ${newMove.name}, but already knows 4 moves.`);
        console.log("Choose a move to forget:");

        // Display current moves
        pokemon.moves.forEach((move, index) => {
            console.log(`${index + 1}: ${move.name}`);
        });
        console.log("0: Do not learn new move");

        // Simulate player choice (replace this with actual UI/input in your game)
        let chosenIndex = prompt("Enter the number of the move to forget (or 0 to skip):");

        chosenIndex = parseInt(chosenIndex);

        if (chosenIndex >= 1 && chosenIndex <= 4) {
            let oldMove = pokemon.moves[chosenIndex - 1];
            pokemon.moves[chosenIndex - 1] = newMove;
            console.log(`${pokemon.name} forgot ${oldMove.name} and learned ${newMove.name}!`);
        } else {
            console.log(`${pokemon.name} did not learn ${newMove.name}.`);
        }
    }
}

// Create moves with effects

const typeChart = {
    normal:      { superEffective: [], notEffective: ["rock", "steel"], noEffect: ["ghost"] },
    fire:        { superEffective: ["grass", "ice", "bug", "steel"], notEffective: ["fire", "water", "rock", "dragon"], noEffect: [] },
    water:       { superEffective: ["fire", "ground", "rock"], notEffective: ["water", "grass", "dragon"], noEffect: [] },
    grass:       { superEffective: ["water", "ground", "rock"], notEffective: ["fire", "grass", "poison", "flying", "bug", "dragon", "steel"], noEffect: [] },
    electric:    { superEffective: ["water", "flying"], notEffective: ["electric", "grass", "dragon"], noEffect: ["ground"] },
    ice:         { superEffective: ["grass", "ground", "flying", "dragon"], notEffective: ["fire", "water", "ice", "steel"], noEffect: [] },
    fighting:    { superEffective: ["normal", "rock", "steel", "ice", "dark"], notEffective: ["flying", "poison", "bug", "psychic", "fairy"], noEffect: ["ghost"] },
    poison:      { superEffective: ["grass", "fairy"], notEffective: ["poison", "ground", "rock", "ghost"], noEffect: ["steel"] },
    ground:      { superEffective: ["fire", "electric", "poison", "rock", "steel"], notEffective: ["grass", "bug"], noEffect: ["flying"] },
    flying:      { superEffective: ["grass", "fighting", "bug"], notEffective: ["electric", "rock", "steel"], noEffect: [] },
    psychic:     { superEffective: ["fighting", "poison"], notEffective: ["psychic", "steel"], noEffect: ["dark"] },
    bug:         { superEffective: ["grass", "psychic", "dark"], notEffective: ["fire", "fighting", "poison", "flying", "ghost", "steel", "fairy"], noEffect: [] },
    rock:        { superEffective: ["fire", "ice", "flying", "bug"], notEffective: ["fighting", "ground", "steel"], noEffect: [] },
    ghost:       { superEffective: ["psychic", "ghost"], notEffective: ["dark"], noEffect: ["normal"] },
    dragon:      { superEffective: ["dragon"], notEffective: ["steel"], noEffect: ["fairy"] },
    dark:        { superEffective: ["psychic", "ghost"], notEffective: ["fighting", "dark", "fairy"], noEffect: [] },
    steel:       { superEffective: ["ice", "rock", "fairy"], notEffective: ["fire", "water", "electric", "steel"], noEffect: [] },
    fairy:       { superEffective: ["fighting", "dragon", "dark"], notEffective: ["fire", "poison", "steel"], noEffect: [] }
};
// Function to check type effectiveness
function getEffectiveness(moveType, targetType) {
    if (typeChart[moveType].superEffective.includes(targetType)) return 2;
    if (typeChart[moveType].notEffective.includes(targetType)) return 0.5;
    if (typeChart[moveType].noEffect.includes(targetType)) return 0;
    return 1;
}

// Function to calculate damage using the official formula



