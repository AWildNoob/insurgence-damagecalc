"use strict";
var __spreadArrays = (this && this.__spreadArrays) || function () {
    for (var s = 0, i = 0, il = arguments.length; i < il; i++) s += arguments[i].length;
    for (var r = Array(s), k = 0, i = 0; i < il; i++)
        for (var a = arguments[i], j = 0, jl = a.length; j < jl; j++, k++)
            r[k] = a[j];
    return r;
};
exports.__esModule = true;
var util_1 = require("../util");
var stats_1 = require("../stats");
var EV_ITEMS = [
    'Macho Brace',
    'Power Anklet',
    'Power Band',
    'Power Belt',
    'Power Bracer',
    'Power Lens',
    'Power Weight',
];
function isGrounded(pokemon, field) {
    return (field.isGravity ||
        (!pokemon.hasType('Flying') &&
            !pokemon.hasAbility('Levitate')&&
            !pokemon.hasAbility('Omnitype') &&
            !pokemon.hasItem('Air Balloon')));
}
exports.isGrounded = isGrounded;
function getModifiedStat(stat, mod, gen) {
    var boostTable = [1, 1.5, 2, 2.5, 3, 3.5, 4];
    if (gen && gen.num < 3) {
        if (mod >= 0) {
            stat = Math.floor(stat * boostTable[mod]);
        }
        else {
            var numerators = [100, 66, 50, 40, 33, 28, 25];
            stat = Math.floor((stat * numerators[-mod]) / 100);
        }
        return Math.min(999, Math.max(1, stat));
    }
    if (mod >= 0) {
        stat = Math.floor(stat * boostTable[mod]);
    }
    else {
        stat = Math.floor(stat / boostTable[-mod]);
    }
    return stat;
}
exports.getModifiedStat = getModifiedStat;
function computeFinalStats(gen, attacker, defender, field) {
    var stats = [];
    for (var _i = 4; _i < arguments.length; _i++) {
        stats[_i - 4] = arguments[_i];
    }
    var sides = [[attacker, field.attackerSide], [defender, field.defenderSide]];
    for (var _a = 0, sides_1 = sides; _a < sides_1.length; _a++) {
        var _b = sides_1[_a], pokemon = _b[0], side = _b[1];
        for (var _c = 0, stats_2 = stats; _c < stats_2.length; _c++) {
            var stat = stats_2[_c];
            if (stat === 'spe') {
                pokemon.stats.spe = getFinalSpeed(gen, pokemon, field, side);
            }
            else {
                pokemon.stats[stat] = getModifiedStat(pokemon.rawStats[stat], pokemon.boosts[stat], gen);
            }
        }
    }
}
exports.computeFinalStats = computeFinalStats;
function getFinalSpeed(gen, pokemon, field, side) {
    var weather = field.weather || '';
    var terrain = field.terrain;
    var speed = getModifiedStat(pokemon.rawStats.spe, pokemon.boosts.spe, gen);
    var mods = 1;
    if (pokemon.hasItem('Choice Scarf')) {
        mods *= 1.5;
    }
    else if (pokemon.hasItem.apply(pokemon, __spreadArrays(['Iron Ball'], EV_ITEMS))) {
    	mods *= 0.5;;
    }
    else if (pokemon.hasItem('Quick Powder') && pokemon.named('Ditto')) {
    	mods *= 2;
    }
    if ((pokemon.hasAbility('Unburden') && pokemon.abilityOn) ||
            (pokemon.hasAbility('Chlorophyll') && weather.includes('Sun')) ||
            (pokemon.hasAbility('Sand Rush') && weather === 'Sand') ||
            (pokemon.hasAbility('Swift Swim') && weather.includes('Rain')) ||
            (pokemon.hasAbility('Slush Rush', 'Ice Cleats') && weather === 'Hail') ||
            (pokemon.hasAbility('Shadow Dance') && terrain === 'New Moon') ||
            (pokemon.hasAbility('Surge Surfer') && terrain === 'Electric')) {
            speed *= 2;
    }
    else if (pokemon.hasAbility('Quick Feet') && !pokemon.hasStatus('Healthy')) {
    	mods *= 1.5;
    }
    else if (pokemon.hasAbility('Slow Start') && pokemon.abilityOn) {
    	mods *= 0.5;
    }
    if (side.isTailwind)
        mods *= 2;
    speed = pokeRound(speed * mods);
    if (pokemon.hasStatus('par') && !pokemon.hasAbility('Quick Feet')) {
        speed = Math.floor(speed * (gen.num < 7 ? 0.25 : 0.5));
    }
    if (pokemon.name.indexOf('-Burst') !== -1) {
        speed = Math.floor(speed * 1.1);
    }
    speed = Math.min(gen.num <= 2 ? 999 : 10000, speed);
    return Math.max(1, speed);
}
exports.getFinalSpeed = getFinalSpeed;
function pokeRound(num) {
    return num % 1 > 0.5 ? Math.ceil(num) : Math.floor(num);
}
exports.pokeRound = pokeRound;
function getMoveEffectiveness(gen, move, type, isGhostRevealed, isGravity) {
    if (isGhostRevealed && type === 'Ghost' && ['Normal', 'Fighting'].indexOf(move.type) !== -1) {
        return 1;
    }
    else if (isGravity && type === 'Flying' && move.type === 'Ground') {
        return 1;
    }
    else if (move.name === 'Freeze-Dry' && type === 'Water') {
        return 2;
    }
    else if (move.name === 'Corrode' && type === 'Steel') {
        return 2;
    }
    else if (move.name === 'Flying Press') {
        return (gen.types.get('fighting').effectiveness[type] *
            gen.types.get('flying').effectiveness[type]);
    }
    else {
        return gen.types.get(util_1.toID(move.type)).effectiveness[type];
    }
}
exports.getMoveEffectiveness = getMoveEffectiveness;
function checkAirLock(pokemon, field) {
    if (pokemon.hasAbility('Air Lock', 'Cloud Nine')) {
        field.weather = undefined;
    }
}
exports.checkAirLock = checkAirLock;
function checkForecast(pokemon, weather) {
    if (pokemon.hasAbility('Forecast') && pokemon.named('Castform')) {
        switch (weather) {
            case 'Sun':
            case 'Harsh Sunshine':
                pokemon.type1 = 'Fire';
                break;
            case 'Rain':
            case 'Heavy Rain':
                pokemon.type1 = 'Water';
                break;
            case 'Hail':
                pokemon.type1 = 'Ice';
                break;
            case 'Sandstorm':
                pokemon.type1 = 'Rock';
                pokemon.type2 = 'Ground';
                break;
            case 'New Moon':
                pokemon.type1 = 'Dark';
                break;
            default:
                pokemon.type1 = 'Normal';
        }
        pokemon.type2 = undefined;
    }
}
exports.checkForecast = checkForecast;
function checkKlutz(pokemon) {
    if (pokemon.hasAbility('Klutz') && !EV_ITEMS.includes(pokemon.item)) {
        pokemon.item = '';
    }
}
exports.checkKlutz = checkKlutz;
function checkIntimidate(source, target) {
    if (source.ability === 'Intimidate' &&
        source.abilityOn &&
        !target.hasAbility('Clear Body', 'White Smoke', 'Hyper Cutter', 'Full Metal Body')) {
        if (target.hasAbility('Contrary', 'Defiant')) {
            target.boosts.atk = Math.min(6, target.boosts.atk + 1);
        }
        else if (target.hasAbility('Simple')) {
            target.boosts.atk = Math.max(-6, target.boosts.atk - 2);
        }
        else {
            target.boosts.atk = Math.max(-6, target.boosts.atk - 1);
        }
    }
}
exports.checkIntimidate = checkIntimidate;
function checkDownload(source, target) {
    if (source.hasAbility('Download')) {
        if (target.stats.spd <= target.stats.def) {
            source.boosts.spa = Math.min(6, source.boosts.spa + 1);
        }
        else {
            source.boosts.atk = Math.min(6, source.boosts.atk + 1);
        }
    }
}
exports.checkDownload = checkDownload;
function checkUnleafed(source) {
    if (source.hasAbility('Unleafed') && source.abilityOn) {
        source.boosts.atk = Math.min(6, source.boosts.atk + 1);
        source.boosts.def = Math.min(6, source.boosts.def + 1);
        source.boosts.spa = Math.min(6, source.boosts.spa + 1);
        source.boosts.spd = Math.min(6, source.boosts.spd + 1);
        source.boosts.spe = Math.min(6, source.boosts.spe + 1);
    }
}
exports.checkUnleafed = checkUnleafed;
function checkBlazeBoost(source, move) {
    if (source.hasAbility('Blaze Boost') && move.type === 'Fire') {
        source.boosts.atk = Math.min(6, source.boosts.atk + 1);
        source.boosts.spa = Math.min(6, source.boosts.spa + 1);
        //Not necessary since no Fire-type attacks depend on the user's speed
        //Will not have effect without changing order of computeFinalStats in gen56.js
        //source.boosts.spe = Math.min(6, source.boosts.spe + 1);
    }
}
exports.checkBlazeBoost = checkBlazeBoost;
function checkIntrepidSword(source) {
    if (source.hasAbility('Intrepid Sword')) {
        source.boosts.atk = Math.min(6, source.boosts.atk + 1);
    }
}
exports.checkIntrepidSword = checkIntrepidSword;
function checkInfiltrator(pokemon, affectedSide) {
    if (pokemon.hasAbility('Infiltrator')) {
        affectedSide.isReflect = false;
        affectedSide.isLightScreen = false;
        affectedSide.isAuroraVeil = false;
    }
}
exports.checkInfiltrator = checkInfiltrator;
function checkSeedBoost(pokemon, field) {
    if (!pokemon.item)
        return;
    if (field.terrain && pokemon.item.indexOf('Seed') !== -1) {
        var terrainSeed = pokemon.item.substring(0, pokemon.item.indexOf(' '));
        if (terrainSeed === field.terrain) {
            if (terrainSeed === 'Grassy' || terrainSeed === 'Electric') {
                pokemon.boosts.def = pokemon.hasAbility('Contrary')
                    ? Math.max(-6, pokemon.boosts.def - 1)
                    : Math.min(6, pokemon.boosts.def + 1);
            }
            else {
                pokemon.boosts.spd = pokemon.hasAbility('Contrary')
                    ? Math.max(-6, pokemon.boosts.spd - 1)
                    : Math.min(6, pokemon.boosts.spd + 1);
            }
        }
    }
}
exports.checkSeedBoost = checkSeedBoost;
function checkMultihitBoost(gen, attacker, defender, move, field, desc, usedWhiteHerb) {
    if (usedWhiteHerb === void 0) { usedWhiteHerb = false; }
    if (['Gyro Ball', 'Electro Ball'].indexOf(move.name) !== -1 && defender.hasAbility('Gooey', 'Tangling Hair')) {
        if (attacker.hasItem('White Herb') && !usedWhiteHerb) {
            desc.attackerItem = attacker.item;
            usedWhiteHerb = true;
        }
        else {
            attacker.boosts.spe = Math.max(attacker.boosts.spe - 1, -6);
            attacker.stats.spe = getFinalSpeed(gen, attacker, field, field.attackerSide);
            desc.defenderAbility = defender.ability;
        }
    }
    else if (move.name === 'Power-Up Punch') {
        attacker.boosts.atk = Math.min(attacker.boosts.atk + 1, 6);
        attacker.stats.atk = getModifiedStat(attacker.rawStats.atk, attacker.boosts.atk, gen);
    }
    if (defender.hasAbility('Stamina')) {
        if (attacker.hasAbility('Unaware')) {
            desc.attackerAbility = attacker.ability;
        }
        else {
            defender.boosts.def = Math.min(defender.boosts.def + 1, 6);
            defender.stats.def = getModifiedStat(defender.rawStats.def, defender.boosts.def, gen);
            desc.defenderAbility = defender.ability;
        }
    }
    else if (defender.hasAbility('Weak Armor')) {
        if (attacker.hasAbility('Unaware')) {
            desc.attackerAbility = attacker.ability;
        }
        else {
            if (defender.hasItem('White Herb') && !usedWhiteHerb) {
                desc.defenderItem = defender.item;
                usedWhiteHerb = true;
            }
            else {
                defender.boosts.def = Math.max(defender.boosts.def - 1, -6);
                defender.stats.def = getModifiedStat(defender.rawStats.def, defender.boosts.def, gen);
            }
        }
        defender.boosts.spe += Math.min(defender.boosts.spe + 2, 6);
        defender.stats.spe = getFinalSpeed(gen, defender, field, field.defenderSide);
        desc.defenderAbility = defender.ability;
    }
    var simple = attacker.hasAbility('Simple') ? 2 : 1;
    if (move.dropsStats) {
        if (attacker.hasAbility('Unaware')) {
            desc.attackerAbility = attacker.ability;
        }
        else {
            var stat = move.category === 'Special' ? 'spa' : 'atk';
            var boosts = attacker.boosts[stat];
            if (attacker.hasAbility('Contrary')) {
                boosts = Math.min(6, boosts + move.dropsStats);
                desc.attackerAbility = attacker.ability;
            }
            else {
                boosts = Math.max(-6, boosts - move.dropsStats * simple);
                if (simple > 1)
                    desc.attackerAbility = attacker.ability;
            }
            if (attacker.hasItem('White Herb') && attacker.boosts[stat] < 0 && !usedWhiteHerb) {
                boosts += move.dropsStats * simple;
                desc.attackerItem = attacker.item;
                usedWhiteHerb = true;
            }
            attacker.boosts[stat] = boosts;
            attacker.stats[stat] = getModifiedStat(attacker.rawStats[stat], defender.boosts[stat], gen);
        }
    }
    return usedWhiteHerb;
}
exports.checkMultihitBoost = checkMultihitBoost;
function chainMods(mods) {
    var M = 0x1000;
    for (var _i = 0, mods_1 = mods; _i < mods_1.length; _i++) {
        var mod = mods_1[_i];
        if (mod !== 0x1000) {
            M = (M * mod + 0x800) >> 12;
        }
    }
    return M;
}
exports.chainMods = chainMods;
function getBaseDamage(level, basePower, attack, defense) {
	return Math.floor(OF32(Math.floor(OF32(OF32(Math.floor((2 * level) / 5 + 2) * basePower) * attack) / defense) / 50 + 2));
}
exports.getBaseDamage = getBaseDamage;
function getFinalDamage(baseAmount, i, effectiveness, isBurned, stabMod, finalMod, protect) {
	var damageAmount = Math.floor(OF32(baseAmount * (85 + i)) / 100);
    if (stabMod !== 0x1000)
        damageAmount = OF32(damageAmount * stabMod) / 0x1000;
    damageAmount = Math.floor(OF32(pokeRound(damageAmount) * effectiveness));
    if (isBurned)
        damageAmount = Math.floor(damageAmount / 2);
    if (protect)
        damageAmount = pokeRound(OF32(damageAmount * 0x400) / 0x1000);
    return OF16(pokeRound(Math.max(1, OF32(damageAmount * finalMod) / 0x1000)));
}
exports.getFinalDamage = getFinalDamage;
function getWeightFactor(pokemon) {
    return pokemon.hasAbility('Heavy Metal') ? 2 : pokemon.hasAbility('Light Metal') ? 0.5 : 1;
}
exports.getWeightFactor = getWeightFactor;
function countBoosts(gen, boosts) {
    var sum = 0;
    var STATS = gen.num === 1
    	? ['atk', 'def', 'spa', 'spe']
    	: ['atk', 'def', 'spa', 'spd', 'spe'];
    for (var i = 0; i < STATS.length; i++) {
        var boost = boosts[STATS[i]];
        if (boost && boost > 0)
            sum += boost;
    }
    return sum;
}
exports.countBoosts = countBoosts;
function getEVDescriptionText(gen, pokemon, stat, natureName) {
    var nature = gen.natures.get(util_1.toID(natureName));
    return (pokemon.evs[stat] +
        (nature.plus === nature.minus ? ''
            : nature.plus === stat ? '+'
                : nature.minus === stat ? '-'
                    : '') + ' ' +
        stats_1.Stats.displayStat(stat));
}
exports.getEVDescriptionText = getEVDescriptionText;
function handleFixedDamageMoves(attacker, move) {
    if (['Seismic Toss', 'Night Shade'].indexOf(move.name) !== -1) {
        return attacker.level;
    }
    else if (move.name === 'Dragon Rage') {
        return 40;
    }
    else if (move.name === 'Sonic Boom') {
        return 20;
    }
    return 0;
}
exports.handleFixedDamageMoves = handleFixedDamageMoves;
function getRegurgitationDamage(gen, ability, defender) {
    var regurgitationType = gen.types.get(ability.substring(15, ability.length - 1).toLowerCase());
    if (typeof regurgitationType === 'undefined') {
        return 0;
    }
    var effectiveness = regurgitationType.effectiveness[defender.type1] *
            (defender.type2 ? regurgitationType.effectiveness[defender.type2] : 1);
    return Math.floor((effectiveness * defender.maxHP()) / 6);
}
exports.getRegurgitationDamage = getRegurgitationDamage;
function pokeRound(num) {
    return num % 1 > 0.5 ? Math.ceil(num) : Math.floor(num);
}
exports.pokeRound = pokeRound;
function OF16(n) {
    return n > 0xFFFF ? n % 0x10000 : n;
}
exports.OF16 = OF16;
function OF32(n) {
    return n > 0xFFFFFFFF ? n % 0x100000000 : n;
}
exports.OF32 = OF32;
//# sourceMappingURL=util.js.map