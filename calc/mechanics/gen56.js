"use strict";
exports.__esModule = true;
var util_1 = require("../util");
var items_1 = require("../items");
var result_1 = require("../result");
var util_2 = require("./util");
function calculateBWXY(gen, attacker, defender, move, field) {
    var _a;
    util_2.checkAirLock(attacker, field);
    util_2.checkAirLock(defender, field);
    util_2.checkForecast(attacker, field.weather);
    util_2.checkForecast(defender, field.weather);
    util_2.checkKlutz(attacker);
    util_2.checkKlutz(defender);
    util_2.checkSeedBoost(attacker, field);
    util_2.checkSeedBoost(defender, field);
    util_2.computeFinalStats(gen, attacker, defender, field, 'def', 'spd', 'spe');
    util_2.checkIntimidate(attacker, defender);
    util_2.checkIntimidate(defender, attacker);
    util_2.checkDownload(attacker, defender);
    util_2.checkDownload(defender, attacker);
    util_2.checkUnleafed(attacker);
    util_2.checkUnleafed(defender);
    util_2.checkBlazeBoost(attacker, move);
    util_2.computeFinalStats(gen, attacker, defender, field, 'atk', 'spa');
    util_2.checkInfiltrator(attacker, field.defenderSide);
    util_2.checkInfiltrator(defender, field.attackerSide);
    var description = {
        attackerName: attacker.name,
        moveName: move.name,
        defenderName: defender.name
    };
    var result = new result_1.Result(gen, attacker, defender, move, field, 0, description);
    if (move.bp === 0) {
        return result;
    }
    if (field.defenderSide.isProtected && !move.bypassesProtect) {
        description.isProtected = true;
        return result;
    }
    if (attacker.hasAbility('Mold Breaker', 'Teravolt', 'Turboblaze')) {
        defender.ability = '';
        description.attackerAbility = attacker.ability;
    }
    var isCritical = move.isCrit && !defender.hasAbility('Battle Armor', 'Shell Armor') && move.usedTimes === 1;
    if (move.name === 'Weather Ball') {
        move.type = field.hasWeather('Sun', 'Harsh Sunshine') ? 'Fire'
            : field.hasWeather('Rain', 'Heavy Rain') ? 'Water'
                : field.hasWeather('Sand') ? 'Rock'
                    : field.hasWeather('Hail') ? 'Ice'
                        : field.hasWeather('New Moon') ? 'Dark'
                    		: 'Normal';
        description.weather = field.weather;
        description.moveType = move.type;
    }
    else if (move.name === 'Judgment' && attacker.item && attacker.item.indexOf('Plate') !== -1) {
        move.type = items_1.getItemBoostType(attacker.item);
    }
    else if (move.name === 'Techno Blast' &&
        attacker.item &&
        attacker.item.indexOf('Drive') !== -1) {
        move.type = items_1.getTechnoBlast(attacker.item);
    }
    else if (move.name === 'Natural Gift' &&
        attacker.item &&
        attacker.item.indexOf('Berry') !== -1) {
        var gift = items_1.getNaturalGift(gen, attacker.item);
        move.type = gift.t;
        move.bp = gift.p;
        description.attackerItem = attacker.item;
        description.moveBP = move.bp;
        description.moveType = move.type;
    }
    else if (move.name === 'Nature Power') {
        move.type =
            field.terrain === 'Electric' ? 'Electric'
                : field.terrain === 'Grassy' ? 'Grass'
                    : field.terrain === 'Misty' ? 'Fairy'
                        : field.terrain === 'Psychic' ? 'Psychic'
                            : 'Normal';
    }
    var isAerilate = false;
    var isPixilate = false;
    var isRefrigerate = false;
    var isNormalize = false;
    var isFoundry = false;
    var isIntoxicate = false;
    var noTypeChange = [
        'Revelation Dance',
        'Judgement',
        'Nature Power',
        'Techo Blast',
        'Multi Attack',
        'Natural Gift',
        'Weather Ball',
    ].indexOf(move.name) !== -1;
    if (!move.isZ && !noTypeChange) {
        isAerilate = attacker.ability === 'Aerilate' && move.type === 'Normal';
        isPixilate = attacker.ability === 'Pixilate' && move.type === 'Normal';
        isRefrigerate = attacker.ability === 'Refrigerate' && move.type === 'Normal';
        isNormalize = attacker.ability === 'Normalize' && !!move.type;
        isFoundry = attacker.ability === "Foundry" && move.type === "Rock";
        isIntoxicate = attacker.ability === "Intoxicate" && move.type === "Normal";
        if (isAerilate) {
            move.type = 'Flying';
        }
        else if (isPixilate) {
            move.type = 'Fairy';
        }
        else if (isRefrigerate) {
            move.type = 'Ice';
        }
        else if (isNormalize) {
            move.type = 'Normal';
        }
        else if (isFoundry) {
            move.type = 'Fire';
        }
        else if (isIntoxicate) {
            move.type = 'Poison';
        }
        if (isPixilate || isRefrigerate || isAerilate || isNormalize || isFoundry || isIntoxicate) {
            description.attackerAbility = attacker.ability;
        }
    }
    if (attacker.hasAbility('Gale Wings') && move.type === 'Flying') {
        move.hasPriority = true;
        description.attackerAbility = attacker.ability;
    }
    var isGhostRevealed = attacker.hasAbility('Scrappy') || field.defenderSide.isForesight;
    var typeEffect1 = util_2.getMoveEffectiveness(gen, move, defender.type1, isGhostRevealed, field.isGravity);
    var typeEffect2 = defender.type2
        ? util_2.getMoveEffectiveness(gen, move, defender.type2, isGhostRevealed, field.isGravity)
        : 1;
    var typeEffectiveness = typeEffect1 * typeEffect2;
    var resistedKnockOffDamage = !defender.item ||
        (defender.named('Giratina-Origin') && defender.hasItem('Griseous Orb')) ||
        (defender.name.indexOf('Arceus') !== -1 && defender.item.indexOf('Plate') !== -1) ||
        (defender.name.indexOf('Genesect') !== -1 && defender.item.indexOf('Drive') !== -1) ||
        (defender.named('Groudon', 'Groudon-Primal') && defender.hasItem('Red Orb')) ||
        (defender.named('Kyogre', 'Kyogre-Primal') && defender.hasItem('Blue Orb')) ||
        (defender.name.indexOf('-Armored') !== -1 && defender.item.indexOf('Armor') !== -1);
    if (!resistedKnockOffDamage && defender.item) {
        var item = gen.items.get(util_1.toID(defender.item));
        resistedKnockOffDamage = !!(item.megaEvolves && defender.name.indexOf(item.megaEvolves) !== -1);
    }
    if (attacker.ability === 'Ancient Presence') {
        typeEffectiveness = 1;
        description.attackerAbility = attacker.ability
    }
    else if (defender.ability === 'Ethereal Shroud') {
    	if ((move.type === "Normal" || move.type === "Fighting") && !(attacker.ability === "Scrappy" || field.isForesight)) {
    		typeEffectiveness = 0;
    	}
    	else if (move.type === "Poison" || move.type === "Bug") {
    		typeEffectiveness *= 0.5;
    	}
    	description.defenderAbility = defender.ability
    }
    else if (defender.ability === 'Omnitype') {
        typeEffectiveness = 1;
        var types = ['Normal', 'Grass', 'Fire', 'Water', 'Electric', 'Ice', 'Flying', 'Bug', 'Poison', 'Ground', 'Rock', 'Fighting', 'Psychic', 'Ghost', 'Dragon', 'Dark', 'Steel', 'Fairy'];
        for (var i = 0; i < 18; i++) {
        	typeEffectiveness *= util_2.getMoveEffectiveness(gen, move, types[i], attacker.ability === 'Scrappy' || field.defenderSide.isForesight, field.isGravity);
        }
        description.defenderAbility = defender.ability
    }
    if (typeEffectiveness === 0 && move.name === 'Thousand Arrows') {
        typeEffectiveness = 1;
    }
    else if (typeEffectiveness === 0 && defender.hasItem('Ring Target')) {
        var effectiveness = gen.types.get(util_1.toID(move.type)).effectiveness;
        if (effectiveness[defender.type1] === 0) {
            typeEffectiveness = typeEffect2;
        }
        else if (defender.type2 && effectiveness[defender.type2] === 0) {
            typeEffectiveness = typeEffect1;
        }
    }
    if (attacker.ability === 'Irrelephant' && typeEffectiveness === 0) {
        var effectiveness = gen.types.get(util_1.toID(move.type)).effectiveness;
        if (effectiveness[defender.type1] === 0) {
            typeEffectiveness = typeEffect2;
        }
        else if (defender.type2 && effectiveness[defender.type2] === 0) {
            typeEffectiveness = typeEffect1;
        }
        description.attackerAbility = attacker.ability
    }
    if (move.name === 'Achilles Heel' && typeEffectiveness !== 0 && attacker.ability !== 'Ancient Presence') {
        typeEffectiveness = 2;
    }
    if (typeEffectiveness === 0) {
        return result;
    }
    if (move.name === 'Sky Drop' &&
        (defender.hasType('Flying') || (gen.num > 5 && defender.weight >= 200) || field.isGravity)) {
        return result;
    }
    if (move.name === 'Synchronoise' &&
        !defender.hasType(attacker.type1) &&
        (!attacker.type2 || !defender.hasType(attacker.type2))) {
        return result;
    }
    if (move.name === 'Dream Eater' && !defender.hasStatus('Asleep')) {
        return result;
    }
    if ((defender.hasAbility('Wonder Guard') && typeEffectiveness <= 1) ||
        (move.type === 'Grass' && defender.hasAbility('Sap Sipper')) ||
        (move.type === 'Fire' && defender.hasAbility('Flash Fire')) ||
        (move.type === 'Water' && defender.hasAbility('Dry Skin', 'Storm Drain', 'Water Absorb', 'Vaporization')) ||
        (move.type === 'Flying' && defender.hasAbility('Wind Force')) ||
        (move.type === 'Electric' &&
            defender.hasAbility('Lightning Rod', 'Motor Drive', 'Volt Absorb')) ||
        (move.type === 'Ground' &&
            !field.isGravity &&
            move.name !== 'Thousand Arrows' &&
            defender.hasAbility('Levitate')) ||
        (move.isBullet && defender.hasAbility('Bulletproof')) ||
        (move.isSound && defender.hasAbility('Soundproof'))) {
        description.defenderAbility = defender.ability;
        return result;
    }
    if (field.weather === 'Strong Winds' &&
        defender.hasType('Flying') &&
        gen.types.get(util_1.toID(move.type)).effectiveness['Flying'] > 1) {
        typeEffectiveness /= 2;
        description.weather = field.weather;
    }
    if (move.type === 'Ground' &&
        move.name !== 'Thousand Arrows' &&
        !field.isGravity &&
        defender.hasItem('Air Balloon')) {
        description.defenderItem = defender.item;
        return result;
    }
    if (move.hasPriority && field.terrain === 'Psychic' && util_2.isGrounded(defender, field)) {
        description.terrain = field.terrain;
        return result;
    }
    description.HPEVs = defender.evs.hp + ' HP';
    var fixedDamage = util_2.handleFixedDamageMoves(attacker, move);
    if (fixedDamage) {
    	if (attacker.hasAbility('Parental Bond')) {
    		result.damage = [fixedDamage, fixedDamage];
    		description.attackerAbility = attacker.ability;
    	}
    	else {
    		result.damage = fixedDamage;
    	}
    	return result;
    }
    if (move.name === 'Final Gambit') {
    	result.damage = attacker.curHP;
        return result;
    }
    if (move.hits > 1) {
        description.hits = move.hits;
    }
    var turnOrder = attacker.stats.spe > defender.stats.spe ? 'FIRST' : 'LAST';
    var basePower;
    switch (move.name) {
        case 'Payback':
            basePower = turnOrder === 'LAST' ? 100 : 50;
            description.moveBP = basePower;
            break;
        case 'Electro Ball':
            var r = Math.floor(attacker.stats.spe / defender.stats.spe);
            basePower = r >= 4 ? 150 : r >= 3 ? 120 : r >= 2 ? 80 : r >= 1 ? 60 : 40;
            description.moveBP = basePower;
            break;
        case 'Gyro Ball':
            basePower = Math.min(150, Math.floor((25 * defender.stats.spe) / attacker.stats.spe));
            description.moveBP = basePower;
            break;
        case 'Punishment':
            basePower = Math.min(200, 60 + 20 * util_2.countBoosts(gen, defender.boosts));
            description.moveBP = basePower;
            break;
        case 'Low Kick':
        case 'Grass Knot':
            var w = defender.weight * util_2.getWeightFactor(defender);
            basePower = w >= 200 ? 120 : w >= 100 ? 100 : w >= 50 ? 80 : w >= 25 ? 60 : w >= 10 ? 40 : 20;
            description.moveBP = basePower;
            break;
        case 'Hex':
            basePower = move.bp * (!defender.hasStatus('Healthy') ? 2 : 1);
            description.moveBP = basePower;
            break;
        case 'Heavy Slam':
        case 'Heat Crash':
            var wr = (attacker.weight * util_2.getWeightFactor(attacker)) /
                (defender.weight * util_2.getWeightFactor(defender));
            basePower = wr >= 5 ? 120 : wr >= 4 ? 100 : wr >= 3 ? 80 : wr >= 2 ? 60 : 40;
            description.moveBP = basePower;
            break;
        case 'Stored Power':
        case 'Power Trip':
            basePower = 20 + 20 * util_2.countBoosts(gen, attacker.boosts);
            description.moveBP = basePower;
            break;
        case 'Acrobatics':
            basePower = attacker.hasItem('Flying Gem') || !attacker.item ? 110 : 55;
            description.moveBP = basePower;
            break;
        case 'Assurance':
        	basePower = move.bp * (defender.hasAbility('Parental Bond (Child)') ? 2 : 1);
            break;
        case 'Wake-Up Slap':
            basePower = move.bp * (defender.hasStatus('Asleep') ? 2 : 1);
            description.moveBP = basePower;
            break;
        case 'Weather Ball':
            basePower = field.weather && !field.hasWeather('Strong Winds') ? 100 : 50;
            description.moveBP = basePower;
            break;
        case 'Fling':
            basePower = items_1.getFlingPower(attacker.item);
            description.moveBP = basePower;
            description.attackerItem = attacker.item;
            break;
        case 'Eruption':
        case 'Water Spout':
            basePower = Math.max(1, Math.floor((150 * attacker.curHP) / attacker.maxHP()));
            description.moveBP = basePower;
            break;
        case 'Flail':
        case 'Reversal':
            var p = Math.floor((48 * attacker.curHP) / attacker.maxHP());
            basePower = p <= 1 ? 200 : p <= 4 ? 150 : p <= 9 ? 100 : p <= 16 ? 80 : p <= 32 ? 40 : 20;
            description.moveBP = basePower;
            break;
        case 'Nature Power':
            basePower =
                field.terrain && ['Electric', 'Grassy', 'Psychic'].indexOf(field.terrain) !== -1
                    ? 90
                    : field.terrain === 'Misty'
                        ? 95
                        : 80;
            break;
        case 'Water Shuriken':
            basePower = attacker.name === 'Greninja-Ash' && attacker.hasAbility('Battle Bond') ? 20 : 15;
            description.moveBP = basePower;
            break;
        case 'Crush Grip':
        case 'Wring Out':
            basePower = 100 * Math.floor((defender.curHP * 4096) / defender.maxHP());
            basePower = Math.floor(Math.floor((120 * basePower + 2048 - 1) / 4096) / 100) || 1;
            description.moveBP = basePower;
            break;
        default:
            basePower = move.bp;
    }
    var bpMods = [];
    if ((attacker.hasAbility('Technician') && basePower <= 60) ||
        (attacker.hasAbility('Flare Boost') &&
            attacker.hasStatus('Burned') &&
            move.category === 'Special') ||
        (attacker.hasAbility('Toxic Boost') &&
            attacker.hasStatus('Poisoned', 'Badly Poisoned') &&
            move.category === 'Physical')) {
        bpMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    }
    else if (attacker.hasAbility('Analytic') && (turnOrder !== 'FIRST' || field.defenderSide.isSwitching)) {
        bpMods.push(0x14cd);
        description.attackerAbility = attacker.ability;
    }
    else if (attacker.hasAbility('Sand Force') &&
        field.hasWeather('Sand') &&
        ['Rock', 'Ground', 'Steel'].indexOf(move.type) !== -1) {
        bpMods.push(0x14cd);
        description.attackerAbility = attacker.ability;
        description.weather = field.weather;
    }
    else if ((attacker.hasAbility('Reckless') &&
        (typeof move.hasRecoil === 'number' || move.hasRecoil === 'crash')) ||
        (attacker.hasAbility('Iron Fist') && move.isPunch)) {
        bpMods.push(0x1333);
        description.attackerAbility = attacker.ability;
    }
    else if ((attacker.hasAbility('Amplifier') && move.isSound)) {
        bpMods.push(0x1400);
        description.attackerAbility = attacker.ability;
    }
    if (defender.hasAbility('Heatproof') && move.type === 'Fire') {
        bpMods.push(0x800);
        description.defenderAbility = defender.ability;
    }
    else if (defender.hasAbility('Dry Skin') && move.type === 'Fire') {
        bpMods.push(0x1400);
        description.defenderAbility = defender.ability;
    }
    if (attacker.hasAbility('Sheer Force') && move.hasSecondaryEffect) {
        bpMods.push(0x14cd);
        description.attackerAbility = attacker.ability;
    }
    if (attacker.hasAbility('Rivalry') && [attacker.gender, defender.gender].indexOf('N') === -1) {
        if (attacker.gender === defender.gender) {
            bpMods.push(0x1400);
            description.rivalry = 'buffed';
        }
        else {
            bpMods.push(0xccd);
            description.rivalry = 'nerfed';
        }
        description.attackerAbility = attacker.ability;
    }
    var isSTAB = attacker.hasType(move.type);
    if (attacker.item && items_1.getItemBoostType(attacker.item) === move.type) {
        bpMods.push(0x1333);
        description.attackerItem = attacker.item;
    }
    else if ((attacker.hasItem('Muscle Band') && move.category === 'Physical') ||
        (attacker.hasItem('Wise Glasses') && move.category === 'Special')) {
        bpMods.push(0x1199);
        description.attackerItem = attacker.item;
    }
    else if ((attacker.hasItem('Adamant Orb') && attacker.named('Dialga') && ['Steel', 'Dragon'].indexOf(move.type) !== -1) ||
        (attacker.hasItem('Lustrous Orb') && attacker.named('Palkia') && ['Water', 'Dragon'].indexOf(move.type) !== -1) ||
        (attacker.hasItem('Griseous Orb') && attacker.named('Giratina-Origin') && ['Ghost', 'Dragon'].indexOf(move.type) !== -1)) {
        bpMods.push(0x1333);
        description.attackerItem = attacker.item;
    }
    else if (attacker.item === move.type + ' Gem') {
        bpMods.push(gen.num > 5 ? 0x14cd : 0x1800);
        description.attackerItem = attacker.item;
    }
    if ((move.name === 'Facade' &&
        attacker.hasStatus('Burned', 'Paralyzed', 'Poisoned', 'Badly Poisoned')) ||
        (move.name === 'Brine' && defender.curHP <= defender.maxHP() / 2) ||
        (move.name === 'Venoshock' && defender.hasStatus('Poisoned', 'Badly Poisoned'))) {
        bpMods.push(0x2000);
        description.moveBP = move.bp * 2;
    }
    else if (move.name === 'Solar Beam' && field.hasWeather('Rain', 'Heavy Rain', 'Sand', 'Hail')) {
        bpMods.push(0x800);
        description.moveBP = move.bp / 2;
        description.weather = field.weather;
    }
    else if (move.name === 'Solar Beam' && field.hasWeather('New Moon')) {
        bpMods.push(0x4CD);
        description.moveBP = move.bp * 0.3;
        description.weather = field.weather;
    }
    else if (gen.num > 5 && move.name === 'Knock Off' && !resistedKnockOffDamage) {
        bpMods.push(0x1800);
        description.moveBP = move.bp * 1.5;
    }
    if (field.attackerSide.isHelpingHand) {
        bpMods.push(0x1800);
        description.isHelpingHand = true;
    }
    if (field.attackerSide.isBattery && move.category === 'Special') {
        bpMods.push(0x14cc);
        description.isBattery = true;
    }
    if (isAerilate || isPixilate || isRefrigerate || isNormalize || isFoundry || isIntoxicate) {
        bpMods.push(0x14cd);
        description.attackerAbility = attacker.ability;
    }
    else if ((attacker.hasAbility('Mega Launcher') && move.isPulse) ||
        (attacker.hasAbility('Strong Jaw') && move.isBite)) {
        bpMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    }
    else if (attacker.hasAbility('Spectral Jaws') && move.isBite) {
        bpMods.push(0x14cd);
        description.attackerAbility = attacker.ability;
    }
    else if (attacker.hasAbility('Tough Claws') && move.makesContact) {
        bpMods.push(0x14cd);
        description.attackerAbility = attacker.ability;
    }
    var isAttackerAura = attacker.ability === move.type + ' Aura';
    var isDefenderAura = defender.ability === move.type + ' Aura';
    var auraModifiers = [0x1547, 0x0c00];
    if (isAttackerAura || isDefenderAura) {
    	if (field.hasWeather('New Moon')) {
    		if (move.type === 'Dark') {
    			auraModifiers = [0x1aab, 0x099a];
    		}
    		else if (move.type === 'Fairy') {
    			auraModifiers = [0x1000, 0x1000];
    		}
    	}
        if (attacker.hasAbility('Aura Break') || defender.hasAbility('Aura Break')) {
            bpMods.push(auraModifiers[1]);
            description.attackerAbility = attacker.ability;
            description.defenderAbility = defender.ability;
        }
        else {
            bpMods.push(auraModifiers[0]);
            if (isAttackerAura) {
                description.attackerAbility = attacker.ability;
            }
            if (isDefenderAura) {
                description.defenderAbility = defender.ability;
            }
        }
    }
    // It's not actually clear if the terrain modifiers are base damage mods like weather or are
    // base power mods like in Gen 7+, but the research doesn't exist for this yet so we match PS here
    if (util_2.isGrounded(attacker, field)) {
      if (field.terrain === 'Electric' && move.type === 'Electric') {
        bpMods.push(0x1800);
        description.terrain = field.terrain;
      } else if (field.terrain === 'Grassy' && move.type === 'Grass') {
        bpMods.push(0x1800);
        description.terrain = field.terrain;
      } else if (field.terrain === 'Psychic' && move.type === 'Psychic') {
        bpMods.push(0x1800);
        description.terrain = field.terrain;
      }
    }
    if (util_2.isGrounded(defender, field)) {
      if (field.terrain === 'Misty' && move.type === 'Dragon') {
        bpMods.push(0x800);
        description.terrain = field.terrain;
      } else if (field.terrain === 'Grassy' && ['Bulldoze', 'Earthquake'].indexOf(move.name) !== -1) {
        bpMods.push(0x800);
        description.terrain = field.terrain;
      }
    }
    basePower = util_2.OF16(Math.max(1, util_2.pokeRound((basePower * util_2.chainMods(bpMods)) / 0x1000)));
    var attack;
    var attackSource = move.name === 'Foul Play' ? defender : attacker;
    if (move.usesHighestAttackStat) {
        move.category = attackSource.stats.atk > attackSource.stats.spa ? 'Physical' : 'Special';
    }
    var attackStat = (move.category === 'Special' || (move.isBite && attacker.ability === 'Spectral Jaws')) ? 'spa' : 'atk';
    description.attackEVs =
        move.name === 'Foul Play'
            ? util_2.getEVDescriptionText(gen, defender, attackStat, defender.nature)
            : util_2.getEVDescriptionText(gen, attacker, attackStat, attacker.nature);
    if (attackSource.boosts[attackStat] === 0 ||
        (isCritical && attackSource.boosts[attackStat] < 0)) {
        attack = attackSource.rawStats[attackStat];
    }
    else if (defender.hasAbility('Unaware')) {
        attack = attackSource.rawStats[attackStat];
        description.defenderAbility = defender.ability;
    }
    else {
        attack = attackSource.stats[attackStat];
        description.attackBoost = attackSource.boosts[attackStat];
    }
    if (attacker.hasAbility('Hustle') && move.category === 'Physical') {
        attack = util_2.pokeRound((attack * 3) / 2);
        description.attackerAbility = attacker.ability;
    }
    if (attacker.name.indexOf('-Burst') !== -1 || (defender.name.indexOf('-Burst') !== -1 && move.name === 'Foul Play')) {
    	attack = Math.floor(attack * 1.1);
    }
    var atMods = [];
    if (defender.hasAbility('Thick Fat') && (move.type === 'Fire' || move.type === 'Ice')) {
        atMods.push(0x800);
        description.defenderAbility = defender.ability;
    }
    if (move.name === 'Pursuit' && field.defenderSide.isSwitching) {
    	if (attacker.hasAbility('Technician')) {//technician negates switching boost
    		atMods.push(0x1000);
    	} else {
    		atMods.push(0x2000)
    		description.isSwitching = true;
    	}
    }
    if ((attacker.hasAbility('Guts') &&
        !attacker.hasStatus('Healthy') &&
        move.category === 'Physical') ||
        (attacker.curHP <= attacker.maxHP() / 3 &&
            ((attacker.hasAbility('Overgrow') && move.type === 'Grass') ||
                (attacker.hasAbility('Blaze') && move.type === 'Fire') ||
                (attacker.hasAbility('Torrent') && move.type === 'Water') ||
                (attacker.hasAbility('Swarm') && move.type === 'Bug') ||
                (attacker.hasAbility('Psycho Call') && move.type === 'Psychic') ||
                (attacker.hasAbility('Spirit Call') && move.type === 'Ghost') ||
                (attacker.hasAbility('Shadow Call') && move.type === 'Dark'))) ||
        (move.category === 'Special' && attacker.abilityOn && attacker.hasAbility('Plus', 'Minus')) ||
        (attacker.hasAbility('Shadow Synergy') && move.type === 'Dark')) {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    }
    else if (attacker.hasAbility('Flash Fire') && attacker.abilityOn && move.type === 'Fire') {
        atMods.push(0x1800);
        description.attackerAbility = 'Flash Fire';
    }
    else if ((attacker.hasAbility('Solar Power') &&
        field.hasWeather('Sun', 'Harsh Sunshine') &&
        move.category === 'Special') ||
        (attacker.hasAbility('Absolution') && 
        	field.hasWeather('New Moon') &&
            move.category === 'Special') ||
        (attacker.hasAbility('Supercell') && 
        	field.hasWeather('Rain', 'Heavy Rain', 'New Moon') &&
            move.category === 'Special') ||
        (attacker.named('Cherrim') &&
            attacker.hasAbility('Flower Gift') &&
            field.hasWeather('Sun', 'Harsh Sunshine') &&
            move.category === 'Physical')) {
        atMods.push(0x1800);
        description.attackerAbility = attacker.ability;
        description.weather = field.weather;
    }
    else if ((attacker.hasAbility('Defeatist') && attacker.curHP <= attacker.maxHP() / 2) ||
        (attacker.hasAbility('Slow Start') && attacker.abilityOn && move.category === 'Physical')) {
        atMods.push(0x800);
        description.attackerAbility = attacker.ability;
    }
    else if ((attacker.hasAbility('Huge Power', 'Pure Power') && move.category === 'Physical') ||
    	(attacker.hasAbility('Athenian') && move.category === 'Special')) {
        atMods.push(0x2000);
        description.attackerAbility = attacker.ability;
    }
    if ((attacker.hasItem('Thick Club') &&
        attacker.named('Cubone', 'Marowak', 'Marowak-Alola') &&
        move.category === 'Physical') ||
        (attacker.hasItem('Deep Sea Tooth') &&
            attacker.named('Clamperl') &&
            move.category === 'Special') ||
        (attacker.hasItem('Light Ball') && attacker.named('Pikachu') && !move.isZ)) {
        atMods.push(0x2000);
        description.attackerItem = attacker.item;
    }
    else if ((attacker.hasItem('Soul Dew') &&
        attacker.named('Latios', 'Latias', 'Latios-Mega', 'Latias-Mega') &&
        move.category === 'Special') ||
        (attacker.hasItem('Choice Band') && move.category === 'Physical') ||
        (attacker.hasItem('Choice Specs') && move.category === 'Special')) {
        atMods.push(0x1800);
        description.attackerItem = attacker.item;
    }
    attack = util_2.OF16(Math.max(1, util_2.pokeRound((attack * util_2.chainMods(atMods)) / 0x1000)));
    var defense;
    var hitsPhysical = (move.category === 'Physical' || move.dealsPhysicalDamage) && !(move.isBite && attacker.ability === 'Spectral Jaws');
    var defenseStat = hitsPhysical ? 'def' : 'spd';
    description.defenseEVs = util_2.getEVDescriptionText(gen, defender, defenseStat, defender.nature);
    if (defender.boosts[defenseStat] === 0 ||
        (isCritical && defender.boosts[defenseStat] > 0) ||
        move.ignoresDefenseBoosts) {
        defense = defender.rawStats[defenseStat];
    }
    else if (attacker.hasAbility('Unaware')) {
        defense = defender.rawStats[defenseStat];
        description.attackerAbility = attacker.ability;
    }
    else {
        defense = defender.stats[defenseStat];
        description.defenseBoost = defender.boosts[defenseStat];
    }
    if (field.hasWeather('Sand') && defender.hasType('Rock') && !hitsPhysical) {
        defense = util_2.pokeRound((defense * 3) / 2);
        description.weather = field.weather;
    }
    var dfMods = [];
    if (defender.hasAbility('Marvel Scale') && defender.status !== 'Healthy' && hitsPhysical) {
        dfMods.push(0x1800);
        description.defenderAbility = defender.ability;
    }
    else if (defender.named('Cherrim') &&
        defender.hasAbility('Flower Gift') &&
        field.hasWeather('Sun', 'Harsh Sunshine') &&
        !hitsPhysical) {
        dfMods.push(0x1800);
        description.defenderAbility = defender.ability;
        description.weather = field.weather;
    }
    if (field.terrain === 'Grassy' && defender.hasAbility('Grass Pelt') && hitsPhysical) {
        dfMods.push(0x1800);
        description.defenderAbility = defender.ability;
    }
    if ((!hitsPhysical && defender.named('Latios', 'Latias') && defender.hasItem('Soul Dew')) ||
        (defender.hasItem('Eviolite') && ((_a = gen.species.get(util_1.toID(defender.name))) === null || _a === void 0 ? void 0 : _a.canEvolve)) ||
        (!hitsPhysical && defender.hasItem('Assault Vest'))) {
        dfMods.push(0x1800);
        description.defenderItem = defender.item;
    }
    if ((defender.hasItem('Metal Powder') && defender.named('Ditto') && hitsPhysical) ||
        (defender.hasItem('Deep Sea Scale') && defender.named('Clamperl') && !hitsPhysical)) {
        dfMods.push(0x2000);
        description.defenderItem = defender.item;
    }
    if (defender.hasAbility('Fur Coat') && hitsPhysical) {
        dfMods.push(0x2000);
        description.defenderAbility = defender.ability;
    }
    if (defender.name.indexOf('-Burst') !== -1) {
    	defense = Math.floor(defense * 1.1);
    }
    defense = util_2.OF16(Math.max(1, util_2.pokeRound((defense * util_2.chainMods(dfMods)) / 0x1000)));
    var baseDamage = util_2.getBaseDamage(attacker.level, basePower, attack, defense);
    if (field.gameType !== 'Singles' && move.isSpread) {
        baseDamage = util_2.pokeRound(util_2.OF32(baseDamage * 0xc00) / 0x1000);
    }
    if (attacker.hasAbility('Parental Bond (Child)')) {
        baseDamage = util_2.pokeRound(util_2.OF32(baseDamage * 0x800) / 0x1000);
    }
    if ((field.hasWeather('Sun', 'Harsh Sunshine') && move.type === 'Fire') ||
        (field.hasWeather('Rain', 'Heavy Rain') && move.type === 'Water')) {
    	baseDamage = util_2.pokeRound(util_2.OF32(baseDamage * 0x1800) / 0x1000);;
        description.weather = field.weather;
    }
    else if ((field.hasWeather('Sun') && move.type === 'Water') ||
        (field.hasWeather('Rain') && move.type === 'Fire')) {
        baseDamage = util_2.pokeRound(util_2.OF32(baseDamage * 0x800) / 0x1000);;
        description.weather = field.weather;
    }
    else if ((field.hasWeather('Harsh Sunshine') && move.type === 'Water') ||
        (field.hasWeather('Heavy Rain') && move.type === 'Fire')) {
        return result;
    }
    else if (field.hasWeather('New Moon') && (move.type === 'Ghost' || move.type === 'Dark')) {
        baseDamage = util_2.pokeRound(util_2.OF32(baseDamage * 0x159a) / 0x1000);
        description.weather = field.weather;
    }
    else if (field.hasWeather('New Moon') && move.type === 'Fairy') {
        baseDamage = util_2.pokeRound(util_2.OF32(baseDamage * 0xc00) / 0x1000);
        description.weather = field.weather;
    }
    if (isCritical) {
        baseDamage = Math.floor(util_2.OF32(baseDamage * (gen.num > 5 ? 1.5 : 2)));
        description.isCritical = isCritical;
    }
    var stabMod = 0x1000;
    if (isSTAB) {
        if (attacker.hasAbility('Adaptability')) {
            stabMod = 0x2000;
            description.attackerAbility = attacker.ability;
        }
        else {
            stabMod = 0x1800;
        }
    }
    else if (attacker.hasAbility('Protean', 'Ancient Presence')) {
        stabMod = 0x1800;
        description.attackerAbility = attacker.ability;
    }
    var applyBurn = attacker.hasStatus('Burned') &&
        move.category === 'Physical' &&
        !attacker.hasAbility('Guts') &&
        !move.ignoresBurn;
    description.isBurned = applyBurn;
    var finalMods = [];
    if (field.defenderSide.isReflect && move.category === 'Physical' && !isCritical) {
        finalMods.push(field.gameType !== 'Singles' ? (gen.num > 5 ? (field.weather === 'New Moon' ? 0x888 : 0xaac) : 0xa8f) : (field.weather === 'New Moon' ? 0x666 : 0x800));
        description.isReflect = true;
    }
    else if (field.defenderSide.isLightScreen && move.category === 'Special' && !isCritical) {
        finalMods.push(field.gameType !== 'Singles' ? (gen.num > 5 ? (field.weather === 'New Moon' ? 0x888 : 0xaac) : 0xa8f) : (field.weather === 'New Moon' ? 0x666 : 0x800));
        description.isLightScreen = true;
    }
    if (defender.hasAbility('Multiscale') &&
        defender.curHP === defender.maxHP() &&
        !field.defenderSide.isSR &&
        (!field.defenderSide.spikes || defender.hasType('Flying')) &&
        !attacker.hasAbility('Parental Bond (Child)')) {
        finalMods.push(0x800);
        description.defenderAbility = defender.ability;
    }
    if (attacker.hasAbility('Tinted Lens') && typeEffectiveness < 1) {
        finalMods.push(0x2000);
        description.attackerAbility = attacker.ability;
    }
    if (field.defenderSide.isFriendGuard) {
        finalMods.push(0xc00);
        description.isFriendGuard = true;
    }
    if (attacker.hasAbility('Sniper') && isCritical) {
        finalMods.push(0x1800);
        description.attackerAbility = attacker.ability;
    }
    if (defender.hasAbility('Solid Rock', 'Filter') && typeEffectiveness > 1) {
        finalMods.push(0xc00);
        description.defenderAbility = defender.ability;
    }
    if (attacker.hasItem('Metronome') && (move.metronomeCount || 0) >= 1) {
        var metronomeCount = Math.floor(move.metronomeCount);
        if (metronomeCount <= 4) {
            finalMods.push(0x1000 + metronomeCount * 0x333);
        }
        else {
            finalMods.push(0x2000);
        }
        description.attackerItem = attacker.item;
    }
    if (attacker.hasAbility('Pendulum') && (move.metronomeCount || 0) >= 1) {
        var metronomeCount = Math.floor(move.metronomeCount);
        if (metronomeCount <= 4) {
            finalMods.push(0x1000 + metronomeCount * 0x333);
        }
        else {
            finalMods.push(0x2000);
        }
        description.attackerAbility = attacker.ability;
    }
    if (attacker.hasItem('Expert Belt') && typeEffectiveness > 1 && !move.isZ) {
        finalMods.push(0x1333);
        description.attackerItem = attacker.item;
    }
    else if (attacker.hasItem('Life Orb')) {
        finalMods.push(0x14cc);
        description.attackerItem = attacker.item;
    }
    if (items_1.getBerryResistType(defender.item) === move.type &&
        (typeEffectiveness > 1 || move.type === 'Normal') &&
        !attacker.hasAbility('Unnerve')) {
        finalMods.push(0x800);
        description.defenderItem = defender.item;
    }
    if (field.defenderSide.isProtected &&
        move.isZ &&
        attacker.item &&
        attacker.item.indexOf(' Z') !== -1) {
        finalMods.push(0x400);
        description.isProtected = true;
    }
    var finalMod = util_2.chainMods(finalMods);
    var childDamage;
	var regurgitationDamage;
    if (attacker.hasAbility('Parental Bond') && move.hits === 1 && !(field.gameType !== 'Singles' && move.isSpread)) {
        var child = attacker.clone();
        child.ability = 'Parental Bond (Child)';
        util_2.checkMultihitBoost(gen, child, defender, move, field, description);
        childDamage = calculateBWXY(gen, child, defender, move, field).damage;
        description.attackerAbility = attacker.ability;
    }
    if (attacker.hasAbility('Regurgitation') && move.hits === 1) {
        var child = attacker.clone();
		var regurgitationMove = new Move(move.gen, 'Regurgitation', {
			bp: 40,
			category: move.category,
			type: 'Psychic',
            isCrit: move.isCrit
        });
		switch (attacker.name) {
			case 'Delta Muk (Horsea)':
				regurgitationMove.type = 'Water';
				break;
			case 'Delta Muk (Bellsprout)':
				regurgitationMove.type = 'Grass';
				break;
			case 'Delta Muk (Magby)':
				regurgitationMove.type = 'Fire';
				break;
			case 'Delta Muk (Deino)':
				regurgitationMove.type = 'Dark';
				break;
			case 'Delta Muk (Whismur)':
				regurgitationMove.type = 'Normal';
				break;
			default:
				regurgitationMove.type = 'Psychic';
		}
        child.ability = 'Regurgitation (Second hit)';
        util_2.checkMultihitBoost(gen, child, defender, regurgitationMove, field, description);
        regurgitationDamage = calculateBWXY(gen, child, defender, regurgitationMove, field).damage;
        description.attackerAbility = attacker.ability;
    }
    var damage = [];
    for (var i = 0; i < 16; i++) {
        damage[i] = util_2.getFinalDamage(baseDamage, i, typeEffectiveness, applyBurn, stabMod, finalMod);
        if (attacker.ability != null && attacker.ability.indexOf('Lernean ') === 0 &&
            move.hits === 1 &&
            ['Seismic Toss', 'Night Shade', 'Final Gambit', 'Self-Destruct', 'Explosion', 'Natural Gift', 'Fling'].indexOf(move) === -1) {
            var multiplier = 1.15 + 0.075 * (parseInt(attacker.ability.substring(9, 10)) - 5);
            damage[i] = Math.floor(damage[i] * multiplier);
            description.attackerAbility = attacker.ability;
        }
    }
    if (move.dropsStats && (move.usedTimes || 0) > 1) {
    	console.log("Testing stat-dropping moves");
        var simpleMultiplier = attacker.hasAbility('Simple') ? 2 : 1;
        description.moveTurns = 'over ' + move.usedTimes + ' turns';
        var hasWhiteHerb = attacker.item === 'White Herb';
        var usedWhiteHerb = false;
        var dropCount = attacker.boosts[attackStat];
        var _loop_1 = function (times) {
            console.log(attack);
            console.log(dropCount);
        	var newAttack = util_2.getModifiedStat(attack, dropCount);
        	console.log(newAttack);
            var damageMultiplier = 0;
            damage = damage.map(function (affectedAmount) {
                if (times) {
                    var newBaseDamage = util_2.getBaseDamage(attacker.level, basePower, newAttack, defense);
                    var newFinalDamage = util_2.getFinalDamage(newBaseDamage, damageMultiplier, typeEffectiveness, applyBurn, stabMod, finalMod);
                    damageMultiplier++;
                    return affectedAmount + newFinalDamage;
                }
                return affectedAmount;
            });
            if (attacker.hasAbility('Contrary')) {
                dropCount = Math.min(6, dropCount + move.dropsStats);
                description.attackerAbility = attacker.ability;
            }
            else {
                dropCount = Math.max(-6, dropCount - move.dropsStats * simpleMultiplier);
                if (attacker.hasAbility('Simple')) {
                    description.attackerAbility = attacker.ability;
                }
            }
            if (hasWhiteHerb && attacker.boosts[attackStat] < 0 && !usedWhiteHerb) {
                dropCount += move.dropsStats * simpleMultiplier;
                usedWhiteHerb = true;
                description.attackerItem = attacker.item;
            }
        };
        for (var times = 0; times < move.usedTimes; times++) {
            _loop_1(times);
        }
    }
    description.attackBoost = move.name === 'Foul Play' ? defender.boosts[attackStat] : attacker.boosts[attackStat];
    result.damage = childDamage ? [damage, childDamage] : regurgitationDamage ? [damage, regurgitationDamage] : damage;
	return result;
}
exports.calculateBWXY = calculateBWXY;
//# sourceMappingURL=gen56.js.map