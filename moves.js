
let moves = {
 absorb: createMove("absorb", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 acid: createMove("acid", 50, 100, 20, 3, "poison", (user, target) => {
 let damage = calculateDamage(user, target, 50, "poison", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 acidArmor: createMove("acidArmor", 50, 100, 20, 3, "poison", (user, target) => {
 let damage = calculateDamage(user, target, 50, "poison", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 agility: createMove("agility", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 airSlash: createMove("airSlash", 50, 100, 20, 3, "flying", (user, target) => {
 let damage = calculateDamage(user, target, 50, "flying", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 amnesia: createMove("amnesia", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 aquaTail: createMove("aquaTail", 50, 100, 20, 3, "water", (user, target) => {
 let damage = calculateDamage(user, target, 50, "water", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 assurance: createMove("assurance", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 auroraBeam: createMove("auroraBeam", 50, 100, 20, 3, "ice", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ice", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 barrage: createMove("barrage", 50, 100, 20, 3, "dragon", (user, target) => {
 let damage = calculateDamage(user, target, 50, "dragon", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 barrier: createMove("barrier", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 bind: createMove("bind", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 bite: createMove("bite", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 blizzard: createMove("blizzard", 50, 100, 20, 3, "ice", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ice", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 bodySlam: createMove("bodySlam", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 boneClub: createMove("boneClub", 50, 100, 20, 3, "ground", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ground", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 bonemerang: createMove("bonemerang", 50, 100, 20, 3, "ground", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ground", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 bounce: createMove("bounce", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 bubble: createMove("bubble", 50, 100, 20, 3, "water", (user, target) => {
 let damage = calculateDamage(user, target, 50, "water", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 bugBite: createMove("bugBite", 50, 100, 20, 3, "bug", (user, target) => {
 let damage = calculateDamage(user, target, 50, "bug", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 clamp: createMove("clamp", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 cometPunch: createMove("cometPunch", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 confuseRay: createMove("confuseRay", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 confusion: createMove("confusion", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 constrict: createMove("constrict", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 conversion: createMove("conversion", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 counter: createMove("counter", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 crabhammer: createMove("crabhammer", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 crunch: createMove("crunch", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 curse: createMove("curse", 50, 100, 20, 3, "ghost", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ghost", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 defenseCurl: createMove("defenseCurl", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 dig: createMove("dig", 50, 100, 20, 3, "ground", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ground", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 disable: createMove("disable", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 discharge: createMove("discharge", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 dizzyPunch: createMove("dizzyPunch", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 doubleEdge: createMove("doubleEdge", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 doubleKick: createMove("doubleKick", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 doubleSlap: createMove("doubleSlap", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 doubleTeam: createMove("doubleTeam", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 doubleslap: createMove("doubleslap", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 dragonRage: createMove("dragonRage", 50, 100, 20, 3, "dragon", (user, target) => {
 let damage = calculateDamage(user, target, 50, "dragon", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 dreamEater: createMove("dreamEater", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 drillPeck: createMove("drillPeck", 50, 100, 20, 3, "flying", (user, target) => {
 let damage = calculateDamage(user, target, 50, "flying", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 earthquake: createMove("earthquake", 50, 100, 20, 3, "ground", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ground", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 electroBall: createMove("electroBall", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 embar: createMove("embar", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 embe: createMove("embe", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 ember: createMove("ember", 50, 100, 20, 3, "fire", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fire", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 emer: createMove("emer", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 explosion: createMove("explosion", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 featherDance: createMove("featherDance", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 firePunch: createMove("firePunch", 50, 100, 20, 3, "fire", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fire", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 fireSpin: createMove("fireSpin", 50, 100, 20, 3, "fire", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fire", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 flameWheel: createMove("flameWheel", 50, 100, 20, 3, "fire", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fire", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 flamethrower: createMove("flamethrower", 50, 100, 20, 3, "fire", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fire", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 flareBlitz: createMove("flareBlitz", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 flashCannon: createMove("flashCannon", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 focusEnergy: createMove("focusEnergy", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 foresight: createMove("foresight", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 furyAttack: createMove("furyAttack", 50, 100, 20, 3, "bug", (user, target) => {
 let damage = calculateDamage(user, target, 50, "bug", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 furySwipes: createMove("furySwipes", 50, 100, 20, 3, "bug", (user, target) => {
 let damage = calculateDamage(user, target, 50, "bug", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 glare: createMove("glare", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 growl: createMove("growl", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 growth: createMove("growth", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 guillotine: createMove("guillotine", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 gust: createMove("gust", 50, 100, 20, 3, "flying", (user, target) => {
 let damage = calculateDamage(user, target, 50, "flying", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 gyroBall: createMove("gyroBall", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 harden: createMove("harden", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 haze: createMove("haze", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 headbutt: createMove("headbutt", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 healPulse: createMove("healPulse", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 highJumpKick: createMove("highJumpKick", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 hornAttack: createMove("hornAttack", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 hornDrill: createMove("hornDrill", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 hurricane: createMove("hurricane", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 hydroPump: createMove("hydroPump", 50, 100, 20, 3, "water", (user, target) => {
 let damage = calculateDamage(user, target, 50, "water", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 hyperBeam: createMove("hyperBeam", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 hyperFang: createMove("hyperFang", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 hypnosis: createMove("hypnosis", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 iceBeam: createMove("iceBeam", 50, 100, 20, 3, "ice", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ice", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 icePunch: createMove("icePunch", 50, 100, 20, 3, "ice", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ice", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 ironDefense: createMove("ironDefense", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 jumpKick: createMove("jumpKick", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 karateChop: createMove("karateChop", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 kinesis: createMove("kinesis", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 lear: createMove("lear", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 leechLife: createMove("leechLife", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 leechSeed: createMove("leechSeed", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 leer: createMove("leer", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 lick: createMove("lick", 50, 100, 20, 3, "ghost", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ghost", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 lightScreen: createMove("lightScreen", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 lockOn: createMove("lockOn", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 lovelyKiss: createMove("lovelyKiss", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 lowKick: createMove("lowKick", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 magnetRise: createMove("magnetRise", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 meditate: createMove("meditate", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 megaPunch: createMove("megaPunch", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 megapunch: createMove("megapunch", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 metalSound: createMove("metalSound", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 metronome: createMove("metronome", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 minimize: createMove("minimize", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 mirrorMove: createMove("mirrorMove", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 mist: createMove("mist", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 nightShade: createMove("nightShade", 50, 100, 20, 3, "ghost", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ghost", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 payDay: createMove("payDay", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 peck: createMove("peck", 50, 100, 20, 3, "flying", (user, target) => {
 let damage = calculateDamage(user, target, 50, "flying", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 petalDance: createMove("petalDance", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 petaldance: createMove("petaldance", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 pinMissile: createMove("pinMissile", 50, 100, 20, 3, "bug", (user, target) => {
 let damage = calculateDamage(user, target, 50, "bug", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 poisonGas: createMove("poisonGas", 50, 100, 20, 3, "poison", (user, target) => {
 let damage = calculateDamage(user, target, 50, "poison", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 poisonPowder: createMove("poisonPowder", 50, 100, 20, 3, "poison", (user, target) => {
 let damage = calculateDamage(user, target, 50, "poison", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 poisonSting: createMove("poisonSting", 50, 100, 20, 3, "poison", (user, target) => {
 let damage = calculateDamage(user, target, 50, "poison", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 pound: createMove("pound", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 powerWhip: createMove("powerWhip", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 protect: createMove("protect", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 psybeam: createMove("psybeam", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 psychUp: createMove("psychUp", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 psychic: createMove("psychic", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 pursuit: createMove("pursuit", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 quickAttack: createMove("quickAttack", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 rage: createMove("rage", 50, 100, 20, 3, "dragon", (user, target) => {
 let damage = calculateDamage(user, target, 50, "dragon", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 rainDance: createMove("rainDance", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 rapidSpin: createMove("rapidSpin", 50, 100, 20, 3, "bug", (user, target) => {
 let damage = calculateDamage(user, target, 50, "bug", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 razorLeaf: createMove("razorLeaf", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 recover: createMove("recover", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 reflect: createMove("reflect", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 rest: createMove("rest", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 roar: createMove("roar", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 rockThrow: createMove("rockThrow", 50, 100, 20, 3, "rock", (user, target) => {
 let damage = calculateDamage(user, target, 50, "rock", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 rollingKick: createMove("rollingKick", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 roost: createMove("roost", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 sandAttack: createMove("sandAttack", 50, 100, 20, 3, "ground", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ground", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 scratch: createMove("scratch", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 screech: createMove("screech", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 seedBomb: createMove("seedBomb", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 seismicToss: createMove("seismicToss", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 selfDestruct: createMove("selfDestruct", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 shellSmash: createMove("shellSmash", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 sing: createMove("sing", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 skullBash: createMove("skullBash", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 skyAttack: createMove("skyAttack", 50, 100, 20, 3, "flying", (user, target) => {
 let damage = calculateDamage(user, target, 50, "flying", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 slackOff: createMove("slackOff", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 slam: createMove("slam", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 slash: createMove("slash", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 sleepPowder: createMove("sleepPowder", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 sludge: createMove("sludge", 50, 100, 20, 3, "poison", (user, target) => {
 let damage = calculateDamage(user, target, 50, "poison", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 smog: createMove("smog", 50, 100, 20, 3, "poison", (user, target) => {
 let damage = calculateDamage(user, target, 50, "poison", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 smokescreen: createMove("smokescreen", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 solarBeam: createMove("solarBeam", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 sonicBoom: createMove("sonicBoom", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 spark: createMove("spark", 50, 100, 20, 3, "electric", (user, target) => {
 let damage = calculateDamage(user, target, 50, "electric", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 spikeCannon: createMove("spikeCannon", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 splash: createMove("splash", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 spore: createMove("spore", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 stomp: createMove("stomp", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 stringShot: createMove("stringShot", 50, 100, 20, 3, "bug", (user, target) => {
 let damage = calculateDamage(user, target, 50, "bug", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 stunSpore: createMove("stunSpore", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 submission: createMove("submission", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 substitute: createMove("substitute", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 suckerPunch: createMove("suckerPunch", 50, 100, 20, 3, "fighting", (user, target) => {
 let damage = calculateDamage(user, target, 50, "fighting", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 superFang: createMove("superFang", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 supersonic: createMove("supersonic", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 surf: createMove("surf", 50, 100, 20, 3, "water", (user, target) => {
 let damage = calculateDamage(user, target, 50, "water", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 sweetScent: createMove("sweetScent", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 swift: createMove("swift", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 swordsDance: createMove("swordsDance", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 synthesis: createMove("synthesis", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 tackle: createMove("tackle", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 tailWhip: createMove("tailWhip", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 tailwind: createMove("tailwind", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 takeDown: createMove("takeDown", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 teleport: createMove("teleport", 50, 100, 20, 3, "psychic", (user, target) => {
 let damage = calculateDamage(user, target, 50, "psychic", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 thrash: createMove("thrash", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 thunder: createMove("thunder", 50, 100, 20, 3, "electric", (user, target) => {
 let damage = calculateDamage(user, target, 50, "electric", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 thunderPunch: createMove("thunderPunch", 50, 100, 20, 3, "electric", (user, target) => {
 let damage = calculateDamage(user, target, 50, "electric", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 thunderShock: createMove("thunderShock", 50, 100, 20, 3, "electric", (user, target) => {
 let damage = calculateDamage(user, target, 50, "electric", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 thunderWave: createMove("thunderWave", 50, 100, 20, 3, "electric", (user, target) => {
 let damage = calculateDamage(user, target, 50, "electric", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 transform: createMove("transform", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 triAttack: createMove("triAttack", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 twineedle: createMove("twineedle", 50, 100, 20, 3, "bug", (user, target) => {
 let damage = calculateDamage(user, target, 50, "bug", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 twister: createMove("twister", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 viceGrip: createMove("viceGrip", 50, 100, 20, 3, "ice", (user, target) => {
 let damage = calculateDamage(user, target, 50, "ice", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 vineWhip: createMove("vineWhip", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 waterGun: createMove("waterGun", 50, 100, 20, 3, "water", (user, target) => {
 let damage = calculateDamage(user, target, 50, "water", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 waterPulse: createMove("waterPulse", 50, 100, 20, 3, "water", (user, target) => {
 let damage = calculateDamage(user, target, 50, "water", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 waterfall: createMove("waterfall", 50, 100, 20, 3, "water", (user, target) => {
 let damage = calculateDamage(user, target, 50, "water", "special");
 target.HP = Math.max(0, target.HP - damage);
 }),
 whirlwind: createMove("whirlwind", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 wingAttack: createMove("wingAttack", 50, 100, 20, 3, "flying", (user, target) => {
 let damage = calculateDamage(user, target, 50, "flying", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 withdraw: createMove("withdraw", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 worrySeed: createMove("worrySeed", 50, 100, 20, 3, "grass", (user, target) => {
 let damage = calculateDamage(user, target, 50, "grass", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 wrap: createMove("wrap", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "physical");
 target.HP = Math.max(0, target.HP - damage);
 }),
 yawn: createMove("yawn", 50, 100, 20, 3, "normal", (user, target) => {
 let damage = calculateDamage(user, target, 50, "normal", "status");
 target.HP = Math.max(0, target.HP - damage);
 }),
 zapCannon: createMove("zapCannon", 50, 100, 20, 3, "electric", (user, target) => {
 let damage = calculateDamage(user, target, 50, "electric", "special");
 target.HP = Math.max(0, target.HP - damage);
 })
};



function applyMove(move, user, target) {
    if (Math.random() * 100 <= move.accuracy) {
        // Basic damage calculation formula (placeholder, tweak as needed)
        let damage = Math.floor(((2 * user.lvl / 5 + 2) * move.power * user.attack / target.defense) / 50) + 2;
        target.hp = Math.max(0, target.hp - damage);

        if (move.effect) {
            move.effect(user, target);
        }

        console.log(`${user.name} used ${move.name} and dealt ${damage} damage!`);
    } else {
        console.log(`${user.name}'s attack missed!`);
    }
}

function calculateDamage(user, target, basePower, moveType, category) {
    let attackStat = category === "physical" ? user.attack : user.sp_atk;
    let defenseStat = category === "physical" ? target.defense : target.sp_def;

    // Base damage formula
    let damage = Math.floor(
        (((2 * user.lvl / 5 + 2) * basePower * (attackStat / defenseStat)) / 50) + 2
    );

    // STAB (Same-Type Attack Bonus)
    if (user.types.includes(moveType)) {
        damage = Math.floor(damage * 1.5);
    }

    // Type Effectiveness
    let multiplier = getTypeEffectiveness(moveType, target.types);
    damage = Math.floor(damage * multiplier);

    return damage;
}

function move(name, type, category, power, accuracy, pp, effect) {
    this.name = name;
    this.type = type;
    this.category = category; // 'physical', 'special', or 'status'
    this.power = power;
    this.accuracy = accuracy;
    this.pp = pp;
    this.effect = effect; // Function defining the move's effect
}


