"use strict";
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var util_1 = require("../util");
var RBY = {
    Abra: {
        t1: 'Psychic',
        bs: { hp: 25, at: 20, df: 15, sp: 90, sl: 105 },
        w: 19.5,
        canEvolve: true
    },
    Aerodactyl: {
        t1: 'Rock',
        t2: 'Flying',
        bs: { hp: 80, at: 105, df: 65, sp: 130, sl: 60 },
        w: 59
    },
    Alakazam: {
        t1: 'Psychic',
        bs: { hp: 55, at: 50, df: 45, sp: 120, sl: 135 },
        w: 48
    },
    Arbok: { t1: 'Poison', bs: { hp: 60, at: 85, df: 69, sp: 80, sl: 65 }, w: 65 },
    Arcanine: {
        t1: 'Fire',
        bs: { hp: 90, at: 110, df: 80, sp: 95, sl: 80 },
        w: 155
    },
    Articuno: {
        t1: 'Ice',
        t2: 'Flying',
        bs: { hp: 90, at: 85, df: 100, sp: 85, sl: 125 },
        w: 55.4
    },
    Beedrill: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 65, at: 80, df: 40, sp: 75, sl: 45 },
        w: 29.5
    },
    Bellsprout: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 50, at: 75, df: 35, sp: 40, sl: 70 },
        w: 4,
        canEvolve: true
    },
    Blastoise: {
        t1: 'Water',
        bs: { hp: 79, at: 83, df: 100, sp: 78, sl: 85 },
        w: 85.5
    },
    Bulbasaur: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 45, at: 49, df: 49, sp: 45, sl: 65 },
        w: 6.9,
        canEvolve: true
    },
    Butterfree: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 60, at: 45, df: 50, sp: 70, sl: 80 },
        w: 32
    },
    Caterpie: {
        t1: 'Bug',
        bs: { hp: 45, at: 30, df: 35, sp: 45, sl: 20 },
        w: 2.9,
        canEvolve: true
    },
    Chansey: {
        t1: 'Normal',
        bs: { hp: 250, at: 5, df: 5, sp: 50, sl: 105 },
        w: 34.6
    },
    Charizard: {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 78, at: 84, df: 78, sp: 100, sl: 85 },
        w: 90.5
    },
    Charmander: {
        t1: 'Fire',
        bs: { hp: 39, at: 52, df: 43, sp: 65, sl: 50 },
        w: 8.5,
        canEvolve: true
    },
    Charmeleon: {
        t1: 'Fire',
        bs: { hp: 58, at: 64, df: 58, sp: 80, sl: 65 },
        w: 19,
        canEvolve: true
    },
    Clefable: { t1: 'Normal', bs: { hp: 95, at: 70, df: 73, sp: 60, sl: 85 }, w: 40 },
    Clefairy: {
        t1: 'Normal',
        bs: { hp: 70, at: 45, df: 48, sp: 35, sl: 60 },
        w: 7.5,
        canEvolve: true
    },
    Cloyster: {
        t1: 'Water',
        t2: 'Ice',
        bs: { hp: 50, at: 95, df: 180, sp: 70, sl: 85 },
        w: 132.5
    },
    Cubone: {
        t1: 'Ground',
        bs: { hp: 50, at: 50, df: 95, sp: 35, sl: 40 },
        w: 6.5,
        canEvolve: true
    },
    Dewgong: {
        t1: 'Water',
        t2: 'Ice',
        bs: { hp: 90, at: 70, df: 80, sp: 70, sl: 95 },
        w: 120
    },
    Diglett: {
        t1: 'Ground',
        bs: { hp: 10, at: 55, df: 25, sp: 95, sl: 45 },
        w: 0.8,
        canEvolve: true
    },
    Ditto: { t1: 'Normal', bs: { hp: 48, at: 48, df: 48, sp: 48, sl: 48 }, w: 4 },
    Dodrio: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 60, at: 110, df: 70, sp: 100, sl: 60 },
        w: 85.2
    },
    Doduo: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 35, at: 85, df: 45, sp: 75, sl: 35 },
        w: 39.2,
        canEvolve: true
    },
    Dragonair: {
        t1: 'Dragon',
        bs: { hp: 61, at: 84, df: 65, sp: 70, sl: 70 },
        w: 16.5,
        canEvolve: true
    },
    Dragonite: {
        t1: 'Dragon',
        t2: 'Flying',
        bs: { hp: 91, at: 134, df: 95, sp: 80, sl: 100 },
        w: 210
    },
    Dratini: {
        t1: 'Dragon',
        bs: { hp: 41, at: 64, df: 45, sp: 50, sl: 50 },
        w: 3.3,
        canEvolve: true
    },
    Drowzee: {
        t1: 'Psychic',
        bs: { hp: 60, at: 48, df: 45, sp: 42, sl: 90 },
        w: 32.4,
        canEvolve: true
    },
    Dugtrio: {
        t1: 'Ground',
        bs: { hp: 35, at: 80, df: 50, sp: 120, sl: 70 },
        w: 33.3
    },
    Eevee: {
        t1: 'Normal',
        bs: { hp: 55, at: 55, df: 50, sp: 55, sl: 65 },
        w: 6.5,
        canEvolve: true
    },
    Ekans: {
        t1: 'Poison',
        bs: { hp: 35, at: 60, df: 44, sp: 55, sl: 40 },
        w: 6.9,
        canEvolve: true
    },
    Electabuzz: {
        t1: 'Electric',
        bs: { hp: 65, at: 83, df: 57, sp: 105, sl: 85 },
        w: 30
    },
    Electrode: {
        t1: 'Electric',
        bs: { hp: 60, at: 50, df: 70, sp: 140, sl: 80 },
        w: 66.6
    },
    Exeggcute: {
        t1: 'Grass',
        t2: 'Psychic',
        bs: { hp: 60, at: 40, df: 80, sp: 40, sl: 60 },
        w: 2.5,
        canEvolve: true
    },
    Exeggutor: {
        t1: 'Grass',
        t2: 'Psychic',
        bs: { hp: 95, at: 95, df: 85, sp: 55, sl: 125 },
        w: 120
    },
    "Farfetch'd": {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 52, at: 65, df: 55, sp: 60, sl: 58 },
        w: 15
    },
    Fearow: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 65, at: 90, df: 65, sp: 100, sl: 61 },
        w: 38
    },
    Flareon: { t1: 'Fire', bs: { hp: 65, at: 130, df: 60, sp: 65, sl: 110 }, w: 25 },
    Gastly: {
        t1: 'Ghost',
        t2: 'Poison',
        bs: { hp: 30, at: 35, df: 30, sp: 80, sl: 100 },
        w: 0.1,
        canEvolve: true
    },
    Gengar: {
        t1: 'Ghost',
        t2: 'Poison',
        bs: { hp: 60, at: 65, df: 60, sp: 110, sl: 130 },
        w: 40.5
    },
    Geodude: {
        t1: 'Rock',
        t2: 'Ground',
        bs: { hp: 40, at: 80, df: 100, sp: 20, sl: 30 },
        w: 20,
        canEvolve: true
    },
    Gloom: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 60, at: 65, df: 70, sp: 40, sl: 85 },
        w: 8.6,
        canEvolve: true
    },
    Golbat: {
        t1: 'Poison',
        t2: 'Flying',
        bs: { hp: 75, at: 80, df: 70, sp: 90, sl: 75 },
        w: 55
    },
    Goldeen: {
        t1: 'Water',
        bs: { hp: 45, at: 67, df: 60, sp: 63, sl: 50 },
        w: 15,
        canEvolve: true
    },
    Golduck: { t1: 'Water', bs: { hp: 80, at: 82, df: 78, sp: 85, sl: 80 }, w: 76.6 },
    Golem: {
        t1: 'Rock',
        t2: 'Ground',
        bs: { hp: 80, at: 110, df: 130, sp: 45, sl: 55 },
        w: 300
    },
    Graveler: {
        t1: 'Rock',
        t2: 'Ground',
        bs: { hp: 55, at: 95, df: 115, sp: 35, sl: 45 },
        w: 105,
        canEvolve: true
    },
    Grimer: {
        t1: 'Poison',
        bs: { hp: 80, at: 80, df: 50, sp: 25, sl: 40 },
        w: 30,
        canEvolve: true
    },
    Growlithe: {
        t1: 'Fire',
        bs: { hp: 55, at: 70, df: 45, sp: 60, sl: 50 },
        w: 19,
        canEvolve: true
    },
    Gyarados: {
        t1: 'Water',
        t2: 'Flying',
        bs: { hp: 95, at: 125, df: 79, sp: 81, sl: 100 },
        w: 235
    },
    Haunter: {
        t1: 'Ghost',
        t2: 'Poison',
        bs: { hp: 45, at: 50, df: 45, sp: 95, sl: 115 },
        w: 0.1,
        canEvolve: true
    },
    Hitmonchan: {
        t1: 'Fighting',
        bs: { hp: 50, at: 105, df: 79, sp: 76, sl: 35 },
        w: 50.2
    },
    Hitmonlee: {
        t1: 'Fighting',
        bs: { hp: 50, at: 120, df: 53, sp: 87, sl: 35 },
        w: 49.8
    },
    Horsea: {
        t1: 'Water',
        bs: { hp: 30, at: 40, df: 70, sp: 60, sl: 70 },
        w: 8,
        canEvolve: true
    },
    Hypno: {
        t1: 'Psychic',
        bs: { hp: 85, at: 73, df: 70, sp: 67, sl: 115 },
        w: 75.6
    },
    Ivysaur: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 60, at: 62, df: 63, sp: 60, sl: 80 },
        w: 13,
        canEvolve: true
    },
    Jigglypuff: {
        t1: 'Normal',
        bs: { hp: 115, at: 45, df: 20, sp: 20, sl: 25 },
        w: 5.5,
        canEvolve: true
    },
    Jolteon: {
        t1: 'Electric',
        bs: { hp: 65, at: 65, df: 60, sp: 130, sl: 110 },
        w: 24.5
    },
    Jynx: {
        t1: 'Ice',
        t2: 'Psychic',
        bs: { hp: 65, at: 50, df: 35, sp: 95, sl: 95 },
        w: 40.6
    },
    Kabuto: {
        t1: 'Rock',
        t2: 'Water',
        bs: { hp: 30, at: 80, df: 90, sp: 55, sl: 45 },
        w: 11.5,
        canEvolve: true
    },
    Kabutops: {
        t1: 'Rock',
        t2: 'Water',
        bs: { hp: 60, at: 115, df: 105, sp: 80, sl: 70 },
        w: 40.5
    },
    Kadabra: {
        t1: 'Psychic',
        bs: { hp: 40, at: 35, df: 30, sp: 105, sl: 120 },
        w: 56.5,
        canEvolve: true
    },
    Kakuna: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 45, at: 25, df: 50, sp: 35, sl: 25 },
        w: 10,
        canEvolve: true
    },
    Kangaskhan: {
        t1: 'Normal',
        bs: { hp: 105, at: 95, df: 80, sp: 90, sl: 40 },
        w: 80
    },
    Kingler: { t1: 'Water', bs: { hp: 55, at: 130, df: 115, sp: 75, sl: 50 }, w: 60 },
    Koffing: {
        t1: 'Poison',
        bs: { hp: 40, at: 65, df: 95, sp: 35, sl: 60 },
        w: 1,
        canEvolve: true
    },
    Krabby: {
        t1: 'Water',
        bs: { hp: 30, at: 105, df: 90, sp: 50, sl: 25 },
        w: 6.5,
        canEvolve: true
    },
    Lapras: {
        t1: 'Water',
        t2: 'Ice',
        bs: { hp: 130, at: 85, df: 80, sp: 60, sl: 95 },
        w: 220
    },
    Lickitung: {
        t1: 'Normal',
        bs: { hp: 90, at: 55, df: 75, sp: 30, sl: 60 },
        w: 65.5
    },
    Machamp: {
        t1: 'Fighting',
        bs: { hp: 90, at: 130, df: 80, sp: 55, sl: 65 },
        w: 130
    },
    Machoke: {
        t1: 'Fighting',
        bs: { hp: 80, at: 100, df: 70, sp: 45, sl: 50 },
        w: 70.5,
        canEvolve: true
    },
    Machop: {
        t1: 'Fighting',
        bs: { hp: 70, at: 80, df: 50, sp: 35, sl: 35 },
        w: 19.5,
        canEvolve: true
    },
    Magikarp: {
        t1: 'Water',
        bs: { hp: 20, at: 10, df: 55, sp: 80, sl: 20 },
        w: 10,
        canEvolve: true
    },
    Magmar: {
        t1: 'Fire',
        bs: { hp: 65, at: 95, df: 57, sp: 93, sl: 85 },
        w: 44.5
    },
    Magnemite: {
        t1: 'Electric',
        bs: { hp: 25, at: 35, df: 70, sp: 45, sl: 95 },
        w: 6,
        canEvolve: true
    },
    Magneton: {
        t1: 'Electric',
        bs: { hp: 50, at: 60, df: 95, sp: 70, sl: 120 },
        w: 60
    },
    Mankey: {
        t1: 'Fighting',
        bs: { hp: 40, at: 80, df: 35, sp: 70, sl: 35 },
        w: 28,
        canEvolve: true
    },
    Marowak: { t1: 'Ground', bs: { hp: 60, at: 80, df: 110, sp: 45, sl: 50 }, w: 45 },
    Meowth: {
        t1: 'Normal',
        bs: { hp: 40, at: 45, df: 35, sp: 90, sl: 40 },
        w: 4.2,
        canEvolve: true
    },
    Metapod: {
        t1: 'Bug',
        bs: { hp: 50, at: 20, df: 55, sp: 30, sl: 25 },
        w: 9.9,
        canEvolve: true
    },
    Mew: {
        t1: 'Psychic',
        bs: { hp: 100, at: 100, df: 100, sp: 100, sl: 100 },
        w: 4
    },
    Mewtwo: {
        t1: 'Psychic',
        bs: { hp: 106, at: 110, df: 90, sp: 130, sl: 154 },
        w: 122
    },
    Moltres: {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 90, at: 100, df: 90, sp: 90, sl: 125 },
        w: 60
    },
    'Mr. Mime': {
        t1: 'Psychic',
        bs: { hp: 40, at: 45, df: 65, sp: 90, sl: 100 },
        w: 54.5
    },
    Muk: { t1: 'Poison', bs: { hp: 105, at: 105, df: 75, sp: 50, sl: 65 }, w: 30 },
    Nidoking: {
        t1: 'Poison',
        t2: 'Ground',
        bs: { hp: 81, at: 92, df: 77, sp: 85, sl: 75 },
        w: 62
    },
    Nidoqueen: {
        t1: 'Poison',
        t2: 'Ground',
        bs: { hp: 90, at: 82, df: 87, sp: 76, sl: 75 },
        w: 60
    },
    'Nidoran-F': {
        t1: 'Poison',
        bs: { hp: 55, at: 47, df: 52, sp: 41, sl: 40 },
        w: 7,
        canEvolve: true
    },
    'Nidoran-M': {
        t1: 'Poison',
        bs: { hp: 46, at: 57, df: 40, sp: 50, sl: 40 },
        w: 9,
        canEvolve: true
    },
    Nidorina: {
        t1: 'Poison',
        bs: { hp: 70, at: 62, df: 67, sp: 56, sl: 55 },
        w: 20,
        canEvolve: true
    },
    Nidorino: {
        t1: 'Poison',
        bs: { hp: 61, at: 72, df: 57, sp: 65, sl: 55 },
        w: 19.5,
        canEvolve: true
    },
    Ninetales: {
        t1: 'Fire',
        bs: { hp: 73, at: 76, df: 75, sp: 100, sl: 100 },
        w: 19.9
    },
    Oddish: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 45, at: 50, df: 55, sp: 30, sl: 75 },
        w: 5.4,
        canEvolve: true
    },
    Omanyte: {
        t1: 'Rock',
        t2: 'Water',
        bs: { hp: 35, at: 40, df: 100, sp: 35, sl: 90 },
        w: 7.5,
        canEvolve: true
    },
    Omastar: {
        t1: 'Rock',
        t2: 'Water',
        bs: { hp: 70, at: 60, df: 125, sp: 55, sl: 115 },
        w: 35
    },
    Onix: {
        t1: 'Rock',
        t2: 'Ground',
        bs: { hp: 35, at: 45, df: 160, sp: 70, sl: 30 },
        w: 210
    },
    Paras: {
        t1: 'Bug',
        t2: 'Grass',
        bs: { hp: 35, at: 70, df: 55, sp: 25, sl: 55 },
        w: 5.4,
        canEvolve: true
    },
    Parasect: {
        t1: 'Bug',
        t2: 'Grass',
        bs: { hp: 60, at: 95, df: 80, sp: 30, sl: 80 },
        w: 29.5
    },
    Persian: { t1: 'Normal', bs: { hp: 65, at: 70, df: 60, sp: 115, sl: 65 }, w: 32 },
    Pidgeot: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 83, at: 80, df: 75, sp: 91, sl: 70 },
        w: 39.5
    },
    Pidgeotto: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 63, at: 60, df: 55, sp: 71, sl: 50 },
        w: 30,
        canEvolve: true
    },
    Pidgey: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 40, at: 45, df: 40, sp: 56, sl: 35 },
        w: 1.8,
        canEvolve: true
    },
    Pikachu: {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        w: 6,
        canEvolve: true
    },
    Pinsir: { t1: 'Bug', bs: { hp: 65, at: 125, df: 100, sp: 85, sl: 55 }, w: 55 },
    Poliwag: {
        t1: 'Water',
        bs: { hp: 40, at: 50, df: 40, sp: 90, sl: 40 },
        w: 12.4,
        canEvolve: true
    },
    Poliwhirl: {
        t1: 'Water',
        bs: { hp: 65, at: 65, df: 65, sp: 90, sl: 50 },
        w: 20,
        canEvolve: true
    },
    Poliwrath: {
        t1: 'Water',
        t2: 'Fighting',
        bs: { hp: 90, at: 85, df: 95, sp: 70, sl: 70 },
        w: 54,
        canEvolve: true
    },
    Ponyta: {
        t1: 'Fire',
        bs: { hp: 50, at: 85, df: 55, sp: 90, sl: 65 },
        w: 30,
        canEvolve: true
    },
    Porygon: {
        t1: 'Normal',
        bs: { hp: 65, at: 60, df: 70, sp: 40, sl: 75 },
        w: 36.5
    },
    Primeape: {
        t1: 'Fighting',
        bs: { hp: 65, at: 105, df: 60, sp: 95, sl: 60 },
        w: 32
    },
    Psyduck: {
        t1: 'Water',
        bs: { hp: 50, at: 52, df: 48, sp: 55, sl: 50 },
        w: 19.6,
        canEvolve: true
    },
    Raichu: {
        t1: 'Electric',
        bs: { hp: 60, at: 90, df: 55, sp: 100, sl: 90 },
        w: 30
    },
    Rapidash: { t1: 'Fire', bs: { hp: 65, at: 100, df: 70, sp: 105, sl: 80 }, w: 95 },
    Raticate: {
        t1: 'Normal',
        bs: { hp: 55, at: 81, df: 60, sp: 97, sl: 50 },
        w: 18.5
    },
    Rattata: {
        t1: 'Normal',
        bs: { hp: 30, at: 56, df: 35, sp: 72, sl: 25 },
        w: 3.5,
        canEvolve: true
    },
    Rhydon: {
        t1: 'Ground',
        t2: 'Rock',
        bs: { hp: 105, at: 130, df: 120, sp: 40, sl: 45 },
        w: 120
    },
    Rhyhorn: {
        t1: 'Ground',
        t2: 'Rock',
        bs: { hp: 80, at: 85, df: 95, sp: 25, sl: 30 },
        w: 115,
        canEvolve: true
    },
    Sandshrew: {
        t1: 'Ground',
        bs: { hp: 50, at: 75, df: 85, sp: 40, sl: 30 },
        w: 12,
        canEvolve: true
    },
    Sandslash: {
        t1: 'Ground',
        bs: { hp: 75, at: 100, df: 110, sp: 65, sl: 55 },
        w: 29.5
    },
    Scyther: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 70, at: 110, df: 80, sp: 105, sl: 55 },
        w: 56
    },
    Seadra: { t1: 'Water', bs: { hp: 55, at: 65, df: 95, sp: 85, sl: 95 }, w: 25 },
    Seaking: { t1: 'Water', bs: { hp: 80, at: 92, df: 65, sp: 68, sl: 80 }, w: 39 },
    Seel: {
        t1: 'Water',
        bs: { hp: 65, at: 45, df: 55, sp: 45, sl: 70 },
        w: 90,
        canEvolve: true
    },
    Shellder: {
        t1: 'Water',
        bs: { hp: 30, at: 65, df: 100, sp: 40, sl: 45 },
        w: 4,
        canEvolve: true
    },
    Slowbro: {
        t1: 'Water',
        t2: 'Psychic',
        bs: { hp: 95, at: 75, df: 110, sp: 30, sl: 80 },
        w: 78.5
    },
    Slowpoke: {
        t1: 'Water',
        t2: 'Psychic',
        bs: { hp: 90, at: 65, df: 65, sp: 15, sl: 40 },
        w: 36,
        canEvolve: true
    },
    Snorlax: {
        t1: 'Normal',
        bs: { hp: 160, at: 110, df: 65, sp: 30, sl: 65 },
        w: 460
    },
    Spearow: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 40, at: 60, df: 30, sp: 70, sl: 31 },
        w: 2,
        canEvolve: true
    },
    Squirtle: {
        t1: 'Water',
        bs: { hp: 44, at: 48, df: 65, sp: 43, sl: 50 },
        w: 9,
        canEvolve: true
    },
    Starmie: {
        t1: 'Water',
        t2: 'Psychic',
        bs: { hp: 60, at: 75, df: 85, sp: 115, sl: 100 },
        w: 80
    },
    Staryu: {
        t1: 'Water',
        bs: { hp: 30, at: 45, df: 55, sp: 85, sl: 70 },
        w: 34.5,
        canEvolve: true
    },
    Tangela: {
        t1: 'Grass',
        bs: { hp: 65, at: 55, df: 115, sp: 60, sl: 100 },
        w: 35
    },
    Tauros: {
        t1: 'Normal',
        bs: { hp: 75, at: 100, df: 95, sp: 110, sl: 70 },
        w: 88.4
    },
    Tentacool: {
        t1: 'Water',
        t2: 'Poison',
        bs: { hp: 40, at: 40, df: 35, sp: 70, sl: 100 },
        w: 45.5,
        canEvolve: true
    },
    Tentacruel: {
        t1: 'Water',
        t2: 'Poison',
        bs: { hp: 80, at: 70, df: 65, sp: 100, sl: 120 },
        w: 55
    },
    Vaporeon: {
        t1: 'Water',
        bs: { hp: 130, at: 65, df: 60, sp: 65, sl: 110 },
        w: 29
    },
    Venomoth: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 70, at: 65, df: 60, sp: 90, sl: 90 },
        w: 12.5
    },
    Venonat: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 60, at: 55, df: 50, sp: 45, sl: 40 },
        w: 30,
        canEvolve: true
    },
    Venusaur: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 80, at: 82, df: 83, sp: 80, sl: 100 },
        w: 100
    },
    Victreebel: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 80, at: 105, df: 65, sp: 70, sl: 100 },
        w: 15.5
    },
    Vileplume: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 75, at: 80, df: 85, sp: 50, sl: 100 },
        w: 18.6
    },
    Voltorb: {
        t1: 'Electric',
        bs: { hp: 40, at: 30, df: 50, sp: 100, sl: 55 },
        w: 10.4,
        canEvolve: true
    },
    Vulpix: {
        t1: 'Fire',
        bs: { hp: 38, at: 41, df: 40, sp: 65, sl: 65 },
        w: 9.9,
        canEvolve: true
    },
    Wartortle: {
        t1: 'Water',
        bs: { hp: 59, at: 63, df: 80, sp: 58, sl: 65 },
        w: 22.5,
        canEvolve: true
    },
    Weedle: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 40, at: 35, df: 30, sp: 50, sl: 20 },
        w: 3.2,
        canEvolve: true
    },
    Weepinbell: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 65, at: 90, df: 50, sp: 55, sl: 85 },
        w: 6.4,
        canEvolve: true
    },
    Weezing: {
        t1: 'Poison',
        bs: { hp: 65, at: 90, df: 120, sp: 60, sl: 85 },
        w: 9.5
    },
    Wigglytuff: {
        t1: 'Normal',
        bs: { hp: 140, at: 70, df: 45, sp: 45, sl: 50 },
        w: 12
    },
    Zapdos: {
        t1: 'Electric',
        t2: 'Flying',
        bs: { hp: 90, at: 90, df: 85, sp: 100, sl: 125 },
        w: 52.6
    },
    Zubat: {
        t1: 'Poison',
        t2: 'Flying',
        bs: { hp: 40, at: 45, df: 35, sp: 55, sl: 40 },
        w: 7.5,
        canEvolve: true
    }
};
var GSC = util_1.extend(true, {}, RBY, {
    Abra: { bs: { sa: 105, sd: 55 } },
    Aerodactyl: { bs: { sa: 60, sd: 75 } },
    Alakazam: { bs: { sa: 135, sd: 85 } },
    Arbok: { bs: { sa: 65, sd: 79 } },
    Arcanine: { bs: { sa: 100, sd: 80 } },
    Articuno: { bs: { sa: 95, sd: 125 }, gender: 'N' },
    Beedrill: { bs: { sa: 45, sd: 80 } },
    Bellsprout: { bs: { sa: 70, sd: 30 } },
    Blastoise: { bs: { sa: 85, sd: 105 } },
    Bulbasaur: { bs: { sa: 65, sd: 65 } },
    Butterfree: { bs: { sa: 80, sd: 80 } },
    Caterpie: { bs: { sa: 20, sd: 20 } },
    Chansey: { bs: { sa: 35, sd: 105 }, canEvolve: true },
    Charizard: { bs: { sa: 109, sd: 85 } },
    Charmander: { bs: { sa: 60, sd: 50 } },
    Charmeleon: { bs: { sa: 80, sd: 65 } },
    Clefable: { bs: { sa: 85, sd: 90 } },
    Clefairy: { bs: { sa: 60, sd: 65 } },
    Cloyster: { bs: { sa: 85, sd: 45 } },
    Cubone: { bs: { sa: 40, sd: 50 } },
    Dewgong: { bs: { sa: 70, sd: 95 } },
    Diglett: { bs: { sa: 35, sd: 45 } },
    Ditto: { bs: { sa: 48, sd: 48 }, gender: 'N' },
    Dodrio: { bs: { sa: 60, sd: 60 } },
    Doduo: { bs: { sa: 35, sd: 35 } },
    Dragonair: { bs: { sa: 70, sd: 70 } },
    Dragonite: { bs: { sa: 100, sd: 100 } },
    Dratini: { bs: { sa: 50, sd: 50 } },
    Drowzee: { bs: { sa: 43, sd: 90 } },
    Dugtrio: { bs: { sa: 50, sd: 70 } },
    Eevee: { bs: { sa: 45, sd: 65 } },
    Ekans: { bs: { sa: 40, sd: 54 } },
    Electabuzz: { bs: { sa: 95, sd: 85 } },
    Electrode: { bs: { sa: 80, sd: 80 }, gender: 'N' },
    Exeggcute: { bs: { sa: 60, sd: 45 } },
    Exeggutor: { bs: { sa: 125, sd: 65 } },
    "Farfetch'd": { bs: { sa: 58, sd: 62 } },
    Fearow: { bs: { sa: 61, sd: 61 } },
    Flareon: { bs: { sa: 95, sd: 110 } },
    Gastly: { bs: { sa: 100, sd: 35 } },
    Gengar: { bs: { sa: 130, sd: 75 } },
    Geodude: { bs: { sa: 30, sd: 30 } },
    Gloom: { bs: { sa: 85, sd: 75 } },
    Golbat: { bs: { sa: 65, sd: 75 }, canEvolve: true },
    Goldeen: { bs: { sa: 35, sd: 50 } },
    Golduck: { bs: { sa: 95, sd: 80 } },
    Golem: { bs: { sa: 55, sd: 65 } },
    Graveler: { bs: { sa: 45, sd: 45 } },
    Grimer: { bs: { sa: 40, sd: 50 } },
    Growlithe: { bs: { sa: 70, sd: 50 } },
    Gyarados: { bs: { sa: 60, sd: 100 } },
    Haunter: { bs: { sa: 115, sd: 55 } },
    Hitmonchan: { bs: { sa: 35, sd: 110 } },
    Hitmonlee: { bs: { sa: 35, sd: 110 } },
    Horsea: { bs: { sa: 70, sd: 25 } },
    Hypno: { bs: { sa: 73, sd: 115 } },
    Ivysaur: { bs: { sa: 80, sd: 80 } },
    Jigglypuff: { bs: { sa: 45, sd: 25 } },
    Jolteon: { bs: { sa: 110, sd: 95 } },
    Jynx: { bs: { sa: 115, sd: 95 } },
    Kabuto: { bs: { sa: 55, sd: 45 } },
    Kabutops: { bs: { sa: 65, sd: 70 } },
    Kadabra: { bs: { sa: 120, sd: 70 } },
    Kakuna: { bs: { sa: 25, sd: 25 } },
    Kangaskhan: { bs: { sa: 40, sd: 80 } },
    Kingler: { bs: { sa: 50, sd: 50 } },
    Koffing: { bs: { sa: 60, sd: 45 } },
    Krabby: { bs: { sa: 25, sd: 25 } },
    Lapras: { bs: { sa: 85, sd: 95 } },
    Lickitung: { bs: { sa: 60, sd: 75 } },
    Machamp: { bs: { sa: 65, sd: 85 } },
    Machoke: { bs: { sa: 50, sd: 60 } },
    Machop: { bs: { sa: 35, sd: 35 } },
    Magikarp: { bs: { sa: 15, sd: 20 } },
    Magmar: { bs: { sa: 100, sd: 85 } },
    Magnemite: { t2: 'Steel', bs: { sa: 95, sd: 55 }, gender: 'N' },
    Magneton: { t2: 'Steel', bs: { sa: 120, sd: 70 }, gender: 'N' },
    Mankey: { bs: { sa: 35, sd: 45 } },
    Marowak: { bs: { sa: 50, sd: 80 } },
    Meowth: { bs: { sa: 40, sd: 40 } },
    Metapod: { bs: { sa: 25, sd: 25 } },
    Mew: { bs: { sa: 100, sd: 100 }, gender: 'N' },
    Mewtwo: { bs: { sa: 154, sd: 90 }, gender: 'N' },
    Moltres: { bs: { sa: 125, sd: 85 }, gender: 'N' },
    'Mr. Mime': { bs: { sa: 100, sd: 120 } },
    Muk: { bs: { sa: 65, sd: 100 } },
    Nidoking: { bs: { sa: 85, sd: 75 } },
    Nidoqueen: { bs: { sa: 75, sd: 85 } },
    'Nidoran-F': { bs: { sa: 40, sd: 40 } },
    'Nidoran-M': { bs: { sa: 40, sd: 40 } },
    Nidorina: { bs: { sa: 55, sd: 55 } },
    Nidorino: { bs: { sa: 55, sd: 55 } },
    Ninetales: { bs: { sa: 81, sd: 100 } },
    Oddish: { bs: { sa: 75, sd: 65 } },
    Omanyte: { bs: { sa: 90, sd: 55 } },
    Omastar: { bs: { sa: 115, sd: 70 } },
    Onix: { bs: { sa: 30, sd: 45 }, canEvolve: true },
    Paras: { bs: { sa: 45, sd: 55 } },
    Parasect: { bs: { sa: 60, sd: 80 } },
    Persian: { bs: { sa: 65, sd: 65 } },
    Pidgeot: { bs: { sa: 70, sd: 70 } },
    Pidgeotto: { bs: { sa: 50, sd: 50 } },
    Pidgey: { bs: { sa: 35, sd: 35 } },
    Pikachu: { bs: { sa: 50, sd: 40 } },
    Pinsir: { bs: { sa: 55, sd: 70 } },
    Poliwag: { bs: { sa: 40, sd: 40 } },
    Poliwhirl: { bs: { sa: 50, sd: 50 } },
    Poliwrath: { bs: { sa: 70, sd: 90 } },
    Ponyta: { bs: { sa: 65, sd: 65 } },
    Porygon: { bs: { sa: 85, sd: 75 }, canEvolve: true, gender: 'N' },
    Primeape: { bs: { sa: 60, sd: 70 } },
    Psyduck: { bs: { sa: 65, sd: 50 } },
    Raichu: { bs: { sa: 90, sd: 80 } },
    Rapidash: { bs: { sa: 80, sd: 80 } },
    Raticate: { bs: { sa: 50, sd: 70 } },
    Rattata: { bs: { sa: 25, sd: 35 } },
    Rhydon: { bs: { sa: 45, sd: 45 } },
    Rhyhorn: { bs: { sa: 30, sd: 30 } },
    Sandshrew: { bs: { sa: 20, sd: 30 } },
    Sandslash: { bs: { sa: 45, sd: 55 } },
    Scyther: { bs: { sa: 55, sd: 80 }, canEvolve: true },
    Seadra: { bs: { sa: 95, sd: 45 }, canEvolve: true },
    Seaking: { bs: { sa: 65, sd: 80 } },
    Seel: { bs: { sa: 45, sd: 70 } },
    Shellder: { bs: { sa: 45, sd: 25 } },
    Slowbro: { bs: { sa: 100, sd: 80 } },
    Slowpoke: { bs: { sa: 40, sd: 40 } },
    Snorlax: { bs: { sa: 65, sd: 110 } },
    Spearow: { bs: { sa: 31, sd: 31 } },
    Squirtle: { bs: { sa: 50, sd: 64 } },
    Starmie: { bs: { sa: 100, sd: 85 }, gender: 'N' },
    Staryu: { bs: { sa: 70, sd: 55 } }, gender: 'N',
    Tangela: { bs: { sa: 100, sd: 40 } },
    Tauros: { bs: { sa: 40, sd: 70 } },
    Tentacool: { bs: { sa: 50, sd: 100 } },
    Tentacruel: { bs: { sa: 80, sd: 120 } },
    Vaporeon: { bs: { sa: 110, sd: 95 } },
    Venomoth: { bs: { sa: 90, sd: 75 } },
    Venonat: { bs: { sa: 40, sd: 55 } },
    Venusaur: { bs: { sa: 100, sd: 100 } },
    Victreebel: { bs: { sa: 100, sd: 60 } },
    Vileplume: { bs: { sa: 100, sd: 90 } },
    Voltorb: { bs: { sa: 55, sd: 55 }, gender: 'N' },
    Vulpix: { bs: { sa: 50, sd: 65 } },
    Wartortle: { bs: { sa: 65, sd: 80 } },
    Weedle: { bs: { sa: 20, sd: 20 } },
    Weepinbell: { bs: { sa: 85, sd: 45 } },
    Weezing: { bs: { sa: 85, sd: 70 } },
    Wigglytuff: { bs: { sa: 75, sd: 50 } },
    Zapdos: { bs: { sa: 125, sd: 90 }, gender: 'N' },
    Zubat: { bs: { sa: 30, sd: 40 } },
    Aipom: { t1: 'Normal', bs: { hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85 }, w: 11.5 },
    Ampharos: { t1: 'Electric', bs: { hp: 90, at: 75, df: 75, sa: 115, sd: 90, sp: 55 }, w: 61.5 },
    Ariados: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 40 },
        w: 33.5
    },
    Azumarill: { t1: 'Water', bs: { hp: 100, at: 50, df: 80, sa: 50, sd: 80, sp: 50 }, w: 28.5 },
    Bayleef: {
        t1: 'Grass',
        bs: { hp: 60, at: 62, df: 80, sa: 63, sd: 80, sp: 60 },
        w: 15.8,
        canEvolve: true
    },
    Bellossom: { t1: 'Grass', bs: { hp: 75, at: 80, df: 85, sa: 90, sd: 100, sp: 50 }, w: 5.8 },
    Blissey: { t1: 'Normal', bs: { hp: 255, at: 10, df: 10, sa: 75, sd: 135, sp: 55 }, w: 46.8 },
    Celebi: {
        t1: 'Psychic',
        t2: 'Grass',
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        w: 5,
        gender: 'N'
    },
    Chikorita: {
        t1: 'Grass',
        bs: { hp: 45, at: 49, df: 65, sa: 49, sd: 65, sp: 45 },
        w: 6.4,
        canEvolve: true
    },
    Chinchou: {
        t1: 'Water',
        t2: 'Electric',
        bs: { hp: 75, at: 38, df: 38, sa: 56, sd: 56, sp: 67 },
        w: 12,
        canEvolve: true
    },
    Cleffa: {
        t1: 'Normal',
        bs: { hp: 50, at: 25, df: 28, sa: 45, sd: 55, sp: 15 },
        w: 3,
        canEvolve: true
    },
    Corsola: {
        t1: 'Water',
        t2: 'Rock',
        bs: { hp: 55, at: 55, df: 85, sa: 65, sd: 85, sp: 35 },
        w: 5
    },
    Crobat: {
        t1: 'Poison',
        t2: 'Flying',
        bs: { hp: 85, at: 90, df: 80, sa: 70, sd: 80, sp: 130 },
        w: 75
    },
    Croconaw: {
        t1: 'Water',
        bs: { hp: 65, at: 80, df: 80, sa: 59, sd: 63, sp: 58 },
        w: 25,
        canEvolve: true
    },
    Cyndaquil: {
        t1: 'Fire',
        bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
        w: 7.9,
        canEvolve: true
    },
    Delibird: {
        t1: 'Ice',
        t2: 'Flying',
        bs: { hp: 45, at: 55, df: 45, sa: 65, sd: 45, sp: 75 },
        w: 16
    },
    Donphan: { t1: 'Ground', bs: { hp: 90, at: 120, df: 120, sa: 60, sd: 60, sp: 50 }, w: 120 },
    Dunsparce: { t1: 'Normal', bs: { hp: 100, at: 70, df: 70, sa: 65, sd: 65, sp: 45 }, w: 14 },
    Elekid: {
        t1: 'Electric',
        bs: { hp: 45, at: 63, df: 37, sa: 65, sd: 55, sp: 95 },
        w: 23.5,
        canEvolve: true
    },
    Entei: {
        t1: 'Fire',
        bs: { hp: 115, at: 115, df: 85, sa: 90, sd: 75, sp: 100 },
        w: 198,
        gender: 'N'
    },
    Espeon: { t1: 'Psychic', bs: { hp: 65, at: 65, df: 60, sa: 130, sd: 95, sp: 110 }, w: 26.5 },
    Feraligatr: { t1: 'Water', bs: { hp: 85, at: 105, df: 100, sa: 79, sd: 83, sp: 78 }, w: 88.8 },
    Flaaffy: {
        t1: 'Electric',
        bs: { hp: 70, at: 55, df: 55, sa: 80, sd: 60, sp: 45 },
        w: 13.3,
        canEvolve: true
    },
    Forretress: {
        t1: 'Bug',
        t2: 'Steel',
        bs: { hp: 75, at: 90, df: 140, sa: 60, sd: 60, sp: 40 },
        w: 125.8
    },
    Furret: { t1: 'Normal', bs: { hp: 85, at: 76, df: 64, sa: 45, sd: 55, sp: 90 }, w: 32.5 },
    Girafarig: {
        t1: 'Normal',
        t2: 'Psychic',
        bs: { hp: 70, at: 80, df: 65, sa: 90, sd: 65, sp: 85 },
        w: 41.5
    },
    Gligar: {
        t1: 'Ground',
        t2: 'Flying',
        bs: { hp: 65, at: 75, df: 105, sa: 35, sd: 65, sp: 85 },
        w: 64.8
    },
    Granbull: { t1: 'Normal', bs: { hp: 90, at: 120, df: 75, sa: 60, sd: 60, sp: 45 }, w: 48.7 },
    Heracross: {
        t1: 'Bug',
        t2: 'Fighting',
        bs: { hp: 80, at: 125, df: 75, sa: 40, sd: 95, sp: 85 },
        w: 54
    },
    Hitmontop: { t1: 'Fighting', bs: { hp: 50, at: 95, df: 95, sa: 35, sd: 110, sp: 70 }, w: 48 },
    'Ho-Oh': {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 106, at: 130, df: 90, sa: 110, sd: 154, sp: 90 },
        w: 199,
        gender: 'N'
    },
    Hoothoot: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 60, at: 30, df: 30, sa: 36, sd: 56, sp: 50 },
        w: 21.2,
        canEvolve: true
    },
    Hoppip: {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 35, at: 35, df: 40, sa: 35, sd: 55, sp: 50 },
        w: 0.5,
        canEvolve: true
    },
    Houndoom: {
        t1: 'Dark',
        t2: 'Fire',
        bs: { hp: 75, at: 90, df: 50, sa: 110, sd: 80, sp: 95 },
        w: 35
    },
    Houndour: {
        t1: 'Dark',
        t2: 'Fire',
        bs: { hp: 45, at: 60, df: 30, sa: 80, sd: 50, sp: 65 },
        w: 10.8,
        canEvolve: true
    },
    Igglybuff: {
        t1: 'Normal',
        bs: { hp: 90, at: 30, df: 15, sa: 40, sd: 20, sp: 15 },
        w: 1,
        canEvolve: true
    },
    Jumpluff: {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 75, at: 55, df: 70, sa: 55, sd: 85, sp: 110 },
        w: 3
    },
    Kingdra: {
        t1: 'Water',
        t2: 'Dragon',
        bs: { hp: 75, at: 95, df: 95, sa: 95, sd: 95, sp: 85 },
        w: 152
    },
    Lanturn: {
        t1: 'Water',
        t2: 'Electric',
        bs: { hp: 125, at: 58, df: 58, sa: 76, sd: 76, sp: 67 },
        w: 22.5
    },
    Larvitar: {
        t1: 'Rock',
        t2: 'Ground',
        bs: { hp: 50, at: 64, df: 50, sa: 45, sd: 50, sp: 41 },
        w: 72,
        canEvolve: true
    },
    Ledian: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 55, at: 35, df: 50, sa: 55, sd: 110, sp: 85 },
        w: 35.6
    },
    Ledyba: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 40, at: 20, df: 30, sa: 40, sd: 80, sp: 55 },
        w: 10.8,
        canEvolve: true
    },
    Lugia: {
        t1: 'Psychic',
        t2: 'Flying',
        bs: { hp: 106, at: 90, df: 130, sa: 90, sd: 154, sp: 110 },
        w: 216,
        gender: 'N'
    },
    Magby: {
        t1: 'Fire',
        bs: { hp: 45, at: 75, df: 37, sa: 70, sd: 55, sp: 83 },
        w: 21.4,
        canEvolve: true
    },
    Magcargo: {
        t1: 'Fire',
        t2: 'Rock',
        bs: { hp: 50, at: 50, df: 120, sa: 80, sd: 80, sp: 30 },
        w: 55
    },
    Mantine: {
        t1: 'Water',
        t2: 'Flying',
        bs: { hp: 65, at: 40, df: 70, sa: 80, sd: 140, sp: 70 },
        w: 220
    },
    Mareep: {
        t1: 'Electric',
        bs: { hp: 55, at: 40, df: 40, sa: 65, sd: 45, sp: 35 },
        w: 7.8,
        canEvolve: true
    },
    Marill: {
        t1: 'Water',
        bs: { hp: 70, at: 20, df: 50, sa: 20, sd: 50, sp: 40 },
        w: 8.5,
        canEvolve: true
    },
    Meganium: { t1: 'Grass', bs: { hp: 80, at: 82, df: 100, sa: 83, sd: 100, sp: 80 }, w: 100.5 },
    Miltank: { t1: 'Normal', bs: { hp: 95, at: 80, df: 105, sa: 40, sd: 70, sp: 100 }, w: 75.5 },
    Misdreavus: {
        t1: 'Ghost',
        bs: { hp: 60, at: 60, df: 60, sa: 85, sd: 85, sp: 85 },
        w: 1
    },
    Murkrow: {
        t1: 'Dark',
        t2: 'Flying',
        bs: { hp: 60, at: 85, df: 42, sa: 85, sd: 42, sp: 91 },
        w: 2.1
    },
    Natu: {
        t1: 'Psychic',
        t2: 'Flying',
        bs: { hp: 40, at: 50, df: 45, sa: 70, sd: 45, sp: 70 },
        w: 2,
        canEvolve: true
    },
    Noctowl: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 100, at: 50, df: 50, sa: 76, sd: 96, sp: 70 },
        w: 40.8
    },
    Octillery: { t1: 'Water', bs: { hp: 75, at: 105, df: 75, sa: 105, sd: 75, sp: 45 }, w: 28.5 },
    Phanpy: {
        t1: 'Ground',
        bs: { hp: 90, at: 60, df: 60, sa: 40, sd: 40, sp: 40 },
        w: 33.5,
        canEvolve: true
    },
    Pichu: {
        t1: 'Electric',
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        w: 2,
        canEvolve: true
    },
    Piloswine: {
        t1: 'Ice',
        t2: 'Ground',
        bs: { hp: 100, at: 100, df: 80, sa: 60, sd: 60, sp: 50 },
        w: 55.8
    },
    Pineco: {
        t1: 'Bug',
        bs: { hp: 50, at: 65, df: 90, sa: 35, sd: 35, sp: 15 },
        w: 7.2,
        canEvolve: true
    },
    Politoed: { t1: 'Water', bs: { hp: 90, at: 75, df: 75, sa: 90, sd: 100, sp: 70 }, w: 33.9 },
    Porygon2: {
        t1: 'Normal',
        bs: { hp: 85, at: 80, df: 90, sa: 105, sd: 95, sp: 60 },
        w: 32.5,
        gender: 'N'
    },
    Pupitar: {
        t1: 'Rock',
        t2: 'Ground',
        bs: { hp: 70, at: 84, df: 70, sa: 65, sd: 70, sp: 51 },
        w: 152,
        canEvolve: true
    },
    Quagsire: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 95, at: 85, df: 85, sa: 65, sd: 65, sp: 35 },
        w: 75
    },
    Quilava: {
        t1: 'Fire',
        bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 80 },
        w: 19,
        canEvolve: true
    },
    Qwilfish: {
        t1: 'Water',
        t2: 'Poison',
        bs: { hp: 65, at: 95, df: 75, sa: 55, sd: 55, sp: 85 },
        w: 3.9
    },
    Raikou: {
        t1: 'Electric',
        bs: { hp: 90, at: 85, df: 75, sa: 115, sd: 100, sp: 115 },
        w: 178,
        gender: 'N'
    },
    Remoraid: {
        t1: 'Water',
        bs: { hp: 35, at: 65, df: 35, sa: 65, sd: 35, sp: 65 },
        w: 12,
        canEvolve: true
    },
    Scizor: {
        t1: 'Bug',
        t2: 'Steel',
        bs: { hp: 70, at: 130, df: 100, sa: 55, sd: 80, sp: 65 },
        w: 118
    },
    Sentret: {
        t1: 'Normal',
        bs: { hp: 35, at: 46, df: 34, sa: 35, sd: 45, sp: 20 },
        w: 6,
        canEvolve: true
    },
    Shuckle: {
        t1: 'Bug',
        t2: 'Rock',
        bs: { hp: 20, at: 10, df: 230, sa: 10, sd: 230, sp: 5 },
        w: 20.5
    },
    Skarmory: {
        t1: 'Steel',
        t2: 'Flying',
        bs: { hp: 65, at: 80, df: 140, sa: 40, sd: 70, sp: 70 },
        w: 50.5
    },
    Skiploom: {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 55, at: 45, df: 50, sa: 45, sd: 65, sp: 80 },
        w: 1,
        canEvolve: true
    },
    Slowking: {
        t1: 'Water',
        t2: 'Psychic',
        bs: { hp: 95, at: 75, df: 80, sa: 100, sd: 110, sp: 30 },
        w: 79.5
    },
    Slugma: {
        t1: 'Fire',
        bs: { hp: 40, at: 40, df: 40, sa: 70, sd: 40, sp: 20 },
        w: 35,
        canEvolve: true
    },
    Smeargle: { t1: 'Normal', bs: { hp: 55, at: 20, df: 35, sa: 20, sd: 45, sp: 75 }, w: 58 },
    Smoochum: {
        t1: 'Ice',
        t2: 'Psychic',
        bs: { hp: 45, at: 30, df: 15, sa: 85, sd: 65, sp: 65 },
        w: 6,
        canEvolve: true
    },
    Sneasel: {
        t1: 'Dark',
        t2: 'Ice',
        bs: { hp: 55, at: 95, df: 55, sa: 35, sd: 75, sp: 115 },
        w: 28,
        canEvolve: true
    },
    Snubbull: {
        t1: 'Normal',
        bs: { hp: 60, at: 80, df: 50, sa: 40, sd: 40, sp: 30 },
        w: 7.8,
        canEvolve: true
    },
    Spinarak: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 40, at: 60, df: 40, sa: 40, sd: 40, sp: 30 },
        w: 8.5,
        canEvolve: true
    },
    Stantler: { t1: 'Normal', bs: { hp: 73, at: 95, df: 62, sa: 85, sd: 65, sp: 85 }, w: 71.2 },
    Steelix: {
        t1: 'Steel',
        t2: 'Ground',
        bs: { hp: 75, at: 85, df: 200, sa: 55, sd: 65, sp: 30 },
        w: 400
    },
    Sudowoodo: { t1: 'Rock', bs: { hp: 70, at: 100, df: 115, sa: 30, sd: 65, sp: 30 }, w: 38 },
    Suicune: {
        t1: 'Water',
        bs: { hp: 100, at: 75, df: 115, sa: 90, sd: 115, sp: 85 },
        w: 187,
        gender: 'N'
    },
    Sunflora: { t1: 'Grass', bs: { hp: 75, at: 75, df: 55, sa: 105, sd: 85, sp: 30 }, w: 8.5 },
    Sunkern: {
        t1: 'Grass',
        bs: { hp: 30, at: 30, df: 30, sa: 30, sd: 30, sp: 30 },
        w: 1.8,
        canEvolve: true
    },
    Swinub: {
        t1: 'Ice',
        t2: 'Ground',
        bs: { hp: 50, at: 50, df: 40, sa: 30, sd: 30, sp: 50 },
        w: 6.5,
        canEvolve: true
    },
    Teddiursa: {
        t1: 'Normal',
        bs: { hp: 60, at: 80, df: 50, sa: 50, sd: 50, sp: 40 },
        w: 8.8,
        canEvolve: true
    },
    Togepi: {
        t1: 'Normal',
        bs: { hp: 35, at: 20, df: 65, sa: 40, sd: 65, sp: 20 },
        w: 1.5,
        canEvolve: true
    },
    Togetic: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 55, at: 40, df: 85, sa: 80, sd: 105, sp: 40 },
        w: 3.2
    },
    Totodile: {
        t1: 'Water',
        bs: { hp: 50, at: 65, df: 64, sa: 44, sd: 48, sp: 43 },
        w: 9.5,
        canEvolve: true
    },
    Typhlosion: { t1: 'Fire', bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 }, w: 79.5 },
    Tyranitar: {
        t1: 'Rock',
        t2: 'Dark',
        bs: { hp: 100, at: 134, df: 110, sa: 95, sd: 100, sp: 61 },
        w: 202
    },
    Tyrogue: {
        t1: 'Fighting',
        bs: { hp: 35, at: 35, df: 35, sa: 35, sd: 35, sp: 35 },
        w: 21,
        canEvolve: true
    },
    Umbreon: { t1: 'Dark', bs: { hp: 95, at: 65, df: 110, sa: 60, sd: 130, sp: 65 }, w: 27 },
    Unown: {
        t1: 'Psychic',
        bs: { hp: 48, at: 72, df: 48, sa: 72, sd: 48, sp: 48 },
        w: 5,
        gender: 'N'
    },
    Ursaring: { t1: 'Normal', bs: { hp: 90, at: 130, df: 75, sa: 75, sd: 75, sp: 55 }, w: 125.8 },
    Wobbuffet: { t1: 'Psychic', bs: { hp: 190, at: 33, df: 58, sa: 33, sd: 58, sp: 33 }, w: 28.5 },
    Wooper: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        w: 8.5,
        canEvolve: true
    },
    Xatu: {
        t1: 'Psychic',
        t2: 'Flying',
        bs: { hp: 65, at: 75, df: 70, sa: 95, sd: 70, sp: 95 },
        w: 15
    },
    Yanma: { t1: 'Bug', t2: 'Flying', bs: { hp: 65, at: 65, df: 45, sa: 75, sd: 45, sp: 95 }, w: 38 }
});
var ADV = util_1.extend(true, {}, GSC, {
    Abra: { ab: 'Synchronize' },
    Aerodactyl: { ab: 'Rock Head' },
    Alakazam: { ab: 'Synchronize' },
    Arbok: { ab: 'Intimidate' },
    Arcanine: { ab: 'Intimidate' },
    Articuno: { ab: 'Pressure' },
    Beedrill: { ab: 'Swarm' },
    Bellsprout: { ab: 'Chlorophyll' },
    Blastoise: { ab: 'Torrent' },
    Bulbasaur: { ab: 'Overgrow' },
    Butterfree: { ab: 'Compound Eyes' },
    Caterpie: { ab: 'Shield Dust' },
    Chansey: { ab: 'Serene Grace' },
    Charizard: { ab: 'Blaze' },
    Charmander: { ab: 'Blaze' },
    Charmeleon: { ab: 'Blaze' },
    Clefable: { ab: 'Magic Guard' },
    Clefairy: { ab: 'Magic Guard' },
    Cloyster: { ab: 'Skill Link' },
    Cubone: { ab: 'Rock Head' },
    Dewgong: { ab: 'Thick Fat' },
    Diglett: { ab: 'Arena Trap' },
    Ditto: { ab: 'Limber' },
    Dodrio: { ab: 'Early Bird' },
    Doduo: { ab: 'Early Bird' },
    Dragonair: { ab: 'Shed Skin' },
    Dragonite: { ab: 'Inner Focus' },
    Dratini: { ab: 'Shed Skin' },
    Drowzee: { ab: 'Insomnia' },
    Dugtrio: { ab: 'Arena Trap' },
    Eevee: { ab: 'Adaptability' },
    Ekans: { ab: 'Intimidate' },
    Electabuzz: { ab: 'Static' },
    Electrode: { ab: 'Soundproof' },
    Exeggcute: { ab: 'Chlorophyll' },
    Exeggutor: { ab: 'Chlorophyll' },
    "Farfetch'd": { ab: 'Inner Focus' },
    Fearow: { ab: 'Keen Eye' },
    Flareon: { ab: 'Flash Fire' },
    Gastly: { ab: 'Levitate' },
    Gengar: { ab: 'Levitate' },
    Geodude: { ab: 'Rock Head' },
    Gloom: { ab: 'Chlorophyll' },
    Golbat: { ab: 'Inner Focus' },
    Goldeen: { ab: 'Swift Swim' },
    Golduck: { ab: 'Cloud Nine' },
    Golem: { ab: 'Rock Head' },
    Graveler: { ab: 'Rock Head' },
    Grimer: { ab: 'Sticky Hold' },
    Growlithe: { ab: 'Intimidate' },
    Gyarados: { ab: 'Intimidate' },
    Haunter: { ab: 'Levitate' },
    Hitmonchan: { ab: 'Iron Fist' },
    Hitmonlee: { ab: 'Reckless' },
    Horsea: { ab: 'Swift Swim' },
    Hypno: { ab: 'Insomnia' },
    Ivysaur: { ab: 'Overgrow' },
    Jigglypuff: { ab: 'Cute Charm' },
    Jolteon: { ab: 'Volt Absorb' },
    Jynx: { ab: 'Forewarn' },
    Kabuto: { ab: 'Swift Swim' },
    Kabutops: { ab: 'Swift Swim' },
    Kadabra: { ab: 'Synchronize' },
    Kakuna: { ab: 'Shed Skin' },
    Kangaskhan: { ab: 'Scrappy' },
    Kingler: { ab: 'Hyper Cutter' },
    Koffing: { ab: 'Levitate' },
    Krabby: { ab: 'Hyper Cutter' },
    Lapras: { ab: 'Water Absorb' },
    Lickitung: { ab: 'Own Tempo' },
    Machamp: { ab: 'No Guard' },
    Machoke: { ab: 'No Guard' },
    Machop: { ab: 'No Guard' },
    Magikarp: { ab: 'Swift Swim' },
    Magmar: { ab: 'Flame Body' },
    Magnemite: { ab: 'Magnet Pull' },
    Magneton: { ab: 'Magnet Pull' },
    Mankey: { ab: 'Vital Spirit' },
    Marowak: { ab: 'Rock Head' },
    Meowth: { ab: 'Technician' },
    Metapod: { ab: 'Shed Skin' },
    Mew: { ab: 'Synchronize' },
    Mewtwo: { ab: 'Pressure' },
    Moltres: { ab: 'Pressure' },
    'Mr. Mime': { ab: 'Filter' },
    Muk: { ab: 'Sticky Hold' },
    Nidoking: { ab: 'Poison Point' },
    Nidoqueen: { ab: 'Poison Point' },
    'Nidoran-F': { ab: 'Poison Point' },
    'Nidoran-M': { ab: 'Poison Point' },
    Nidorina: { ab: 'Poison Point' },
    Nidorino: { ab: 'Poison Point' },
    Ninetales: { ab: 'Flash Fire' },
    Oddish: { ab: 'Chlorophyll' },
    Omanyte: { ab: 'Swift Swim' },
    Omastar: { ab: 'Swift Swim' },
    Onix: { ab: 'Rock Head' },
    Paras: { ab: 'Dry Skin' },
    Parasect: { ab: 'Dry Skin' },
    Persian: { ab: 'Technician' },
    Pidgeot: { ab: 'Tangled Feet' },
    Pidgeotto: { ab: 'Tangled Feet' },
    Pidgey: { ab: 'Tangled Feet' },
    Pikachu: { ab: 'Static' },
    Pinsir: { ab: 'Mold Breaker' },
    Poliwag: { ab: 'Water Absorb' },
    Poliwhirl: { ab: 'Water Absorb' },
    Poliwrath: { ab: 'Water Absorb' },
    Ponyta: { ab: 'Flash Fire' },
    Porygon: { ab: 'Download' },
    Primeape: { ab: 'Vital Spirit' },
    Psyduck: { ab: 'Cloud Nine' },
    Raichu: { ab: 'Static' },
    Rapidash: { ab: 'Flash Fire' },
    Raticate: { ab: 'Guts' },
    Rattata: { ab: 'Guts' },
    Rhydon: { ab: 'Rock Head' },
    Rhyhorn: { ab: 'Rock Head' },
    Sandshrew: { ab: 'Sand Veil' },
    Sandslash: { ab: 'Sand Veil' },
    Scyther: { ab: 'Technician' },
    Seadra: { ab: 'Poison Point' },
    Seaking: { ab: 'Swift Swim' },
    Seel: { ab: 'Thick Fat' },
    Shellder: { ab: 'Skill Link' },
    Slowbro: { ab: 'Own Tempo' },
    Slowpoke: { ab: 'Own Tempo' },
    Snorlax: { ab: 'Thick Fat' },
    Spearow: { ab: 'Keen Eye' },
    Squirtle: { ab: 'Torrent' },
    Starmie: { ab: 'Natural Cure' },
    Staryu: { ab: 'Natural Cure' },
    Tangela: { ab: 'Chlorophyll' },
    Tauros: { ab: 'Intimidate' },
    Tentacool: { ab: 'Clear Body' },
    Tentacruel: { ab: 'Clear Body' },
    Vaporeon: { ab: 'Water Absorb' },
    Venomoth: { ab: 'Tinted Lens' },
    Venonat: { ab: 'Compound Eyes' },
    Venusaur: { ab: 'Overgrow' },
    Victreebel: { ab: 'Chlorophyll' },
    Vileplume: { ab: 'Chlorophyll' },
    Voltorb: { ab: 'Soundproof' },
    Vulpix: { ab: 'Flash Fire' },
    Wartortle: { ab: 'Torrent' },
    Weedle: { ab: 'Shield Dust' },
    Weepinbell: { ab: 'Chlorophyll' },
    Weezing: { ab: 'Levitate' },
    Wigglytuff: { ab: 'Cute Charm' },
    Zapdos: { ab: 'Pressure' },
    Zubat: { ab: 'Inner Focus' },
    Aipom: { ab: 'Run Away' },
    Ampharos: { ab: 'Static' },
    Ariados: { ab: 'Insomnia' },
    Azumarill: { ab: 'Huge Power' },
    Bayleef: { ab: 'Overgrow' },
    Bellossom: { ab: 'Chlorophyll' },
    Blissey: { ab: 'Serene Grace' },
    Celebi: { ab: 'Natural Cure' },
    Chikorita: { ab: 'Overgrow' },
    Chinchou: { ab: 'Volt Absorb' },
    Cleffa: { ab: 'Magic Guard' },
    Corsola: { ab: 'Hustle' },
    Crobat: { ab: 'Inner Focus' },
    Croconaw: { ab: 'Torrent' },
    Cyndaquil: { ab: 'Blaze' },
    Delibird: { ab: 'Hustle' },
    Donphan: { ab: 'Sturdy' },
    Dunsparce: { ab: 'Serene Grace' },
    Elekid: { ab: 'Static' },
    Entei: { ab: 'Pressure' },
    Espeon: { ab: 'Synchronize' },
    Feraligatr: { ab: 'Torrent' },
    Flaaffy: { ab: 'Static' },
    Forretress: { ab: 'Sturdy' },
    Furret: { ab: 'Keen Eye' },
    Girafarig: { ab: 'Early Bird' },
    Gligar: { ab: 'Hyper Cutter' },
    Granbull: { ab: 'Intimidate' },
    Heracross: { ab: 'Guts' },
    Hitmontop: { ab: 'Technician' },
    'Ho-Oh': { ab: 'Pressure' },
    Hoothoot: { ab: 'Insomnia' },
    Hoppip: { ab: 'Chlorophyll' },
    Houndoom: { ab: 'Flash Fire' },
    Houndour: { ab: 'Flash Fire' },
    Igglybuff: { ab: 'Cute Charm' },
    Jumpluff: { ab: 'Chlorophyll' },
    Kingdra: { ab: 'Swift Swim' },
    Lanturn: { ab: 'Volt Absorb' },
    Larvitar: { ab: 'Guts' },
    Ledian: { ab: 'Swarm' },
    Ledyba: { ab: 'Swarm' },
    Lugia: { ab: 'Pressure' },
    Magby: { ab: 'Flame Body' },
    Magcargo: { ab: 'Flame Body' },
    Mantine: { ab: 'Water Absorb' },
    Mareep: { ab: 'Static' },
    Marill: { ab: 'Huge Power' },
    Meganium: { ab: 'Overgrow' },
    Miltank: { ab: 'Thick Fat' },
    Misdreavus: { ab: 'Levitate' },
    Murkrow: { ab: 'Insomnia' },
    Natu: { ab: 'Synchronize' },
    Noctowl: { ab: 'Insomnia' },
    Octillery: { ab: 'Sniper' },
    Phanpy: { ab: 'Pickup' },
    Pichu: { ab: 'Static' },
    Piloswine: { ab: 'Snow Cloak' },
    Pineco: { ab: 'Sturdy' },
    Politoed: { ab: 'Water Absorb' },
    Porygon2: { ab: 'Download' },
    Pupitar: { ab: 'Shed Skin' },
    Quagsire: { ab: 'Water Absorb' },
    Quilava: { ab: 'Blaze' },
    Qwilfish: { ab: 'Swift Swim' },
    Raikou: { ab: 'Pressure' },
    Remoraid: { ab: 'Hustle' },
    Scizor: { ab: 'Technician' },
    Sentret: { ab: 'Keen Eye' },
    Shuckle: { ab: 'Gluttony' },
    Skarmory: { ab: 'Keen Eye' },
    Skiploom: { ab: 'Chlorophyll' },
    Slowking: { ab: 'Own Tempo' },
    Slugma: { ab: 'Flame Body' },
    Smeargle: { ab: 'Technician' },
    Smoochum: { ab: 'Forewarn' },
    Sneasel: { ab: 'Inner Focus' },
    Snubbull: { ab: 'Intimidate' },
    Spinarak: { ab: 'Insomnia' },
    Stantler: { ab: 'Intimidate' },
    Steelix: { ab: 'Rock Head' },
    Sudowoodo: { ab: 'Rock Head' },
    Suicune: { ab: 'Pressure' },
    Sunflora: { ab: 'Chlorophyll' },
    Sunkern: { ab: 'Chlorophyll' },
    Swinub: { ab: 'Snow Cloak' },
    Teddiursa: { ab: 'Quick Feet' },
    Togepi: { ab: 'Serene Grace' },
    Togetic: { ab: 'Serene Grace' },
    Totodile: { ab: 'Torrent' },
    Typhlosion: { ab: 'Blaze' },
    Tyranitar: { ab: 'Sand Stream' },
    Tyrogue: { ab: 'Guts' },
    Umbreon: { ab: 'Synchronize' },
    Unown: { ab: 'Levitate' },
    Ursaring: { ab: 'Guts' },
    Wobbuffet: { ab: 'Shadow Tag' },
    Wooper: { ab: 'Water Absorb' },
    Xatu: { ab: 'Synchronize' },
    Yanma: { ab: 'Speed Boost' },
    Absol: {
        t1: 'Dark',
        bs: { hp: 65, at: 130, df: 60, sa: 75, sd: 60, sp: 75 },
        w: 47,
        ab: 'Pressure'
    },
    Aggron: {
        t1: 'Steel',
        t2: 'Rock',
        bs: { hp: 70, at: 110, df: 180, sa: 60, sd: 60, sp: 50 },
        w: 360,
        ab: 'Rock Head'
    },
    Altaria: {
        t1: 'Dragon',
        t2: 'Flying',
        bs: { hp: 75, at: 70, df: 90, sa: 70, sd: 105, sp: 80 },
        w: 20.6,
        ab: 'Natural Cure'
    },
    Anorith: {
        t1: 'Rock',
        t2: 'Bug',
        bs: { hp: 45, at: 95, df: 50, sa: 40, sd: 50, sp: 75 },
        w: 12.5,
        canEvolve: true,
        ab: 'Battle Armor'
    },
    Armaldo: {
        t1: 'Rock',
        t2: 'Bug',
        bs: { hp: 75, at: 125, df: 100, sa: 70, sd: 80, sp: 45 },
        w: 68.2,
        ab: 'Battle Armor'
    },
    Aron: {
        t1: 'Steel',
        t2: 'Rock',
        bs: { hp: 50, at: 70, df: 100, sa: 40, sd: 40, sp: 30 },
        w: 60,
        canEvolve: true,
        ab: 'Rock Head'
    },
    Azurill: {
        t1: 'Normal',
        bs: { hp: 50, at: 20, df: 40, sa: 20, sd: 40, sp: 20 },
        w: 2,
        canEvolve: true,
        ab: 'Huge Power'
    },
    Bagon: {
        t1: 'Dragon',
        bs: { hp: 45, at: 75, df: 60, sa: 40, sd: 30, sp: 50 },
        w: 42.1,
        canEvolve: true,
        ab: 'Rock Head'
    },
    Baltoy: {
        t1: 'Ground',
        t2: 'Psychic',
        bs: { hp: 40, at: 40, df: 55, sa: 40, sd: 70, sp: 55 },
        w: 21.5,
        ab: 'Levitate',
        canEvolve: true,
        gender: 'N'
    },
    Banette: {
        t1: 'Ghost',
        bs: { hp: 64, at: 115, df: 65, sa: 83, sd: 63, sp: 65 },
        w: 12.5,
        ab: 'Insomnia'
    },
    Barboach: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 50, at: 48, df: 43, sa: 46, sd: 41, sp: 60 },
        w: 1.9,
        canEvolve: true,
        ab: 'Anticipation'
    },
    Beautifly: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 60, at: 70, df: 50, sa: 90, sd: 50, sp: 65 },
        w: 28.4,
        ab: 'Swarm'
    },
    Beldum: {
        t1: 'Steel',
        t2: 'Psychic',
        bs: { hp: 40, at: 55, df: 80, sa: 35, sd: 60, sp: 30 },
        w: 95.2,
        canEvolve: true,
        gender: 'N',
        ab: 'Clear Body'
    },
    Blaziken: {
        t1: 'Fire',
        t2: 'Fighting',
        bs: { hp: 80, at: 120, df: 70, sa: 110, sd: 70, sp: 80 },
        w: 52,
        ab: 'Blaze'
    },
    Breloom: {
        t1: 'Grass',
        t2: 'Fighting',
        bs: { hp: 60, at: 130, df: 80, sa: 60, sd: 60, sp: 70 },
        w: 39.2,
        ab: 'Poison Heal'
    },
    Cacnea: {
        t1: 'Grass',
        bs: { hp: 50, at: 85, df: 40, sa: 85, sd: 40, sp: 35 },
        w: 51.3,
        canEvolve: true,
        ab: 'Sand Veil'
    },
    Cacturne: {
        t1: 'Grass',
        t2: 'Dark',
        bs: { hp: 70, at: 115, df: 60, sa: 115, sd: 60, sp: 55 },
        w: 77.4,
        ab: 'Sand Veil'
    },
    Camerupt: {
        t1: 'Fire',
        t2: 'Ground',
        bs: { hp: 70, at: 100, df: 70, sa: 105, sd: 75, sp: 40 },
        w: 220,
        ab: 'Solid Rock'
    },
    Carvanha: {
        t1: 'Water',
        t2: 'Dark',
        bs: { hp: 45, at: 90, df: 20, sa: 65, sd: 20, sp: 65 },
        w: 20.8,
        canEvolve: true,
        ab: 'Rough Skin'
    },
    Cascoon: {
        t1: 'Bug',
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        w: 11.5,
        ab: 'Shed Skin',
        canEvolve: true
    },
    Castform: {
        t1: 'Normal',
        bs: { hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70 },
        w: 0.8,
        ab: 'Forecast',
        formes: ['Castform', 'Castform-Rainy', 'Castform-Snowy', 'Castform-Sunny', 'Castform-Sandy', 'Castform-Cloudy']
    },
    'Castform-Rainy': {
    	t1: 'Water',
    	bs: {hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70},
    	w: 0.8,
    	ab: 'Forecast',
    	isAlternateForme: true,
    },
    'Castform-Snowy': {
    	t1: 'Ice',
    	bs: {hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70},
    	w: 0.8,
    	ab: 'Forecast',
    	isAlternateForme: true,
    },
    'Castform-Sunny': {
    	t1: 'Fire',
    	bs: {hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70},
    	w: 0.8,
    	ab: 'Forecast',
    	isAlternateForme: true,
    },
    'Castform-Sandy': {
    	t1: 'Rock',
    	t2: 'Ground',
    	bs: {hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70},
    	w: 0.8,
    	ab: 'Forecast',
    	isAlternateForme: true,
    },
    'Castform-Cloudy': {
    	t1: 'Dark',
    	bs: {hp: 70, at: 70, df: 70, sa: 70, sd: 70, sp: 70},
    	w: 0.8,
    	ab: 'Forecast',
    	isAlternateForme: true,
    },
    Chimecho: {
        t1: 'Psychic',
        bs: { hp: 65, at: 50, df: 70, sa: 95, sd: 80, sp: 65 },
        w: 1,
        ab: 'Levitate'
    },
    Clamperl: {
        t1: 'Water',
        bs: { hp: 35, at: 64, df: 85, sa: 74, sd: 55, sp: 32 },
        w: 52.5,
        canEvolve: true,
        ab: 'Shell Armor'
    },
    Claydol: {
        t1: 'Ground',
        t2: 'Psychic',
        bs: { hp: 60, at: 70, df: 105, sa: 70, sd: 120, sp: 75 },
        w: 108,
        ab: 'Levitate',
        gender: 'N'
    },
    Combusken: {
        t1: 'Fire',
        t2: 'Fighting',
        bs: { hp: 60, at: 85, df: 60, sa: 85, sd: 60, sp: 55 },
        w: 19.5,
        canEvolve: true,
        ab: 'Blaze'
    },
    Corphish: {
        t1: 'Water',
        bs: { hp: 43, at: 80, df: 65, sa: 50, sd: 35, sp: 35 },
        w: 11.5,
        canEvolve: true,
        ab: 'Hyper Cutter'
    },
    Cradily: {
        t1: 'Rock',
        t2: 'Grass',
        bs: { hp: 86, at: 81, df: 97, sa: 81, sd: 107, sp: 43 },
        w: 60.4,
        ab: 'Suction Cups'
    },
    Crawdaunt: {
        t1: 'Water',
        t2: 'Dark',
        bs: { hp: 63, at: 120, df: 85, sa: 90, sd: 55, sp: 55 },
        w: 32.8,
        ab: 'Hyper Cutter'
    },
    Delcatty: {
        t1: 'Normal',
        bs: { hp: 70, at: 65, df: 65, sa: 55, sd: 55, sp: 70 },
        w: 32.6,
        ab: 'Cute Charm'
    },
    Deoxys: {
        t1: 'Psychic',
        bs: { hp: 50, at: 150, df: 50, sa: 150, sd: 50, sp: 150 },
        w: 60.8,
        ab: 'Pressure',
        gender: 'N',
        formes: ['Deoxys', 'Deoxys-Attack', 'Deoxys-Defense', 'Deoxys-Speed']
    },
    'Deoxys-Attack': {
        t1: 'Psychic',
        bs: { hp: 50, at: 180, df: 20, sa: 180, sd: 20, sp: 150 },
        w: 60.8,
        ab: 'Pressure',
        gender: 'N',
        isAlternateForme: true
    },
    'Deoxys-Defense': {
        t1: 'Psychic',
        bs: { hp: 50, at: 70, df: 160, sa: 70, sd: 160, sp: 90 },
        w: 60.8,
        ab: 'Pressure',
        gender: 'N',
        isAlternateForme: true
    },
    'Deoxys-Speed': {
        t1: 'Psychic',
        bs: { hp: 50, at: 95, df: 90, sa: 95, sd: 90, sp: 180 },
        w: 60.8,
        ab: 'Pressure',
        gender: 'N',
        isAlternateForme: true
    },
    Dusclops: {
        t1: 'Ghost',
        bs: { hp: 40, at: 70, df: 130, sa: 60, sd: 130, sp: 25 },
        w: 30.6,
        ab: 'Pressure'
    },
    Duskull: {
        t1: 'Ghost',
        bs: { hp: 20, at: 40, df: 90, sa: 30, sd: 90, sp: 25 },
        w: 15,
        canEvolve: true,
        ab: 'Levitate'
    },
    Dustox: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 60, at: 50, df: 70, sa: 50, sd: 90, sp: 65 },
        w: 31.6,
        ab: 'Shield Dust'
    },
    Electrike: {
        t1: 'Electric',
        bs: { hp: 40, at: 45, df: 40, sa: 65, sd: 40, sp: 65 },
        w: 15.2,
        canEvolve: true,
        ab: 'Static'
    },
    Exploud: {
        t1: 'Normal',
        bs: { hp: 104, at: 91, df: 63, sa: 91, sd: 63, sp: 68 },
        w: 84,
        ab: 'Soundproof'
    },
    Feebas: {
        t1: 'Water',
        bs: { hp: 20, at: 15, df: 20, sa: 10, sd: 55, sp: 80 },
        w: 7.4,
        canEvolve: true,
        ab: 'Swift Swim'
    },
    Flygon: {
        t1: 'Ground',
        t2: 'Dragon',
        bs: { hp: 80, at: 100, df: 80, sa: 80, sd: 80, sp: 100 },
        w: 82,
        ab: 'Levitate'
    },
    Gardevoir: {
        t1: 'Psychic',
        bs: { hp: 68, at: 65, df: 65, sa: 125, sd: 115, sp: 80 },
        w: 48.4,
        ab: 'Trace'
    },
    Glalie: {
        t1: 'Ice',
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        w: 256.5,
        ab: 'Ice Body'
    },
    Gorebyss: {
        t1: 'Water',
        bs: { hp: 55, at: 84, df: 105, sa: 114, sd: 75, sp: 52 },
        w: 22.6,
        ab: 'Swift Swim'
    },
    Groudon: {
        t1: 'Ground',
        bs: { hp: 100, at: 150, df: 140, sa: 100, sd: 90, sp: 90 },
        w: 950,
        ab: 'Drought',
        gender: 'N'
    },
    Grovyle: {
        t1: 'Grass',
        bs: { hp: 50, at: 65, df: 45, sa: 85, sd: 65, sp: 95 },
        w: 21.6,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Grumpig: {
        t1: 'Psychic',
        bs: { hp: 80, at: 45, df: 65, sa: 90, sd: 110, sp: 80 },
        w: 71.5,
        ab: 'Thick Fat'
    },
    Gulpin: {
        t1: 'Poison',
        bs: { hp: 70, at: 43, df: 53, sa: 43, sd: 53, sp: 40 },
        w: 10.3,
        canEvolve: true,
        ab: 'Liquid Ooze'
    },
    Hariyama: {
        t1: 'Fighting',
        bs: { hp: 144, at: 120, df: 60, sa: 40, sd: 60, sp: 50 },
        w: 253.8,
        ab: 'Thick Fat'
    },
    Huntail: {
        t1: 'Water',
        bs: { hp: 55, at: 104, df: 105, sa: 94, sd: 75, sp: 52 },
        w: 27,
        ab: 'Swift Swim'
    },
    Illumise: {
        t1: 'Bug',
        bs: { hp: 65, at: 47, df: 55, sa: 73, sd: 75, sp: 85 },
        ab: 'Tinted Lens',
        w: 17.7
    },
    Jirachi: {
        t1: 'Steel',
        t2: 'Psychic',
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        w: 1.1,
        ab: 'Serene Grace',
        gender: 'N'
    },
    Kecleon: {
        t1: 'Normal',
        bs: { hp: 60, at: 90, df: 70, sa: 60, sd: 120, sp: 40 },
        w: 22,
        ab: 'Color Change'
    },
    Kirlia: {
        t1: 'Psychic',
        bs: { hp: 38, at: 35, df: 35, sa: 65, sd: 55, sp: 50 },
        w: 20.2,
        canEvolve: true,
        ab: 'Trace'
    },
    Kyogre: {
        t1: 'Water',
        bs: { hp: 100, at: 100, df: 90, sa: 150, sd: 140, sp: 90 },
        w: 352,
        ab: 'Drizzle',
        gender: 'N'
    },
    Lairon: {
        t1: 'Steel',
        t2: 'Rock',
        bs: { hp: 60, at: 90, df: 140, sa: 50, sd: 50, sp: 40 },
        w: 120,
        canEvolve: true,
        ab: 'Rock Head'
    },
    Latias: {
        t1: 'Dragon',
        t2: 'Psychic',
        bs: { hp: 80, at: 80, df: 90, sa: 110, sd: 130, sp: 110 },
        w: 40,
        ab: 'Levitate'
    },
    Latios: {
        t1: 'Dragon',
        t2: 'Psychic',
        bs: { hp: 80, at: 90, df: 80, sa: 130, sd: 110, sp: 110 },
        w: 60,
        ab: 'Levitate'
    },
    Lileep: {
        t1: 'Rock',
        t2: 'Grass',
        bs: { hp: 66, at: 41, df: 77, sa: 61, sd: 87, sp: 23 },
        w: 23.8,
        canEvolve: true,
        ab: 'Suction Cups'
    },
    Linoone: {
        t1: 'Normal',
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        w: 32.5,
        ab: 'Gluttony'
    },
    Lombre: {
        t1: 'Water',
        t2: 'Grass',
        bs: { hp: 60, at: 50, df: 50, sa: 60, sd: 70, sp: 50 },
        w: 32.5,
        canEvolve: true,
        ab: 'Swift Swim'
    },
    Lotad: {
        t1: 'Water',
        t2: 'Grass',
        bs: { hp: 40, at: 30, df: 30, sa: 40, sd: 50, sp: 30 },
        w: 2.6,
        canEvolve: true,
        ab: 'Swift Swim'
    },
    Loudred: {
        t1: 'Normal',
        bs: { hp: 84, at: 71, df: 43, sa: 71, sd: 43, sp: 48 },
        w: 40.5,
        canEvolve: true,
        ab: 'Soundproof'
    },
    Ludicolo: {
        t1: 'Water',
        t2: 'Grass',
        bs: { hp: 80, at: 70, df: 70, sa: 90, sd: 100, sp: 70 },
        w: 55,
        ab: 'Swift Swim'
    },
    Lunatone: {
        t1: 'Rock',
        t2: 'Psychic',
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 85, sp: 70 },
        w: 168,
        ab: 'Levitate',
        gender: 'N'
    },
    Luvdisc: {
        t1: 'Water',
        bs: { hp: 43, at: 30, df: 55, sa: 40, sd: 65, sp: 97 },
        w: 8.7,
        ab: 'Swift Swim'
    },
    Makuhita: {
        t1: 'Fighting',
        bs: { hp: 72, at: 60, df: 30, sa: 20, sd: 30, sp: 25 },
        w: 86.4,
        canEvolve: true,
        ab: 'Thick Fat'
    },
    Manectric: {
        t1: 'Electric',
        bs: { hp: 70, at: 75, df: 60, sa: 105, sd: 60, sp: 105 },
        w: 40.2,
        ab: 'Static'
    },
    Marshtomp: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 70, at: 85, df: 70, sa: 60, sd: 70, sp: 50 },
        w: 28,
        canEvolve: true,
        ab: 'Torrent'
    },
    Masquerain: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 70, at: 60, df: 62, sa: 80, sd: 82, sp: 60 },
        w: 3.6,
        ab: 'Intimidate'
    },
    Mawile: {
        t1: 'Steel',
        bs: { hp: 50, at: 85, df: 85, sa: 55, sd: 55, sp: 50 },
        w: 11.5,
        ab: 'Intimidate'
    },
    Medicham: {
        t1: 'Fighting',
        t2: 'Psychic',
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 80 },
        w: 31.5,
        ab: 'Pure Power'
    },
    Meditite: {
        t1: 'Fighting',
        t2: 'Psychic',
        bs: { hp: 30, at: 40, df: 55, sa: 40, sd: 55, sp: 60 },
        w: 11.2,
        canEvolve: true,
        ab: 'Pure Power'
    },
    Metagross: {
        t1: 'Steel',
        t2: 'Psychic',
        bs: { hp: 80, at: 135, df: 130, sa: 95, sd: 90, sp: 70 },
        w: 550,
        gender: 'N',
        ab: 'Clear Body'
    },
    Metang: {
        t1: 'Steel',
        t2: 'Psychic',
        bs: { hp: 60, at: 75, df: 100, sa: 55, sd: 80, sp: 50 },
        w: 202.5,
        canEvolve: true,
        gender: 'N',
        ab: 'Clear Body'
    },
    Mightyena: {
        t1: 'Dark',
        bs: { hp: 70, at: 90, df: 70, sa: 60, sd: 60, sp: 70 },
        w: 37,
        ab: 'Intimidate'
    },
    Milotic: {
        t1: 'Water',
        bs: { hp: 95, at: 60, df: 79, sa: 100, sd: 125, sp: 81 },
        w: 162,
        ab: 'Marvel Scale'
    },
    Minun: {
        t1: 'Electric',
        bs: { hp: 60, at: 40, df: 50, sa: 75, sd: 85, sp: 95 },
        w: 4.2,
        ab: 'Minus'
    },
    Mudkip: {
        t1: 'Water',
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 40 },
        w: 7.6,
        canEvolve: true,
        ab: 'Torrent'
    },
    Nincada: {
        t1: 'Bug',
        t2: 'Ground',
        bs: { hp: 31, at: 45, df: 90, sa: 30, sd: 30, sp: 40 },
        w: 5.5,
        canEvolve: true,
        ab: 'Compound Eyes'
    },
    Ninjask: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 61, at: 90, df: 45, sa: 50, sd: 50, sp: 160 },
        w: 12,
        ab: 'Speed Boost'
    },
    Nosepass: {
        t1: 'Rock',
        bs: { hp: 30, at: 45, df: 135, sa: 45, sd: 90, sp: 30 },
        w: 97,
        canEvolve: true,
        ab: 'Magnet Pull'
    },
    Numel: {
        t1: 'Fire',
        t2: 'Ground',
        bs: { hp: 60, at: 60, df: 40, sa: 65, sd: 45, sp: 35 },
        w: 24,
        canEvolve: true,
        ab: 'Simple'
    },
    Nuzleaf: {
        t1: 'Grass',
        t2: 'Dark',
        bs: { hp: 70, at: 70, df: 40, sa: 60, sd: 40, sp: 60 },
        w: 28,
        canEvolve: true,
        ab: 'Chlorophyll'
    },
    Pelipper: {
        t1: 'Water',
        t2: 'Flying',
        bs: { hp: 60, at: 50, df: 100, sa: 85, sd: 70, sp: 65 },
        w: 28,
        ab: 'Keen Eye'
    },
    Plusle: {
        t1: 'Electric',
        bs: { hp: 60, at: 50, df: 40, sa: 85, sd: 75, sp: 95 },
        w: 4.2,
        ab: 'Plus'
    },
    Poochyena: {
        t1: 'Dark',
        bs: { hp: 35, at: 55, df: 35, sa: 30, sd: 30, sp: 35 },
        w: 13.6,
        canEvolve: true,
        ab: 'Quick Feet'
    },
    Ralts: {
        t1: 'Psychic',
        bs: { hp: 28, at: 25, df: 25, sa: 45, sd: 35, sp: 40 },
        w: 6.6,
        canEvolve: true,
        ab: 'Trace'
    },
    Rayquaza: {
        t1: 'Dragon',
        t2: 'Flying',
        bs: { hp: 105, at: 150, df: 90, sa: 150, sd: 90, sp: 95 },
        w: 206.5,
        ab: 'Air Lock',
        gender: 'N'
    },
    Regice: {
        t1: 'Ice',
        bs: { hp: 80, at: 50, df: 100, sa: 100, sd: 200, sp: 50 },
        w: 175,
        gender: 'N',
        ab: 'Clear Body'
    },
    Regirock: {
        t1: 'Rock',
        bs: { hp: 80, at: 100, df: 200, sa: 50, sd: 100, sp: 50 },
        w: 230,
        gender: 'N',
        ab: 'Clear Body'
    },
    Registeel: {
        t1: 'Steel',
        bs: { hp: 80, at: 75, df: 150, sa: 75, sd: 150, sp: 50 },
        w: 205,
        gender: 'N',
        ab: 'Clear Body'
    },
    Relicanth: {
        t1: 'Water',
        t2: 'Rock',
        bs: { hp: 100, at: 90, df: 130, sa: 45, sd: 65, sp: 55 },
        w: 23.4,
        ab: 'Swift Swim'
    },
    Roselia: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 50, at: 60, df: 45, sa: 100, sd: 80, sp: 65 },
        w: 2,
        ab: 'Natural Cure'
    },
    Sableye: {
        t1: 'Dark',
        t2: 'Ghost',
        bs: { hp: 50, at: 75, df: 75, sa: 65, sd: 65, sp: 50 },
        w: 11,
        ab: 'Keen Eye'
    },
    Salamence: {
        t1: 'Dragon',
        t2: 'Flying',
        bs: { hp: 95, at: 135, df: 80, sa: 110, sd: 80, sp: 100 },
        w: 102.6,
        ab: 'Intimidate'
    },
    Sceptile: {
        t1: 'Grass',
        bs: { hp: 70, at: 85, df: 65, sa: 105, sd: 85, sp: 120 },
        w: 52.2,
        ab: 'Overgrow'
    },
    Sealeo: {
        t1: 'Ice',
        t2: 'Water',
        bs: { hp: 90, at: 60, df: 70, sa: 75, sd: 70, sp: 45 },
        w: 87.6,
        canEvolve: true,
        ab: 'Thick Fat'
    },
    Seedot: {
        t1: 'Grass',
        bs: { hp: 40, at: 40, df: 50, sa: 30, sd: 30, sp: 30 },
        w: 4,
        canEvolve: true,
        ab: 'Chlorophyll'
    },
    Seviper: {
        t1: 'Poison',
        bs: { hp: 73, at: 100, df: 60, sa: 100, sd: 60, sp: 65 },
        w: 52.5,
        ab: 'Shed Skin'
    },
    Sharpedo: {
        t1: 'Water',
        t2: 'Dark',
        bs: { hp: 70, at: 120, df: 40, sa: 95, sd: 40, sp: 95 },
        w: 88.8,
        ab: 'Rough Skin'
    },
    Shedinja: {
        t1: 'Bug',
        t2: 'Ghost',
        bs: { hp: 1, at: 90, df: 45, sa: 30, sd: 30, sp: 40 },
        w: 1.2,
        ab: 'Wonder Guard',
        gender: 'N'
    },
    Shelgon: {
        t1: 'Dragon',
        bs: { hp: 65, at: 95, df: 100, sa: 60, sd: 50, sp: 50 },
        w: 110.5,
        canEvolve: true,
        ab: 'Rock Head'
    },
    Shiftry: {
        t1: 'Grass',
        t2: 'Dark',
        bs: { hp: 90, at: 100, df: 60, sa: 90, sd: 60, sp: 80 },
        w: 59.6,
        ab: 'Chlorophyll'
    },
    Shroomish: {
        t1: 'Grass',
        bs: { hp: 60, at: 40, df: 60, sa: 40, sd: 60, sp: 35 },
        w: 4.5,
        canEvolve: true,
        ab: 'Poison Heal'
    },
    Shuppet: {
        t1: 'Ghost',
        bs: { hp: 44, at: 75, df: 35, sa: 63, sd: 33, sp: 45 },
        w: 2.3,
        canEvolve: true,
        ab: 'Insomnia'
    },
    Silcoon: {
        t1: 'Bug',
        bs: { hp: 50, at: 35, df: 55, sa: 25, sd: 25, sp: 15 },
        w: 10,
        ab: 'Shed Skin',
        canEvolve: true
    },
    Skitty: {
        t1: 'Normal',
        bs: { hp: 50, at: 45, df: 45, sa: 35, sd: 35, sp: 50 },
        w: 11,
        canEvolve: true,
        ab: 'Cute Charm'
    },
    Slaking: {
        t1: 'Normal',
        bs: { hp: 150, at: 160, df: 100, sa: 95, sd: 65, sp: 100 },
        w: 130.5,
        ab: 'Truant'
    },
    Slakoth: {
        t1: 'Normal',
        bs: { hp: 60, at: 60, df: 60, sa: 35, sd: 35, sp: 30 },
        w: 24,
        ab: 'Truant',
        canEvolve: true
    },
    Snorunt: {
        t1: 'Ice',
        bs: { hp: 50, at: 50, df: 50, sa: 50, sd: 50, sp: 50 },
        w: 16.8,
        canEvolve: true,
        ab: 'Ice Body'
    },
    Solrock: {
        t1: 'Rock',
        t2: 'Psychic',
        bs: { hp: 70, at: 95, df: 85, sa: 55, sd: 65, sp: 70 },
        w: 154,
        ab: 'Levitate',
        gender: 'N'
    },
    Spheal: {
        t1: 'Ice',
        t2: 'Water',
        bs: { hp: 70, at: 40, df: 50, sa: 55, sd: 50, sp: 25 },
        w: 39.5,
        canEvolve: true,
        ab: 'Thick Fat'
    },
    Spinda: {
        t1: 'Normal',
        bs: { hp: 60, at: 60, df: 60, sa: 60, sd: 60, sp: 60 },
        w: 5,
        ab: 'Own Tempo'
    },
    Spoink: {
        t1: 'Psychic',
        bs: { hp: 60, at: 25, df: 35, sa: 70, sd: 80, sp: 60 },
        w: 30.6,
        canEvolve: true,
        ab: 'Thick Fat'
    },
    Surskit: {
        t1: 'Bug',
        t2: 'Water',
        bs: { hp: 40, at: 30, df: 32, sa: 50, sd: 52, sp: 65 },
        w: 1.7,
        canEvolve: true,
        ab: 'Swift Swim'
    },
    Swablu: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 45, at: 40, df: 60, sa: 40, sd: 75, sp: 50 },
        w: 1.2,
        canEvolve: true,
        ab: 'Natural Cure'
    },
    Swalot: {
        t1: 'Poison',
        bs: { hp: 100, at: 73, df: 83, sa: 73, sd: 83, sp: 55 },
        w: 80,
        ab: 'Liquid Ooze'
    },
    Swampert: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 100, at: 110, df: 90, sa: 85, sd: 90, sp: 60 },
        w: 81.9,
        ab: 'Torrent'
    },
    Swellow: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 60, at: 85, df: 60, sa: 50, sd: 50, sp: 125 },
        w: 19.8,
        ab: 'Guts'
    },
    Taillow: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 85 },
        w: 2.3,
        canEvolve: true,
        ab: 'Guts'
    },
    Torchic: {
        t1: 'Fire',
        bs: { hp: 45, at: 60, df: 40, sa: 70, sd: 50, sp: 45 },
        w: 2.5,
        canEvolve: true,
        ab: 'Blaze'
    },
    Torkoal: {
        t1: 'Fire',
        bs: { hp: 70, at: 85, df: 140, sa: 85, sd: 70, sp: 20 },
        w: 80.4,
        ab: 'White Smoke'
    },
    Trapinch: {
        t1: 'Ground',
        bs: { hp: 45, at: 100, df: 45, sa: 45, sd: 45, sp: 10 },
        w: 15,
        canEvolve: true,
        ab: 'Arena Trap'
    },
    Treecko: {
        t1: 'Grass',
        bs: { hp: 40, at: 45, df: 35, sa: 65, sd: 55, sp: 70 },
        w: 5,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Tropius: {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 99, at: 68, df: 83, sa: 72, sd: 87, sp: 51 },
        w: 100,
        ab: 'Chlorophyll'
    },
    Vibrava: {
        t1: 'Ground',
        t2: 'Dragon',
        bs: { hp: 50, at: 70, df: 50, sa: 50, sd: 50, sp: 70 },
        w: 15.3,
        ab: 'Levitate',
        canEvolve: true
    },
    Vigoroth: {
        t1: 'Normal',
        bs: { hp: 80, at: 80, df: 80, sa: 55, sd: 55, sp: 90 },
        w: 46.5,
        ab: 'Vital Spirit',
        canEvolve: true
    },
    Volbeat: {
        t1: 'Bug',
        bs: { hp: 65, at: 73, df: 55, sa: 47, sd: 75, sp: 85 },
        w: 17.7,
        ab: 'Swarm'
    },
    Wailmer: {
        t1: 'Water',
        bs: { hp: 130, at: 70, df: 35, sa: 70, sd: 35, sp: 60 },
        w: 130,
        canEvolve: true,
        ab: 'Water Veil'
    },
    Wailord: {
        t1: 'Water',
        bs: { hp: 170, at: 90, df: 45, sa: 90, sd: 45, sp: 60 },
        w: 398,
        ab: 'Water Veil'
    },
    Walrein: {
        t1: 'Ice',
        t2: 'Water',
        bs: { hp: 110, at: 80, df: 90, sa: 95, sd: 90, sp: 65 },
        w: 150.6,
        ab: 'Thick Fat'
    },
    Whiscash: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 110, at: 78, df: 73, sa: 76, sd: 71, sp: 60 },
        w: 23.6,
        ab: 'Anticipation'
    },
    Whismur: {
        t1: 'Normal',
        bs: { hp: 64, at: 51, df: 23, sa: 51, sd: 23, sp: 28 },
        w: 16.3,
        canEvolve: true,
        ab: 'Soundproof'
    },
    Wingull: {
        t1: 'Water',
        t2: 'Flying',
        bs: { hp: 40, at: 30, df: 30, sa: 55, sd: 30, sp: 85 },
        w: 9.5,
        canEvolve: true,
        ab: 'Keen Eye'
    },
    Wurmple: {
        t1: 'Bug',
        bs: { hp: 45, at: 45, df: 35, sa: 20, sd: 30, sp: 20 },
        w: 3.6,
        canEvolve: true,
        ab: 'Shield Dust'
    },
    Wynaut: {
        t1: 'Psychic',
        bs: { hp: 95, at: 23, df: 48, sa: 23, sd: 48, sp: 23 },
        w: 14,
        canEvolve: true,
        ab: 'Shadow Tag'
    },
    Zangoose: {
        t1: 'Normal',
        bs: { hp: 73, at: 115, df: 60, sa: 60, sd: 60, sp: 90 },
        w: 40.3,
        ab: 'Immunity'
    },
    Zigzagoon: {
        t1: 'Normal',
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        w: 17.5,
        canEvolve: true,
        ab: 'Gluttony'
    }
});
var DPP = util_1.extend(true, {}, ADV, {
    Aipom: { canEvolve: true },
    Dusclops: { canEvolve: true },
    Electabuzz: { canEvolve: true },
    Gligar: { canEvolve: true },
    Lickitung: { canEvolve: true },
    Magmar: { canEvolve: true },
    Magneton: { canEvolve: true },
    Misdreavus: { canEvolve: true },
    Murkrow: { canEvolve: true },
    Nosepass: { canEvolve: true },
    Pichu: { canEvolve: true },
    Piloswine: { canEvolve: true },
    Porygon2: { canEvolve: true },
    Rhydon: { canEvolve: true },
    Roselia: { canEvolve: true },
    Tangela: { canEvolve: true },
    Togetic: { canEvolve: true },
    Yanma: { canEvolve: true },
    Abomasnow: {
        t1: 'Grass',
        t2: 'Ice',
        bs: { hp: 90, at: 92, df: 75, sa: 92, sd: 85, sp: 60 },
        w: 135.5,
        ab: 'Snow Warning'
    },
    Ambipom: {
        t1: 'Normal',
        bs: { hp: 75, at: 100, df: 66, sa: 60, sd: 66, sp: 115 },
        w: 20.3,
        ab: 'Technician'
    },
    Arceus: {
        t1: 'Normal',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        formes: [
            'Arceus',
            'Arceus-Bug',
            'Arceus-Dark',
            'Arceus-Dragon',
            'Arceus-Electric',
            'Arceus-Fighting',
            'Arceus-Fire',
            'Arceus-Flying',
            'Arceus-Ghost',
            'Arceus-Grass',
            'Arceus-Ground',
            'Arceus-Ice',
            'Arceus-Poison',
            'Arceus-Psychic',
            'Arceus-Rock',
            'Arceus-Steel',
            'Arceus-Water',
          ],
    },
    'Arceus-Bug': {
        t1: 'Bug',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Dark': {
        t1: 'Dark',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Dragon': {
        t1: 'Dragon',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Electric': {
        t1: 'Electric',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Fighting': {
        t1: 'Fighting',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Fire': {
        t1: 'Fire',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Flying': {
        t1: 'Flying',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Ghost': {
        t1: 'Ghost',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Grass': {
        t1: 'Grass',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Ground': {
        t1: 'Ground',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Ice': {
        t1: 'Ice',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Poison': {
        t1: 'Poison',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Psychic': {
        t1: 'Psychic',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Rock': {
        t1: 'Rock',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Steel': {
        t1: 'Steel',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    'Arceus-Water': {
        t1: 'Water',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    Arghonaut: {
        t1: 'Water',
        t2: 'Fighting',
        bs: { hp: 105, at: 110, df: 95, sa: 70, sd: 100, sp: 75 },
        w: 151,
        ab: 'Unaware'
    },
    Azelf: {
        t1: 'Psychic',
        bs: { hp: 75, at: 125, df: 70, sa: 125, sd: 70, sp: 115 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N'
    },
    Bastiodon: {
        t1: 'Rock',
        t2: 'Steel',
        bs: { hp: 60, at: 52, df: 168, sa: 47, sd: 138, sp: 30 },
        w: 149.5,
        ab: 'Sturdy'
    },
    Bibarel: {
        t1: 'Normal',
        t2: 'Water',
        bs: { hp: 79, at: 85, df: 60, sa: 55, sd: 60, sp: 71 },
        w: 31.5,
        ab: 'Simple'
    },
    Bidoof: {
        t1: 'Normal',
        bs: { hp: 59, at: 45, df: 40, sa: 35, sd: 40, sp: 31 },
        w: 20,
        canEvolve: true,
        ab: 'Simple'
    },
    Bonsly: {
        t1: 'Rock',
        bs: { hp: 50, at: 80, df: 95, sa: 10, sd: 45, sp: 10 },
        w: 15,
        canEvolve: true,
        ab: 'Rock Head'
    },
    Breezi: {
        t1: 'Poison',
        t2: 'Flying',
        bs: { hp: 50, at: 46, df: 69, sa: 60, sd: 50, sp: 75 },
        w: 0.6,
        canEvolve: true,
        ab: 'Unburden'
    },
    Bronzong: {
        t1: 'Steel',
        t2: 'Psychic',
        bs: { hp: 67, at: 89, df: 116, sa: 79, sd: 116, sp: 33 },
        w: 187,
        gender: 'N',
        ab: 'Levitate'
    },
    Bronzor: {
        t1: 'Steel',
        t2: 'Psychic',
        bs: { hp: 57, at: 24, df: 86, sa: 24, sd: 86, sp: 23 },
        w: 60.5,
        canEvolve: true,
        gender: 'N',
        ab: 'Levitate'
    },
    Budew: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 40, at: 30, df: 35, sa: 50, sd: 70, sp: 55 },
        w: 1.2,
        canEvolve: true,
        ab: 'Natural Cure'
    },
    Buizel: {
        t1: 'Water',
        bs: { hp: 55, at: 65, df: 35, sa: 60, sd: 30, sp: 85 },
        w: 29.5,
        canEvolve: true,
        ab: 'Swift Swim'
    },
    Buneary: {
        t1: 'Normal',
        bs: { hp: 55, at: 66, df: 44, sa: 44, sd: 56, sp: 85 },
        w: 5.5,
        canEvolve: true,
        ab: 'Run Away'
    },
    Burmy: {
        t1: 'Bug',
        bs: { hp: 40, at: 29, df: 45, sa: 29, sd: 45, sp: 36 },
        w: 3.4,
        canEvolve: true,
        ab: 'Shed Skin'
    },
    Carnivine: {
        t1: 'Grass',
        bs: { hp: 74, at: 100, df: 72, sa: 90, sd: 72, sp: 46 },
        w: 27,
        ab: 'Levitate'
    },
    Chatot: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 76, at: 65, df: 45, sa: 92, sd: 42, sp: 91 },
        w: 1.9,
        ab: 'Tangled Feet'
    },
    Cherrim: {
        t1: 'Grass',
        bs: { hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85 },
        w: 9.3,
        ab: 'Flower Gift'
    },
    'Cherrim-Sunshine': {
	    t1: 'Grass',
	    bs: {hp: 70, at: 60, df: 70, sa: 87, sd: 78, sp: 85},
	    w: 9.3,
	    ab: 'Flower Gift',
	    isAlternateForme: true,
    },
    Cherubi: {
        t1: 'Grass',
        bs: { hp: 45, at: 35, df: 45, sa: 62, sd: 53, sp: 35 },
        w: 3.3,
        ab: 'Chlorophyll',
        canEvolve: true
    },
    Chimchar: {
        t1: 'Fire',
        bs: { hp: 44, at: 58, df: 44, sa: 58, sd: 44, sp: 61 },
        w: 6.2,
        canEvolve: true,
        ab: 'Blaze'
    },
    Chingling: {
        t1: 'Psychic',
        bs: { hp: 45, at: 30, df: 50, sa: 65, sd: 50, sp: 45 },
        w: 0.6,
        ab: 'Levitate',
        canEvolve: true
    },
    Colossoil: {
        t1: 'Dark',
        t2: 'Ground',
        bs: { hp: 133, at: 122, df: 72, sa: 71, sd: 72, sp: 95 },
        w: 683.6,
        ab: 'Rebound'
    },
    Combee: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 30, at: 30, df: 42, sa: 30, sd: 42, sp: 70 },
        w: 5.5,
        canEvolve: true,
        ab: 'Honey Gather'
    },
    Cranidos: {
        t1: 'Rock',
        bs: { hp: 67, at: 125, df: 40, sa: 30, sd: 30, sp: 58 },
        w: 31.5,
        canEvolve: true,
        ab: 'Mold Breaker'
    },
    Cresselia: {
        t1: 'Psychic',
        bs: { hp: 120, at: 70, df: 120, sa: 75, sd: 130, sp: 85 },
        w: 85.6,
        ab: 'Levitate'
    },
    Croagunk: {
        t1: 'Poison',
        t2: 'Fighting',
        bs: { hp: 48, at: 61, df: 40, sa: 61, sd: 40, sp: 50 },
        w: 23,
        canEvolve: true,
        ab: 'Dry Skin'
    },
    Cyclohm: {
        t1: 'Electric',
        t2: 'Dragon',
        bs: { hp: 108, at: 60, df: 118, sa: 112, sd: 70, sp: 80 },
        w: 59,
        ab: 'Shield Dust'
    },
    Darkrai: {
        t1: 'Dark',
        bs: { hp: 70, at: 90, df: 90, sa: 135, sd: 90, sp: 125 },
        w: 50.5,
        ab: 'Bad Dreams',
        gender: 'N'
    },
    Dialga: {
        t1: 'Steel',
        t2: 'Dragon',
        bs: { hp: 100, at: 120, df: 120, sa: 150, sd: 100, sp: 90 },
        w: 683,
        gender: 'N',
        ab: 'Pressure'
    },
    Drapion: {
        t1: 'Poison',
        t2: 'Dark',
        bs: { hp: 70, at: 90, df: 110, sa: 60, sd: 75, sp: 95 },
        w: 61.5,
        ab: 'Sniper'
    },
    Drifblim: {
        t1: 'Ghost',
        t2: 'Flying',
        bs: { hp: 150, at: 80, df: 44, sa: 90, sd: 54, sp: 80 },
        w: 15,
        ab: 'Unburden'
    },
    Drifloon: {
        t1: 'Ghost',
        t2: 'Flying',
        bs: { hp: 90, at: 50, df: 34, sa: 60, sd: 44, sp: 70 },
        w: 1.2,
        canEvolve: true,
        ab: 'Unburden'
    },
    Dusknoir: {
        t1: 'Ghost',
        bs: { hp: 45, at: 100, df: 135, sa: 65, sd: 135, sp: 45 },
        w: 106.6,
        ab: 'Pressure'
    },
    Electivire: {
        t1: 'Electric',
        bs: { hp: 75, at: 123, df: 67, sa: 95, sd: 85, sp: 95 },
        w: 138.6,
        ab: 'Motor Drive'
    },
    Embirch: {
        t1: 'Fire',
        t2: 'Grass',
        bs: { hp: 60, at: 40, df: 55, sa: 65, sd: 40, sp: 60 },
        w: 15,
        canEvolve: true,
        ab: 'Reckless'
    },
    Empoleon: {
        t1: 'Water',
        t2: 'Steel',
        bs: { hp: 84, at: 86, df: 88, sa: 111, sd: 101, sp: 60 },
        w: 84.5,
        ab: 'Torrent'
    },
    Fidgit: {
        t1: 'Poison',
        t2: 'Ground',
        bs: { hp: 95, at: 76, df: 109, sa: 90, sd: 80, sp: 105 },
        w: 53,
        ab: 'Persistent'
    },
    Finneon: {
        t1: 'Water',
        bs: { hp: 49, at: 49, df: 56, sa: 49, sd: 61, sp: 66 },
        w: 7,
        canEvolve: true,
        ab: 'Swift Swim'
    },
    Flarelm: {
        t1: 'Fire',
        t2: 'Grass',
        bs: { hp: 90, at: 50, df: 95, sa: 75, sd: 70, sp: 40 },
        w: 73,
        canEvolve: true,
        ab: 'Rock Head'
    },
    Floatzel: {
        t1: 'Water',
        bs: { hp: 85, at: 105, df: 55, sa: 85, sd: 50, sp: 115 },
        w: 33.5,
        ab: 'Swift Swim'
    },
    Froslass: {
        t1: 'Ice',
        t2: 'Ghost',
        bs: { hp: 70, at: 80, df: 70, sa: 80, sd: 70, sp: 110 },
        w: 26.6,
        ab: 'Snow Cloak'
    },
    Gabite: {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 68, at: 90, df: 65, sa: 50, sd: 55, sp: 82 },
        w: 56,
        canEvolve: true,
        ab: 'Sand Veil'
    },
    Gallade: {
        t1: 'Psychic',
        t2: 'Fighting',
        bs: { hp: 68, at: 125, df: 65, sa: 65, sd: 115, sp: 80 },
        w: 52,
        ab: 'Steadfast'
    },
    Garchomp: {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 108, at: 130, df: 95, sa: 80, sd: 85, sp: 102 },
        w: 95,
        ab: 'Sand Veil'
    },
    Gastrodon: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 111, at: 83, df: 68, sa: 92, sd: 82, sp: 39 },
        w: 29.9,
        ab: 'Sticky Hold'
    },
    Gible: {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 58, at: 70, df: 45, sa: 40, sd: 45, sp: 42 },
        w: 20.5,
        canEvolve: true,
        ab: 'Sand Veil'
    },
    Giratina: {
        t1: 'Ghost',
        t2: 'Dragon',
        bs: { hp: 150, at: 100, df: 120, sa: 100, sd: 120, sp: 90 },
        w: 750,
        ab: 'Pressure',
        formes: ['Giratina', 'Giratina-Origin']
    },
    'Giratina-Origin': {
        t1: 'Ghost',
        t2: 'Dragon',
        bs: { hp: 150, at: 120, df: 100, sa: 120, sd: 100, sp: 90 },
        w: 650,
        ab: 'Levitate',
        isAlternateForme: true
    },
    Glaceon: {
        t1: 'Ice',
        bs: { hp: 65, at: 60, df: 110, sa: 130, sd: 95, sp: 65 },
        w: 25.9,
        ab: 'Snow Cloak'
    },
    Glameow: {
        t1: 'Normal',
        bs: { hp: 49, at: 55, df: 42, sa: 42, sd: 37, sp: 85 },
        w: 3.9,
        canEvolve: true,
        ab: 'Limber'
    },
    Gliscor: {
        t1: 'Ground',
        t2: 'Flying',
        bs: { hp: 75, at: 95, df: 125, sa: 45, sd: 75, sp: 95 },
        w: 42.5,
        ab: 'Hyper Cutter'
    },
    Grotle: {
        t1: 'Grass',
        bs: { hp: 75, at: 89, df: 85, sa: 55, sd: 65, sp: 36 },
        w: 97,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Happiny: {
        t1: 'Normal',
        bs: { hp: 100, at: 5, df: 5, sa: 15, sd: 65, sp: 30 },
        w: 24.4,
        canEvolve: true,
        ab: 'Serene Grace'
    },
    Heatran: {
        t1: 'Fire',
        t2: 'Steel',
        bs: { hp: 91, at: 90, df: 106, sa: 130, sd: 106, sp: 77 },
        w: 430,
        ab: 'Flash Fire'
    },
    Hippopotas: {
        t1: 'Ground',
        bs: { hp: 68, at: 72, df: 78, sa: 38, sd: 42, sp: 32 },
        w: 49.5,
        canEvolve: true,
        ab: 'Sand Stream'
    },
    Hippowdon: {
        t1: 'Ground',
        bs: { hp: 108, at: 112, df: 118, sa: 68, sd: 72, sp: 47 },
        w: 300,
        ab: 'Sand Stream'
    },
    Honchkrow: {
        t1: 'Dark',
        t2: 'Flying',
        bs: { hp: 100, at: 125, df: 52, sa: 105, sd: 52, sp: 71 },
        w: 27.3,
        ab: 'Insomnia'
    },
    Infernape: {
        t1: 'Fire',
        t2: 'Fighting',
        bs: { hp: 76, at: 104, df: 71, sa: 104, sd: 71, sp: 108 },
        w: 55,
        ab: 'Blaze'
    },
    Kitsunoh: {
        t1: 'Steel',
        t2: 'Ghost',
        bs: { hp: 80, at: 103, df: 85, sa: 55, sd: 80, sp: 110 },
        w: 51,
        ab: 'Frisk'
    },
    Kricketot: {
        t1: 'Bug',
        bs: { hp: 37, at: 25, df: 41, sa: 25, sd: 41, sp: 25 },
        w: 2.2,
        canEvolve: true,
        ab: 'Shed Skin'
    },
    Kricketune: {
        t1: 'Bug',
        bs: { hp: 77, at: 85, df: 51, sa: 55, sd: 51, sp: 65 },
        w: 25.5,
        ab: 'Swarm'
    },
    Krilowatt: {
        t1: 'Electric',
        t2: 'Water',
        bs: { hp: 151, at: 84, df: 73, sa: 83, sd: 74, sp: 105 },
        w: 10.6,
        ab: 'Magic Guard'
    },
    Leafeon: {
        t1: 'Grass',
        bs: { hp: 65, at: 110, df: 130, sa: 60, sd: 65, sp: 95 },
        w: 25.5,
        ab: 'Leaf Guard'
    },
    Lickilicky: {
        t1: 'Normal',
        bs: { hp: 110, at: 85, df: 95, sa: 80, sd: 95, sp: 50 },
        w: 140,
        ab: 'Own Tempo'
    },
    Lopunny: {
        t1: 'Normal',
        bs: { hp: 65, at: 76, df: 84, sa: 54, sd: 96, sp: 105 },
        w: 33.3,
        ab: 'Cute Charm'
    },
    Lucario: {
        t1: 'Fighting',
        t2: 'Steel',
        bs: { hp: 70, at: 110, df: 70, sa: 115, sd: 70, sp: 90 },
        w: 54,
        ab: 'Steadfast'
    },
    Lumineon: {
        t1: 'Water',
        bs: { hp: 69, at: 69, df: 76, sa: 69, sd: 86, sp: 91 },
        w: 24,
        ab: 'Swift Swim'
    },
    Luxio: {
        t1: 'Electric',
        bs: { hp: 60, at: 85, df: 49, sa: 60, sd: 49, sp: 60 },
        w: 30.5,
        canEvolve: true,
        ab: 'Intimidate'
    },
    Luxray: {
        t1: 'Electric',
        bs: { hp: 80, at: 120, df: 79, sa: 95, sd: 79, sp: 70 },
        w: 42,
        ab: 'Intimidate'
    },
    Magmortar: {
        t1: 'Fire',
        bs: { hp: 75, at: 95, df: 67, sa: 125, sd: 95, sp: 83 },
        w: 68,
        ab: 'Flame Body'
    },
    Magnezone: {
        t1: 'Electric',
        t2: 'Steel',
        bs: { hp: 70, at: 70, df: 115, sa: 130, sd: 90, sp: 60 },
        w: 180,
        gender: 'N',
        ab: 'Magnet Pull'
    },
    Mamoswine: {
        t1: 'Ice',
        t2: 'Ground',
        bs: { hp: 110, at: 130, df: 80, sa: 70, sd: 60, sp: 80 },
        w: 291,
        ab: 'Snow Cloak'
    },
    Manaphy: {
        t1: 'Water',
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        w: 1.4,
        ab: 'Hydration',
        gender: 'N'
    },
    Mantyke: {
        t1: 'Water',
        t2: 'Flying',
        bs: { hp: 45, at: 20, df: 50, sa: 60, sd: 120, sp: 50 },
        w: 65,
        canEvolve: true,
        ab: 'Water Absorb'
    },
    Mesprit: {
        t1: 'Psychic',
        bs: { hp: 80, at: 105, df: 105, sa: 105, sd: 105, sp: 80 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N'
    },
    'Mime Jr.': {
        t1: 'Psychic',
        bs: { hp: 20, at: 25, df: 45, sa: 70, sd: 90, sp: 60 },
        w: 13,
        canEvolve: true,
        ab: 'Filter'
    },
    Mismagius: {
        t1: 'Ghost',
        bs: { hp: 60, at: 60, df: 60, sa: 105, sd: 105, sp: 105 },
        w: 4.4,
        ab: 'Levitate'
    },
    Monferno: {
        t1: 'Fire',
        t2: 'Fighting',
        bs: { hp: 64, at: 78, df: 52, sa: 78, sd: 52, sp: 81 },
        w: 22,
        canEvolve: true,
        ab: 'Blaze'
    },
    Mothim: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 70, at: 94, df: 50, sa: 94, sd: 50, sp: 66 },
        w: 23.3,
        ab: 'Swarm'
    },
    Munchlax: {
        t1: 'Normal',
        bs: { hp: 135, at: 85, df: 40, sa: 40, sd: 85, sp: 5 },
        w: 105,
        canEvolve: true,
        ab: 'Thick Fat'
    },
    Pachirisu: {
        t1: 'Electric',
        bs: { hp: 60, at: 45, df: 70, sa: 45, sd: 90, sp: 95 },
        w: 3.9,
        ab: 'Run Away'
    },
    Palkia: {
        t1: 'Water',
        t2: 'Dragon',
        bs: { hp: 90, at: 120, df: 100, sa: 150, sd: 120, sp: 100 },
        w: 336,
        gender: 'N',
        ab: 'Pressure'
    },
    Phione: {
        t1: 'Water',
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        w: 3.1,
        ab: 'Hydration',
        gender: 'N'
    },
    Piplup: {
        t1: 'Water',
        bs: { hp: 53, at: 51, df: 53, sa: 61, sd: 56, sp: 40 },
        w: 5.2,
        canEvolve: true,
        ab: 'Torrent'
    },
    'Porygon-Z': {
        t1: 'Normal',
        bs: { hp: 85, at: 80, df: 70, sa: 135, sd: 75, sp: 90 },
        w: 34,
        gender: 'N',
        ab: 'Adaptability'
    },
    Prinplup: {
        t1: 'Water',
        bs: { hp: 64, at: 66, df: 68, sa: 81, sd: 76, sp: 50 },
        w: 23,
        canEvolve: true,
        ab: 'Torrent'
    },
    Privatyke: {
        t1: 'Water',
        t2: 'Fighting',
        bs: { hp: 65, at: 75, df: 65, sa: 40, sd: 60, sp: 45 },
        w: 35,
        canEvolve: true,
        ab: 'Unaware'
    },
    Probopass: {
        t1: 'Rock',
        t2: 'Steel',
        bs: { hp: 60, at: 55, df: 145, sa: 75, sd: 150, sp: 40 },
        w: 340,
        ab: 'Magnet Pull'
    },
    Purugly: {
        t1: 'Normal',
        bs: { hp: 71, at: 82, df: 64, sa: 64, sd: 59, sp: 112 },
        w: 43.8,
        ab: 'Thick Fat'
    },
    Pyroak: {
        t1: 'Fire',
        t2: 'Grass',
        bs: { hp: 120, at: 70, df: 105, sa: 95, sd: 90, sp: 60 },
        w: 168,
        ab: 'Rock Head'
    },
    Rampardos: {
        t1: 'Rock',
        bs: { hp: 97, at: 165, df: 60, sa: 65, sd: 50, sp: 58 },
        w: 102.5,
        ab: 'Mold Breaker'
    },
    Rebble: {
        t1: 'Rock',
        bs: { hp: 45, at: 25, df: 65, sa: 75, sd: 55, sp: 80 },
        w: 7,
        canEvolve: true,
        ab: 'Levitate'
    },
    Regigigas: {
        t1: 'Normal',
        bs: { hp: 110, at: 160, df: 110, sa: 80, sd: 110, sp: 100 },
        w: 420,
        ab: 'Slow Start',
        gender: 'N'
    },
    Revenankh: {
        t1: 'Ghost',
        t2: 'Fighting',
        bs: { hp: 90, at: 105, df: 90, sa: 65, sd: 110, sp: 65 },
        w: 44,
        ab: 'Shed Skin'
    },
    Rhyperior: {
        t1: 'Ground',
        t2: 'Rock',
        bs: { hp: 115, at: 140, df: 130, sa: 55, sd: 55, sp: 40 },
        w: 282.8,
        ab: 'Solid Rock'
    },
    Riolu: {
        t1: 'Fighting',
        bs: { hp: 40, at: 70, df: 40, sa: 35, sd: 40, sp: 60 },
        w: 20.2,
        canEvolve: true,
        ab: 'Steadfast'
    },
    Roserade: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 60, at: 70, df: 55, sa: 125, sd: 105, sp: 90 },
        w: 14.5,
        ab: 'Natural Cure'
    },
    Rotom: {
        t1: 'Electric',
        t2: 'Ghost',
        bs: { hp: 50, at: 50, df: 77, sa: 95, sd: 77, sp: 91 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N',
        formes: ['Rotom', 'Rotom-Fan', 'Rotom-Frost', 'Rotom-Heat', 'Rotom-Mow', 'Rotom-Wash']
    },
    'Rotom-Mow': {
        t1: 'Electric',
        t2: 'Ghost',
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N',
        isAlternateForme: true
    },
    'Rotom-Frost': {
        t1: 'Electric',
        t2: 'Ghost',
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N',
        isAlternateForme: true
    },
    'Rotom-Heat': {
        t1: 'Electric',
        t2: 'Ghost',
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N',
        isAlternateForme: true
    },
    'Rotom-Fan': {
        t1: 'Electric',
        t2: 'Ghost',
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N',
        isAlternateForme: true
    },
    'Rotom-Wash': {
        t1: 'Electric',
        t2: 'Ghost',
        bs: { hp: 50, at: 65, df: 107, sa: 105, sd: 107, sp: 86 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N',
        isAlternateForme: true
    },
    Shaymin: {
        t1: 'Grass',
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        w: 2.1,
        ab: 'Natural Cure',
        gender: 'N',
        formes: ['Shaymin', 'Shaymin-Sky']
    },
    'Shaymin-Sky': {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 100, at: 103, df: 75, sa: 120, sd: 75, sp: 127 },
        w: 5.2,
        ab: 'Serene Grace',
        gender: 'N',
        isAlternateForme: true
    },
    Shellos: {
        t1: 'Water',
        bs: { hp: 76, at: 48, df: 48, sa: 57, sd: 62, sp: 34 },
        w: 6.3,
        canEvolve: true,
        ab: 'Sticky Hold'
    },
    Shieldon: {
        t1: 'Rock',
        t2: 'Steel',
        bs: { hp: 30, at: 42, df: 118, sa: 42, sd: 88, sp: 30 },
        w: 57,
        canEvolve: true,
        ab: 'Sturdy'
    },
    Shinx: {
        t1: 'Electric',
        bs: { hp: 45, at: 65, df: 34, sa: 40, sd: 34, sp: 45 },
        w: 9.5,
        canEvolve: true,
        ab: 'Intimidate'
    },
    Skorupi: {
        t1: 'Poison',
        t2: 'Bug',
        bs: { hp: 40, at: 50, df: 90, sa: 30, sd: 55, sp: 65 },
        w: 12,
        canEvolve: true,
        ab: 'Sniper'
    },
    Skuntank: {
        t1: 'Poison',
        t2: 'Dark',
        bs: { hp: 103, at: 93, df: 67, sa: 71, sd: 61, sp: 84 },
        w: 38,
        ab: 'Aftermath'
    },
    Snover: {
        t1: 'Grass',
        t2: 'Ice',
        bs: { hp: 60, at: 62, df: 50, sa: 62, sd: 60, sp: 40 },
        w: 50.5,
        canEvolve: true,
        ab: 'Snow Warning'
    },
    Spiritomb: {
        t1: 'Ghost',
        t2: 'Dark',
        bs: { hp: 50, at: 92, df: 108, sa: 92, sd: 108, sp: 35 },
        w: 108,
        ab: 'Pressure'
    },
    Staraptor: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 85, at: 120, df: 70, sa: 50, sd: 50, sp: 100 },
        w: 24.9,
        ab: 'Intimidate'
    },
    Staravia: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 55, at: 75, df: 50, sa: 40, sd: 40, sp: 80 },
        w: 15.5,
        canEvolve: true,
        ab: 'Intimidate'
    },
    Starly: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 40, at: 55, df: 30, sa: 30, sd: 30, sp: 60 },
        w: 2,
        canEvolve: true,
        ab: 'Keen Eye'
    },
    Stratagem: {
        t1: 'Rock',
        bs: { hp: 90, at: 60, df: 65, sa: 120, sd: 70, sp: 130 },
        w: 45,
        gender: 'N',
        ab: 'Technician'
    },
    Stunky: {
        t1: 'Poison',
        t2: 'Dark',
        bs: { hp: 63, at: 63, df: 47, sa: 41, sd: 41, sp: 74 },
        w: 19.2,
        canEvolve: true,
        ab: 'Aftermath'
    },
    Syclant: {
        t1: 'Ice',
        t2: 'Bug',
        bs: { hp: 70, at: 116, df: 70, sa: 114, sd: 64, sp: 121 },
        w: 52,
        ab: 'Compound Eyes'
    },
    Syclar: {
        t1: 'Ice',
        t2: 'Bug',
        bs: { hp: 40, at: 76, df: 45, sa: 74, sd: 39, sp: 91 },
        w: 4,
        canEvolve: true,
        ab: 'Compound Eyes'
    },
    Tactite: {
        t1: 'Rock',
        bs: { hp: 70, at: 40, df: 65, sa: 100, sd: 65, sp: 95 },
        w: 16,
        canEvolve: true,
        ab: 'Technician'
    },
    Tangrowth: {
        t1: 'Grass',
        bs: { hp: 100, at: 100, df: 125, sa: 110, sd: 50, sp: 50 },
        w: 128.6,
        ab: 'Chlorophyll'
    },
    Togekiss: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 85, at: 50, df: 95, sa: 120, sd: 115, sp: 80 },
        w: 38,
        ab: 'Serene Grace'
    },
    Torterra: {
        t1: 'Grass',
        t2: 'Ground',
        bs: { hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 56 },
        w: 310,
        ab: 'Overgrow'
    },
    Toxicroak: {
        t1: 'Poison',
        t2: 'Fighting',
        bs: { hp: 83, at: 106, df: 65, sa: 86, sd: 65, sp: 85 },
        w: 44.4,
        ab: 'Dry Skin'
    },
    Turtwig: {
        t1: 'Grass',
        bs: { hp: 55, at: 68, df: 64, sa: 45, sd: 55, sp: 31 },
        w: 10.2,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Uxie: {
        t1: 'Psychic',
        bs: { hp: 75, at: 75, df: 130, sa: 75, sd: 130, sp: 95 },
        w: 0.3,
        ab: 'Levitate',
        gender: 'N'
    },
    Vespiquen: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 70, at: 80, df: 102, sa: 80, sd: 102, sp: 40 },
        w: 38.5,
        ab: 'Pressure'
    },
    Voodoll: {
        t1: 'Normal',
        t2: 'Dark',
        bs: { hp: 55, at: 40, df: 55, sa: 75, sd: 50, sp: 70 },
        w: 25,
        canEvolve: true,
        ab: 'Volt Absorb'
    },
    Voodoom: {
        t1: 'Fighting',
        t2: 'Dark',
        bs: { hp: 90, at: 85, df: 80, sa: 105, sd: 80, sp: 110 },
        w: 75.5,
        ab: 'Volt Absorb'
    },
    Weavile: {
        t1: 'Dark',
        t2: 'Ice',
        bs: { hp: 70, at: 120, df: 65, sa: 45, sd: 85, sp: 125 },
        w: 34,
        ab: 'Pressure'
    },
    Wormadam: {
        t1: 'Bug',
        t2: 'Grass',
        bs: { hp: 60, at: 59, df: 85, sa: 79, sd: 105, sp: 36 },
        w: 6.5,
        ab: 'Overcoat',
        formes: ['Wormadam', 'Wormadam-Sandy', 'Wormadam-Trash']
    },
    'Wormadam-Sandy': {
        t1: 'Bug',
        t2: 'Ground',
        bs: { hp: 60, at: 79, df: 105, sa: 59, sd: 85, sp: 36 },
        w: 6.5,
        ab: 'Overcoat',
        isAlternateForme: true
    },
    'Wormadam-Trash': {
        t1: 'Bug',
        t2: 'Steel',
        bs: { hp: 60, at: 69, df: 95, sa: 69, sd: 95, sp: 36 },
        w: 6.5,
        ab: 'Overcoat',
        isAlternateForme: true
    },
    Yanmega: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 86, at: 76, df: 86, sa: 116, sd: 56, sp: 95 },
        w: 51.5,
        ab: 'Speed Boost'
    }
});
var BW = util_1.extend(true, {}, DPP, {
    Abra: { ab: 'Magic Guard' },
    Aggron: { ab: 'Sturdy' },
    Aipom: { ab: 'Skill Link' },
    Alakazam: { ab: 'Magic Guard' },
    Anorith: { ab: 'Swift Swim' },
    Ariados: { ab: 'Swarm' },
    Armaldo: { ab: 'Swift Swim' },
    Aron: { ab: 'Sturdy' },
    Bagon: { ab: 'Sheer Force' },
    Barboach: { ab: 'Hydration' },
    Bibarel: { ab: 'Moody' },
    Bidoof: { ab: 'Moody' },
    Blaziken: { ab: 'Speed Boost' },
    Bonsly: { ab: 'Sturdy' },
    Bulbasaur: { ab: 'Chlorophyll' },
    Buneary: { ab: 'Limber' },
    Cacnea: { ab: 'Water Absorb' },
    Cacturne: { ab: 'Water Absorb' },
    Carvanha: { ab: 'Speed Boost' },
    Chimchar: { ab: 'Iron Fist' },
    Clamperl: { ab: 'Rattled' },
    Combee: { ab: 'Hustle' },
    Combusken: { ab: 'Speed Boost' },
    Corphish: { ab: 'Adaptability' },
    Corsola: { ab: 'Regenerator' },
    Cradily: { ab: 'Storm Drain' },
    Cranidos: { ab: 'Sheer Force' },
    Crawdaunt: { ab: 'Adaptability' },
    Crobat: { ab: 'Infiltrator' },
    Delcatty: { ab: 'Wonder Skin' },
    Ditto: { ab: 'Imposter' },
    Dragonite: { ab: 'Multiscale' },
    Dustox: { ab: 'Compound Eyes' },
    Electrike: { ab: 'Lightning Rod' },
    Electrode: { ab: 'Aftermath' },
    Espeon: { ab: 'Magic Bounce' },
    Exploud: { ab: 'Scrappy' },
    "Farfetch'd": { ab: 'Defiant' },
    Fearow: { ab: 'Sniper' },
    Feebas: { ab: 'Adaptability' },
    Finneon: { ab: 'Storm Drain' },
    Froslass: { ab: 'Cursed Body' },
    Furret: { ab: 'Frisk' },
    Gabite: { ab: 'Rough Skin' },
    Gallade: { ab: 'Justified' },
    Garchomp: { ab: 'Rough Skin' },
    Gastrodon: { ab: 'Storm Drain' },
    Geodude: { ab: 'Sturdy' },
    Gible: { ab: 'Rough Skin' },
    Girafarig: { ab: 'Sap Sipper' },
    Glalie: { ab: 'Moody' },
    Gligar: { ab: 'Immunity' },
    Gliscor: { ab: 'Poison Heal' },
    Golbat: { ab: 'Infiltrator' },
    Goldeen: { ab: 'Lightning Rod' },
    Golduck: { ab: 'Swift Swim' },
    Golem: { ab: 'Sturdy' },
    Graveler: { ab: 'Sturdy' },
    Grimer: { ab: 'Poison Touch' },
    Grovyle: { ab: 'Unburden' },
    Hariyama: { ab: 'Sheer Force' },
    Heracross: { ab: 'Moxie' },
    Hitmonlee: { ab: 'Unburden' },
    Honchkrow: { ab: 'Moxie' },
    Hoothoot: { ab: 'Tinted Lens' },
    'Ho-Oh': { ab: 'Regenerator' },
    Illumise: { ab: 'Prankster' },
    Infernape: { ab: 'Iron Fist' },
    Ivysaur: { ab: 'Chlorophyll' },
    Jynx: { ab: 'Dry Skin' },
    Kadabra: { ab: 'Magic Guard' },
    Kingler: { ab: 'Sheer Force' },
    Krabby: { ab: 'Sheer Force' },
    Kricketune: { ab: 'Technician' },
    Lairon: { ab: 'Sturdy' },
    Leafeon: { ab: 'Chlorophyll' },
    Ledian: { ab: 'Iron Fist' },
    Lickilicky: { ab: 'Cloud Nine' },
    Lickitung: { ab: 'Cloud Nine' },
    Lileep: { ab: 'Storm Drain' },
    Linoone: { ab: 'Quick Feet' },
    Lopunny: { ab: 'Limber' },
    Loudred: { ab: 'Scrappy' },
    Lucario: { ab: 'Justified' },
    Lugia: { ab: 'Multiscale' },
    Lumineon: { ab: 'Storm Drain' },
    Makuhita: { ab: 'Sheer Force' },
    Mamoswine: { ab: 'Thick Fat' },
    Manectric: { ab: 'Lightning Rod' },
    Mankey: { ab: 'Defiant' },
    Mawile: { ab: 'Sheer Force' },
    'Mime Jr.': { ab: 'Technician' },
    'Mr. Mime': { ab: 'Technician' },
    Monferno: { ab: 'Iron Fist' },
    Mothim: { ab: 'Tinted Lens' },
    Muk: { ab: 'Poison Touch' },
    Murkrow: { ab: 'Prankster' },
    Natu: { ab: 'Magic Bounce' },
    Nidoking: { ab: 'Sheer Force' },
    Nidoqueen: { ab: 'Sheer Force' },
    Nidorina: { ab: 'Hustle' },
    Nidorino: { ab: 'Hustle' },
    'Nidoran-F': { ab: 'Hustle' },
    'Nidoran-M': { ab: 'Hustle' },
    Ninetales: { ab: 'Drought' },
    Noctowl: { ab: 'Tinted Lens' },
    Octillery: { ab: 'Moody' },
    Onix: { ab: 'Sturdy' },
    Pachirisu: { ab: 'Volt Absorb' },
    Pelipper: { ab: 'Rain Dish' },
    Phanpy: { ab: 'Sand Veil' },
    Pichu: { ab: 'Lightning Rod' },
    Pikachu: { ab: 'Lightning Rod' },
    Piloswine: { ab: 'Thick Fat' },
    Politoed: { ab: 'Drizzle' },
    Primeape: { ab: 'Defiant' },
    Privatyke: { ab: 'Technician' },
    Psyduck: { ab: 'Swift Swim' },
    Qwilfish: { ab: 'Intimidate' },
    Raichu: { ab: 'Lightning Rod' },
    Rampardos: { ab: 'Sheer Force' },
    Raticate: { ab: 'Hustle' },
    Rattata: { ab: 'Hustle' },
    Remoraid: { ab: 'Moody' },
    Rhyperior: { ab: 'Lightning Rod' },
    Riolu: { ab: 'Prankster' },
    Roserade: { ab: 'Technician' },
    'Rotom-Fan': { t2: 'Flying' },
    'Rotom-Frost': { t2: 'Ice' },
    'Rotom-Heat': { t2: 'Fire' },
    'Rotom-Mow': { t2: 'Grass' },
    'Rotom-Wash': { t2: 'Water' },
    Sableye: { ab: 'Prankster' },
    Sandshrew: { ab: 'Sand Rush' },
    Sandslash: { ab: 'Sand Rush' },
    Sceptile: { ab: 'Unburden' },
    Seaking: { ab: 'Lightning Rod' },
    Sentret: { ab: 'Frisk' },
    Sharpedo: { ab: 'Speed Boost' },
    Shellos: { ab: 'Storm Drain' },
    Shuckle: { ab: 'Contrary' },
    Skarmory: { ab: 'Sturdy' },
    Skitty: { ab: 'Wonder Skin' },
    Slowbro: { ab: 'Regenerator' },
    Slowking: { ab: 'Regenerator' },
    Slowpoke: { ab: 'Regenerator' },
    Smeargle: { ab: 'Moody' },
    Smoochum: { ab: 'Hydration' },
    Sneasel: { ab: 'Pickpocket' },
    Snorunt: { ab: 'Moody' },
    Spearow: { ab: 'Sniper' },
    Spinarak: { ab: 'Swarm' },
    Spinda: { ab: 'Contrary' },
    Spiritomb: { ab: 'Infiltrator' },
    Steelix: { ab: 'Sheer Force' },
    Sudowoodo: { ab: 'Sturdy' },
    Swinub: { ab: 'Thick Fat' },
    Tangela: { ab: 'Regenerator' },
    Tangrowth: { ab: 'Regenerator' },
    Tauros: { ab: 'Sheer Force' },
    Torchic: { ab: 'Speed Boost' },
    Treecko: { ab: 'Unburden' },
    Venusaur: { ab: 'Chlorophyll' },
    Volbeat: { ab: 'Prankster' },
    Voltorb: { ab: 'Aftermath' },
    Vulpix: { ab: 'Drought' },
    Wailmer: { ab: 'Pressure' },
    Wailord: { ab: 'Pressure' },
    Whiscash: { ab: 'Hydration' },
    Wigglytuff: { ab: 'Frisk' },
    Wingull: { ab: 'Rain Dish' },
    Xatu: { ab: 'Magic Bounce' },
    Zangoose: { ab: 'Toxic Boost' },
    Zigzagoon: { ab: 'Quick Feet' },
    Zubat: { ab: 'Infiltrator' },
    Accelgor: {
        t1: 'Bug',
        bs: { hp: 80, at: 70, df: 40, sa: 100, sd: 60, sp: 145 },
        w: 25.3,
        ab: 'Unburden'
    },
    Alomomola: {
        t1: 'Water',
        bs: { hp: 165, at: 75, df: 80, sa: 40, sd: 45, sp: 65 },
        w: 31.6,
        ab: 'Regenerator'
    },
    Amoonguss: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 114, at: 85, df: 70, sa: 85, sd: 80, sp: 30 },
        w: 10.5,
        ab: 'Regenerator'
    },
    Archen: {
        t1: 'Rock',
        t2: 'Flying',
        bs: { hp: 55, at: 112, df: 45, sa: 74, sd: 45, sp: 70 },
        w: 9.5,
        ab: 'Defeatist',
        canEvolve: true
    },
    Archeops: {
        t1: 'Rock',
        t2: 'Flying',
        bs: { hp: 75, at: 140, df: 65, sa: 112, sd: 65, sp: 110 },
        w: 32,
        ab: 'Defeatist'
    },
    Argalis: {
        t1: 'Bug',
        t2: 'Psychic',
        bs: { hp: 60, at: 90, df: 89, sa: 87, sd: 40, sp: 54 },
        w: 341.4,
        canEvolve: true,
        ab: 'Shed Skin'
    },
    Audino: {
        t1: 'Normal',
        bs: { hp: 103, at: 60, df: 86, sa: 60, sd: 86, sp: 50 },
        w: 31,
        ab: 'Regenerator'
    },
    Aurumoth: {
        t1: 'Bug',
        t2: 'Psychic',
        bs: { hp: 110, at: 120, df: 99, sa: 117, sd: 60, sp: 94 },
        w: 193,
        ab: 'No Guard'
    },
    Axew: {
        t1: 'Dragon',
        bs: { hp: 46, at: 87, df: 60, sa: 30, sd: 40, sp: 57 },
        w: 18,
        canEvolve: true,
        ab: 'Mold Breaker'
    },
    Basculin: {
        t1: 'Water',
        bs: { hp: 70, at: 92, df: 65, sa: 80, sd: 55, sp: 98 },
        w: 18,
        ab: 'Adaptability'
    },
    Beartic: {
        t1: 'Ice',
        bs: { hp: 95, at: 110, df: 80, sa: 70, sd: 80, sp: 50 },
        w: 260,
        ab: 'Swift Swim'
    },
    Beheeyem: {
        t1: 'Psychic',
        bs: { hp: 75, at: 75, df: 75, sa: 125, sd: 95, sp: 40 },
        w: 34.5,
        ab: 'Analytic'
    },
    Bisharp: {
        t1: 'Dark',
        t2: 'Steel',
        bs: { hp: 65, at: 125, df: 100, sa: 60, sd: 70, sp: 70 },
        w: 70,
        ab: 'Defiant'
    },
    Blitzle: {
        t1: 'Electric',
        bs: { hp: 45, at: 60, df: 32, sa: 50, sd: 32, sp: 76 },
        w: 29.8,
        canEvolve: true,
        ab: 'Lightning Rod'
    },
    Boldore: {
        t1: 'Rock',
        bs: { hp: 70, at: 105, df: 105, sa: 50, sd: 40, sp: 20 },
        w: 102,
        canEvolve: true,
        ab: 'Sturdy'
    },
    Bouffalant: {
        t1: 'Normal',
        bs: { hp: 95, at: 110, df: 95, sa: 40, sd: 95, sp: 55 },
        w: 94.6,
        ab: 'Sap Sipper'
    },
    Brattler: {
        t1: 'Dark',
        t2: 'Grass',
        bs: { hp: 80, at: 70, df: 40, sa: 20, sd: 90, sp: 30 },
        w: 11.5,
        canEvolve: true,
        ab: 'Infiltrator'
    },
    Braviary: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 100, at: 123, df: 75, sa: 57, sd: 75, sp: 80 },
        w: 41,
        ab: 'Sheer Force'
    },
    Carracosta: {
        t1: 'Water',
        t2: 'Rock',
        bs: { hp: 74, at: 108, df: 133, sa: 83, sd: 65, sp: 32 },
        w: 81,
        ab: 'Solid Rock'
    },
    Cawdet: {
        t1: 'Steel',
        t2: 'Flying',
        bs: { hp: 35, at: 72, df: 85, sa: 40, sd: 55, sp: 88 },
        w: 25,
        canEvolve: true,
        ab: 'Volt Absorb'
    },
    Cawmodore: {
        t1: 'Steel',
        t2: 'Flying',
        bs: { hp: 50, at: 92, df: 130, sa: 65, sd: 75, sp: 118 },
        w: 37,
        ab: 'Intimidate'
    },
    Chandelure: {
        t1: 'Ghost',
        t2: 'Fire',
        bs: { hp: 60, at: 55, df: 90, sa: 145, sd: 90, sp: 80 },
        w: 34.3,
        ab: 'Flash Fire'
    },
    Cinccino: {
        t1: 'Normal',
        bs: { hp: 75, at: 95, df: 60, sa: 65, sd: 60, sp: 115 },
        w: 7.5,
        ab: 'Technician'
    },
    Cobalion: {
        t1: 'Steel',
        t2: 'Fighting',
        bs: { hp: 91, at: 90, df: 129, sa: 90, sd: 72, sp: 108 },
        w: 250,
        ab: 'Justified',
        gender: 'N'
    },
    Cofagrigus: {
        t1: 'Ghost',
        bs: { hp: 58, at: 50, df: 145, sa: 95, sd: 105, sp: 30 },
        w: 76.5,
        ab: 'Mummy'
    },
    Conkeldurr: {
        t1: 'Fighting',
        bs: { hp: 105, at: 140, df: 95, sa: 55, sd: 65, sp: 45 },
        w: 87,
        ab: 'Sheer Force'
    },
    Cottonee: {
        t1: 'Grass',
        bs: { hp: 40, at: 27, df: 60, sa: 37, sd: 50, sp: 66 },
        w: 0.6,
        canEvolve: true,
        ab: 'Prankster'
    },
    Crustle: {
        t1: 'Bug',
        t2: 'Rock',
        bs: { hp: 70, at: 95, df: 125, sa: 65, sd: 75, sp: 45 },
        w: 200,
        ab: 'Sturdy'
    },
    Cryogonal: {
        t1: 'Ice',
        bs: { hp: 70, at: 50, df: 30, sa: 95, sd: 135, sp: 105 },
        w: 148,
        ab: 'Levitate',
        gender: 'N'
    },
    Cubchoo: {
        t1: 'Ice',
        bs: { hp: 55, at: 70, df: 40, sa: 60, sd: 40, sp: 40 },
        w: 8.5,
        canEvolve: true,
        ab: 'Snow Cloak'
    },
    Cupra: {
        t1: 'Bug',
        t2: 'Psychic',
        bs: { hp: 50, at: 60, df: 49, sa: 67, sd: 30, sp: 44 },
        w: 4.8,
        canEvolve: true,
        ab: 'Magic Guard'
    },
    Darmanitan: {
        t1: 'Fire',
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        w: 92.9,
        ab: 'Sheer Force',
        formes: ['Darmanitan', 'Darmanitan-Zen']
    },
    'Darmanitan-Zen': {
        t1: 'Fire',
        t2: 'Psychic',
        bs: { hp: 105, at: 30, df: 105, sa: 140, sd: 105, sp: 55 },
        w: 92.9,
        isAlternateForme: true,
        ab: 'Zen Mode'
    },
    Darumaka: {
        t1: 'Fire',
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        w: 37.5,
        canEvolve: true,
        ab: 'Hustle'
    },
    Deerling: {
        t1: 'Normal',
        t2: 'Grass',
        bs: { hp: 60, at: 60, df: 50, sa: 40, sd: 50, sp: 75 },
        w: 19.5,
        canEvolve: true,
        ab: 'Serene Grace'
    },
    Deino: {
        t1: 'Dark',
        t2: 'Dragon',
        bs: { hp: 52, at: 65, df: 50, sa: 45, sd: 50, sp: 38 },
        w: 17.3,
        ab: 'Hustle',
        canEvolve: true
    },
    Dewott: {
        t1: 'Water',
        bs: { hp: 75, at: 75, df: 60, sa: 83, sd: 60, sp: 60 },
        w: 24.5,
        canEvolve: true,
        ab: 'Torrent'
    },
    Drilbur: {
        t1: 'Ground',
        bs: { hp: 60, at: 85, df: 40, sa: 30, sd: 45, sp: 68 },
        w: 8.5,
        canEvolve: true,
        ab: 'Mold Breaker'
    },
    Druddigon: {
        t1: 'Dragon',
        bs: { hp: 77, at: 120, df: 90, sa: 60, sd: 90, sp: 48 },
        w: 139,
        ab: 'Sheer Force'
    },
    Ducklett: {
        t1: 'Water',
        t2: 'Flying',
        bs: { hp: 62, at: 44, df: 50, sa: 44, sd: 50, sp: 55 },
        w: 5.5,
        canEvolve: true,
        ab: 'Hydration'
    },
    Duosion: {
        t1: 'Psychic',
        bs: { hp: 65, at: 40, df: 50, sa: 125, sd: 60, sp: 30 },
        w: 8,
        canEvolve: true,
        ab: 'Magic Guard'
    },
    Durant: {
        t1: 'Bug',
        t2: 'Steel',
        bs: { hp: 58, at: 109, df: 112, sa: 48, sd: 48, sp: 109 },
        w: 33,
        ab: 'Hustle'
    },
    Dwebble: {
        t1: 'Bug',
        t2: 'Rock',
        bs: { hp: 50, at: 65, df: 85, sa: 35, sd: 35, sp: 55 },
        w: 14.5,
        canEvolve: true,
        ab: 'Sturdy'
    },
    Eelektrik: {
        t1: 'Electric',
        bs: { hp: 65, at: 85, df: 70, sa: 75, sd: 70, sp: 40 },
        w: 22,
        ab: 'Levitate',
        canEvolve: true
    },
    Eelektross: {
        t1: 'Electric',
        bs: { hp: 85, at: 115, df: 80, sa: 105, sd: 80, sp: 50 },
        w: 80.5,
        ab: 'Levitate'
    },
    Elgyem: {
        t1: 'Psychic',
        bs: { hp: 55, at: 55, df: 55, sa: 85, sd: 55, sp: 30 },
        w: 9,
        canEvolve: true,
        ab: 'Analytic'
    },
    Emboar: {
        t1: 'Fire',
        t2: 'Fighting',
        bs: { hp: 110, at: 123, df: 65, sa: 100, sd: 65, sp: 65 },
        w: 150,
        ab: 'Blaze'
    },
    Emolga: {
        t1: 'Electric',
        t2: 'Flying',
        bs: { hp: 55, at: 75, df: 60, sa: 75, sd: 60, sp: 103 },
        w: 5,
        ab: 'Motor Drive'
    },
    Escavalier: {
        t1: 'Bug',
        t2: 'Steel',
        bs: { hp: 70, at: 135, df: 105, sa: 60, sd: 105, sp: 20 },
        w: 33,
        ab: 'Swarm'
    },
    Excadrill: {
        t1: 'Ground',
        t2: 'Steel',
        bs: { hp: 110, at: 135, df: 60, sa: 50, sd: 65, sp: 88 },
        w: 40.4,
        ab: 'Mold Breaker'
    },
    Ferroseed: {
        t1: 'Grass',
        t2: 'Steel',
        bs: { hp: 44, at: 50, df: 91, sa: 24, sd: 86, sp: 10 },
        w: 18.8,
        canEvolve: true,
        ab: 'Iron Barbs'
    },
    Ferrothorn: {
        t1: 'Grass',
        t2: 'Steel',
        bs: { hp: 74, at: 94, df: 131, sa: 54, sd: 116, sp: 20 },
        w: 110,
        ab: 'Iron Barbs'
    },
    Foongus: {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 69, at: 55, df: 45, sa: 55, sd: 55, sp: 15 },
        w: 1,
        canEvolve: true,
        ab: 'Regenerator'
    },
    Fraxure: {
        t1: 'Dragon',
        bs: { hp: 66, at: 117, df: 70, sa: 40, sd: 50, sp: 67 },
        w: 36,
        canEvolve: true,
        ab: 'Mold Breaker'
    },
    Frillish: {
        t1: 'Water',
        t2: 'Ghost',
        bs: { hp: 55, at: 40, df: 50, sa: 65, sd: 85, sp: 40 },
        w: 33,
        canEvolve: true,
        ab: 'Water Absorb'
    },
    Galvantula: {
        t1: 'Bug',
        t2: 'Electric',
        bs: { hp: 70, at: 77, df: 60, sa: 97, sd: 60, sp: 108 },
        w: 14.3,
        ab: 'Compound Eyes'
    },
    Garbodor: {
        t1: 'Poison',
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        w: 107.3,
        ab: 'Aftermath'
    },
    Genesect: {
        t1: 'Bug',
        t2: 'Steel',
        bs: { hp: 71, at: 120, df: 95, sa: 120, sd: 95, sp: 99 },
        w: 82.5,
        ab: 'Download',
        gender: 'N'
    },
    Gigalith: {
        t1: 'Rock',
        bs: { hp: 85, at: 135, df: 130, sa: 60, sd: 70, sp: 25 },
        w: 260,
        ab: 'Sturdy'
    },
    Golett: {
        t1: 'Ground',
        t2: 'Ghost',
        bs: { hp: 59, at: 74, df: 50, sa: 35, sd: 50, sp: 35 },
        w: 92,
        canEvolve: true,
        gender: 'N',
        ab: 'No Guard'
    },
    Golurk: {
        t1: 'Ground',
        t2: 'Ghost',
        bs: { hp: 89, at: 124, df: 80, sa: 55, sd: 80, sp: 55 },
        w: 330,
        gender: 'N',
        ab: 'No Guard'
    },
    Gothita: {
        t1: 'Psychic',
        bs: { hp: 45, at: 30, df: 50, sa: 55, sd: 65, sp: 45 },
        w: 5.8,
        canEvolve: true,
        ab: 'Frisk'
    },
    Gothitelle: {
        t1: 'Psychic',
        bs: { hp: 70, at: 55, df: 95, sa: 95, sd: 110, sp: 65 },
        w: 44,
        ab: 'Shadow Tag'
    },
    Gothorita: {
        t1: 'Psychic',
        bs: { hp: 60, at: 45, df: 70, sa: 75, sd: 85, sp: 55 },
        w: 18,
        canEvolve: true,
        ab: 'Shadow Tag'
    },
    Gurdurr: {
        t1: 'Fighting',
        bs: { hp: 85, at: 105, df: 85, sa: 40, sd: 50, sp: 40 },
        w: 40,
        canEvolve: true,
        ab: 'Sheer Force'
    },
    Haxorus: {
        t1: 'Dragon',
        bs: { hp: 76, at: 147, df: 90, sa: 60, sd: 70, sp: 97 },
        w: 105.5,
        ab: 'Mold Breaker'
    },
    Heatmor: {
        t1: 'Fire',
        bs: { hp: 85, at: 97, df: 66, sa: 105, sd: 66, sp: 65 },
        w: 58,
        ab: 'Flash Fire'
    },
    Herdier: {
        t1: 'Normal',
        bs: { hp: 65, at: 80, df: 65, sa: 35, sd: 65, sp: 60 },
        w: 14.7,
        canEvolve: true,
        ab: 'Intimidate'
    },
    Hydreigon: {
        t1: 'Dark',
        t2: 'Dragon',
        bs: { hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98 },
        w: 160,
        ab: 'Levitate'
    },
    Jellicent: {
        t1: 'Water',
        t2: 'Ghost',
        bs: { hp: 100, at: 60, df: 70, sa: 85, sd: 105, sp: 60 },
        w: 135,
        ab: 'Water Absorb'
    },
    Joltik: {
        t1: 'Bug',
        t2: 'Electric',
        bs: { hp: 50, at: 47, df: 50, sa: 57, sd: 50, sp: 65 },
        w: 0.6,
        canEvolve: true,
        ab: 'Compound Eyes'
    },
    Karrablast: {
        t1: 'Bug',
        bs: { hp: 50, at: 75, df: 45, sa: 40, sd: 45, sp: 60 },
        w: 5.9,
        canEvolve: true,
        ab: 'No Guard'
    },
    Keldeo: {
        t1: 'Water',
        t2: 'Fighting',
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        w: 48.5,
        ab: 'Justified',
        gender: 'N'
    },
    'Keldeo-Resolute': {
        t1: 'Water',
        t2: 'Fighting',
        bs: { hp: 91, at: 72, df: 90, sa: 129, sd: 90, sp: 108 },
        w: 48.5,
        ab: 'Justified',
        gender: 'N'
    },
    Klang: {
        t1: 'Steel',
        bs: { hp: 60, at: 80, df: 95, sa: 70, sd: 85, sp: 50 },
        w: 51,
        canEvolve: true,
        gender: 'N',
        ab: 'Clear Body'
    },
    Klink: {
        t1: 'Steel',
        bs: { hp: 40, at: 55, df: 70, sa: 45, sd: 60, sp: 30 },
        w: 21,
        canEvolve: true,
        gender: 'N',
        ab: 'Plus'
    },
    Klinklang: {
        t1: 'Steel',
        bs: { hp: 60, at: 100, df: 115, sa: 70, sd: 85, sp: 90 },
        w: 81,
        gender: 'N',
        ab: 'Clear Body'
    },
    Krokorok: {
        t1: 'Ground',
        t2: 'Dark',
        bs: { hp: 60, at: 82, df: 45, sa: 45, sd: 45, sp: 74 },
        w: 33.4,
        canEvolve: true,
        ab: 'Intimidate'
    },
    Krookodile: {
        t1: 'Ground',
        t2: 'Dark',
        bs: { hp: 95, at: 117, df: 70, sa: 65, sd: 70, sp: 92 },
        w: 96.3,
        ab: 'Intimidate'
    },
    Kyurem: {
        t1: 'Dragon',
        t2: 'Ice',
        bs: { hp: 125, at: 130, df: 90, sa: 130, sd: 90, sp: 95 },
        w: 325,
        ab: 'Pressure',
        gender: 'N',
        formes: ['Kyurem', 'Kyurem-Black', 'Kyurem-White']
    },
    'Kyurem-Black': {
        t1: 'Dragon',
        t2: 'Ice',
        bs: { hp: 125, at: 170, df: 100, sa: 120, sd: 90, sp: 95 },
        w: 325,
        ab: 'Teravolt',
        gender: 'N',
        isAlternateForme: true
    },
    'Kyurem-White': {
        t1: 'Dragon',
        t2: 'Ice',
        bs: { hp: 125, at: 120, df: 90, sa: 170, sd: 100, sp: 95 },
        w: 325,
        ab: 'Turboblaze',
        gender: 'N',
        isAlternateForme: true
    },
    Lampent: {
        t1: 'Ghost',
        t2: 'Fire',
        bs: { hp: 60, at: 40, df: 60, sa: 95, sd: 60, sp: 55 },
        w: 13,
        canEvolve: true,
        ab: 'Flash Fire'
    },
    Landorus: {
        t1: 'Ground',
        t2: 'Flying',
        bs: { hp: 89, at: 125, df: 90, sa: 115, sd: 80, sp: 101 },
        w: 68,
        ab: 'Sheer Force',
        formes: ['Landorus', 'Landorus-Therian']
    },
    'Landorus-Therian': {
        t1: 'Ground',
        t2: 'Flying',
        bs: { hp: 89, at: 145, df: 90, sa: 105, sd: 80, sp: 91 },
        w: 68,
        ab: 'Intimidate',
        isAlternateForme: true
    },
    Larvesta: {
        t1: 'Bug',
        t2: 'Fire',
        bs: { hp: 55, at: 85, df: 55, sa: 50, sd: 55, sp: 60 },
        w: 28.8,
        canEvolve: true,
        ab: 'Flame Body'
    },
    Leavanny: {
        t1: 'Bug',
        t2: 'Grass',
        bs: { hp: 75, at: 103, df: 80, sa: 70, sd: 70, sp: 92 },
        w: 20.5,
        ab: 'Chlorophyll'
    },
    Liepard: {
        t1: 'Dark',
        bs: { hp: 64, at: 88, df: 50, sa: 88, sd: 50, sp: 106 },
        w: 37.5,
        ab: 'Prankster'
    },
    Lilligant: {
        t1: 'Grass',
        bs: { hp: 70, at: 60, df: 75, sa: 110, sd: 75, sp: 90 },
        w: 16.3,
        ab: 'Chlorophyll'
    },
    Lillipup: {
        t1: 'Normal',
        bs: { hp: 45, at: 60, df: 45, sa: 25, sd: 45, sp: 55 },
        w: 4.1,
        canEvolve: true,
        ab: 'Vital Spirit'
    },
    Litwick: {
        t1: 'Ghost',
        t2: 'Fire',
        bs: { hp: 50, at: 30, df: 55, sa: 65, sd: 55, sp: 20 },
        w: 3.1,
        canEvolve: true,
        ab: 'Flash Fire'
    },
    Malaconda: {
        t1: 'Dark',
        t2: 'Grass',
        bs: { hp: 115, at: 100, df: 60, sa: 40, sd: 130, sp: 55 },
        w: 108.8,
        ab: 'Infiltrator'
    },
    Mandibuzz: {
        t1: 'Dark',
        t2: 'Flying',
        bs: { hp: 110, at: 65, df: 105, sa: 55, sd: 95, sp: 80 },
        w: 39.5,
        ab: 'Overcoat'
    },
    Maractus: {
        t1: 'Grass',
        bs: { hp: 75, at: 86, df: 67, sa: 106, sd: 67, sp: 60 },
        w: 28,
        ab: 'Water Absorb'
    },
    Meloetta: {
        t1: 'Normal',
        t2: 'Psychic',
        bs: { hp: 100, at: 77, df: 77, sa: 128, sd: 128, sp: 90 },
        w: 6.5,
        ab: 'Serene Grace',
        formes: ['Meloetta', 'Meloetta-Pirouette'],
        gender: 'N'
    },
    'Meloetta-Pirouette': {
        t1: 'Normal',
        t2: 'Fighting',
        bs: { hp: 100, at: 128, df: 90, sa: 77, sd: 77, sp: 128 },
        w: 6.5,
        ab: 'Serene Grace',
        isAlternateForme: true,
        gender: 'N'
    },
    Mienfoo: {
        t1: 'Fighting',
        bs: { hp: 45, at: 85, df: 50, sa: 55, sd: 50, sp: 65 },
        w: 20,
        canEvolve: true,
        ab: 'Regenerator'
    },
    Mienshao: {
        t1: 'Fighting',
        bs: { hp: 65, at: 125, df: 60, sa: 95, sd: 60, sp: 105 },
        w: 35.5,
        ab: 'Regenerator'
    },
    Minccino: {
        t1: 'Normal',
        bs: { hp: 55, at: 50, df: 40, sa: 40, sd: 40, sp: 75 },
        w: 5.8,
        canEvolve: true,
        ab: 'Technician'
    },
    Mollux: {
        t1: 'Fire',
        t2: 'Poison',
        bs: { hp: 95, at: 45, df: 83, sa: 131, sd: 105, sp: 76 },
        w: 41,
        ab: 'Dry Skin'
    },
    Munna: {
        t1: 'Psychic',
        bs: { hp: 76, at: 25, df: 45, sa: 67, sd: 55, sp: 24 },
        w: 23.3,
        canEvolve: true,
        ab: 'Synchronize'
    },
    Musharna: {
        t1: 'Psychic',
        bs: { hp: 116, at: 55, df: 85, sa: 107, sd: 95, sp: 29 },
        w: 60.5,
        ab: 'Synchronize'
    },
    Necturine: {
        t1: 'Grass',
        t2: 'Ghost',
        bs: { hp: 49, at: 55, df: 60, sa: 50, sd: 75, sp: 51 },
        w: 1.8,
        canEvolve: true,
        ab: 'Anticipation'
    },
    Necturna: {
        t1: 'Grass',
        t2: 'Ghost',
        bs: { hp: 64, at: 120, df: 100, sa: 85, sd: 120, sp: 58 },
        w: 49.6,
        ab: 'Forewarn'
    },
    Oshawott: {
        t1: 'Water',
        bs: { hp: 55, at: 55, df: 45, sa: 63, sd: 45, sp: 45 },
        w: 5.9,
        canEvolve: true,
        ab: 'Torrent'
    },
    Palpitoad: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 75, at: 65, df: 55, sa: 65, sd: 55, sp: 69 },
        w: 17,
        canEvolve: true,
        ab: 'Water Absorb'
    },
    Panpour: {
        t1: 'Water',
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        w: 13.5,
        canEvolve: true,
        ab: 'Torrent'
    },
    Pansage: {
        t1: 'Grass',
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        w: 10.5,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Pansear: {
        t1: 'Fire',
        bs: { hp: 50, at: 53, df: 48, sa: 53, sd: 48, sp: 64 },
        w: 11,
        canEvolve: true,
        ab: 'Blaze'
    },
    Patrat: {
        t1: 'Normal',
        bs: { hp: 45, at: 55, df: 39, sa: 35, sd: 39, sp: 42 },
        w: 11.6,
        canEvolve: true,
        ab: 'Analytic'
    },
    Pawniard: {
        t1: 'Dark',
        t2: 'Steel',
        bs: { hp: 45, at: 85, df: 70, sa: 40, sd: 40, sp: 60 },
        w: 10.2,
        canEvolve: true,
        ab: 'Defiant'
    },
    Petilil: {
        t1: 'Grass',
        bs: { hp: 45, at: 35, df: 50, sa: 70, sd: 50, sp: 30 },
        w: 6.6,
        canEvolve: true,
        ab: 'Chlorophyll'
    },
    Pidove: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 50, at: 55, df: 50, sa: 36, sd: 30, sp: 43 },
        w: 2.1,
        canEvolve: true,
        ab: 'Super Luck'
    },
    Pignite: {
        t1: 'Fire',
        t2: 'Fighting',
        bs: { hp: 90, at: 93, df: 55, sa: 70, sd: 55, sp: 55 },
        w: 55.5,
        canEvolve: true,
        ab: 'Blaze'
    },
    Purrloin: {
        t1: 'Dark',
        bs: { hp: 41, at: 50, df: 37, sa: 50, sd: 37, sp: 66 },
        w: 10.1,
        canEvolve: true,
        ab: 'Prankster'
    },
    Reshiram: {
        t1: 'Dragon',
        t2: 'Fire',
        bs: { hp: 100, at: 120, df: 100, sa: 150, sd: 120, sp: 90 },
        w: 330,
        ab: 'Turboblaze',
        gender: 'N'
    },
    Reuniclus: {
        t1: 'Psychic',
        bs: { hp: 110, at: 65, df: 75, sa: 125, sd: 85, sp: 30 },
        w: 20.1,
        ab: 'Magic Guard'
    },
    Roggenrola: {
        t1: 'Rock',
        bs: { hp: 55, at: 75, df: 85, sa: 25, sd: 25, sp: 15 },
        w: 18,
        canEvolve: true,
        ab: 'Sturdy'
    },
    Rufflet: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 70, at: 83, df: 50, sa: 37, sd: 50, sp: 60 },
        w: 10.5,
        canEvolve: true,
        ab: 'Sheer Force'
    },
    Samurott: {
        t1: 'Water',
        bs: { hp: 95, at: 100, df: 85, sa: 108, sd: 70, sp: 70 },
        w: 94.6,
        ab: 'Torrent'
    },
    Sandile: {
        t1: 'Ground',
        t2: 'Dark',
        bs: { hp: 50, at: 72, df: 35, sa: 35, sd: 35, sp: 65 },
        w: 15.2,
        canEvolve: true,
        ab: 'Intimidate'
    },
    Sawk: {
        t1: 'Fighting',
        bs: { hp: 75, at: 125, df: 75, sa: 30, sd: 75, sp: 85 },
        w: 51,
        ab: 'Mold Breaker'
    },
    Sawsbuck: {
        t1: 'Normal',
        t2: 'Grass',
        bs: { hp: 80, at: 100, df: 70, sa: 60, sd: 70, sp: 95 },
        w: 92.5,
        ab: 'Serene Grace'
    },
    Scolipede: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 60, at: 90, df: 89, sa: 55, sd: 69, sp: 112 },
        w: 200.5,
        ab: 'Swarm'
    },
    Scrafty: {
        t1: 'Dark',
        t2: 'Fighting',
        bs: { hp: 65, at: 90, df: 115, sa: 45, sd: 115, sp: 58 },
        w: 30,
        ab: 'Shed Skin'
    },
    Scraggy: {
        t1: 'Dark',
        t2: 'Fighting',
        bs: { hp: 50, at: 75, df: 70, sa: 35, sd: 70, sp: 48 },
        w: 11.8,
        canEvolve: true,
        ab: 'Shed Skin'
    },
    Scratchet: {
        t1: 'Normal',
        t2: 'Fighting',
        bs: { hp: 55, at: 85, df: 80, sa: 20, sd: 70, sp: 40 },
        w: 20,
        canEvolve: true,
        ab: 'Prankster'
    },
    Seismitoad: {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 105, at: 85, df: 75, sa: 85, sd: 75, sp: 74 },
        w: 62,
        ab: 'Water Absorb'
    },
    Serperior: {
        t1: 'Grass',
        bs: { hp: 75, at: 75, df: 95, sa: 75, sd: 95, sp: 113 },
        w: 63,
        ab: 'Overgrow'
    },
    Servine: {
        t1: 'Grass',
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 83 },
        w: 16,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Sewaddle: {
        t1: 'Bug',
        t2: 'Grass',
        bs: { hp: 45, at: 53, df: 70, sa: 40, sd: 60, sp: 42 },
        w: 2.5,
        canEvolve: true,
        ab: 'Chlorophyll'
    },
    Shelmet: {
        t1: 'Bug',
        bs: { hp: 50, at: 40, df: 85, sa: 40, sd: 65, sp: 25 },
        w: 7.7,
        canEvolve: true,
        ab: 'Overcoat'
    },
    Sigilyph: {
        t1: 'Psychic',
        t2: 'Flying',
        bs: { hp: 72, at: 58, df: 80, sa: 103, sd: 80, sp: 97 },
        w: 14,
        ab: 'Magic Guard'
    },
    Simipour: {
        t1: 'Water',
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        w: 29,
        ab: 'Torrent'
    },
    Simisage: {
        t1: 'Grass',
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        w: 30.5,
        ab: 'Overgrow'
    },
    Simisear: {
        t1: 'Fire',
        bs: { hp: 75, at: 98, df: 63, sa: 98, sd: 63, sp: 101 },
        w: 28,
        ab: 'Blaze'
    },
    Snivy: {
        t1: 'Grass',
        bs: { hp: 45, at: 45, df: 55, sa: 45, sd: 55, sp: 63 },
        w: 8.1,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Solosis: {
        t1: 'Psychic',
        bs: { hp: 45, at: 30, df: 40, sa: 105, sd: 50, sp: 20 },
        w: 1,
        canEvolve: true,
        ab: 'Magic Guard'
    },
    Stoutland: {
        t1: 'Normal',
        bs: { hp: 85, at: 100, df: 90, sa: 45, sd: 90, sp: 80 },
        w: 61,
        ab: 'Intimidate'
    },
    Stunfisk: {
        t1: 'Ground',
        t2: 'Electric',
        bs: { hp: 109, at: 66, df: 84, sa: 81, sd: 99, sp: 32 },
        w: 11,
        ab: 'Static'
    },
    Swadloon: {
        t1: 'Bug',
        t2: 'Grass',
        bs: { hp: 55, at: 63, df: 90, sa: 50, sd: 80, sp: 42 },
        w: 7.3,
        canEvolve: true,
        ab: 'Chlorophyll'
    },
    Swanna: {
        t1: 'Water',
        t2: 'Flying',
        bs: { hp: 75, at: 87, df: 63, sa: 87, sd: 63, sp: 98 },
        w: 24.2,
        ab: 'Hydration'
    },
    Swoobat: {
        t1: 'Psychic',
        t2: 'Flying',
        bs: { hp: 67, at: 57, df: 55, sa: 77, sd: 55, sp: 114 },
        w: 10.5,
        ab: 'Simple'
    },
    Tepig: {
        t1: 'Fire',
        bs: { hp: 65, at: 63, df: 45, sa: 45, sd: 45, sp: 45 },
        w: 9.9,
        canEvolve: true,
        ab: 'Blaze'
    },
    Terrakion: {
        t1: 'Rock',
        t2: 'Fighting',
        bs: { hp: 91, at: 129, df: 90, sa: 72, sd: 90, sp: 108 },
        w: 260,
        ab: 'Justified',
        gender: 'N'
    },
    Throh: {
        t1: 'Fighting',
        bs: { hp: 120, at: 100, df: 85, sa: 30, sd: 85, sp: 45 },
        w: 55.5,
        ab: 'Mold Breaker'
    },
    Thundurus: {
        t1: 'Electric',
        t2: 'Flying',
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        w: 61,
        ab: 'Prankster',
        formes: ['Thundurus', 'Thundurus-Therian']
    },
    'Thundurus-Therian': {
        t1: 'Electric',
        t2: 'Flying',
        bs: { hp: 79, at: 105, df: 70, sa: 145, sd: 80, sp: 101 },
        w: 61,
        ab: 'Volt Absorb',
        isAlternateForme: true
    },
    Timburr: {
        t1: 'Fighting',
        bs: { hp: 75, at: 80, df: 55, sa: 25, sd: 35, sp: 35 },
        w: 12.5,
        canEvolve: true,
        ab: 'Sheer Force'
    },
    Tirtouga: {
        t1: 'Water',
        t2: 'Rock',
        bs: { hp: 54, at: 78, df: 103, sa: 53, sd: 45, sp: 22 },
        w: 16.5,
        canEvolve: true,
        ab: 'Solid Rock'
    },
    Tomohawk: {
        t1: 'Flying',
        t2: 'Fighting',
        bs: { hp: 105, at: 60, df: 90, sa: 115, sd: 80, sp: 85 },
        w: 37.2,
        ab: 'Prankster'
    },
    Tornadus: {
        t1: 'Flying',
        bs: { hp: 79, at: 115, df: 70, sa: 125, sd: 80, sp: 111 },
        w: 63,
        ab: 'Prankster',
        formes: ['Tornadus', 'Tornadus-Therian']
    },
    'Tornadus-Therian': {
        t1: 'Flying',
        bs: { hp: 79, at: 100, df: 80, sa: 110, sd: 90, sp: 121 },
        w: 63,
        ab: 'Regenerator',
        isAlternateForme: true
    },
    Tranquill: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 62, at: 77, df: 62, sa: 50, sd: 42, sp: 65 },
        w: 15,
        canEvolve: true,
        ab: 'Super Luck'
    },
    Trubbish: {
        t1: 'Poison',
        bs: { hp: 50, at: 50, df: 62, sa: 40, sd: 62, sp: 65 },
        w: 31,
        canEvolve: true,
        ab: 'Aftermath'
    },
    Tympole: {
        t1: 'Water',
        bs: { hp: 50, at: 50, df: 40, sa: 50, sd: 40, sp: 64 },
        w: 4.5,
        canEvolve: true,
        ab: 'Water Absorb'
    },
    Tynamo: {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 40, sa: 45, sd: 40, sp: 60 },
        w: 0.3,
        ab: 'Levitate',
        canEvolve: true
    },
    Unfezant: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 80, at: 105, df: 80, sa: 65, sd: 55, sp: 93 },
        w: 29,
        ab: 'Super Luck'
    },
    Vanillish: {
        t1: 'Ice',
        bs: { hp: 51, at: 65, df: 65, sa: 80, sd: 75, sp: 59 },
        w: 41,
        canEvolve: true,
        ab: 'Ice Body'
    },
    Vanillite: {
        t1: 'Ice',
        bs: { hp: 36, at: 50, df: 50, sa: 65, sd: 60, sp: 44 },
        w: 5.7,
        canEvolve: true,
        ab: 'Ice Body'
    },
    Vanilluxe: {
        t1: 'Ice',
        bs: { hp: 71, at: 95, df: 85, sa: 110, sd: 95, sp: 79 },
        w: 57.5,
        ab: 'Ice Body'
    },
    Venipede: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 30, at: 45, df: 59, sa: 30, sd: 39, sp: 57 },
        w: 5.3,
        canEvolve: true,
        ab: 'Swarm'
    },
    Victini: {
        t1: 'Psychic',
        t2: 'Fire',
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        w: 4,
        ab: 'Victory Star',
        gender: 'N'
    },
    Volkraken: {
        t1: 'Water',
        t2: 'Fire',
        bs: {hp: 100, at: 45, df: 80, sa: 135, sd: 100, sp: 95},
        w: 44.5,
        ab: 'Analytic',
    },
    Volkritter: {
        t1: 'Water',
        t2: 'Fire',
        bs: {hp: 60, at: 30, df: 50, sa: 80, sd: 60, sp: 70},
        w: 15,
        canEvolve: true,
        ab: 'Anticipation',
    },
    Virizion: {
        t1: 'Grass',
        t2: 'Fighting',
        bs: { hp: 91, at: 90, df: 72, sa: 90, sd: 129, sp: 108 },
        w: 200,
        ab: 'Justified',
        gender: 'N'
    },
    Volcarona: {
        t1: 'Bug',
        t2: 'Fire',
        bs: { hp: 85, at: 60, df: 65, sa: 135, sd: 105, sp: 100 },
        w: 46,
        ab: 'Flame Body'
    },
    Vullaby: {
        t1: 'Dark',
        t2: 'Flying',
        bs: { hp: 70, at: 55, df: 75, sa: 45, sd: 65, sp: 60 },
        w: 9,
        canEvolve: true,
        ab: 'Overcoat'
    },
    Watchog: {
        t1: 'Normal',
        bs: { hp: 60, at: 85, df: 69, sa: 60, sd: 69, sp: 77 },
        w: 27,
        ab: 'Analytic'
    },
    Whimsicott: {
        t1: 'Grass',
        bs: { hp: 60, at: 67, df: 85, sa: 77, sd: 75, sp: 116 },
        w: 6.6,
        ab: 'Prankster'
    },
    Whirlipede: {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 40, at: 55, df: 99, sa: 40, sd: 79, sp: 47 },
        w: 58.5,
        canEvolve: true,
        ab: 'Swarm'
    },
    Woobat: {
        t1: 'Psychic',
        t2: 'Flying',
        bs: { hp: 55, at: 45, df: 43, sa: 55, sd: 43, sp: 72 },
        w: 2.1,
        canEvolve: true,
        ab: 'Simple'
    },
    Yamask: {
        t1: 'Ghost',
        bs: { hp: 38, at: 30, df: 85, sa: 55, sd: 65, sp: 30 },
        w: 1.5,
        ab: 'Mummy',
        canEvolve: true
    },
    Zebstrika: {
        t1: 'Electric',
        bs: { hp: 75, at: 100, df: 63, sa: 80, sd: 63, sp: 116 },
        w: 79.5,
        ab: 'Lightning Rod'
    },
    Zekrom: {
        t1: 'Dragon',
        t2: 'Electric',
        bs: { hp: 100, at: 150, df: 120, sa: 120, sd: 100, sp: 90 },
        w: 345,
        ab: 'Teravolt',
        gender: 'N'
    },
    Zoroark: {
        t1: 'Dark',
        bs: { hp: 60, at: 105, df: 60, sa: 120, sd: 60, sp: 105 },
        w: 81.1,
        ab: 'Illusion'
    },
    Zorua: {
        t1: 'Dark',
        bs: { hp: 40, at: 65, df: 40, sa: 80, sd: 40, sp: 65 },
        w: 12.5,
        ab: 'Illusion',
        canEvolve: true
    },
    Zweilous: {
        t1: 'Dark',
        t2: 'Dragon',
        bs: { hp: 72, at: 85, df: 70, sa: 65, sd: 70, sp: 58 },
        w: 50,
        ab: 'Hustle',
        canEvolve: true
    }
});
var XY_BASE = util_1.extend(true, {}, BW, {
    Abomasnow: { formes: ['Abomasnow', 'Abomasnow-Mega'] },
    Absol: { formes: ['Absol', 'Absol-Mega'] },
    Aerodactyl: { formes: ['Aerodactyl', 'Aerodactyl-Mega'] },
    Aggron: { formes: ['Aggron', 'Aggron-Mega'] },
    Alakazam: { bs: { sd: 95 }, formes: ['Alakazam', 'Alakazam-Mega'] },
    Altaria: { formes: ['Altaria', 'Altaria-Mega'] },
    Ampharos: { bs: { df: 85 }, formes: ['Ampharos', 'Ampharos-Mega'] },
    Audino: { formes: ['Audino', 'Audino-Mega'] },
    Azumarill: { t2: 'Fairy', bs: { sa: 60 } },
    Azurill: { t2: 'Fairy' },
    Banette: { formes: ['Banette', 'Banette-Mega'] },
    Beautifly: { bs: { sa: 100 } },
    Beedrill: { bs: { at: 90 }, formes: ['Beedrill', 'Beedrill-Mega'] },
    Bellossom: { bs: { df: 95 } },
    Blastoise: { formes: ['Blastoise', 'Blastoise-Mega'] },
    Blaziken: { formes: ['Blaziken', 'Blaziken-Mega'] },
    Butterfree: { bs: { sa: 90 } },
    Camerupt: { formes: ['Camerupt', 'Camerupt-Mega'] },
    Charizard: { formes: ['Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y'] },
    Clefable: { t1: 'Fairy', bs: { sa: 95 } },
    Clefairy: { t1: 'Fairy' },
    Cleffa: { t1: 'Fairy' },
    Cottonee: { t2: 'Fairy' },
    Croconaw: { ab: 'Sheer Force' },
    Cyndaquil: { ab: 'Flash Fire' },
    Emboar: { ab: 'Reckless' },
    Exploud: { bs: { sd: 73 } },
    Feraligatr: { ab: 'Sheer Force' },
    Gallade: { formes: ['Gallade', 'Gallade-Mega'] },
    Garchomp: { formes: ['Garchomp', 'Garchomp-Mega'] },
    Gardevoir: { t2: 'Fairy', formes: ['Gardevoir', 'Gardevoir-Mega'] },
    Gengar: { formes: ['Gengar', 'Gengar-Mega'] },
    Gigalith: { bs: { sd: 80 } },
    Glalie: { formes: ['Glalie', 'Glalie-Mega'] },
    Golem: { bs: { at: 120 } },
    Gothita: { ab: 'Shadow Tag' },
    Granbull: { t1: 'Fairy' },
    Groudon: { formes: ['Groudon', 'Groudon-Primal'] },
    Gyarados: { formes: ['Gyarados', 'Gyarados-Mega'] },
    Heracross: { formes: ['Heracross', 'Heracross-Mega'] },
    Houndoom: { formes: ['Houndoom', 'Houndoom-Mega'] },
    Igglybuff: { t2: 'Fairy', ab: 'Competitive' },
    Jigglypuff: { t2: 'Fairy', ab: 'Competitive' },
    Jumpluff: { bs: { sd: 95 } },
    Kangaskhan: { formes: ['Kangaskhan', 'Kangaskhan-Mega'] },
    Kecleon: { ab: 'Protean' },
    Kirlia: { t2: 'Fairy' },
    Klink: { ab: 'Clear Body' },
    Krookodile: { bs: { df: 80 } },
    Kyogre: { formes: ['Kyogre', 'Kyogre-Primal'] },
    Larvesta: { ab: 'Swarm' },
    Latias: { formes: ['Latias', 'Latias-Mega'] },
    Latios: { formes: ['Latios', 'Latios-Mega'] },
    Leavanny: { bs: { sd: 80 } },
    Lopunny: { formes: ['Lopunny', 'Lopunny-Mega'] },
    Lucario: { formes: ['Lucario', 'Lucario-Mega'] },
    Manectric: { formes: ['Manectric', 'Manectric-Mega'] },
    Marill: { t2: 'Fairy' },
    Mawile: { t2: 'Fairy', formes: ['Mawile', 'Mawile-Mega'] },
    Medicham: { formes: ['Medicham', 'Medicham-Mega'] },
    Metagross: { formes: ['Metagross', 'Metagross-Mega'] },
    Mewtwo: { formes: ['Mewtwo', 'Mewtwo-Mega-X', 'Mewtwo-Mega-Y'] },
    'Mime Jr.': { t2: 'Fairy' },
    Minun: { ab: 'Volt Absorb' },
    'Mr. Mime': { t2: 'Fairy' },
    Nidoking: { bs: { at: 102 } },
    Nidoqueen: { bs: { at: 92 } },
    Pidgeot: { bs: { sp: 101 }, formes: ['Pidgeot', 'Pidgeot-Mega'] },
    Pignite: { ab: 'Thick Fat' },
    Pikachu: { bs: { df: 40, sd: 50 } },
    Pinsir: { formes: ['Pinsir', 'Pinsir-Mega'] },
    Plusle: { ab: 'Lightning Rod' },
    Poliwrath: { bs: { at: 95 } },
    Quilava: { ab: 'Flash Fire' },
    Raichu: { bs: { sp: 110 } },
    Ralts: { t2: 'Fairy' },
    Rayquaza: { formes: ['Rayquaza', 'Rayquaza-Mega'] },
    Regirock: { ab: 'Sturdy' },
    Roserade: { bs: { df: 65 } },
    Sableye: { formes: ['Sableye', 'Sableye-Mega'] },
    Salamence: { formes: ['Salamence', 'Salamence-Mega'] },
    Sceptile: { formes: ['Sceptile', 'Sceptile-Mega'] },
    Scizor: { formes: ['Scizor', 'Scizor-Mega'] },
    Scolipede: { bs: { at: 100 }, ab: 'Speed Boost' },
    Seismitoad: { bs: { at: 95 } },
    Serperior: { ab: 'Contrary' },
    Servine: { ab: 'Contrary' },
    Sharpedo: { formes: ['Sharpedo', 'Sharpedo-Mega'] },
    Slowbro: { formes: ['Slowbro', 'Slowbro-Mega'] },
    Snivy: { ab: 'Contrary' },
    Snubbull: { t1: 'Fairy' },
    Staraptor: { bs: { sd: 60 } },
    Starly: { ab: 'Reckless' },
    Steelix: { formes: ['Steelix', 'Steelix-Mega'] },
    Stoutland: { bs: { at: 110 } },
    Swampert: { formes: ['Swampert', 'Swampert-Mega'] },
    Tepig: { ab: 'Thick Fat' },
    Togekiss: { t1: 'Fairy' },
    Togepi: { t1: 'Fairy' },
    Togetic: { t1: 'Fairy' },
    Totodile: { ab: 'Sheer Force' },
    Typhlosion: { ab: 'Flash Fire' },
    Tyranitar: { formes: ['Tyranitar', 'Tyranitar-Mega'] },
    Unfezant: { bs: { at: 115 } },
    Venipede: { ab: 'Speed Boost' },
    Venusaur: { formes: ['Venusaur', 'Venusaur-Mega'] },
    Victreebel: { bs: { sd: 70 } },
    Vileplume: { bs: { sa: 110 } },
    Volcarona: { ab: 'Swarm' },
    Whimsicott: { t2: 'Fairy' },
    Whirlipede: { ab: 'Speed Boost' },
    Wigglytuff: { t2: 'Fairy', bs: { sa: 85 }, ab: 'Competitive' },
    'Aegislash-Blade': {
        t1: 'Steel',
        t2: 'Ghost',
        bs: { hp: 60, at: 150, df: 50, sa: 150, sd: 50, sp: 60 },
        w: 53,
        ab: 'Stance Change',
        formes: ['Aegislash-Blade', 'Aegislash-Shield', 'Aegislash-Both']
    },
    'Aegislash-Shield': {
        t1: 'Steel',
        t2: 'Ghost',
        bs: { hp: 60, at: 50, df: 150, sa: 50, sd: 150, sp: 60 },
        w: 53,
        ab: 'Stance Change',
        isAlternateForme: true
    },
    'Aegislash-Both': {
        t1: 'Steel',
        t2: 'Ghost',
        bs: { hp: 60, at: 150, df: 150, sa: 150, sd: 150, sp: 60 },
        w: 53,
        ab: 'Stance Change',
        isAlternateForme: true
    },
    Amaura: {
        t1: 'Rock',
        t2: 'Ice',
        bs: { hp: 77, at: 59, df: 50, sa: 67, sd: 63, sp: 46 },
        w: 25.2,
        canEvolve: true,
        ab: 'Refrigerate'
    },
    'Arceus-Fairy': {
        t1: 'Fairy',
        bs: { hp: 120, at: 120, df: 120, sa: 120, sd: 120, sp: 120 },
        w: 320,
        ab: 'Multitype',
        gender: 'N',
        isAlternateForme: true
    },
    Aromatisse: {
        t1: 'Fairy',
        bs: { hp: 101, at: 72, df: 72, sa: 99, sd: 89, sp: 29 },
        w: 15.5,
        ab: 'Aroma Veil'
    },
    Aurorus: {
        t1: 'Rock',
        t2: 'Ice',
        bs: { hp: 123, at: 77, df: 72, sa: 99, sd: 92, sp: 58 },
        w: 225,
        ab: 'Refrigerate'
    },
    Avalugg: {
        t1: 'Ice',
        bs: { hp: 95, at: 117, df: 184, sa: 44, sd: 46, sp: 28 },
        w: 505,
        ab: 'Sturdy'
    },
    Barbaracle: {
        t1: 'Rock',
        t2: 'Water',
        bs: { hp: 72, at: 105, df: 115, sa: 54, sd: 86, sp: 68 },
        w: 96,
        ab: 'Tough Claws'
    },
    Bergmite: {
        t1: 'Ice',
        bs: { hp: 55, at: 69, df: 85, sa: 32, sd: 35, sp: 28 },
        w: 99.5,
        canEvolve: true,
        ab: 'Sturdy'
    },
    Binacle: {
        t1: 'Rock',
        t2: 'Water',
        bs: { hp: 42, at: 52, df: 67, sa: 39, sd: 56, sp: 50 },
        w: 31,
        canEvolve: true,
        ab: 'Tough Claws'
    },
    Braixen: {
        t1: 'Fire',
        bs: { hp: 59, at: 59, df: 58, sa: 90, sd: 70, sp: 73 },
        w: 14.5,
        canEvolve: true,
        ab: 'Blaze'
    },
    Bunnelby: {
        t1: 'Normal',
        bs: { hp: 38, at: 36, df: 38, sa: 32, sd: 36, sp: 57 },
        w: 5,
        canEvolve: true,
        ab: 'Huge Power'
    },
    Caimanoe: {
        t1: 'Water',
        t2: 'Steel',
        bs: { hp: 73, at: 85, df: 65, sa: 80, sd: 40, sp: 87 },
        w: 72.5,
        canEvolve: true,
        ab: 'Heatproof'
    },
    Carbink: {
        t1: 'Rock',
        t2: 'Fairy',
        bs: { hp: 50, at: 50, df: 150, sa: 50, sd: 150, sp: 50 },
        w: 5.7,
        gender: 'N',
        ab: 'Sturdy'
    },
    Chesnaught: {
        t1: 'Grass',
        t2: 'Fighting',
        bs: { hp: 88, at: 107, df: 122, sa: 74, sd: 75, sp: 64 },
        w: 90,
        ab: 'Bulletproof'
    },
    Chespin: {
        t1: 'Grass',
        bs: { hp: 56, at: 61, df: 65, sa: 48, sd: 45, sp: 38 },
        w: 9,
        canEvolve: true,
        ab: 'Bulletproof'
    },
    Clauncher: {
        t1: 'Water',
        bs: { hp: 50, at: 53, df: 62, sa: 58, sd: 63, sp: 44 },
        w: 8.3,
        ab: 'Mega Launcher',
        canEvolve: true
    },
    Clawitzer: {
        t1: 'Water',
        bs: { hp: 71, at: 73, df: 88, sa: 120, sd: 89, sp: 59 },
        w: 35.3,
        ab: 'Mega Launcher'
    },
    Crucibelle: {
        t1: 'Rock',
        t2: 'Poison',
        bs: { hp: 106, at: 105, df: 65, sa: 75, sd: 85, sp: 104 },
        w: 23.6,
        ab: 'Regenerator',
        formes: ['Crucibelle', 'Crucibelle-Mega']
    },
    Diancie: {
        t1: 'Rock',
        t2: 'Fairy',
        bs: { hp: 50, at: 100, df: 150, sa: 100, sd: 150, sp: 50 },
        w: 8.8,
        ab: 'Clear Body',
        formes: ['Diancie', 'Diancie-Mega'],
        gender: 'N'
    },
    Dedenne: {
        t1: 'Electric',
        t2: 'Fairy',
        bs: { hp: 67, at: 58, df: 57, sa: 81, sd: 67, sp: 101 },
        w: 2.2,
        ab: 'Cheek Pouch'
    },
    Delphox: {
        t1: 'Fire',
        t2: 'Psychic',
        bs: { hp: 75, at: 69, df: 72, sa: 114, sd: 100, sp: 104 },
        w: 39,
        ab: 'Blaze'
    },
    Diggersby: {
        t1: 'Normal',
        t2: 'Ground',
        bs: { hp: 85, at: 56, df: 77, sa: 50, sd: 77, sp: 78 },
        w: 42.4,
        ab: 'Huge Power'
    },
    Doublade: {
        t1: 'Steel',
        t2: 'Ghost',
        bs: { hp: 59, at: 110, df: 150, sa: 45, sd: 49, sp: 35 },
        w: 4.5,
        ab: 'No Guard',
        canEvolve: true
    },
    Dragalge: {
        t1: 'Poison',
        t2: 'Dragon',
        bs: { hp: 65, at: 75, df: 90, sa: 97, sd: 123, sp: 44 },
        w: 81.5,
        ab: 'Adaptability'
    },
    Espurr: {
        t1: 'Psychic',
        bs: { hp: 62, at: 48, df: 54, sa: 63, sd: 60, sp: 68 },
        w: 3.5,
        canEvolve: true,
        ab: 'Infiltrator'
    },
    Fennekin: {
        t1: 'Fire',
        bs: { hp: 40, at: 45, df: 40, sa: 62, sd: 60, sp: 60 },
        w: 9.4,
        canEvolve: true,
        ab: 'Blaze'
    },
    Flabébé: {
        t1: 'Fairy',
        bs: { hp: 44, at: 38, df: 39, sa: 61, sd: 79, sp: 42 },
        w: 0.1,
        canEvolve: true,
        ab: 'Flower Veil'
    },
    Fletchinder: {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 62, at: 73, df: 55, sa: 56, sd: 52, sp: 84 },
        w: 16,
        canEvolve: true,
        ab: 'Gale Wings'
    },
    Fletchling: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 45, at: 50, df: 43, sa: 40, sd: 38, sp: 62 },
        w: 1.7,
        canEvolve: true,
        ab: 'Gale Wings'
    },
    Floatoy: {
        t1: 'Water',
        bs: { hp: 48, at: 70, df: 40, sa: 70, sd: 30, sp: 77 },
        w: 1.9,
        canEvolve: true,
        ab: 'Swift Swim'
    },
    Floette: {
        t1: 'Fairy',
        bs: { hp: 54, at: 45, df: 47, sa: 75, sd: 98, sp: 52 },
        w: 0.9,
        canEvolve: true,
        ab: 'Flower Veil'
    },
    'Floette-Eternal': {
        t1: 'Fairy',
        bs: { hp: 74, at: 65, df: 67, sa: 125, sd: 128, sp: 92 },
        w: 0.9,
        ab: 'Flower Veil'
    },
    Florges: {
        t1: 'Fairy',
        bs: { hp: 78, at: 65, df: 68, sa: 112, sd: 154, sp: 75 },
        w: 10,
        ab: 'Flower Veil'
    },
    Froakie: {
        t1: 'Water',
        bs: { hp: 41, at: 56, df: 40, sa: 62, sd: 44, sp: 71 },
        w: 7,
        canEvolve: true,
        ab: 'Protean'
    },
    Frogadier: {
        t1: 'Water',
        bs: { hp: 54, at: 63, df: 52, sa: 83, sd: 56, sp: 97 },
        w: 10.9,
        canEvolve: true,
        ab: 'Protean'
    },
    Furfrou: {
        t1: 'Normal',
        bs: { hp: 75, at: 80, df: 60, sa: 65, sd: 90, sp: 102 },
        w: 28,
        ab: 'Fur Coat'
    },
    Gogoat: {
        t1: 'Grass',
        bs: { hp: 123, at: 100, df: 62, sa: 97, sd: 81, sp: 68 },
        w: 91,
        ab: 'Sap Sipper'
    },
    Goodra: {
        t1: 'Dragon',
        bs: { hp: 90, at: 100, df: 70, sa: 110, sd: 150, sp: 80 },
        w: 150.5,
        ab: 'Sap Sipper'
    },
    Goomy: {
        t1: 'Dragon',
        bs: { hp: 45, at: 50, df: 35, sa: 55, sd: 75, sp: 40 },
        w: 2.8,
        canEvolve: true,
        ab: 'Sap Sipper'
    },
    Gourgeist: {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 65, at: 90, df: 122, sa: 58, sd: 75, sp: 84 },
        w: 12.5,
        ab: 'Frisk',
        formes: ['Gourgeist', 'Gourgeist-Large', 'Gourgeist-Small', 'Gourgeist-Super']
    },
    'Gourgeist-Large': {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 75, at: 95, df: 122, sa: 58, sd: 75, sp: 69 },
        w: 14,
        ab: 'Frisk',
        isAlternateForme: true
    },
    'Gourgeist-Small': {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 55, at: 85, df: 122, sa: 58, sd: 75, sp: 99 },
        w: 9.5,
        ab: 'Frisk',
        isAlternateForme: true
    },
    'Gourgeist-Super': {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 85, at: 100, df: 122, sa: 58, sd: 75, sp: 54 },
        w: 39,
        ab: 'Frisk',
        isAlternateForme: true
    },
    Greninja: {
        t1: 'Water',
        t2: 'Dark',
        bs: { hp: 72, at: 95, df: 67, sa: 103, sd: 71, sp: 122 },
        w: 40,
        ab: 'Protean'
    },
    Hawlucha: {
        t1: 'Fighting',
        t2: 'Flying',
        bs: { hp: 78, at: 92, df: 75, sa: 74, sd: 63, sp: 118 },
        w: 21.5,
        ab: 'Unburden'
    },
    Heliolisk: {
        t1: 'Electric',
        t2: 'Normal',
        bs: { hp: 62, at: 55, df: 52, sa: 109, sd: 94, sp: 109 },
        w: 21,
        ab: 'Dry Skin'
    },
    Helioptile: {
        t1: 'Electric',
        t2: 'Normal',
        bs: { hp: 44, at: 38, df: 33, sa: 61, sd: 43, sp: 70 },
        w: 6,
        canEvolve: true,
        ab: 'Dry Skin'
    },
    Honedge: {
        t1: 'Steel',
        t2: 'Ghost',
        bs: { hp: 45, at: 80, df: 100, sa: 35, sd: 37, sp: 28 },
        w: 2,
        ab: 'No Guard',
        canEvolve: true
    },
    Hoopa: {
        t1: 'Psychic',
        t2: 'Ghost',
        bs: { hp: 80, at: 110, df: 60, sa: 150, sd: 130, sp: 70 },
        w: 9,
        gender: 'N',
        ab: 'Magician',
        formes: ['Hoopa', 'Hoopa-Unbound']
    },
    'Hoopa-Unbound': {
        t1: 'Psychic',
        t2: 'Dark',
        bs: { hp: 80, at: 160, df: 60, sa: 170, sd: 130, sp: 80 },
        w: 490,
        gender: 'N',
        ab: 'Magician',
        isAlternateForme: true
    },
    Inkay: {
        t1: 'Dark',
        t2: 'Psychic',
        bs: { hp: 53, at: 54, df: 53, sa: 37, sd: 46, sp: 45 },
        w: 3.5,
        canEvolve: true,
        ab: 'Contrary'
    },
    Kerfluffle: {
        t1: 'Fairy',
        t2: 'Fighting',
        bs: { hp: 84, at: 78, df: 86, sa: 115, sd: 88, sp: 119 },
        w: 24.2,
        ab: 'Natural Cure'
    },
    Klefki: {
        t1: 'Steel',
        t2: 'Fairy',
        bs: { hp: 57, at: 80, df: 91, sa: 80, sd: 87, sp: 75 },
        w: 3,
        ab: 'Prankster'
    },
    Litleo: {
        t1: 'Fire',
        t2: 'Normal',
        bs: { hp: 62, at: 50, df: 58, sa: 73, sd: 54, sp: 72 },
        w: 13.5,
        canEvolve: true,
        ab: 'Moxie'
    },
    Malamar: {
        t1: 'Dark',
        t2: 'Psychic',
        bs: { hp: 86, at: 92, df: 88, sa: 68, sd: 75, sp: 73 },
        w: 47,
        ab: 'Contrary'
    },
    'Abomasnow-Mega': {
        t1: 'Grass',
        t2: 'Ice',
        bs: { hp: 90, at: 132, df: 105, sa: 132, sd: 105, sp: 30 },
        w: 185,
        ab: 'Snow Warning',
        isAlternateForme: true
    },
    'Absol-Mega': {
        t1: 'Dark',
        bs: { hp: 65, at: 150, df: 60, sa: 115, sd: 60, sp: 115 },
        w: 49,
        ab: 'Magic Bounce',
        isAlternateForme: true
    },
    'Aerodactyl-Mega': {
        t1: 'Rock',
        t2: 'Flying',
        bs: { hp: 80, at: 135, df: 85, sa: 70, sd: 95, sp: 150 },
        w: 79,
        ab: 'Tough Claws',
        isAlternateForme: true
    },
    'Aggron-Mega': {
        t1: 'Steel',
        bs: { hp: 70, at: 140, df: 230, sa: 60, sd: 80, sp: 50 },
        w: 395,
        ab: 'Filter',
        isAlternateForme: true
    },
    'Alakazam-Mega': {
        t1: 'Psychic',
        bs: { hp: 55, at: 50, df: 65, sa: 175, sd: 95, sp: 150 },
        w: 48,
        ab: 'Trace',
        isAlternateForme: true
    },
    'Altaria-Mega': {
        t1: 'Dragon',
        t2: 'Fairy',
        bs: { hp: 75, at: 110, df: 110, sa: 110, sd: 105, sp: 80 },
        w: 20.6,
        ab: 'Pixilate',
        isAlternateForme: true
    },
    'Ampharos-Mega': {
        t1: 'Electric',
        t2: 'Dragon',
        bs: { hp: 90, at: 95, df: 105, sa: 165, sd: 110, sp: 45 },
        w: 61.5,
        ab: 'Mold Breaker',
        isAlternateForme: true
    },
    'Audino-Mega': {
        t1: 'Normal',
        t2: 'Fairy',
        bs: { hp: 103, at: 60, df: 126, sa: 80, sd: 126, sp: 50 },
        w: 32,
        ab: 'Healer',
        isAlternateForme: true
    },
    'Banette-Mega': {
        t1: 'Ghost',
        bs: { hp: 64, at: 165, df: 75, sa: 93, sd: 83, sp: 75 },
        w: 13,
        ab: 'Prankster',
        isAlternateForme: true
    },
    'Beedrill-Mega': {
        t1: 'Bug',
        t2: 'Poison',
        bs: { hp: 65, at: 150, df: 40, sa: 15, sd: 80, sp: 145 },
        w: 40.5,
        ab: 'Adaptability',
        isAlternateForme: true
    },
    'Blastoise-Mega': {
        t1: 'Water',
        bs: { hp: 79, at: 103, df: 120, sa: 135, sd: 115, sp: 78 },
        w: 101.1,
        ab: 'Mega Launcher',
        isAlternateForme: true
    },
    'Blaziken-Mega': {
        t1: 'Fire',
        t2: 'Fighting',
        bs: { hp: 80, at: 160, df: 80, sa: 130, sd: 80, sp: 100 },
        w: 52,
        ab: 'Speed Boost',
        isAlternateForme: true
    },
    'Camerupt-Mega': {
        t1: 'Fire',
        t2: 'Ground',
        bs: { hp: 70, at: 120, df: 100, sa: 145, sd: 105, sp: 20 },
        w: 320.5,
        ab: 'Sheer Force',
        isAlternateForme: true
    },
    'Charizard-Mega-X': {
        t1: 'Fire',
        t2: 'Dragon',
        bs: { hp: 78, at: 130, df: 111, sa: 130, sd: 85, sp: 100 },
        w: 110.5,
        ab: 'Tough Claws',
        isAlternateForme: true
    },
    'Charizard-Mega-Y': {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 78, at: 104, df: 78, sa: 159, sd: 115, sp: 100 },
        w: 100.5,
        ab: 'Drought',
        isAlternateForme: true
    },
    'Crucibelle-Mega': {
        t1: 'Rock',
        t2: 'Poison',
        bs: { hp: 106, at: 135, df: 75, sa: 85, sd: 125, sp: 114 },
        w: 22.5,
        ab: 'Magic Guard',
        isAlternateForme: true
    },
    'Diancie-Mega': {
        t1: 'Rock',
        t2: 'Fairy',
        bs: { hp: 50, at: 160, df: 110, sa: 160, sd: 110, sp: 110 },
        w: 27.8,
        ab: 'Magic Bounce',
        isAlternateForme: true,
        gender: 'N'
    },
    'Gallade-Mega': {
        t1: 'Psychic',
        t2: 'Fighting',
        bs: { hp: 68, at: 165, df: 95, sa: 65, sd: 115, sp: 110 },
        w: 56.4,
        ab: 'Inner Focus',
        isAlternateForme: true
    },
    'Garchomp-Mega': {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 108, at: 170, df: 115, sa: 120, sd: 95, sp: 92 },
        w: 95,
        ab: 'Sand Force',
        isAlternateForme: true
    },
    'Gardevoir-Mega': {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 68, at: 85, df: 65, sa: 165, sd: 135, sp: 100 },
        w: 48.4,
        ab: 'Pixilate',
        isAlternateForme: true
    },
    'Gengar-Mega': {
        t1: 'Ghost',
        t2: 'Poison',
        bs: { hp: 60, at: 65, df: 80, sa: 170, sd: 95, sp: 130 },
        w: 40.5,
        ab: 'Shadow Tag',
        isAlternateForme: true
    },
    'Glalie-Mega': {
        t1: 'Ice',
        bs: { hp: 80, at: 120, df: 80, sa: 120, sd: 80, sp: 100 },
        w: 350.2,
        ab: 'Refrigerate',
        isAlternateForme: true
    },
    'Gyarados-Mega': {
        t1: 'Water',
        t2: 'Dark',
        bs: { hp: 95, at: 155, df: 109, sa: 70, sd: 130, sp: 81 },
        w: 305,
        ab: 'Mold Breaker',
        isAlternateForme: true
    },
    'Heracross-Mega': {
        t1: 'Bug',
        t2: 'Fighting',
        bs: { hp: 80, at: 185, df: 115, sa: 40, sd: 105, sp: 75 },
        w: 62.5,
        ab: 'Skill Link',
        isAlternateForme: true
    },
    'Houndoom-Mega': {
        t1: 'Dark',
        t2: 'Fire',
        bs: { hp: 75, at: 90, df: 90, sa: 140, sd: 90, sp: 115 },
        w: 49.5,
        ab: 'Solar Power',
        isAlternateForme: true
    },
    'Kangaskhan-Mega': {
        t1: 'Normal',
        bs: { hp: 105, at: 125, df: 100, sa: 60, sd: 100, sp: 100 },
        w: 100,
        ab: 'Parental Bond',
        isAlternateForme: true
    },
    'Latias-Mega': {
        t1: 'Dragon',
        t2: 'Psychic',
        bs: { hp: 80, at: 100, df: 120, sa: 140, sd: 150, sp: 110 },
        w: 52,
        ab: 'Levitate',
        isAlternateForme: true
    },
    'Latios-Mega': {
        t1: 'Dragon',
        t2: 'Psychic',
        bs: { hp: 80, at: 130, df: 100, sa: 160, sd: 120, sp: 110 },
        w: 70,
        ab: 'Levitate',
        isAlternateForme: true
    },
    'Lopunny-Mega': {
        t1: 'Normal',
        t2: 'Fighting',
        bs: { hp: 65, at: 136, df: 94, sa: 54, sd: 96, sp: 135 },
        w: 28.3,
        ab: 'Scrappy',
        isAlternateForme: true
    },
    'Lucario-Mega': {
        t1: 'Fighting',
        t2: 'Steel',
        bs: { hp: 70, at: 145, df: 88, sa: 140, sd: 70, sp: 112 },
        w: 57.5,
        ab: 'Adaptability',
        isAlternateForme: true
    },
    'Manectric-Mega': {
        t1: 'Electric',
        bs: { hp: 70, at: 75, df: 80, sa: 135, sd: 80, sp: 135 },
        w: 44,
        ab: 'Intimidate',
        isAlternateForme: true
    },
    'Mawile-Mega': {
        t1: 'Steel',
        t2: 'Fairy',
        bs: { hp: 50, at: 105, df: 125, sa: 55, sd: 95, sp: 50 },
        w: 23.5,
        ab: 'Huge Power',
        isAlternateForme: true
    },
    'Medicham-Mega': {
        t1: 'Fighting',
        t2: 'Psychic',
        bs: { hp: 60, at: 100, df: 85, sa: 80, sd: 85, sp: 100 },
        w: 31.5,
        ab: 'Pure Power',
        isAlternateForme: true
    },
    'Metagross-Mega': {
        t1: 'Steel',
        t2: 'Psychic',
        bs: { hp: 80, at: 145, df: 150, sa: 105, sd: 110, sp: 110 },
        w: 942.9,
        ab: 'Tough Claws',
        isAlternateForme: true,
        gender: 'N'
    },
    'Mewtwo-Mega-X': {
        t1: 'Psychic',
        t2: 'Fighting',
        bs: { hp: 106, at: 190, df: 100, sa: 154, sd: 100, sp: 130 },
        w: 127,
        ab: 'Steadfast',
        isAlternateForme: true,
        gender: 'N'
    },
    'Mewtwo-Mega-Y': {
        t1: 'Psychic',
        bs: { hp: 106, at: 150, df: 70, sa: 194, sd: 120, sp: 140 },
        w: 33,
        ab: 'Insomnia',
        isAlternateForme: true,
        gender: 'N'
    },
    'Pidgeot-Mega': {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 83, at: 80, df: 80, sa: 135, sd: 80, sp: 121 },
        w: 50.5,
        ab: 'No Guard',
        isAlternateForme: true
    },
    'Pinsir-Mega': {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 65, at: 155, df: 120, sa: 65, sd: 90, sp: 105 },
        w: 59,
        ab: 'Aerilate',
        isAlternateForme: true
    },
    'Rayquaza-Mega': {
        t1: 'Dragon',
        t2: 'Flying',
        bs: { hp: 105, at: 180, df: 100, sa: 180, sd: 100, sp: 115 },
        w: 392,
        ab: 'Delta Stream',
        isAlternateForme: true,
        gender: 'N'
    },
    'Sableye-Mega': {
        t1: 'Dark',
        t2: 'Ghost',
        bs: { hp: 50, at: 85, df: 125, sa: 85, sd: 115, sp: 20 },
        w: 161,
        ab: 'Magic Bounce',
        isAlternateForme: true
    },
    'Salamence-Mega': {
        t1: 'Dragon',
        t2: 'Flying',
        bs: { hp: 95, at: 145, df: 130, sa: 120, sd: 90, sp: 120 },
        w: 112.6,
        ab: 'Aerilate',
        isAlternateForme: true
    },
    'Sceptile-Mega': {
        t1: 'Grass',
        t2: 'Dragon',
        bs: { hp: 70, at: 110, df: 75, sa: 145, sd: 85, sp: 145 },
        w: 55.2,
        ab: 'Lightning Rod',
        isAlternateForme: true
    },
    'Scizor-Mega': {
        t1: 'Bug',
        t2: 'Steel',
        bs: { hp: 70, at: 150, df: 140, sa: 65, sd: 100, sp: 75 },
        w: 125,
        ab: 'Technician',
        isAlternateForme: true
    },
    'Sharpedo-Mega': {
        t1: 'Water',
        t2: 'Dark',
        bs: { hp: 70, at: 140, df: 70, sa: 110, sd: 65, sp: 105 },
        w: 130.3,
        ab: 'Strong Jaw',
        isAlternateForme: true
    },
    'Slowbro-Mega': {
        t1: 'Water',
        t2: 'Psychic',
        bs: { hp: 95, at: 75, df: 180, sa: 130, sd: 80, sp: 30 },
        w: 120,
        ab: 'Shell Armor',
        isAlternateForme: true
    },
    'Steelix-Mega': {
        t1: 'Steel',
        t2: 'Ground',
        bs: { hp: 75, at: 125, df: 230, sa: 55, sd: 95, sp: 30 },
        w: 740,
        ab: 'Sand Force',
        isAlternateForme: true
    },
    'Swampert-Mega': {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 100, at: 150, df: 110, sa: 95, sd: 110, sp: 70 },
        w: 102,
        ab: 'Swift Swim',
        isAlternateForme: true
    },
    'Tyranitar-Mega': {
        t1: 'Rock',
        t2: 'Dark',
        bs: { hp: 100, at: 164, df: 150, sa: 95, sd: 120, sp: 71 },
        w: 255,
        ab: 'Sand Stream',
        isAlternateForme: true
    },
    'Venusaur-Mega': {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 80, at: 100, df: 123, sa: 122, sd: 120, sp: 80 },
        w: 155.5,
        ab: 'Thick Fat',
        isAlternateForme: true
    },
    Meowstic: {
        t1: 'Psychic',
        bs: { hp: 74, at: 48, df: 76, sa: 83, sd: 81, sp: 104 },
        w: 8.5,
        ab: 'Infiltrator',
        formes: ['Meowstic', 'Meowstic-F']
    },
    'Meowstic-F': {
        t1: 'Psychic',
        bs: { hp: 74, at: 48, df: 76, sa: 83, sd: 81, sp: 104 },
        w: 8.5,
        ab: 'Prankster'
    },
    Naviathan: {
        t1: 'Water',
        t2: 'Steel',
        bs: { hp: 103, at: 110, df: 90, sa: 95, sd: 65, sp: 97 },
        w: 510,
        ab: 'Heatproof'
    },
    Noibat: {
        t1: 'Flying',
        t2: 'Dragon',
        bs: { hp: 40, at: 30, df: 35, sa: 45, sd: 40, sp: 55 },
        w: 8,
        canEvolve: true,
        ab: 'Infiltrator'
    },
    Noivern: {
        t1: 'Flying',
        t2: 'Dragon',
        bs: { hp: 85, at: 70, df: 80, sa: 97, sd: 80, sp: 123 },
        w: 85,
        ab: 'Infiltrator'
    },
    Pancham: {
        t1: 'Fighting',
        bs: { hp: 67, at: 82, df: 62, sa: 46, sd: 48, sp: 43 },
        w: 8,
        canEvolve: true,
        ab: 'Mold Breaker'
    },
    Pangoro: {
        t1: 'Fighting',
        t2: 'Dark',
        bs: { hp: 95, at: 124, df: 78, sa: 69, sd: 71, sp: 58 },
        w: 136,
        ab: 'Mold Breaker'
    },
    Phantump: {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 43, at: 70, df: 48, sa: 50, sd: 60, sp: 38 },
        w: 7,
        canEvolve: true,
        ab: 'Natural Cure'
    },
    Plasmanta: {
        t1: 'Electric',
        t2: 'Poison',
        bs: { hp: 60, at: 57, df: 119, sa: 131, sd: 98, sp: 100 },
        w: 460,
        ab: 'Storm Drain'
    },
    Pluffle: {
        t1: 'Fairy',
        bs: { hp: 74, at: 38, df: 51, sa: 65, sd: 78, sp: 49 },
        w: 1.8,
        canEvolve: true,
        ab: 'Natural Cure'
    },
    'Groudon-Primal': {
        t1: 'Ground',
        t2: 'Fire',
        bs: { hp: 100, at: 180, df: 160, sa: 150, sd: 90, sp: 90 },
        w: 999.7,
        ab: 'Desolate Land',
        isAlternateForme: true,
        gender: 'N'
    },
    'Kyogre-Primal': {
        t1: 'Water',
        bs: { hp: 100, at: 150, df: 90, sa: 180, sd: 160, sp: 90 },
        w: 430,
        ab: 'Primordial Sea',
        isAlternateForme: true,
        gender: 'N'
    },
    Pumpkaboo: {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 49, at: 66, df: 70, sa: 44, sd: 55, sp: 51 },
        w: 5,
        canEvolve: true,
        ab: 'Insomnia'
    },
    'Pumpkaboo-Large': {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 54, at: 66, df: 70, sa: 44, sd: 55, sp: 46 },
        w: 7.5,
        canEvolve: true,
        ab: 'Frisk',
        formes: ['Pumpkaboo', 'Pumpkaboo-Large', 'Pumpkaboo-Small', 'Pumpkaboo-Super']
    },
    'Pumpkaboo-Small': {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 44, at: 66, df: 70, sa: 44, sd: 55, sp: 56 },
        w: 3.5,
        canEvolve: true,
        ab: 'Frisk',
        isAlternateForme: true
    },
    'Pumpkaboo-Super': {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 59, at: 66, df: 70, sa: 44, sd: 55, sp: 41 },
        w: 15,
        canEvolve: true,
        ab: 'Insomnia',
        isAlternateForme: true
    },
    Pyroar: {
        t1: 'Fire',
        t2: 'Normal',
        bs: { hp: 86, at: 68, df: 72, sa: 109, sd: 66, sp: 106 },
        w: 81.5,
        ab: 'Moxie'
    },
    Quilladin: {
        t1: 'Grass',
        bs: { hp: 61, at: 78, df: 95, sa: 56, sd: 58, sp: 57 },
        w: 29,
        canEvolve: true,
        ab: 'Bulletproof'
    },
    Scatterbug: {
        t1: 'Bug',
        bs: { hp: 38, at: 35, df: 40, sa: 27, sd: 25, sp: 35 },
        w: 2.5,
        canEvolve: true,
        ab: 'Compound Eyes'
    },
    Skiddo: {
        t1: 'Grass',
        bs: { hp: 66, at: 65, df: 48, sa: 62, sd: 57, sp: 52 },
        w: 31,
        canEvolve: true,
        ab: 'Sap Sipper'
    },
    Skrelp: {
        t1: 'Poison',
        t2: 'Water',
        bs: { hp: 50, at: 60, df: 60, sa: 60, sd: 60, sp: 30 },
        w: 7.3,
        canEvolve: true,
        ab: 'Adaptability'
    },
    Sliggoo: {
        t1: 'Dragon',
        bs: { hp: 68, at: 75, df: 53, sa: 83, sd: 113, sp: 60 },
        w: 17.5,
        canEvolve: true,
        ab: 'Sap Sipper'
    },
    Slurpuff: {
        t1: 'Fairy',
        bs: { hp: 82, at: 80, df: 86, sa: 85, sd: 75, sp: 72 },
        w: 5,
        canEvolve: true,
        ab: 'Unburden'
    },
    Snugglow: {
        t1: 'Electric',
        t2: 'Poison',
        bs: { hp: 40, at: 37, df: 79, sa: 91, sd: 68, sp: 70 },
        w: 6,
        canEvolve: true,
        ab: 'Storm Drain'
    },
    Spewpa: {
        t1: 'Bug',
        bs: { hp: 45, at: 22, df: 60, sa: 27, sd: 30, sp: 29 },
        w: 8.4,
        canEvolve: true,
        ab: 'Shed Skin'
    },
    Spritzee: {
        t1: 'Fairy',
        bs: { hp: 78, at: 52, df: 60, sa: 63, sd: 65, sp: 23 },
        w: 0.5,
        canEvolve: true,
        ab: 'Aroma Veil'
    },
    Swirlix: {
        t1: 'Fairy',
        bs: { hp: 62, at: 48, df: 66, sa: 59, sd: 57, sp: 49 },
        w: 3.5,
        canEvolve: true,
        ab: 'Unburden'
    },
    Sylveon: {
        t1: 'Fairy',
        bs: { hp: 95, at: 65, df: 65, sa: 110, sd: 130, sp: 60 },
        w: 23.5,
        ab: 'Pixilate'
    },
    Talonflame: {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 78, at: 81, df: 71, sa: 74, sd: 69, sp: 126 },
        w: 24.5,
        ab: 'Gale Wings'
    },
    Trevenant: {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 85, at: 110, df: 76, sa: 65, sd: 82, sp: 56 },
        w: 71,
        ab: 'Natural Cure'
    },
    Tyrantrum: {
        t1: 'Rock',
        t2: 'Dragon',
        bs: { hp: 82, at: 121, df: 119, sa: 69, sd: 59, sp: 71 },
        w: 270,
        ab: 'Strong Jaw'
    },
    Tyrunt: {
        t1: 'Rock',
        t2: 'Dragon',
        bs: { hp: 58, at: 89, df: 77, sa: 45, sd: 45, sp: 48 },
        w: 26,
        canEvolve: true,
        ab: 'Strong Jaw'
    },
    Vivillon: {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 80, at: 52, df: 50, sa: 90, sd: 50, sp: 89 },
        w: 17,
        ab: 'Compound Eyes'
    },
    Volcanion: {
        t1: 'Fire',
        t2: 'Water',
        bs: { hp: 80, at: 110, df: 120, sa: 130, sd: 90, sp: 70 },
        w: 195,
        gender: 'N',
        ab: 'Water Absorb'
    },
    Volkraken: {
        t1: 'Water',
        t2: 'Fire',
        bs: { hp: 100, at: 45, df: 80, sa: 135, sd: 100, sp: 95 },
        w: 44.5,
        ab: 'Infiltrator'
    },
    Volkritter: {
        t1: 'Water',
        t2: 'Fire',
        bs: { hp: 60, at: 30, df: 50, sa: 80, sd: 60, sp: 70 },
        w: 15,
        canEvolve: true,
        ab: 'Infiltrator'
    },
    Xerneas: {
        t1: 'Fairy',
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 },
        w: 215,
        ab: 'Fairy Aura',
        gender: 'N'
    },
    Yveltal: {
        t1: 'Dark',
        t2: 'Flying',
        bs: { hp: 126, at: 131, df: 95, sa: 131, sd: 98, sp: 99 },
        w: 203,
        ab: 'Dark Aura',
        gender: 'N'
    },
    Zygarde: {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 108, at: 100, df: 121, sa: 81, sd: 95, sp: 95 },
        w: 305,
        ab: 'Aura Break',
        gender: 'N'
    },
});

var XY = util_1.extend(true, {}, XY_BASE, {
    //Form changes to core series Pokemon
	Eevee: { formes: ["Eevee", "Eevee-Mega", "Eevee-Mega-Vaporeon", "Eevee-Mega-Jolteon",
						"Eevee-Mega-Flareon", "Eevee-Mega-Espeon", "Eevee-Mega-Umbreon", "Eevee-Mega-Leafeon",
						"Eevee-Mega-Glaceon", "Eevee-Mega-Sylveon"] },
	Machamp: { formes: ["Machamp", "Machamp-Pokken", "Machamp-Pokken-Burst"] },
	Marowak: { formes: ["Marowak", "Marowak-Mega"] },
	Mewtwo: { formes: ["Mewtwo", "Mewtwo-Mega-Y", "Mewtwo-Mega-X", "Mewtwo-Armored", "Mewtwo-Shadow", 
						"Mewtwo-Shadow-Burst", "Mewtwo-Shadow-Mega-X", "Mewtwo-Shadow-Mega-X-Burst"] },
	Poliwrath: { formes: ["Poliwrath", "Poliwrath-Mega"] },
	Donphan: { formes: ["Donphan", "Donphan-Mega"] },
	Feraligatr: { formes: ["Feraligatr", "Feraligatr-Mega"] },
	Girafarig: { formes: ["Girafarig", "Girafarig-Mega"] },
	Magcargo: { formes: ["Magcargo", "Magcargo-Mega"] },
	Meganium: { formes: ["Meganium", "Meganium-Mega"] },
	Miltank: { formes: ["Miltank", "Miltank-Mega"] },
	Politoed: { formes: ["Politoed", "Politoed-Mega"] },
    Steelix: { formes: ["Steelix", "Steelix-Mega", "Steelix-Mega-Fire"] },
	Sudowoodo: { formes: ["Sudowoodo", "Sudowoodo-Mega"] },
	Sunflora: { formes: ["Sunflora", "Sunflora-Mega-F", "Sunflora-Mega-M"] },
	Typhlosion: { formes: ["Typhlosion", "Typhlosion-Mega"] },
    Tyranitar: { formes: ["Tyranitar", "Tyranitar-Mega", "Tyranitar-Armored"] },
	Cacturne: { formes: ["Cacturne", "Cacturne-Mega"] },
	Crawdaunt: { formes: ["Crawdaunt", "Crawdaunt-Mega"] },
	Flygon: { formes: ["Flygon", "Flygon-Armored", "Flygon-Mega"] },
    Gardevoir: { t2: "Fairy", formes: ["Gardevoir", "Gardevoir-Mega",
    									"Gardevoir-Pokken", "Gardevoir-Pokken-Burst",
    									"Gardevoir-Pokken-Mega", "Gardevoir-Pokken-Mega-Burst"] },
	Jirachi: { formes: ["Jirachi", "Jirachi-Mega"] },
	Milotic: { formes: ["Milotic", "Milotic-Mega"] },
	Shiftry: { formes: ["Shiftry", "Shiftry-Mega"] },
	Arceus: { formes: ["Arceus", "Arceus-Primal"] },
	Chatot: { formes: ["Chatot", "Chatot-Mega"] },
	Froslass: { formes: ["Froslass", "Froslass-Mega"] },
	Giratina: { formes: ["Giratina", "Giratina-Primal"] },
	Lucario: { formes: ["Lucario", "Lucario-Mega",
		"Lucario-Pokken", "Lucario-Pokken-Burst",
		"Lucario-Pokken-Mega", "Lucario-Pokken-Mega-Burst"] },
	Regigigas: { formes: ["Regigigas", "Regigigas-Primal"] },
	Spiritomb: { formes: ["Spiritomb", "Spiritomb-Mega"] },
	Bisharp: { formes: ["Bisharp", "Bisharp-Mega"] },
	Cryogonal: { formes: ["Cryogonal", "Cryogonal-Mega"] },
	Gothitelle: { formes: ["Gothitelle", "Gothitelle-Mega"] },
	Haxorus: { formes: ["Haxorus", "Haxorus-Mega"] },
	Hydreigon: { formes: ["Hydreigon", "Hydreigon-Mega"] },
	Leavanny: { formes: ["Leavanny", "Leavanny-Armored"] },
	Reuniclus: { formes: ["Reuniclus", "Reuniclus-Mega"] },
	Stunfisk: { formes: ["Stunfisk", "Stunfisk-Mega"] },
	Zebstrika: { formes: ["Zebstrika", "Zebstrika-Mega"] },
	Zekrom: { formes: ["Zekrom", "Zekrom-Armored"] },
    Zoroark: { formes: ["Zoroark", "Zoroark-Mega"] },
    Zygarde: {formes: ["Zygarde", "Zygarde-10%", "Zygarde-Complete"]},
	//Delta Pokemon
    "Delta Bulbasaur": {
        t1: 'Fairy',
        t2: 'Psychic',
        bs: { hp: 45, at: 49, df: 49, sa: 65, sd: 65, sp: 45 },
        w: 6.9,
        canEvolve: true
    },
    "Delta Ivysaur": {
        t1: 'Fairy',
        t2: 'Psychic',
        bs: { hp: 60, at: 62, df: 63, sa: 80, sd: 80, sp: 60 },
        w: 13.0,
        canEvolve: true
    },
    "Delta Venusaur": {
        t1: 'Fairy',
        t2: 'Psychic',
        bs: { hp: 80, at: 82, df: 83, sa: 100, sd: 100, sp: 80 },
        w: 100.0,
        formes: ["Delta Venusaur", "Delta Venusaur-Mega"]
    },
    "Delta Charmander": {
        t1: 'Ghost',
    	t2: 'Dragon',
        bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
        w: 8.5,
        canEvolve: true
    },
    "Delta Charmeleon": {
        t1: 'Ghost',
    	t2: 'Dragon',
        bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 80 },
        w: 19.0,
        canEvolve: true
    },
    "Delta Charizard": {
        t1: 'Ghost',
    	t2: 'Dragon',
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        w: 90.5,
        formes: ["Delta Charizard", "Delta Charizard-Mega"]
    },
    "Delta Squirtle": {
        t1: 'Dark',
    	t2: 'Fighting',
        bs: { hp: 44, at: 48, df: 65, sa: 50, sd: 64, sp: 43 },
        w: 9.0,
        canEvolve: true
    },
    "Delta Wartortle": {
        t1: 'Dark',
    	t2: 'Fighting',
        bs: { hp: 59, at: 63, df: 80, sa: 65, sd: 80, sp: 58 },
        w: 22.5,
        canEvolve: true
    },
    "Delta Blastoise": {
        t1: 'Dark',
    	t2: 'Fighting',
        bs: { hp: 79, at: 83, df: 100, sa: 85, sd: 105, sp: 78 },
        w: 85.5,
        formes: ["Delta Blastoise", "Delta Blastoise-Mega"]
    },
    "Delta Pawniard": {
        t1: 'Flying',
        t2: 'Fighting',
        bs: { hp: 45, at: 85, df: 70, sa: 40, sd: 40, sp: 60 },
        w: 10.2,
        canEvolve: true
    },
    "Delta Bisharp": {
        t1: 'Flying',
        t2: 'Fighting',
        bs: { hp: 65, at: 125, df: 100, sa: 60, sd: 70, sp: 70 },
        w: 70.0,
        formes: ["Delta Bisharp", "Delta Bisharp-Mega"]
    },
    "Delta Ralts": {
        t1: 'Electric',
    	t2: 'Ice',
        bs: { hp: 28, at: 25, df: 25, sa: 45, sd: 35, sp: 40 },
        w: 6.6,
        canEvolve: true
    },
    "Delta Kirlia": {
        t1: 'Electric',
    	t2: 'Ice',
        bs: { hp: 38, at: 35, df: 35, sa: 65, sd: 55, sp: 50 },
        w: 20.2,
        canEvolve: true
    },
    "Delta Gardevoir": {
        t1: 'Electric',
    	t2: 'Ice',	
        bs: { hp: 68, at: 65, df: 65, sa: 125, sd: 115, sp: 80 },
        w: 48.4,
    	formes: ["Delta Gardevoir", "Delta Gardevoir-Mega"]
    },
    "Delta Gallade": {
        t1: 'Electric',
        t2: 'Ice',
        bs: { hp: 68, at: 125, df: 65, sa: 65, sd: 115, sp: 80 },
        w: 52.0,
    	formes: ["Delta Gallade", "Delta Gallade-Mega"]
    },
    "Delta Sunkern": {
        t1: 'Fire',
    	t2: 'Poison',
        bs: { hp: 30, at: 30, df: 30, sa: 30, sd: 30, sp: 30 },
        w: 1.8,
        canEvolve: true
    },
    "Delta Sunflora": {
        t1: 'Fire',
    	t2: 'Poison',	
        bs: { hp: 75, at: 75, df: 55, sa: 105, sd: 85, sp: 30 },
        w: 8.5,
        formes: ["Delta Sunflora", "Delta Sunflora-Mega"]
    },
    "Delta Bergmite": {
        t1: 'Rock',
        bs: { hp: 55, at: 69, df: 85, sa: 32, sd: 35, sp: 28 },
        w: 99.5,
        canEvolve: true
    },
    "Delta Avalugg": {
        t1: 'Rock',
    	t2: 'Dragon',
        bs: { hp: 95, at: 117, df: 184, sa: 44, sd: 46, sp: 28 },
        w: 505.0
    },
    "Delta Scyther": {
        t1: 'Ice',
        t2: 'Fighting',
        bs: { hp: 70, at: 110, df: 80, sa: 55, sd: 80, sp: 105 },
        w: 56.0,
        canEvolve: true
    },
    "Delta Scizor": {
        t1: 'Ice',
        t2: 'Fighting',
        bs: { hp: 70, at: 130, df: 100, sa: 55, sd: 80, sp: 65 },
        w: 118.0,
        formes: ["Delta Scizor", "Delta Scizor-Mega"]
    },
    "Delta Scraggy": {
        t1: 'Grass',
        bs: { hp: 50, at: 75, df: 70, sa: 35, sd: 70, sp: 48 },
        w: 11.8,
        canEvolve: true
    },
    "Delta Scrafty": {
        t1: 'Grass',
        bs: { hp: 65, at: 90, df: 115, sa: 45, sd: 115, sp: 58 },
        w: 30.0
    },
    "Delta Combee": {
        t1: 'Steel',
        t2: 'Fire',
        bs: { hp: 30, at: 30, df: 42, sa: 30, sd: 42, sp: 70 },
        w: 11.0,
        canEvolve: true
    },
    "Delta Vespiquen": {
        t1: 'Steel',
        t2: 'Fire',
        bs: { hp: 70, at: 80, df: 102, sa: 80, sd: 102, sp: 40 },
        w: 77.0
    },
    "Delta Koffing": {
        t1: "Electrc",
    	t2: 'Flying',
        bs: { hp: 40, at: 65, df: 95, sa: 60, sd: 45, sp: 35 },
        w: 1.0,
        canEvolve: true
    },
    "Delta Weezing": {
        t1: 'Electric',
    	t2: 'Flying',
        bs: { hp: 65, at: 90, df: 120, sa: 85, sd: 70, sp: 60 },
        w: 9.5
    },
    "Delta Purrloin": {
        t1: 'Ghost',
    	t2: 'Fairy',
        bs: { hp: 41, at: 50, df: 37, sa: 50, sd: 37, sp: 66 },
        w: 10.1,
        canEvolve: true
    },
    "Delta Liepard": {
        t1: 'Ghost',
    	t2: 'Fairy',
        bs: { hp: 64, at: 88, df: 50, sa: 88, sd: 50, sp: 106 },
        w: 37.5
    },
    "Delta Phantump": {
        t1: 'Fairy',
        t2: 'Fighting',
        bs: { hp: 43, at: 70, df: 48, sa: 50, sd: 60, sp: 38 },
        w: 7.0,
        canEvolve: true
    },
    "Delta Trevenant": {
        t1: 'Fairy',
        t2: 'Fighting',
        bs: { hp: 85, at: 110, df: 76, sa: 65, sd: 82, sp: 56 },
        w: 71.0
    },
    "Delta Snorunt": {
        t1: 'Fire',
        bs: { hp: 50, at: 50, df: 50, sa: 50, sd: 50, sp: 50 },
        w: 16.8,
        canEvolve: true
    },
    "Delta Glalie": {
        t1: 'Fire',
    	t2: 'Rock',
        bs: { hp: 80, at: 80, df: 80, sa: 80, sd: 80, sp: 80 },
        w: 256.5,
    	formes: ["Delta Glalie", "Delta Glalie-Mega"]
    },
    "Delta Froslass": {
        t1: 'Fire',
        bs: { hp: 70, at: 80, df: 70, sa: 80, sd: 70, sp: 110 },
        w: 26.6,
    	formes: ["Delta Froslass", "Delta Froslass-Mega"]
    },
    "Delta Shinx": {
        t1: 'Steel',
    	t2: 'Poison',
        bs: { hp: 45, at: 65, df: 34, sa: 40, sd: 34, sp: 45 },
        w: 19.0,
        canEvolve: true
    },
    "Delta Luxio": {
        t1: 'Steel',
    	t2: 'Poison',
        bs: { hp: 60, at: 85, df: 49, sa: 60, sd: 49, sp: 60 },
        w: 71.0,
        canEvolve: true
    },
    "Delta Luxray": {
        t1: 'Steel',
    	t2: 'Poison',
        bs: { hp: 80, at: 120, df: 79, sa: 95, sd: 79, sp: 70 },
        w: 84.0
    },
    "Delta Noibat": {
        t1: 'Grass',
        t2: 'Steel',
        bs: { hp: 40, at: 30, df: 35, sa: 45, sd: 40, sp: 55 },
        w: 16.0,
        canEvolve: true
    },
    "Delta Noivern": {
        t1: 'Grass',
        t2: 'Steel',
        bs: { hp: 85, at: 70, df: 80, sa: 97, sd: 80, sp: 123 },
        w: 170.0
    },
    "Delta Budew": {
        t1: 'Dark',
        t2: 'Fairy',
        bs: { hp: 40, at: 30, df: 35, sa: 50, sd: 70, sp: 55 },
        w: 1.2,
        canEvolve: true
    },
    "Delta Roselia": {
        t1: 'Dark',
        t2: 'Fairy',
        bs: { hp: 50, at: 60, df: 45, sa: 100, sd: 80, sp: 65 },
        w: 2.0,
        canEvolve: true
    },
    "Delta Roserade": {
        t1: 'Dark',
        t2: 'Fairy',
        bs: { hp: 60, at: 70, df: 55, sa: 125, sd: 105, sp: 90 },
        w: 14.5
    },
    "Delta Drifloon": {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 90, at: 50, df: 34, sa: 60, sd: 44, sp: 70 },
        w: 1.2,
        canEvolve: true
    },
    "Delta Drifblim": {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 150, at: 80, df: 44, sa: 90, sd: 54, sp: 80 },
        w: 15.0
    },
    "Delta Grimer": {
        t1: 'Ground',
        bs: { hp: 80, at: 80, df: 50, sa: 40, sd: 50, sp: 25 },
        w: 30.0,
        canEvolve: true
    },
    "Delta Muk": {
	    t1: 'Ground',
	    bs: { hp: 105, at: 105, df: 75, sa: 65, sd: 100, sp: 50 },
	    w: 30.0
	},
    "Delta Wooper": {
   	    t1: 'Grass',
   	    t2: 'Fire',
   	    bs: { hp: 55, at: 45, df: 45, sa: 25, sd: 25, sp: 15 },
        w: 8.5,
        canEvolve: true
    },
    "Delta Quagsire": {
	    t1: 'Grass',
	    t2: 'Fire',
	    bs: { hp: 95, at: 85, df: 85, sa: 65, sd: 65, sp: 35 },
	    w: 75.0
	},
    "Delta Munchlax": {
	    t1: 'Grass',
	    bs: { hp: 135, at: 85, df: 40, sa: 40, sd: 85, sp: 5 },
	    w: 105.0,
        canEvolve: true
	},
    "Delta Snorlax": {
	    t1: 'Grass',
	    bs: { hp: 160, at: 110, df: 65, sa: 65, sd: 110, sp: 30 },
	    w: 460.0
	},
    "Delta Misdreavus": {
	    t1: 'Ice',
		t2: 'Fairy',
	    bs: { hp: 60, at: 60, df: 60, sa: 85, sd: 85, sp: 85 },
	    w: 1.0,
        canEvolve: true
	},
    "Delta Mismagius": {
	    t1: 'Ice',
		t2: 'Fairy',
	    bs: { hp: 60, at: 60, df: 60, sa: 105, sd: 105, sp: 105 },
	    w: 4.4
	},
    "Delta Cyndaquil": {
		t1: 'Electric',
		bs: { hp: 39, at: 52, df: 43, sa: 60, sd: 50, sp: 65 },
		 w: 7.9,
         canEvolve: true
	},
    "Delta Quilava": {
		t1: 'Electric',
		t2: 'Steel',
		bs: { hp: 58, at: 64, df: 58, sa: 80, sd: 65, sp: 80 },
		w: 28.5,
        canEvolve: true
	},
    "Delta Typhlosion": {
        t1: 'Electric',
        t2: 'Steel',
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        w: 159.0,
        formes: ["Delta Typhlosion", "Delta Typhlosion-Mega"]
    },
    "Delta Treecko": {
        t1: 'Normal',
        t2: 'Fighting',
        bs: { hp: 40, at: 45, df: 35, sa: 65, sd: 55, sp: 70 },
        w: 5.0,
        canEvolve: true
    },
    "Delta Grovyle": {
        t1: 'Normal',
        t2: 'Fighting',
        bs: { hp: 50, at: 65, df: 45, sa: 85, sd: 65, sp: 95 },
        w: 21.6,
        canEvolve: true
    },
    "Delta Sceptile": {
        t1: 'Dragon',
        t2: 'Fighting',
        bs: { hp: 70, at: 85, df: 65, sa: 105, sd: 85, sp: 120 },
        w: 52.2
    },
    "Delta Torchic": {
        t1: 'Psychic',
        bs: { hp: 45, at: 60, df: 40, sa: 70, sd: 50, sp: 45 },
        w: 2.5,
        canEvolve: true
    },
    "Delta Combusken": {
        t1: 'Psychic',
        bs: { hp: 60, at: 85, df: 60, sa: 85, sd: 60, sp: 55 },
        w: 19.5,
        canEvolve: true
    },
    "Delta Blaziken": {
        t1: 'Psychic',
        t2: 'Flying',
        bs: { hp: 80, at: 120, df: 70, sa: 110, sd: 70, sp: 80 },
        w: 52.0
    },
    "Delta Turtwig": {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 55, at: 68, df: 64, sa: 45, sd: 55, sp: 31 },
        w: 10.2,
        canEvolve: true
    },
    "Delta Grotle": {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 75, at: 89, df: 85, sa: 55, sd: 65, sp: 36 },
        w: 97.0,
        canEvolve: true
    },
    "Delta Torterra": {
        t1: 'Water',
        t2: 'Ground',
        bs: { hp: 95, at: 109, df: 105, sa: 75, sd: 85, sp: 56 },
        w: 310.0
    },
    "Delta Snivy": {
        t1: 'Water',
        bs: { hp: 45, at: 45, df: 55, sa: 45, sd: 55, sp: 63 },
        w: 8.1,
        canEvolve: true
    },
    "Delta Servine": {
        t1: 'Water',
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 83 },
        w: 16.0,
        canEvolve: true
    },
    "Delta Serperior": {
        t1: 'Water',
        t2: 'Dragon',
        bs: { hp: 75, at: 75, df: 95, sa: 75, sd: 95, sp: 113 },
        w: 63.0
    },
    "Delta Froakie": {
        t1: 'Grass',
        bs: { hp: 41, at: 56, df: 40, sa: 62, sd: 44, sp: 71 },
        w: 7.0,
        canEvolve: true
    },
    "Delta Frogadier": {
        t1: 'Grass',
        bs: { hp: 54, at: 63, df: 52, sa: 83, sd: 56, sp: 97 },
        w: 10.9,
        canEvolve: true
    },
    "Delta Greninja": {
        t1: 'Grass',
        t2: 'Fire',
        bs: { hp: 72, at: 95, df: 67, sa: 103, sd: 71, sp: 122 },
        w: 40.0
    },
    "Delta Pidgey": {
        t1: 'Dark',
        t2: 'Dragon',
        bs: { hp: 40, at: 45, df: 40, sa: 35, sd: 35, sp: 56 },
        w: 1.8,
        canEvolve: true
    },
    "Delta Pidgeotto": {
        t1: 'Dark',
        t2: 'Dragon',
        bs: { hp: 63, at: 60, df: 55, sa: 50, sd: 50, sp: 71 },
        w: 30.0,
        canEvolve: true
    },
    "Delta Pidgeot": {
        t1: 'Dark',
        t2: 'Dragon',
        bs: { hp: 83, at: 80, df: 75, sa: 70, sd: 70, sp: 91 },
        w: 39.5,
        formes: ["Delta Pidgeot", "Delta Pidgeot-Mega"]
    },
    "Delta Diglett": {
        t1: 'Ice',
        t2: 'Normal',
        bs: { hp: 10, at: 55, df: 25, sa: 35, sd: 45, sp: 95 },
        w: 0.8,
        canEvolve: true
    },
    "Delta Dugtrio": {
        t1: 'Ice',
        t2: 'Normal',
        bs: { hp: 35, at: 80, df: 50, sa: 50, sd: 70, sp: 120 },
        w: 33.3
    },
    "Delta Growlithe": {
        t1: 'Normal',
        t2: 'Dragon',
        bs: { hp: 55, at: 70, df: 45, sa: 70, sd: 50, sp: 60 },
        w: 19.0,
        canEvolve: true
    },
    "Delta Arcanine": {
        t1: 'Normal',
        t2: 'Dragon',
        bs: { hp: 90, at: 110, df: 80, sa: 100, sd: 80, sp: 95 },
        w: 155.0
    },
    "Delta Geodude": {
        t1: 'Psychic',
        t2: 'Rock',
        bs: { hp: 40, at: 80, df: 100, sa: 30, sd: 30, sp: 20 },
        w: 20.0,
        canEvolve: true
    },
    "Delta Graveler": {
        t1: 'Psychic',
        t2: 'Rock',
        bs: { hp: 55, at: 95, df: 115, sa: 45, sd: 45, sp: 35 },
        w: 105.0,
        canEvolve: true
    },
    "Delta Golem": {
        t1: 'Psychic',
        t2: 'Rock',
        bs: { hp: 80, at: 110, df: 130, sa: 55, sd: 65, sp: 45 },
        w: 300.0
    },
    "Delta Tentacool": {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 40, at: 40, df: 35, sa: 50, sd: 100, sp: 70 },
        w: 45.5,
        canEvolve: true
    },
    "Delta Tentacruel": {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 80, at: 70, df: 65, sa: 80, sd: 120, sp: 100 },
        w: 55.0
    },
    "Delta Doduo": {
        t1: 'Psychic',
        bs: { hp: 35, at: 85, df: 45, sa: 35, sd: 35, sp: 75 },
        w: 39.2,
        canEvolve: true
    },
    "Delta Dodrio": {
        t1: 'Psychic',
        bs: { hp: 60, at: 110, df: 70, sa: 60, sd: 60, sp: 100 },
        w: 85.2
    },
    "Delta Tangela": {
        t1: 'Ground',
        bs: { hp: 65, at: 55, df: 115, sa: 100, sd: 40, sp: 60 },
        w: 35.0,
        canEvolve: true
    },
    "Delta Tangrowth": {
        t1: 'Ground',
        t2: 'Fighting',
        bs: { hp: 100, at: 100, df: 125, sa: 110, sd: 50, sp: 50 },
        w: 128.6
    },
    "Delta Ditto": {
        t1: 'Water',
        bs: { hp: 48, at: 48, df: 48, sa: 48, sd: 48, sp: 48 },
        w: 4.0
    },
    "Delta Kabuto": {
        t1: 'Bug',
        t2: 'Dark',
        bs: { hp: 30, at: 80, df: 90, sa: 55, sd: 45, sp: 55 },
        w: 11.5,
        canEvolve: true
    },
    "Delta Kabutops": {
        t1: 'Bug',
        t2: 'Dark',
        bs: { hp: 60, at: 115, df: 105, sa: 65, sd: 70, sp: 80 },
        w: 40.5
    },
    "Delta Dratini": {
        t1: 'Electric',
        t2: 'Water',
        bs: { hp: 41, at: 64, df: 45, sa: 50, sd: 50, sp: 50 },
        w: 3.3,
        canEvolve: true
    },
    "Delta Dragonair": {
        t1: 'Electric',
        t2: 'Water',
        bs: { hp: 61, at: 84, df: 65, sa: 70, sd: 70, sp: 70 },
        w: 16.5,
        canEvolve: true
    },
    "Delta Dragonite": {
        t1: 'Electric',
        t2: 'Water',
        bs: { hp: 91, at: 134, df: 95, sa: 100, sd: 100, sp: 80 },
        w: 210.0
    },
    "Delta Hoothoot": {
        t1: 'Ice',
        t2: 'Flying',
        bs: { hp: 60, at: 30, df: 30, sa: 36, sd: 56, sp: 50 },
        w: 21.2,
        canEvolve: true
    },
    "Delta Noctowl": {
        t1: 'Ice',
        t2: 'Flying',
        bs: { hp: 100, at: 50, df: 50, sa: 76, sd: 96, sp: 70 },
        w: 40.8
    },
    "Delta Chinchou": {
        t1: 'Ghost',
        t2: 'Fire',
        bs: { hp: 75, at: 38, df: 38, sa: 56, sd: 56, sp: 67 },
        w: 12.0,
        canEvolve: true
    },
    "Delta Lanturn": {
        t1: 'Ghost',
        t2: 'Fire',
        bs: { hp: 125, at: 58, df: 58, sa: 76, sd: 76, sp: 67 },
        w: 22.5
    },
    "Delta Pichu": {
        t1: 'Fairy',
        t2: 'Flying',
        bs: { hp: 20, at: 40, df: 15, sa: 35, sd: 35, sp: 60 },
        w: 2.0,
        canEvolve: true
    },
    "Delta Pikachu": {
        t1: 'Flying',
        t2: 'Fairy',
        bs: { hp: 35, at: 55, df: 30, sa: 50, sd: 40, sp: 90 },
        w: 6.0,
        canEvolve: true
    },
    "Delta Raichu": {
        t1: 'Flying',
        t2: 'Fairy',
        bs: { hp: 60, at: 90, df: 55, sa: 90, sd: 80, sp: 100 },
        w: 30.0
    },
    "Delta Aipom": {
        t1: 'Ghost',
        t2: 'Normal',
        bs: { hp: 55, at: 70, df: 55, sa: 40, sd: 55, sp: 85 },
        w: 11.5,
        canEvolve: true
    },
    "Delta Ambipom": {
        t1: 'Ghost',
        t2: 'Normal',
        bs: { hp: 75, at: 100, df: 66, sa: 60, sd: 66, sp: 115 },
        w: 20.3
    },
    "Delta Yanma": {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 65, at: 65, df: 45, sa: 75, sd: 45, sp: 95 },
        w: 38.0,
        canEvolve: true
    },
    "Delta Yanmega": {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 86, at: 76, df: 86, sa: 116, sd: 56, sp: 95 },
    w: 51.5
    },
    "Delta Girafarig": {
        t1: 'Steel',
        t2: 'Poison',
        bs: { hp: 70, at: 80, df: 65, sa: 90, sd: 65, sp: 85 },
        w: 83.0,
        formes: ["Delta Girafarig", "Delta Girafarig-Mega"]
    },
    "Delta Dunsparce": {
        t1: 'Bug',
        t2: 'Water',
        bs: { hp: 100, at: 70, df: 70, sa: 65, sd: 65, sp: 45 },
        w: 14.0
    },
    "Delta Shuckle": {
        t1: 'Fighting',
        t2: 'Steel',
        bs: { hp: 20, at: 10, df: 230, sa: 10, sd: 230, sp: 5 },
        w: 41.0
    },
    "Delta Remoraid": {
        t1: 'Fire',
        bs: { hp: 35, at: 65, df: 35, sa: 65, sd: 35, sp: 65 },
        w: 12.0,
        canEvolve: true
    },
    "Delta Octillery": {
        t1: 'Fire',
        bs: { hp: 75, at: 105, df: 75, sa: 105, sd: 75, sp: 45 },
        w: 28.5
    },
    "Delta Elekid": {
        t1: 'Rock',
        bs: { hp: 45, at: 63, df: 37, sa: 65, sd: 55, sp: 95 },
        w: 35.5,
        canEvolve: true
    },
    "Delta Electabuzz": {
        t1: 'Rock',
        bs: { hp: 65, at: 83, df: 57, sa: 95, sd: 85, sp: 105 },
        w: 45.0,
        canEvolve: true
    },
    "Delta Electivire": {
        t1: 'Electric',
        bs: { hp: 75, at: 123, df: 67, sa: 95, sd: 85, sp: 95 },
        w: 220.0
    },
    "Delta Magby": {
        t1: 'Water',
        bs: { hp: 45, at: 75, df: 37, sa: 70, sd: 55, sp: 83 },
        w: 21.4,
        canEvolve: true
    },
    "Delta Magmar": {
        t1: 'Water',
        bs: { hp: 65, at: 95, df: 57, sa: 100, sd: 85, sp: 93 },
        w: 44.5,
        canEvolve: true
    },
    "Delta Magmortar": {
        t1: 'Water',
        t2: 'Steel',
        bs: { hp: 75, at: 95, df: 67, sa: 125, sd: 95, sp: 83 },
        w: 102.0
    },
    "Delta Lotad": {
        t1: 'Psychic',
        t2: 'Water',
        bs: { hp: 40, at: 30, df: 30, sa: 40, sd: 50, sp: 30 },
        w: 2.6,
        canEvolve: true
    },
    "Delta Lombre": {
        t1: 'Psychic',
        t2: 'Water',
        bs: { hp: 60, at: 50, df: 50, sa: 60, sd: 70, sp: 50 },
        w: 32.5,
        canEvolve: true
    },
    "Delta Ludicolo": {
        t1: 'Psychic',
        t2: 'Water',
        bs: { hp: 80, at: 70, df: 70, sa: 90, sd: 100, sp: 70 },
        w: 55.0
    },
    "Delta Seedot": {
        t1: 'Electric',
        bs: { hp: 40, at: 40, df: 50, sa: 30, sd: 30, sp: 30 },
        w: 4.0,
        canEvolve: true
    },
    "Delta Nuzleaf": {
        t1: 'Electric',
        bs: { hp: 70, at: 70, df: 40, sa: 60, sd: 40, sp: 60 },
        w: 28.0,
        canEvolve: true
    },
    "Delta Shiftry": {
        t1: 'Electric',
        bs: { hp: 90, at: 100, df: 60, sa: 90, sd: 60, sp: 80 },
        w: 59.6
    },
    "Delta Sableye": {
        t1: 'Fire',
        t2: 'Rock',
        bs: { hp: 50, at: 75, df: 75, sa: 65, sd: 65, sp: 50 },
        w: 11.0,
        formes: ["Delta Sableye", "Delta Sableye-Mega"]
    },
    "Delta Mawile": {
        t1: 'Grass',
        t2: 'Dark',
        bs: { hp: 50, at: 85, df: 85, sa: 55, sd: 55, sp: 50 },
        w: 11.5,
        formes: ["Delta Mawile", "Delta Mawile-Mega"]
    },
    "Delta Aron": {
        t1: 'Fire',
        t2: 'Steel',
        bs: { hp: 50, at: 70, df: 100, sa: 40, sd: 40, sp: 30 },
        w: 60.0,
        canEvolve: true
    },
    "Delta Lairon": {
        t1: 'Fire',
        t2: 'Steel',
        bs: { hp: 60, at: 90, df: 140, sa: 50, sd: 50, sp: 40 },
        w: 120.0,
        canEvolve: true
    },
    "Delta Aggron": {
        t1: 'Fire',
        t2: 'Steel',
        bs: { hp: 70, at: 110, df: 180, sa: 60, sd: 60, sp: 50 },
        w: 360.0
    },
    "Delta Meditite": {
        t1: 'Fairy',
        bs: { hp: 30, at: 40, df: 55, sa: 40, sd: 55, sp: 60 },
        w: 11.2,
        canEvolve: true
    },
    "Delta Medicham": {
        t1: 'Fairy',
        t2: 'Ground',
        bs: { hp: 60, at: 60, df: 75, sa: 60, sd: 75, sp: 80 },
        w: 31.5,
        formes: ["Delta Medicham", "Delta Medicham-Mega"]
    },
    "Delta Numel": {
        t1: 'Poison',
        bs: { hp: 60, at: 60, df: 40, sa: 65, sd: 45, sp: 35 },
        w: 24.0,
        canEvolve: true
    },
    "Delta Camerupt": {
        t1: 'Poison',
        bs: { hp: 70, at: 100, df: 70, sa: 105, sd: 75, sp: 40 },
        w: 220.0,
        formes: ["Delta Camerupt", "Delta Camerupt-Mega"]
    },
    "Delta Plusle": {
        t1: 'Fire',
        t2: 'Fairy',
        bs: { hp: 60, at: 50, df: 40, sa: 85, sd: 75, sp: 95 },
        w: 4.2
    },
    "Delta Minun": {
        t1: 'Ice',
        t2: 'Fairy',
        bs: { hp: 60, at: 40, df: 50, sa: 75, sd: 85, sp: 95 },
        w: 4.2
    },
    "Delta Wailmer": {
        t1: 'Ice',
        t2: 'Flying',
        bs: { hp: 130, at: 70, df: 35, sa: 70, sd: 35, sp: 60 },
        canEvolve: true,
        w: 130.0
    },
    "Delta Wailord": {
        t1: 'Ice',
        t2: 'Flying',
        bs: { hp: 170, at: 90, df: 45, sa: 90, sd: 45, sp: 60 },
        w: 398.0
    },
    "Delta Feebas": {
        t1: 'Ghost',
        bs: { hp: 20, at: 15, df: 20, sa: 10, sd: 55, sp: 80 },
        canEvolve: true,
        w: 7.4
    },
    "Delta Milotic": {
        t1: 'Ghost',
        bs: { hp: 95, at: 60, df: 79, sa: 100, sd: 125, sp: 81 },
        w: 162.0,
        formes: ["Delta Milotic", "Delta Milotic-Mega"]
    },
    "Delta Clamperl": {
        t1: 'Dragon',
        bs: { hp: 35, at: 64, df: 85, sa: 74, sd: 55, sp: 32 },
        w: 52.5,
        canEvolve: true
    },
    "Delta Huntail": {
        t1: 'Dragon',
        t2: 'Dark',
        bs: { hp: 55, at: 104, df: 105, sa: 94, sd: 75, sp: 52 },
        w: 27.0
    },
    "Delta Gorebyss": {
        t1: 'Dragon',
        t2: 'Fairy',
        bs: { hp: 55, at: 84, df: 105, sa: 114, sd: 75, sp: 52 },
        w: 22.6,
        canEvolve: true
    },
    "Delta Beldum-Spider": {
        t1: 'Ground',
        t2: 'Bug',
        bs: { hp: 40, at: 55, df: 80, sa: 35, sd: 60, sp: 30 },
        w: 47.6,
        canEvolve: true
    },
    "Delta Metang-Spider": {
        t1: 'Ground',
        t2: 'Bug',
        bs: { hp: 60, at: 75, df: 100, sa: 55, sd: 80, sp: 50 },
        w: 101.3
    },
    "Delta Metagross-Spider": {
        t1: 'Ground',
        t2: 'Bug',
        bs: { hp: 80, at: 135, df: 130, sa: 95, sd: 90, sp: 70 },
        w: 225.0,
        formes: ["Delta Metagross-Spider", "Delta Metagross-Spider-Mega"]
    },
    "Delta Beldum-Ruin": {
        t1: 'Grass',
        t2: 'Rock',
        bs: { hp: 40, at: 55, df: 80, sa: 35, sd: 60, sp: 30 },
        w: 95.2,
        canEvolve: true
    },
    "Delta Metang-Ruin": {
        t1: 'Grass',
        t2: 'Rock',
        bs: { hp: 60, at: 75, df: 100, sa: 55, sd: 80, sp: 50 },
        w: 202.5,
        canEvolve: true
    },
    "Delta Metagross-Ruin": {
        t1: 'Grass',
        t2: 'Rock',
        bs: { hp: 80, at: 135, df: 130, sa: 95, sd: 90, sp: 70 },
        w: 550,
        formes: ["Delta Metagross-Ruin", "Delta Metagross-Ruin-Mega", "Delta Metagross-Ruin-Crystal"]
    },
    "Delta Buneary": {
        t1: 'Fighting',
        bs: { hp: 55, at: 66, df: 44, sa: 44, sd: 56, sp: 85 },
        w: 5.5,
        canEvolve: true
    },
    "Delta Lopunny": {
        t1: 'Fighting',
        bs: { hp: 65, at: 76, df: 84, sa: 54, sd: 96, sp: 105 },
        w: 33.3,
        formes: ["Delta Lopunny", "Delta Lopunny-Mega"]
    },
    "Delta Riolu": {
        t1: 'Dark',
        bs: { hp: 40, at: 70, df: 40, sa: 35, sd: 40, sp: 60 },
        w: 20.2,
        canEvolve: true
    },
    "Delta Lucario": {
        t1: 'Dark',
        t2: 'Ground',
        bs: { hp: 70, at: 110, df: 70, sa: 115, sd: 70, sp: 90 },
        w: 54.0,
        formes: ["Delta Lucario", "Delta Lucario-Mega"]
    },
    "Delta Croagunk": {
        t1: 'Fire',
        bs: { hp: 48, at: 61, df: 40, sa: 61, sd: 40, sp: 50 },
        w: 23.0,
        canEvolve: true
    },
    "Delta Toxicroak": {
        t1: 'Fire',
        bs: { hp: 83, at: 106, df: 65, sa: 86, sd: 65, sp: 85 },
        w: 44.4
    },
    "Delta Venipede": {
        t1: 'Rock',
        t2: 'Fire',
        bs: { hp: 30, at: 45, df: 59, sa: 30, sd: 39, sp: 57 },
        w: 8.0,
        canEvolve: true
    },
    "Delta Whirlipede": {
        t1: 'Rock',
        t2: 'Fire',
        bs: { hp: 40, at: 55, df: 99, sa: 40, sd: 79, sp: 47 },
        w: 87.8,
        canEvolve: true
    },
    "Delta Scolipede": {
        t1: 'Rock',
        t2: 'Fire',
        bs: { hp: 60, at: 90, df: 89, sa: 55, sd: 69, sp: 112 },
        w: 300.8
    },
    "Delta Petilil-Water": {
        t1: 'Water',
        t2: 'Fire',
        bs: { hp: 45, at: 35, df: 50, sa: 70, sd: 50, sp: 30 },
        w: 6.6,
        canEvolve: true
    },
    "Delta Lilligant-Water": {
        t1: 'Water',
        t2: 'Fire',
        bs: { hp: 70, at: 60, df: 75, sa: 110, sd: 75, sp: 90 },
        w: 16.3
    },
    "Delta Petilil-Fairy": {
        t1: 'Fairy',
        t2: 'Flying',
        bs: { hp: 45, at: 35, df: 50, sa: 70, sd: 50, sp: 30 },
        w: 6.6,
        canEvolve: true
    },
    "Delta Lilligant-Fairy": {
        t1: 'Fairy',
        t2: 'Flying',
        bs: { hp: 70, at: 60, df: 75, sa: 110, sd: 75, sp: 90 },
        w: 16.3
    },
    "Delta Solosis": {
        t1: 'Ghost',
        t2: 'Rock',
        bs: { hp: 45, at: 30, df: 40, sa: 105, sd: 50, sp: 20 },
        w: 2.0,
        canEvolve: true
    },
    "Delta Duosion": {
        t1: 'Ghost',
        t2: 'Rock',
        bs: { hp: 65, at: 40, df: 50, sa: 125, sd: 60, sp: 30 },
        w: 16.0,
        canEvolve: true
    },
    "Delta Reuniclus": {
        t1: 'Ghost',
        t2: 'Rock',
        bs: { hp: 110, at: 65, df: 75, sa: 125, sd: 85, sp: 30 },
        w: 40.2
    },
    "Delta Darumaka": {
        t1: 'Dark',
        t2: 'Ghost',
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        w: 37.5,
        canEvolve: true
    },
    "Delta Darmanitan": {
        t1: 'Dark',
        t2: 'Ghost',
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        w: 92.9
    },
    "Delta Maractus": {
        t1: 'Steel',
        bs: { hp: 75, at: 86, df: 67, sa: 106, sd: 67, sp: 60 },
        w: 56.0
    },
    "Delta Dwebble-Berry": {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 50, at: 65, df: 85, sa: 35, sd: 35, sp: 55 },
        w: 10.6,
        canEvolve: true
    },
    "Delta Crustle-Berry": {
        t1: 'Grass',
        t2: 'Poison',
        bs: { hp: 70, at: 95, df: 125, sa: 65, sd: 75, sp: 45 },
        w: 150.0
    },
    "Delta Dwebble-Cake": {
        t1: 'Fairy',
        t2: 'Normal',
        bs: { hp: 50, at: 65, df: 85, sa: 35, sd: 35, sp: 55 },
        w: 7.8,
        canEvolve: true
    },
    "Delta Crustle-Cake": {
        t1: 'Fairy',
        t2: 'Normal',
        bs: { hp: 70, at: 95, df: 125, sa: 65, sd: 75, sp: 45 },
        w: 100.0
    },
    "Delta Yamask": {
        t1: 'Steel',
        t2: 'Poison',
        bs: { hp: 38, at: 30, df: 85, sa: 55, sd: 65, sp: 30 },
        w: 3.0,
        canEvolve: true
    },
    "Delta Cofagrigus": {
        t1: 'Steel',
        t2: 'Poison',
        bs: { hp: 58, at: 50, df: 145, sa: 95, sd: 105, sp: 30 },
        w: 153.0
    },
    "Delta Emolga": {
        t1: 'Fire',
        t2: 'Dark',
        bs: { hp: 55, at: 75, df: 60, sa: 75, sd: 60, sp: 103 },
        w: 5.0
    },
    "Delta Karrablast": {
        t1: 'Fairy',
        bs: { hp: 50, at: 75, df: 45, sa: 40, sd: 45, sp: 60 },
        w: 5.9,
        canEvolve: true
    },
    "Delta Escavalier": {
        t1: 'Fairy',
        bs: { hp: 70, at: 135, df: 105, sa: 60, sd: 105, sp: 20 },
        w: 33.0
    },
    "Delta Foongus": {
        t1: 'Ghost',
        t2: 'Dark',
        bs: { hp: 69, at: 55, df: 45, sa: 55, sd: 55, sp: 15 },
        w: 1.0,
        canEvolve: true
    },
    "Delta Amoonguss": {
        t1: 'Ghost',
        t2: 'Dark',
        bs: { hp: 114, at: 85, df: 70, sa: 85, sd: 80, sp: 30 },
        w: 10.5
    },
    "Delta Litwick": {
        t1: 'Fairy',
        t2: 'Fire',
        bs: { hp: 50, at: 30, df: 55, sa: 65, sd: 55, sp: 20 },
        w: 3.1,
        canEvolve: true
    },
    "Delta Lampent": {
        t1: 'Fairy',
        t2: 'Fire',
        bs: { hp: 60, at: 40, df: 60, sa: 95, sd: 60, sp: 55 },
        w: 13.0,
        canEvolve: true
    },
    "Delta Chandelure": {
        t1: 'Fairy',
        t2: 'Fire',
        bs: { hp: 60, at: 55, df: 90, sa: 145, sd: 90, sp: 80 },
        w: 34.3
    },
    "Delta Axew": {
        t1: 'Water',
        bs: { hp: 46, at: 87, df: 60, sa: 30, sd: 40, sp: 57 },
        w: 18.0,
        canEvolve: true
    },
    "Delta Fraxure": {
        t1: 'Water',
        bs: { hp: 66, at: 117, df: 70, sa: 40, sd: 50, sp: 67 },
        w: 36.0,
        canEvolve: true
    },
    "Delta Haxorus": {
        t1: 'Water',
        t2: 'Steel',
        bs: { hp: 76, at: 147, df: 90, sa: 60, sd: 70, sp: 97 },
        w: 211.0
    },
    "Delta Golett": {
        t1: 'Fighting',
        t2: 'Steel',
        bs: { hp: 59, at: 74, df: 50, sa: 35, sd: 50, sp: 35 },
        w: 92.0,
        canEvolve: true
    },
    "Delta Golurk": {
        t1: 'Fighting',
        t2: 'Steel',
        bs: { hp: 89, at: 124, df: 80, sa: 55, sd: 80, sp: 55 },
        w: 330.0
    },
    "Delta Heatmor": {
        t1: 'Poison',
        t2: 'Steel',
        bs: { hp: 85, at: 97, df: 66, sa: 105, sd: 66, sp: 65 },
        w: 116.0
    },
    "Delta Deino": {
        t1: 'Ground',
        t2: 'Poison',
        bs: { hp: 52, at: 65, df: 50, sa: 45, sd: 50, sp: 38 },
        w: 17.3,
        canEvolve: true
    },
    "Delta Zweilous": {
        t1: 'Ground',
        t2: 'Poison',
        bs: { hp: 72, at: 85, df: 70, sa: 65, sd: 70, sp: 58 },
        w: 50.0,
        canEvolve: true
    },
    "Delta Hydreigon": {
        t1: 'Ground',
        t2: 'Poison',
        bs: { hp: 92, at: 105, df: 90, sa: 125, sd: 90, sp: 98 },
        w: 160.0
    },
    "Delta Larvesta": {
        t1: 'Dark',
        t2: 'Poison',
        bs: { hp: 55, at: 85, df: 55, sa: 50, sd: 55, sp: 60 },
        w: 28.8,
        canEvolve: true
    },
    "Delta Volcarona": {
        t1: 'Dark',
        t2: 'Poison',
        bs: { hp: 85, at: 60, df: 65, sa: 135, sd: 105, sp: 100 },
        w: 46.0,
        formes: ["Delta Volcarona", "Delta Volcarona-Armored"]
    },
    "Delta Amaura": {
        t1: 'Grass',
        t2: 'Water',
        bs: { hp: 77, at: 59, df: 50, sa: 67, sd: 63, sp: 46 },
        w: 25.2,
        canEvolve: true
    },
    "Delta Aurorus": {
        t1: 'Grass',
        t2: 'Water',
        bs: { hp: 123, at: 77, df: 72, sa: 99, sd: 92, sp: 58 },
        w: 225.0
    },
    "Delta Goomy": {
        t1: 'Ground',
        t2: 'Water',
        bs: { hp: 45, at: 50, df: 35, sa: 55, sd: 75, sp: 40 },
        w: 2.8,
        canEvolve: true
    },
    "Delta Sliggoo": {
        t1: 'Ground',
        t2: 'Water',
        bs: { hp: 68, at: 75, df: 53, sa: 83, sd: 113, sp: 60 },
        w: 17.5,
        canEvolve: true
    },
    "Delta Goodra": {
        t1: 'Ground',
        t2: 'Water',
        bs: { hp: 90, at: 100, df: 70, sa: 110, sd: 150, sp: 80 },
        w: 150.5
    },
    "Delta Regirock": {
        t1: 'Ground',
        bs: { hp: 80, at: 100, df: 200, sa: 50, sd: 100, sp: 50 },
        w: 230.0
    },
    "Delta Regice": {
        t1: 'Water',
        bs: { hp: 80, at: 50, df: 100, sa: 100, sd: 200, sp: 50 },
        w: 175.0
    },
    "Delta Registeel": {
        t1: 'Fire',
        bs: { hp: 80, at: 75, df: 150, sa: 75, sd: 150, sp: 50 },
        w: 205.0
    },
    "Delta Meloetta": {
        t1: 'Dark',
        t2: 'Fairy',
        bs: { hp: 100, at: 128, df: 90, sa: 77, sd: 77, sp: 128 },
        w: 6.5,
        ab: "Filter",
        formes: ["Delta Meloetta", "Delta Meloetta-Magician"]
    },
    "Delta Meloetta-Magician": {
        t1: 'Dark',
        t2: 'Fighting',
        bs: { hp: 100, at: 77, df: 77, sa: 128, sd: 128, sp: 90 },
        w: 6.5,
        ab: "Filter",
        isAlternateForme: true
    },
    "Delta Hoopa": {
        t1: 'Flying',
        bs: { hp: 80, at: 110, df: 60, sa: 150, sd: 130, sp: 70 },
        w: 9.0,
        formes: ["Delta Hoopa", "Delta Hoopa-Unbound"]
    },
    "Delta Hoopa-Unbound": {
        t1: 'Flying',
        t2: 'Fairy',
        bs: { hp: 80, at: 160, df: 60, sa: 170, sd: 130, sp: 80 },
        w: 490.0,
        isAlternateForme: true
    },
    //New Mega Evolutions
    "Poliwrath-Mega": {
	    t1: 'Water',
		t2: 'Fighting',
	    bs: { hp: 90, at: 155, df: 120, sa: 70, sd: 105, sp: 70 },
	    w: 54.0,
	    ab: "No Guard",
	    isAlternateForme: true
	},  
	"Marowak-Mega": {
	    t1: 'Ground',
		t2: 'Ghost',
	    bs: { hp: 60, at: 135, df: 120, sa: 50, sd: 100, sp: 60 },
	    w: 45.0,
	    ab: "Parental Bond",
	    isAlternateForme: true
	},
    "Eevee-Mega": {
	    t1: 'Normal',
	    bs: { hp: 83, at: 83, df: 83, sa: 83, sd: 83, sp: 83 },
	    w: 6.5,
	    ab: "Protean Maxima",
	    isAlternateForme: true
	},
    "Eevee-Mega-Vaporeon": {
        t1: 'Water',
        bs: { hp: 130, at: 65, df: 60, sa: 110, sd: 95, sp: 65 },
        w: 29.0,
        ab: "Water Absorb",
        isAlternateForme: true
	},
    "Eevee-Mega-Jolteon": {
        t1: 'Electric',
        bs: { hp: 65, at: 65, df: 60, sa: 110, sd: 95, sp: 130 },
        w: 24.5,
        ab: "Volt Absorb",
        isAlternateForme: true
	},
    "Eevee-Mega-Flareon": {
	    t1: 'Fire',
	    bs: { hp: 65, at: 130, df: 60, sa: 95, sd: 110, sp: 65 },
	    w: 25.0,
	    ab: "Flash Fire",
		isAlternateForme: true
	},
    "Eevee-Mega-Espeon": {
	    t1: 'Psychic',
	    bs: { hp: 65, at: 65, df: 60, sa: 130, sd: 95, sp: 110 },
	    w: 26.5,
		isAlternateForme: true
	},
    "Eevee-Mega-Umbreon": {
	    t1: 'Dark',
	    bs: { hp: 95, at: 65, df: 110, sa: 60, sd: 130, sp: 65 },
	    w: 27.0,
		isAlternateForme: true
	},
    "Eevee-Mega-Leafeon": {
	    t1: 'Grass',
	    bs: { hp: 65, at: 110, df: 130, sa: 60, sd: 65, sp: 95 },
	    w: 25.5,
	    ab: "Chlorophyll",
		isAlternateForme: true
	},
    "Eevee-Mega-Glaceon": {
	    t1: 'Ice',
	    bs: { hp: 65, at: 60, df: 110, sa: 130, sd: 95, sp: 65 },
	    w: 25.9,
	    ab: "Snow Cloak",
		isAlternateForme: true
	},
    "Eevee-Mega-Sylveon": {
	    t1: 'Fairy',
	    bs: { hp: 95, at: 65, df: 65, sa: 110, sd: 130, sp: 60 },
	    w: 23.5,
		isAlternateForme: true
	},
    "Meganium-Mega": {
	    t1: 'Grass',
		t2: 'Fairy',
	    bs: { hp: 80, at: 82, df: 140, sa: 83, sd: 140, sp: 100  },
	    w: 100.5,
	    ab: "Magic Bounce",
	    isAlternateForme: true
	},
    "Typhlosion-Mega": {
	    t1: 'Fire',
	    bs: { hp: 78, at: 89, df: 88, sa: 159, sd: 110, sp: 110 },
	    w: 79.5,
	    ab: "Hubris",
	    isAlternateForme: true
	},
    "Feraligatr-Mega": {
	    t1: 'Water',
	    bs: { hp: 85, at: 140, df: 110, sa: 89, sd: 103, sp: 103 },
	    w: 88.8,
	    ab: "Tough Claws",
	    isAlternateForme: true
	},
    "Sudowoodo-Mega": {
	    t1: 'Rock',
		t2: 'Grass',
	    bs: { hp: 70, at: 140, df: 145, sa: 40, sd: 95, sp: 20 },
	    w: 38.0,
	    ab: "Analytic",
	    isAlternateForme: true
	},
    "Politoed-Mega": {
	    t1: 'Water',
	    bs: { hp: 90, at: 75, df: 95, sa: 120, sd: 140, sp: 80 },
	    w: 33.9,
	    ab: "Drizzle",
	    isAlternateForme: true
	},
    "Sunflora-Mega-M": {
	    t1: 'Grass',
		t2: 'Fire',
	    bs: { hp: 75, at: 85, df: 80, sa: 135, sd: 105, sp: 45  },
	    w: 8.5,
	    ab: "Unleafed",
	    isAlternateForme: true
	},
    "Sunflora-Mega-F": {
	    t1: 'Grass',
	    bs: { hp: 75, at: 85, df: 80, sa: 135, sd: 105, sp: 45  },
	    w: 8.5,
	    ab: "Unleafed",
	    isAlternateForme: true
	},
    "Girafarig-Mega": {
	    t1: 'Normal',
		t2: 'Psychic',
	    bs: { hp: 70, at: 80, df: 95, sa: 130, sd: 95, sp: 85  },
	    w: 41.5,
	    ab: "Spectral Jaws",
	    isAlternateForme: true
	},
    "Steelix-Mega-Fire": {
	    t1: 'Steel',
		t2: 'Fire',
	    bs: { hp: 75, at: 135, df: 225, sa: 65, sd: 55, sp: 55 },
	    w: 740.0,
	    ab: "Foundry",
	    isAlternateForme: true
	},
    "Magcargo-Mega": {
	    t1: 'Fire',
	    bs: { hp: 50, at: 70, df: 100, sa: 150, sd: 100, sp: 50 },
	    w: 55.0,
	    ab: "Vaporization",
	    isAlternateForme: true
	},
    "Donphan-Mega": {
	    t1: 'Ground',
	    bs: { hp: 90, at: 150, df: 150, sa: 60, sd: 100, sp: 50 },
	    w: 120.0,
	    ab: "Irrelephant",
	    isAlternateForme: true
	},
    "Miltank-Mega": {
	    t1: 'Normal',
	    bs: { hp: 95, at: 125, df: 145, sa: 40, sd: 115, sp: 70 },
	    w: 75.5,
	    ab: "Pendulum",
	    isAlternateForme: true
	},
    "Shiftry-Mega": {
	    t1: 'Grass',
		t2: 'Dark',
	    bs: { hp: 90, at: 135, df: 70, sa: 125, sd: 60, sp: 100 },
	    w: 59.6,
	    ab: "Shadow Dance",
	    isAlternateForme: true
	},
    "Flygon-Mega": {
	    t1: 'Bug',
		t2: 'Dragon',
	    bs: { hp: 80, at: 110, df: 90, sa: 140, sd: 80, sp: 120 },
	    w: 82.0,
	    ab: "Amplifier",
	    isAlternateForme: true
	},
    "Cacturne-Mega": {
	    t1: 'Grass',
		t2: 'Dark',
	    bs: { hp: 70, at: 145, df: 70, sa: 145, sd: 70, sp: 75 },
	    w: 77.4,
	    ab: "Sand Rush",
	    isAlternateForme: true
	},
    "Crawdaunt-Mega": {
	    t1: 'Water',
		t2: 'Dark',
	    bs: { hp: 63, at: 145, df: 95, sa: 100, sd: 85, sp: 80  },
	    w: 32.8,
	    ab: "Adaptability",
	    isAlternateForme: true
	},
    "Milotic-Mega": {
	    t1: 'Water',
		t2: 'Fairy',
	    bs: { hp: 95, at: 70, df: 109, sa: 130, sd: 155, sp: 81 },
	    w: 162.0,
	    ab: "Prism Guard",
	    isAlternateForme: true
	},
    "Jirachi-Mega": {
	    t1: 'Steel',
		t2: 'Psychic',
	    bs: { hp: 100, at: 100, df: 140, sa: 130, sd: 115, sp: 115 },
	    w: 1.1,
	    ab: "Periodic Orbit",
	    isAlternateForme: true
	},
    "Chatot-Mega": {
	    t1: 'Normal',
		t2: 'Flying',
	    bs: { hp: 76, at: 65, df: 55, sa: 147, sd: 52, sp: 116  },
	    w: 1.9,
	    ab: "Amplifier",
	    isAlternateForme: true
	},
    "Spiritomb-Mega": {
	    t1: 'Ghost',
		t2: 'Dark',
	    bs: { hp: 50, at: 142, df: 128, sa: 133, sd: 112, sp: 20 },
	    w: 108.0,
	    ab: "Tough Claws",
	    isAlternateForme: true
	},
    "Froslass-Mega": {
	    t1: 'Ice',
		t2: 'Ghost',
	    bs: { hp: 70, at: 80 , df: 85, sa: 120, sd: 105, sp: 120 },
	    w: 26.6,
	    ab: "Fur Coat",
	    isAlternateForme: true
	},
    "Regigigas-Primal": {
        t1: 'Normal',
        t2: 'Ground',
	    bs: { hp: 110, at: 195, df: 140, sa: 95, sd: 130, sp: 100 },
	    w: 420.0,
	    ab: "Unaware",
		isAlternateForme: true
	},
    "Giratina-Primal": {
	    t1: 'Ghost',
		t2: 'Dragon',
	    bs: { hp: 150, at: 135, df: 135, sa: 135, sd: 135, sp: 130  },
	    w: 750.0,
	    ab: "Omnitype",
		isAlternateForme: true
	},
    "Arceus-Primal": {
	    t1: 'Normal',
		t2: 'Dragon',
	    bs: { hp: 120, at: 150, df: 130, sa: 150, sd: 130, sp: 140  },
	    w: 320.0,
	    ab: "Ancient Presence",
		isAlternateForme: true
	},
    "Zebstrika-Mega": {
	    t1: 'Electric',
		t2: 'Fairy',
	    bs: { hp: 75, at: 100, df: 63, sa: 131, sd: 83, sp: 141 },
	    w: 79.5,
	    ab: "Competitive",
	    isAlternateForme: true
	},
    "Zoroark-Mega": {
	    t1: 'Dark',
	    bs: { hp: 60, at: 130, df: 60, sa: 145, sd: 90, sp: 125 },
	    w: 81.1,
	    ab: "Trace",
	    isAlternateForme: true
	},
    "Gothitelle-Mega": {
	    t1: 'Psychic',
		t2: 'Dark',
	    bs: { hp: 70, at: 55, df: 125, sa: 125, sd: 150, sp: 65  },
	    w: 44.0,
	    ab: "Ethereal Shroud",
	    isAlternateForme: true
	},
    "Reuniclus-Mega": {
	    t1: 'Psychic',
	    bs: { hp: 110, at: 80, df: 65, sa: 160, sd: 90, sp: 80 },
	    w: 20.1,
	    ab: "Speed Swap",
	    isAlternateForme: true
	},
    "Haxorus-Mega": {
	    t1: 'Dragon',
		t2: 'Steel',
	    bs: { hp: 76, at: 182, df: 130, sa: 80, sd: 90, sp: 82 },
	    w: 105.5,
	    ab: "Weak Armor",
	    isAlternateForme: true
	},
    "Cryogonal-Mega": {
	    t1: 'Ice',
	    bs: { hp: 70, at: 50, df: 65, sa: 115, sd: 150, sp: 135 },
	    w: 148.0,
	    ab: "Sleet",
	    isAlternateForme: true
	},
    "Stunfisk-Mega": {
	    t1: 'Ground',
		t2: 'Electric',
	    bs: { hp: 109, at: 76, df: 104, sa: 91, sd: 134, sp: 57 },
	    w: 11.0,
	    ab: "Athenian",
	    isAlternateForme: true
	},
    "Bisharp-Mega": {
	    t1: 'Dark',
		t2: 'Steel',
	    bs: { hp: 65, at: 145, df: 130, sa: 60, sd: 85, sp: 105  },
	    w: 70.0,
	    ab: "Moxie",
	    isAlternateForme: true
	},
    "Hydreigon-Mega": {
	    t1: 'Dark',
		t2: 'Dragon',
	    bs: { hp: 92, at: 130, df: 105, sa: 170, sd: 105, sp: 98 },
	    w: 160.0,
	    ab: "Lernean",
	    isAlternateForme: true
	},
    "Delta Venusaur-Mega": {
	    t1: 'Fairy',
	    t2: 'Psychic',
	    bs: { hp: 80, at: 100, df: 123, sa: 122, sd: 120, sp: 80 },
	    w: 155.5,
	    ab: "Hubris",
	    isAlternateForme: true
	},
    "Delta Charizard-Mega": {
	    t1: 'Ghost',
	    t2: 'Dragon',
	    bs: { hp: 78, at: 104, df: 78, sa: 159, sd: 115, sp: 100 },
	    w: 100.5,
	    ab: "Noctem",
	    isAlternateForme: true
	},
    "Delta Blastoise-Mega": {
	    t1: 'Dark',
		t2: 'Fighting',
	    bs: { hp: 79, at: 103, df: 120, sa: 135, sd: 115, sp: 78 },
	    w: 101.1,
	    ab: "Mega Launcher",
	    isAlternateForme: true
	},
    "Delta Bisharp-Mega": {
	    t1: 'Flying',
		t2: 'Fighting',
	    bs: { hp: 65, at: 145, df: 130, sa: 60, sd: 85, sp: 105  },
	    w: 70.0,
	    ab: "Technician",
	    isAlternateForme: true
	},
    "Delta Gardevoir-Mega": {
	    t1: 'Electric',
	    t2: 'Ice',
	    bs: { hp: 68, at: 85, df: 65, sa: 165, sd: 135, sp: 100 },
	    w: 48.4,
	    ab: "Lightning Rod",
	    isAlternateForme: true
	},
    "Delta Gallade-Mega": {
	    t1: 'Electric',
	    t2: 'Ice',
	    bs: { hp: 68, at: 165, df: 95, sa: 65, sd: 115, sp: 110 },
	    w: 56.4,
	    ab: "Volt Absorb",
	    isAlternateForme: true
	},
    "Delta Sunflora-Mega": {
	    t1: 'Fire',
		t2: 'Poison',
	    bs: { hp: 75, at: 85, df: 80, sa: 135, sd: 105, sp: 45 },
	    w: 8.5,
	    ab: "Chlorofury",
	    isAlternateForme: true
	},
    "Delta Scizor-Mega": {
	    t1: 'Ice',
	    t2: 'Fighting',
	    bs: { hp: 70, at: 150, df: 140, sa: 65, sd: 100, sp: 75 },
	    w: 125.0,
	    ab: "Adaptability",
	    isAlternateForme: true
	},
    "Delta Glalie-Mega": {
	    t1: 'Fire',
		t2: 'Rock',
	    bs: { hp: 80, at: 120, df: 80, sa: 120, sd: 80, sp: 100 },
	    w: 350.2,
	    ab: "Reckless",
	    isAlternateForme: true
	},
    "Delta Froslass-Mega": {
	    t1: 'Fire',
		t2: 'Ghost',
	    bs: { hp: 70, at: 80, df: 85, sa: 120, sd: 105, sp: 120 },
	    w: 26.6,
	    ab: "Magic Guard",
	    isAlternateForme: true
	},
    "Delta Typhlosion-Mega": {
	    t1: 'Electric',
		t2: 'Steel',
	    bs: { hp: 78, at: 89, df: 88, sa: 159, sd: 110, sp: 110 },
	    w: 159.0,
	    ab: "Supercell",
	    isAlternateForme: true
	},
    "Delta Pidgeot-Mega": {
	    t1: 'Dark',
		t2: 'Dragon',
	    bs: { hp: 83, at: 80, df: 80, sa: 135, sd: 80, sp: 121 },
	    w: 50.5,
	    ab: "Intimidate",
	    isAlternateForme: true
	},
    "Delta Girafarig-Mega": {
	    t1: 'Steel',
		t2: 'Poison',
	    bs: { hp: 70, at: 80, df: 95, sa: 130, sd: 95, sp: 85 },
	    w: 83.0,
	    ab: "Intimidate",
	    isAlternateForme: true
	},
    "Delta Sableye-Mega": {
	    t1: 'Fire',
		t2: 'Rock',
	    bs: { hp: 50, at: 85, df: 125, sa: 85, sd: 115, sp: 20 },
	    w: 161.0,
	    ab: "Dry Skin",
	    isAlternateForme: true
	},
    "Delta Mawile-Mega": {
	    t1: 'Grass',
		t2: 'Dark',
	    bs: { hp: 50, at: 105, df: 125, sa: 55, sd: 95, sp: 50 },
	    w: 23.5,
	    ab: "Arena Trap",
	    isAlternateForme: true
	},
    "Delta Medicham-Mega": {
	    t1: 'Fairy',
		t2: 'Ground',
	    bs: { hp: 60, at: 100, df: 85, sa: 80, sd: 85, sp: 100 },
	    w: 31.5,
	    ab: "Athenian",
	    isAlternateForme: true
	},
    "Delta Camerupt-Mega": {
	    t1: 'Poison',
	    bs: { hp: 70, at: 120, df: 100, sa: 145, sd: 105, sp: 20 },
	    w: 320.5,
	    ab: "Venomous",
	    isAlternateForme: true
	},
    "Delta Milotic-Mega": {
	    t1: 'Ghost',
	    bs: { hp: 95, at: 70, df: 109, sa: 130, sd: 155, sp: 81 },
	    w: 162.0,
	    ab: "Absolution",
	    isAlternateForme: true
	},
    "Delta Metagross-Spider-Mega": {
	    t1: 'Ground',
		t2: 'Bug',
	    bs: { hp: 80, at: 145, df: 150, sa: 105, sd: 110, sp: 110 },
	    w: 471.5,
	    ab: "Mold Breaker",
	    isAlternateForme: true
	},
    "Delta Metagross-Ruin-Mega": {
	    t1: 'Rock',
		t2: 'Grass',
	    bs: { hp: 80, at: 145, df: 150, sa: 105, sd: 110, sp: 110 },
	    w: 942.9,
	    ab: "Rock Head",
	    isAlternateForme: true
	},
    "Delta Metagross-Ruin-Crystal": {
	    t1: 'Grass',
		t2: 'Crystal',
	    bs: { hp: 80, at: 180, df: 100, sa: 120, sd: 100, sp: 100 },
	    w: 942.9,
	    ab: "Weak Armor",
	    isAlternateForme: true
	},
    "Delta Lopunny-Mega": {
	    t1: 'Psychic',
		t2: 'Fighting',
	    bs: { hp: 65, at: 136, df: 94, sa: 54, sd: 96, sp: 135 },
	    w: 28.3,
	    ab: "Infiltrator",
	    isAlternateForme: true
	},
    "Delta Lucario-Mega": {
	    t1: 'Dark',
		t2: 'Ground',
	    bs: { hp: 70, at: 145, df: 88, sa: 140, sd: 70, sp: 112 },
	    w: 57.5,
	    ab: "Defiant",
	    isAlternateForme: true
    },
    //Other
    "Machamp-Pokken": {
        t1: 'Fighting',
        bs: { hp: 90, at: 130, df: 80, sa: 65, sd: 85, sp: 55 },
        w: 130.0,
        isAlternateForme: true
    },
    "Machamp-Pokken-Burst": {
        t1: 'Fighting',
        bs: { hp: 90, at: 130, df: 80, sa: 65, sd: 85, sp: 55 },
        w: 130.0,
        isAlternateForme: true
    },
    "Mewtwo-Shadow": {
        t1: 'Psychic',
        t2: 'Dark',
        bs: { hp: 106, at: 110, df: 90, sa: 154, sd: 90, sp: 130 },
        w: 122.0,
        ab: "Intimidate",
        isAlternateForme: true
    },
    "Mewtwo-Shadow-Burst": {
        t1: 'Psychic',
        t2: 'Dark',
        bs: { hp: 106, at: 110, df: 90, sa: 154, sd: 90, sp: 130 },
        w: 122.0,
        ab: "Intimidate",
        isAlternateForme: true
    },
    "Mewtwo-Shadow-Mega-X": {
        t1: 'Psychic',
        t2: 'Fighting',
        bs: { hp: 106, at: 190, df: 100, sa: 154, sd: 100, sp: 130 },
        w: 127.0,
        ab: "Shadow Synergy",
        isAlternateForme: true
    },
    "Mewtwo-Shadow-Mega-X-Burst": {
        t1: 'Psychic',
        t2: 'Fighting',
        bs: { hp: 106, at: 190, df: 100, sa: 154, sd: 100, sp: 130 },
        w: 127.0,
        ab: "Shadow Synergy",
        isAlternateForme: true
    },
    "Tyranitar-Armored": {
        t1: 'Rock',
        t2: 'Dark',
        bs: { hp: 100, at: 134, df: 143, sa: 95, sd: 130, sp: 61 },
        w: 202.0,
        ab: "Sand Stream",
        isAlternateForme: true
    },
    "Gardevoir-Pokken": {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 68, at: 65, df: 65, sa: 125, sd: 115, sp: 80 },
        w: 48.4,
        isAlternateForme: true
    },
    "Gardevoir-Pokken-Burst": {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 68, at: 65, df: 65, sa: 125, sd: 115, sp: 80 },
        w: 48.4,
        isAlternateForme: true
    },
    "Gardevoir-Pokken-Mega": {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 68, at: 85, df: 65, sa: 165, sd: 135, sp: 100 },
        w: 48.4,
        isAlternateForme: true
    },
    "Gardevoir-Pokken-Mega-Burst": {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 68, at: 85, df: 65, sa: 165, sd: 135, sp: 100 },
        w: 48.4,
        isAlternateForme: true
    },
    "Flygon-Armored": {
        t1: 'Ground',
        t2: 'Dragon',
        bs: { hp: 80, at: 100, df: 103, sa: 80, sd: 103, sp: 100 },
        w: 82.0,
        ab: "Levitate",
        isAlternateForme: true
    },
    "Lucario-Pokken": {
        t1: 'Steel',
        t2: 'Fighting',
        bs: { hp: 70, at: 110, df: 70, sa: 115, sd: 70, sp: 90 },
        w: 54.0,
        isAlternateForme: true
    },
    "Lucario-Pokken-Burst": {
        t1: 'Steel',
        t2: 'Fighting',
        bs: { hp: 70, at: 110, df: 70, sa: 115, sd: 70, sp: 90 },
        w: 54.0,
        isAlternateForme: true
    },
    "Lucario-Pokken-Mega": {
        t1: 'Steel',
        t2: 'Fighting',
        bs: { hp: 70, at: 145, df: 88, sa: 140, sd: 70, sp: 112 },
        w: 57.5,
        isAlternateForme: true
    },
    "Lucario-Pokken-Mega-Burst": {
        t1: 'Steel',
        t2: 'Fighting',
        bs: { hp: 70, at: 145, df: 88, sa: 140, sd: 70, sp: 112 },
        w: 57.5,
        isAlternateForme: true
    },
    "Leavanny-Armored": {
        t1: 'Bug',
        t2: 'Grass',
        bs: { hp: 75, at: 103, df: 112, sa: 70, sd: 98, sp: 92 },
        w: 20.5,
        isAlternateForme: true
    },
    "Zekrom-Armored": {
        t1: 'Dragon',
        t2: 'Electric',
        bs: { hp: 100, at: 150, df: 156, sa: 120, sd: 130, sp: 90 },
        w: 345.0,
        ab: "Teravolt",
        isAlternateForme: true
    },
    'Zygarde-10%': {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 54, at: 100, df: 71, sa: 61, sd: 85, sp: 115 },
        w: 33.5,
        ab: 'Power Construct',
        isAlternateForme: true,
        gender: 'N'
    },
    'Zygarde-Complete': {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 216, at: 100, df: 121, sa: 91, sd: 95, sp: 85 },
        w: 610,
        ab: 'Power Construct',
        isAlternateForme: true,
        gender: 'N'
    },
    "Delta Volcarona-Armored": {
        t1: 'Dark',
        t2: 'Poison',
        bs: { hp: 85, at: 60, df: 85, sa: 135, sd: 137, sp: 100 },
        w: 46.0,
        isAlternateForme: true
    },
    "MISSINGNO": {
        t1: 'Flying',
        t2: 'Normal',
        bs: { hp: 33, at: 136, df: 0, sa: 6, sd: 6, sp: 29 },
        w: 4.0,
        ab: "Glitch"
    },
    "UFI": {
        t1: 'Psychic',
        t2: 'Electric',
        bs: { hp: 100, at: 100, df: 100, sa: 100, sd: 100, sp: 100 },
        w: 9.0
    }
});
var SM = util_1.extend(true, {}, XY, {
    'Alakazam-Mega': { bs: { sd: 105 } },
    Arbok: { bs: { at: 95 } },
    Arghonaut: { ab: 'Technician' },
    Ariados: { bs: { sd: 70 } },
    Beartic: { bs: { at: 130 } },
    Chimecho: { bs: { hp: 75, df: 80, sd: 90 } },
    Corsola: { bs: { hp: 65, df: 95, sd: 95 } },
    Crustle: { bs: { at: 105 } },
    Cryogonal: { bs: { hp: 80, df: 50 } },
    Cubchoo: { ab: 'Slush Rush' },
    Delcatty: { bs: { sp: 90 } },
    Diglett: { formes: ['Diglett', 'Diglett-Alola'] },
    Dodrio: { bs: { sp: 110 } },
    Dugtrio: { bs: { at: 100 }, formes: ['Dugtrio', 'Dugtrio-Alola'] },
    Electrode: { bs: { sp: 150 } },
    Exeggutor: { bs: { sd: 75 }, formes: ['Exeggutor', 'Exeggutor-Alola'] },
    "Farfetch'd": { bs: { at: 90 } },
    Gengar: { ab: 'Cursed Body' },
    Geodude: { formes: ['Geodude', 'Geodude-Alola'] },
    Gigalith: { ab: 'Sand Stream' },
    Golem: { formes: ['Golem', 'Golem-Alola'] },
    Graveler: { formes: ['Graveler', 'Graveler-Alola'] },
    Greninja: { formes: ['Greninja', 'Greninja-Ash'] },
    Grimer: { formes: ['Grimer', 'Grimer-Alola'] },
    Illumise: { bs: { df: 75, sd: 85 } },
    Kitsunoh: { ab: 'Iron Fist' },
    Lunatone: { bs: { hp: 90 } },
    Magcargo: { bs: { hp: 60, sa: 90 } },
    Malaconda: { ab: 'Drought' },
    Mantine: { bs: { hp: 85 } },
    Marowak: { formes: ['Marowak', 'Marowak-Alola', 'Marowak-Alola-Totem'] },
    Masquerain: { bs: { sa: 100, sp: 80 } },
    Meowth: { formes: ['Meowth', 'Meowth-Alola'] },
    Muk: { formes: ['Muk', 'Muk-Alola'] },
    Naviathan: { ab: 'Guts' },
    Ninetales: { formes: ['Ninetales', 'Ninetales-Alola'] },
    Noctowl: { bs: { sa: 86 } },
    Pelipper: { bs: { sa: 95 }, ab: 'Drizzle' },
    Persian: { formes: ['Persian', 'Persian-Alola'] },
    Qwilfish: { bs: { df: 85 } },
    Raichu: { formes: ['Raichu', 'Raichu-Alola'] },
    Raticate: { formes: ['Raticate', 'Raticate-Alola', 'Raticate-Alola-Totem'] },
    Rattata: { formes: ['Rattata', 'Rattata-Alola'] },
    Sandshrew: { formes: ['Sandshrew', 'Sandshrew-Alola'] },
    Sandslash: { formes: ['Sandslash', 'Sandslash-Alola'] },
    Solrock: { bs: { hp: 90 } },
    Swellow: { bs: { sa: 75 } },
    Torkoal: { ab: 'Drought' },
    Vanilluxe: { ab: 'Snow Warning' },
    Volbeat: { bs: { df: 75, sd: 85 } },
    Vulpix: { formes: ['Vulpix', 'Vulpix-Alola'] },
    Wingull: { ab: 'Hydration' },
    Woobat: { bs: { hp: 65 } },
    Zygarde: { formes: ['Zygarde', 'Zygarde-10%', 'Zygarde-Complete'], ab: 'Power Construct' },
    Araquanid: {
        t1: 'Water',
        t2: 'Bug',
        bs: { hp: 68, at: 70, df: 92, sa: 50, sd: 132, sp: 42 },
        ab: 'Water Bubble',
        w: 82,
        formes: ['Araquanid', 'Araquanid-Totem']
    },
    'Araquanid-Totem': {
        t1: 'Water',
        t2: 'Bug',
        bs: { hp: 68, at: 70, df: 92, sa: 50, sd: 132, sp: 42 },
        ab: 'Water Bubble',
        w: 217.5,
        isAlternateForme: true
    },
    Bewear: {
        t1: 'Normal',
        t2: 'Fighting',
        bs: { hp: 120, at: 125, df: 80, sa: 55, sd: 60, sp: 60 },
        ab: 'Fluffy',
        w: 135
    },
    Blacephalon: {
        t1: 'Fire',
        t2: 'Ghost',
        bs: { hp: 53, at: 127, df: 53, sa: 151, sd: 79, sp: 107 },
        w: 13,
        ab: 'Beast Boost',
        gender: 'N'
    },
    Bounsweet: {
        t1: 'Grass',
        bs: { hp: 42, at: 30, df: 38, sa: 30, sd: 38, sp: 32 },
        w: 3.2,
        canEvolve: true,
        ab: 'Sweet Veil'
    },
    Brionne: {
        t1: 'Water',
        bs: { hp: 60, at: 69, df: 69, sa: 91, sd: 81, sp: 50 },
        w: 17.5,
        canEvolve: true,
        ab: 'Torrent'
    },
    Bruxish: {
        t1: 'Water',
        t2: 'Psychic',
        bs: { hp: 68, at: 105, df: 70, sa: 70, sd: 70, sp: 92 },
        w: 19,
        ab: 'Strong Jaw'
    },
    Buzzwole: {
        t1: 'Bug',
        t2: 'Fighting',
        bs: { hp: 107, at: 139, df: 139, sa: 53, sd: 53, sp: 79 },
        w: 333.6,
        ab: 'Beast Boost',
        gender: 'N'
    },
    Caribolt: {
        t1: 'Grass',
        t2: 'Electric',
        bs: { hp: 84, at: 106, df: 82, sa: 77, sd: 80, sp: 106 },
        w: 140,
        ab: 'Galvanize'
    },
    Celesteela: {
        t1: 'Steel',
        t2: 'Flying',
        bs: { hp: 97, at: 101, df: 103, sa: 107, sd: 101, sp: 61 },
        w: 999.9,
        ab: 'Beast Boost',
        gender: 'N'
    },
    Charjabug: {
        t1: 'Bug',
        t2: 'Electric',
        bs: { hp: 57, at: 82, df: 95, sa: 55, sd: 75, sp: 36 },
        w: 10.5,
        canEvolve: true,
        ab: 'Battery'
    },
    Comfey: {
        t1: 'Fairy',
        bs: { hp: 51, at: 52, df: 90, sa: 82, sd: 110, sp: 100 },
        w: 0.3,
        ab: 'Triage'
    },
    Cosmoem: {
        t1: 'Psychic',
        bs: { hp: 43, at: 29, df: 131, sa: 29, sd: 131, sp: 37 },
        w: 999.9,
        canEvolve: true,
        gender: 'N',
        ab: 'Sturdy'
    },
    Cosmog: {
        t1: 'Psychic',
        bs: { hp: 43, at: 29, df: 31, sa: 29, sd: 31, sp: 37 },
        w: 0.1,
        canEvolve: true,
        gender: 'N',
        ab: 'Unaware'
    },
    Crabominable: {
        t1: 'Fighting',
        t2: 'Ice',
        bs: { hp: 97, at: 132, df: 77, sa: 62, sd: 67, sp: 43 },
        w: 180,
        ab: 'Iron Fist'
    },
    Crabrawler: {
        t1: 'Fighting',
        bs: { hp: 47, at: 82, df: 57, sa: 42, sd: 47, sp: 63 },
        w: 7,
        canEvolve: true,
        ab: 'Iron Fist'
    },
    Cutiefly: {
        t1: 'Bug',
        t2: 'Fairy',
        bs: { hp: 40, at: 45, df: 40, sa: 55, sd: 40, sp: 84 },
        w: 0.2,
        canEvolve: true,
        ab: 'Shield Dust'
    },
    Dartrix: {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 78, at: 75, df: 75, sa: 70, sd: 70, sp: 52 },
        w: 16,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Decidueye: {
        t1: 'Grass',
        t2: 'Ghost',
        bs: { hp: 78, at: 107, df: 75, sa: 100, sd: 100, sp: 70 },
        w: 36.6,
        ab: 'Overgrow'
    },
    Dewpider: {
        t1: 'Water',
        t2: 'Bug',
        bs: { hp: 38, at: 40, df: 52, sa: 40, sd: 72, sp: 27 },
        w: 4,
        canEvolve: true,
        ab: 'Water Bubble'
    },
    Dhelmise: {
        t1: 'Ghost',
        t2: 'Grass',
        bs: { hp: 70, at: 131, df: 100, sa: 86, sd: 90, sp: 40 },
        w: 210,
        gender: 'N',
        ab: 'Steelworker'
    },
    Drampa: {
        t1: 'Normal',
        t2: 'Dragon',
        bs: { hp: 78, at: 60, df: 85, sa: 135, sd: 91, sp: 36 },
        w: 185,
        ab: 'Sap Sipper'
    },
    'Diglett-Alola': {
        t1: 'Ground',
        t2: 'Steel',
        bs: { hp: 10, at: 55, df: 30, sa: 35, sd: 45, sp: 90 },
        w: 1,
        isAlternateForme: true,
        canEvolve: true,
        ab: 'Tangling Hair'
    },
    'Dugtrio-Alola': {
        t1: 'Ground',
        t2: 'Steel',
        bs: { hp: 35, at: 100, df: 60, sa: 50, sd: 70, sp: 110 },
        w: 66.6,
        isAlternateForme: true,
        ab: 'Tangling Hair'
    },
    Equilibra: {
        t1: 'Steel',
        t2: 'Ground',
        bs: { hp: 102, at: 50, df: 96, sa: 133, sd: 118, sp: 60 },
        w: 51.3,
        ab: 'Levitate'
    },
    'Exeggutor-Alola': {
        t1: 'Grass',
        t2: 'Dragon',
        bs: { hp: 95, at: 105, df: 85, sa: 125, sd: 75, sp: 45 },
        w: 415.6,
        isAlternateForme: true,
        ab: 'Harvest'
    },
    Fomantis: {
        t1: 'Grass',
        bs: { hp: 40, at: 55, df: 35, sa: 50, sd: 35, sp: 35 },
        w: 1.5,
        canEvolve: true,
        ab: 'Contrary'
    },
    'Geodude-Alola': {
        t1: 'Rock',
        t2: 'Electric',
        bs: { hp: 40, at: 80, df: 100, sa: 30, sd: 30, sp: 20 },
        w: 20.3,
        isAlternateForme: true,
        canEvolve: true,
        ab: 'Magnet Pull'
    },
    'Golem-Alola': {
        t1: 'Rock',
        t2: 'Electric',
        bs: { hp: 80, at: 120, df: 130, sa: 55, sd: 65, sp: 45 },
        w: 316,
        ab: 'Magnet Pull',
        isAlternateForme: true
    },
    Golisopod: {
        t1: 'Bug',
        t2: 'Water',
        bs: { hp: 75, at: 125, df: 140, sa: 60, sd: 90, sp: 40 },
        w: 108,
        ab: 'Emergency Exit'
    },
    'Graveler-Alola': {
        t1: 'Rock',
        t2: 'Electric',
        bs: { hp: 55, at: 95, df: 115, sa: 45, sd: 45, sp: 35 },
        w: 110,
        isAlternateForme: true,
        canEvolve: true,
        ab: 'Magnet Pull'
    },
    'Grimer-Alola': {
        t1: 'Poison',
        t2: 'Dark',
        bs: { hp: 80, at: 80, df: 50, sa: 40, sd: 50, sp: 25 },
        w: 42,
        isAlternateForme: true,
        canEvolve: true,
        ab: 'Poison Touch'
    },
    'Greninja-Ash': {
        t1: 'Water',
        t2: 'Dark',
        bs: { hp: 72, at: 145, df: 67, sa: 153, sd: 71, sp: 132 },
        w: 40,
        ab: 'Battle Bond',
        isAlternateForme: true
    },
    Grubbin: {
        t1: 'Bug',
        bs: { hp: 47, at: 62, df: 45, sa: 55, sd: 45, sp: 46 },
        w: 4.4,
        canEvolve: true,
        ab: 'Swarm'
    },
    Gumshoos: {
        t1: 'Normal',
        bs: { hp: 88, at: 110, df: 60, sa: 55, sd: 60, sp: 45 },
        w: 14.2,
        formes: ['Gumshoos', 'Gumshoos-Totem'],
        ab: 'Adaptability'
    },
    'Gumshoos-Totem': {
        t1: 'Normal',
        bs: { hp: 88, at: 110, df: 60, sa: 55, sd: 60, sp: 45 },
        w: 60,
        isAlternateForme: true,
        ab: 'Adaptability'
    },
    Guzzlord: {
        t1: 'Dark',
        t2: 'Dragon',
        bs: { hp: 223, at: 101, df: 53, sa: 97, sd: 53, sp: 43 },
        w: 888,
        ab: 'Beast Boost',
        gender: 'N'
    },
    'Hakamo-o': {
        t1: 'Dragon',
        t2: 'Fighting',
        bs: { hp: 55, at: 75, df: 90, sa: 65, sd: 70, sp: 65 },
        w: 47,
        canEvolve: true,
        ab: 'Bulletproof'
    },
    Incineroar: {
        t1: 'Fire',
        t2: 'Dark',
        bs: { hp: 95, at: 115, df: 90, sa: 80, sd: 90, sp: 60 },
        w: 83,
        ab: 'Intimidate'
    },
    'Jangmo-o': {
        t1: 'Dragon',
        bs: { hp: 45, at: 55, df: 65, sa: 45, sd: 45, sp: 45 },
        w: 29.7,
        canEvolve: true,
        ab: 'Bulletproof'
    },
    Jumbao: {
        t1: 'Grass',
        t2: 'Fairy',
        bs: { hp: 92, at: 63, df: 97, sa: 124, sd: 104, sp: 96 },
        w: 600,
        ab: 'Drought'
    },
    Kartana: {
        t1: 'Grass',
        t2: 'Steel',
        bs: { hp: 59, at: 181, df: 131, sa: 59, sd: 31, sp: 109 },
        w: 0.1,
        ab: 'Beast Boost',
        gender: 'N'
    },
    Komala: {
        t1: 'Normal',
        bs: { hp: 65, at: 115, df: 65, sa: 75, sd: 95, sp: 65 },
        w: 19.9,
        ab: 'Comatose'
    },
    'Kommo-o': {
        t1: 'Dragon',
        t2: 'Fighting',
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 },
        w: 78.2,
        formes: ['Kommo-o', 'Kommo-o-Totem'],
        ab: 'Bulletproof'
    },
    'Kommo-o-Totem': {
        t1: 'Dragon',
        t2: 'Fighting',
        bs: { hp: 75, at: 110, df: 125, sa: 100, sd: 105, sp: 85 },
        w: 207.5,
        ab: 'Overcoat',
        isAlternateForme: true
    },
    Litten: {
        t1: 'Fire',
        bs: { hp: 45, at: 65, df: 40, sa: 60, sd: 40, sp: 70 },
        w: 4.3,
        canEvolve: true,
        ab: 'Intimidate'
    },
    Lunala: {
        t1: 'Psychic',
        t2: 'Ghost',
        bs: { hp: 137, at: 113, df: 89, sa: 137, sd: 107, sp: 97 },
        w: 120,
        ab: 'Shadow Shield',
        gender: 'N'
    },
    Lurantis: {
        t1: 'Grass',
        bs: { hp: 70, at: 105, df: 90, sa: 80, sd: 90, sp: 45 },
        w: 19.5,
        formes: ['Lurantis', 'Lurantis-Totem'],
        ab: 'Contrary'
    },
    'Lurantis-Totem': {
        t1: 'Grass',
        bs: { hp: 70, at: 105, df: 90, sa: 80, sd: 90, sp: 45 },
        w: 58,
        ab: 'Leaf Guard',
        isAlternateForme: true
    },
    Lycanroc: {
        t1: 'Rock',
        bs: { hp: 75, at: 115, df: 65, sa: 55, sd: 65, sp: 112 },
        w: 25,
        formes: ['Lycanroc', 'Lycanroc-Dusk', 'Lycanroc-Midnight'],
        ab: 'Sand Rush'
    },
    'Lycanroc-Dusk': {
        t1: 'Rock',
        bs: { hp: 75, at: 117, df: 65, sa: 55, sd: 65, sp: 110 },
        w: 25,
        ab: 'Tough Claws',
        isAlternateForme: true
    },
    'Lycanroc-Midnight': {
        t1: 'Rock',
        bs: { hp: 85, at: 115, df: 75, sa: 55, sd: 75, sp: 82 },
        w: 25,
        isAlternateForme: true,
        ab: 'No Guard'
    },
    Magearna: {
        t1: 'Steel',
        t2: 'Fairy',
        bs: { hp: 80, at: 95, df: 115, sa: 130, sd: 115, sp: 65 },
        w: 80.5,
        gender: 'N',
        ab: 'Soul-Heart'
    },
    Mareanie: {
        t1: 'Poison',
        t2: 'Water',
        bs: { hp: 50, at: 53, df: 62, sa: 43, sd: 52, sp: 45 },
        w: 8,
        canEvolve: true,
        ab: 'Regenerator'
    },
    'Marowak-Alola': {
        t1: 'Fire',
        t2: 'Ghost',
        bs: { hp: 60, at: 80, df: 110, sa: 50, sd: 80, sp: 45 },
        w: 34,
        ab: 'Rock Head'
    },
    'Marowak-Alola-Totem': {
        t1: 'Fire',
        t2: 'Ghost',
        bs: { hp: 60, at: 80, df: 110, sa: 50, sd: 80, sp: 45 },
        w: 98,
        ab: 'Rock Head',
        isAlternateForme: true
    },
    Marshadow: {
        t1: 'Fighting',
        t2: 'Ghost',
        bs: { hp: 90, at: 125, df: 80, sa: 90, sd: 90, sp: 125 },
        w: 22.2,
        gender: 'N',
        ab: 'Technician'
    },
    Melmetal: {
        t1: 'Steel',
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        w: 800,
        gender: 'N',
        ab: 'Iron Fist'
    },
    Meltan: {
        t1: 'Steel',
        bs: { hp: 46, at: 65, df: 65, sa: 55, sd: 35, sp: 34 },
        w: 8,
        canEvolve: true,
        gender: 'N',
        ab: 'Magnet Pull'
    },
    'Meowth-Alola': {
        t1: 'Dark',
        bs: { hp: 40, at: 35, df: 35, sa: 50, sd: 40, sp: 90 },
        w: 4.2,
        isAlternateForme: true,
        canEvolve: true,
        ab: 'Technician'
    },
    Mimikyu: {
        t1: 'Ghost',
        t2: 'Fairy',
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        w: 0.7,
        formes: ['Mimikyu', 'Mimikyu-Totem'],
        ab: 'Disguise'
    },
    'Mimikyu-Totem': {
        t1: 'Ghost',
        t2: 'Fairy',
        bs: { hp: 55, at: 90, df: 80, sa: 50, sd: 105, sp: 96 },
        w: 2.8,
        isAlternateForme: true,
        ab: 'Disguise'
    },
    Minior: {
        t1: 'Rock',
        t2: 'Flying',
        bs: { hp: 60, at: 100, df: 60, sa: 100, sd: 60, sp: 120 },
        w: 0.3,
        formes: ['Minior', 'Minior-Meteor'],
        gender: 'N',
        ab: 'Shields Down'
    },
    'Minior-Meteor': {
        t1: 'Rock',
        t2: 'Flying',
        bs: { hp: 60, at: 60, df: 100, sa: 60, sd: 100, sp: 60 },
        w: 40,
        isAlternateForme: true,
        ab: 'Shields Down'
    },
    Morelull: {
        t1: 'Grass',
        t2: 'Fairy',
        bs: { hp: 40, at: 35, df: 55, sa: 65, sd: 75, sp: 15 },
        w: 1.5,
        canEvolve: true,
        ab: 'Effect Spore'
    },
    Mudbray: {
        t1: 'Ground',
        bs: { hp: 70, at: 100, df: 70, sa: 45, sd: 55, sp: 45 },
        w: 110,
        canEvolve: true,
        ab: 'Stamina'
    },
    Mudsdale: {
        t1: 'Ground',
        bs: { hp: 100, at: 125, df: 100, sa: 55, sd: 85, sp: 35 },
        w: 920,
        ab: 'Stamina'
    },
    'Muk-Alola': {
        t1: 'Poison',
        t2: 'Dark',
        bs: { hp: 105, at: 105, df: 75, sa: 65, sd: 100, sp: 50 },
        w: 52,
        isAlternateForme: true,
        ab: 'Poison Touch'
    },
    Mumbao: {
        t1: 'Grass',
        t2: 'Fairy',
        bs: { hp: 55, at: 30, df: 64, sa: 87, sd: 73, sp: 66 },
        w: 250,
        canEvolve: true,
        ab: 'Trace'
    },
    Naganadel: {
        t1: 'Poison',
        t2: 'Dragon',
        bs: { hp: 73, at: 73, df: 73, sa: 127, sd: 73, sp: 121 },
        w: 150,
        ab: 'Beast Boost',
        gender: 'N'
    },
    Necrozma: {
        t1: 'Psychic',
        bs: { hp: 97, at: 107, df: 101, sa: 127, sd: 89, sp: 79 },
        w: 230,
        ab: 'Prism Armor',
        formes: ['Necrozma', 'Necrozma-Dawn-Wings', 'Necrozma-Dusk-Mane', 'Necrozma-Ultra'],
        gender: 'N'
    },
    'Necrozma-Dawn-Wings': {
        t1: 'Psychic',
        t2: 'Ghost',
        bs: { hp: 97, at: 113, df: 109, sa: 157, sd: 127, sp: 77 },
        w: 350,
        ab: 'Prism Armor',
        isAlternateForme: true,
        gender: 'N'
    },
    'Necrozma-Dusk-Mane': {
        t1: 'Psychic',
        t2: 'Steel',
        bs: { hp: 97, at: 157, df: 127, sa: 113, sd: 109, sp: 77 },
        w: 460,
        ab: 'Prism Armor',
        isAlternateForme: true,
        gender: 'N'
    },
    'Necrozma-Ultra': {
        t1: 'Psychic',
        t2: 'Dragon',
        bs: { hp: 97, at: 167, df: 97, sa: 167, sd: 97, sp: 129 },
        w: 230,
        ab: 'Neuroforce',
        isAlternateForme: true,
        gender: 'N'
    },
    Nihilego: {
        t1: 'Rock',
        t2: 'Poison',
        bs: { hp: 109, at: 53, df: 47, sa: 127, sd: 131, sp: 103 },
        w: 55.5,
        ab: 'Beast Boost',
        gender: 'N'
    },
    'Ninetales-Alola': {
        t1: 'Ice',
        t2: 'Fairy',
        bs: { hp: 73, at: 67, df: 75, sa: 81, sd: 100, sp: 109 },
        w: 19.9,
        ab: 'Snow Warning',
        isAlternateForme: true
    },
    Oranguru: {
        t1: 'Normal',
        t2: 'Psychic',
        bs: { hp: 90, at: 60, df: 80, sa: 90, sd: 110, sp: 60 },
        w: 76,
        canEvolve: true,
        ab: 'Inner Focus'
    },
    Oricorio: {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        w: 3.4,
        ab: 'Dancer',
        formes: ['Oricorio', "Oricorio-Pa'u", 'Oricorio-Pom-Pom', 'Oricorio-Sensu']
    },
    "Oricorio-Pa'u": {
        t1: 'Psychic',
        t2: 'Flying',
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        w: 3.4,
        ab: 'Dancer',
        isAlternateForme: true
    },
    'Oricorio-Pom-Pom': {
        t1: 'Electric',
        t2: 'Flying',
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        w: 3.4,
        ab: 'Dancer',
        isAlternateForme: true
    },
    'Oricorio-Sensu': {
        t1: 'Ghost',
        t2: 'Flying',
        bs: { hp: 75, at: 70, df: 70, sa: 98, sd: 70, sp: 93 },
        w: 3.4,
        ab: 'Dancer',
        isAlternateForme: true
    },
    Pajantom: {
        t1: 'Dragon',
        t2: 'Ghost',
        bs: { hp: 84, at: 133, df: 71, sa: 51, sd: 111, sp: 101 },
        w: 3.1,
        ab: 'Comatose'
    },
    Palossand: {
        t1: 'Ghost',
        t2: 'Ground',
        bs: { hp: 85, at: 75, df: 110, sa: 100, sd: 75, sp: 35 },
        w: 250,
        ab: 'Water Compaction'
    },
    Passimian: {
        t1: 'Fighting',
        bs: { hp: 100, at: 120, df: 90, sa: 40, sd: 60, sp: 80 },
        w: 82.8,
        ab: 'Defiant'
    },
    'Persian-Alola': {
        t1: 'Dark',
        bs: { hp: 65, at: 60, df: 60, sa: 75, sd: 65, sp: 115 },
        w: 33,
        isAlternateForme: true,
        ab: 'Technician'
    },
    Pheromosa: {
        t1: 'Bug',
        t2: 'Fighting',
        bs: { hp: 71, at: 137, df: 37, sa: 137, sd: 37, sp: 151 },
        w: 25,
        ab: 'Beast Boost',
        gender: 'N'
    },
    'Pikachu-Alola': {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        w: 6,
        ab: 'Static',
        canEvolve: true
    },
    'Pikachu-Hoenn': {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        w: 6,
        ab: 'Static',
        canEvolve: true
    },
    'Pikachu-Kalos': {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        w: 6,
        ab: 'Static',
        canEvolve: true
    },
    'Pikachu-Partner': {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        w: 6,
        ab: 'Static',
        canEvolve: true
    },
    'Pikachu-Sinnoh': {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        w: 6,
        ab: 'Static',
        canEvolve: true
    },
    'Pikachu-Unova': {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 30, sp: 90, sl: 50 },
        w: 6,
        ab: 'Static',
        canEvolve: true
    },
    Pikipek: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 35, at: 75, df: 30, sa: 30, sd: 30, sp: 65 },
        w: 1.2,
        canEvolve: true,
        ab: 'Skill Link'
    },
    Poipole: {
        t1: 'Poison',
        bs: { hp: 67, at: 73, df: 67, sa: 73, sd: 67, sp: 73 },
        w: 1.8,
        ab: 'Beast Boost',
        canEvolve: true,
        gender: 'N'
    },
    Popplio: {
        t1: 'Water',
        bs: { hp: 50, at: 54, df: 54, sa: 66, sd: 56, sp: 40 },
        w: 7.5,
        canEvolve: true,
        ab: 'Torrent'
    },
    Primarina: {
        t1: 'Water',
        t2: 'Fairy',
        bs: { hp: 80, at: 74, df: 74, sa: 126, sd: 116, sp: 60 },
        w: 44,
        ab: 'Torrent'
    },
    Pyukumuku: {
        t1: 'Water',
        bs: { hp: 55, at: 60, df: 130, sa: 30, sd: 130, sp: 5 },
        w: 1.2,
        ab: 'Unaware'
    },
    'Raichu-Alola': {
        t1: 'Electric',
        t2: 'Psychic',
        bs: { hp: 60, at: 85, df: 50, sa: 95, sd: 85, sp: 110 },
        w: 21,
        isAlternateForme: true,
        ab: 'Surge Surfer'
    },
    'Raticate-Alola': {
        t1: 'Dark',
        t2: 'Normal',
        bs: { hp: 75, at: 71, df: 70, sa: 40, sd: 80, sp: 77 },
        w: 25.5,
        isAlternateForme: true,
        ab: 'Hustle'
    },
    'Raticate-Alola-Totem': {
        t1: 'Dark',
        t2: 'Normal',
        bs: { hp: 75, at: 71, df: 70, sa: 40, sd: 80, sp: 77 },
        w: 105,
        ab: 'Thick Fat',
        isAlternateForme: true
    },
    'Rattata-Alola': {
        t1: 'Dark',
        t2: 'Normal',
        bs: { hp: 30, at: 56, df: 35, sa: 25, sd: 35, sp: 72 },
        w: 3.8,
        isAlternateForme: true,
        canEvolve: true,
        ab: 'Hustle'
    },
    Ribombee: {
        t1: 'Bug',
        t2: 'Fairy',
        bs: { hp: 60, at: 55, df: 60, sa: 95, sd: 70, sp: 124 },
        w: 0.5,
        formes: ['Ribombee', 'Ribombee-Totem'],
        ab: 'Shield Dust'
    },
    'Ribombee-Totem': {
        t1: 'Bug',
        t2: 'Fairy',
        bs: { hp: 60, at: 55, df: 60, sa: 95, sd: 70, sp: 124 },
        w: 2,
        ab: 'Sweet Veil',
        isAlternateForme: true
    },
    Rockruff: {
        t1: 'Rock',
        bs: { hp: 45, at: 65, df: 40, sa: 30, sd: 40, sp: 60 },
        w: 9.2,
        canEvolve: true,
        ab: 'Vital Spirit'
    },
    Rowlet: {
        t1: 'Grass',
        t2: 'Flying',
        bs: { hp: 68, at: 55, df: 55, sa: 50, sd: 50, sp: 42 },
        w: 1.5,
        canEvolve: true,
        ab: 'Overgrow'
    },
    Salandit: {
        t1: 'Poison',
        t2: 'Fire',
        bs: { hp: 48, at: 44, df: 40, sa: 71, sd: 40, sp: 77 },
        w: 4.8,
        canEvolve: true,
        ab: 'Corrosion'
    },
    Salazzle: {
        t1: 'Poison',
        t2: 'Fire',
        bs: { hp: 68, at: 64, df: 60, sa: 111, sd: 60, sp: 117 },
        w: 22.2,
        formes: ['Salazzle', 'Salazzle-Totem'],
        ab: 'Corrosion'
    },
    'Salazzle-Totem': {
        t1: 'Poison',
        t2: 'Fire',
        bs: { hp: 68, at: 64, df: 60, sa: 111, sd: 60, sp: 117 },
        w: 81,
        ab: 'Corrosion',
        isAlternateForme: true
    },
    'Sandshrew-Alola': {
        t1: 'Ice',
        t2: 'Steel',
        bs: { hp: 50, at: 75, df: 90, sa: 10, sd: 35, sp: 40 },
        w: 40,
        isAlternateForme: true,
        canEvolve: true,
        ab: 'Slush Rush'
    },
    'Sandslash-Alola': {
        t1: 'Ice',
        t2: 'Steel',
        bs: { hp: 75, at: 100, df: 120, sa: 25, sd: 65, sp: 65 },
        w: 55,
        isAlternateForme: true,
        ab: 'Slush Rush'
    },
    Sandygast: {
        t1: 'Ghost',
        t2: 'Ground',
        bs: { hp: 55, at: 55, df: 80, sa: 70, sd: 45, sp: 15 },
        w: 70,
        canEvolve: true,
        ab: 'Water Compaction'
    },
    Shiinotic: {
        t1: 'Grass',
        t2: 'Fairy',
        bs: { hp: 60, at: 45, df: 80, sa: 90, sd: 100, sp: 30 },
        w: 11.5,
        ab: 'Effect Spore'
    },
    Silvally: {
        t1: 'Normal',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Bug': {
        t1: 'Bug',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Dark': {
        t1: 'Dark',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Dragon': {
        t1: 'Dragon',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Electric': {
        t1: 'Electric',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Fairy': {
        t1: 'Fairy',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Fighting': {
        t1: 'Fighting',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Fire': {
        t1: 'Fire',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Flying': {
        t1: 'Flying',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Ghost': {
        t1: 'Ghost',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Grass': {
        t1: 'Grass',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Ground': {
        t1: 'Ground',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Ice': {
        t1: 'Ice',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Poison': {
        t1: 'Poison',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Psychic': {
        t1: 'Psychic',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Rock': {
        t1: 'Rock',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Steel': {
        t1: 'Steel',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    'Silvally-Water': {
        t1: 'Water',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 95 },
        w: 100.5,
        ab: 'RKS System',
        gender: 'N'
    },
    Smokomodo: {
        t1: 'Fire',
        t2: 'Ground',
        bs: { hp: 88, at: 116, df: 67, sa: 88, sd: 78, sp: 97 },
        w: 205,
        ab: 'Technician'
    },
    Snaelstrom: {
        t1: 'Water',
        t2: 'Bug',
        bs: { hp: 91, at: 94, df: 110, sa: 80, sd: 97, sp: 63 },
        w: 120,
        ab: 'Poison Heal'
    },
    Solgaleo: {
        t1: 'Psychic',
        t2: 'Steel',
        bs: { hp: 137, at: 137, df: 107, sa: 113, sd: 89, sp: 97 },
        w: 230,
        ab: 'Full Metal Body',
        gender: 'N'
    },
    Stakataka: {
        t1: 'Rock',
        t2: 'Steel',
        bs: { hp: 61, at: 131, df: 211, sa: 53, sd: 101, sp: 13 },
        w: 820,
        ab: 'Beast Boost',
        gender: 'N'
    },
    Steenee: {
        t1: 'Grass',
        bs: { hp: 52, at: 40, df: 48, sa: 40, sd: 48, sp: 62 },
        w: 8.2,
        canEvolve: true,
        ab: 'Sweet Veil'
    },
    Stufful: {
        t1: 'Normal',
        t2: 'Fighting',
        bs: { hp: 70, at: 75, df: 50, sa: 45, sd: 50, sp: 50 },
        w: 6.8,
        ab: 'Fluffy',
        canEvolve: true
    },
    'Tapu Bulu': {
        t1: 'Grass',
        t2: 'Fairy',
        bs: { hp: 70, at: 130, df: 115, sa: 85, sd: 95, sp: 75 },
        w: 45.5,
        ab: 'Grassy Surge',
        gender: 'N'
    },
    'Tapu Fini': {
        t1: 'Water',
        t2: 'Fairy',
        bs: { hp: 70, at: 75, df: 115, sa: 95, sd: 130, sp: 85 },
        w: 21.2,
        ab: 'Misty Surge',
        gender: 'N'
    },
    'Tapu Koko': {
        t1: 'Electric',
        t2: 'Fairy',
        bs: { hp: 70, at: 115, df: 85, sa: 95, sd: 75, sp: 130 },
        w: 20.5,
        ab: 'Electric Surge',
        gender: 'N'
    },
    'Tapu Lele': {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 70, at: 85, df: 75, sa: 130, sd: 115, sp: 95 },
        w: 18.6,
        ab: 'Psychic Surge',
        gender: 'N'
    },
    Togedemaru: {
        t1: 'Electric',
        t2: 'Steel',
        bs: { hp: 65, at: 98, df: 63, sa: 40, sd: 73, sp: 96 },
        w: 3.3,
        ab: 'Lightning Rod',
        formes: ['Togedemaru', 'Togedemaru-Totem']
    },
    'Togedemaru-Totem': {
        t1: 'Electric',
        t2: 'Steel',
        bs: { hp: 65, at: 98, df: 63, sa: 40, sd: 73, sp: 96 },
        w: 13,
        ab: 'Sturdy',
        isAlternateForme: true
    },
    Torracat: {
        t1: 'Fire',
        bs: { hp: 65, at: 85, df: 50, sa: 80, sd: 50, sp: 90 },
        w: 25,
        canEvolve: true,
        ab: 'Intimidate'
    },
    Toucannon: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 80, at: 120, df: 75, sa: 75, sd: 75, sp: 60 },
        w: 26,
        ab: 'Sheer Force'
    },
    Toxapex: {
        t1: 'Poison',
        t2: 'Water',
        bs: { hp: 50, at: 63, df: 152, sa: 53, sd: 142, sp: 35 },
        w: 14.5,
        ab: 'Regenerator'
    },
    Trumbeak: {
        t1: 'Normal',
        t2: 'Flying',
        bs: { hp: 55, at: 85, df: 50, sa: 40, sd: 50, sp: 75 },
        w: 14.8,
        canEvolve: true,
        ab: 'Skill Link'
    },
    Tsareena: {
        t1: 'Grass',
        bs: { hp: 72, at: 120, df: 98, sa: 50, sd: 98, sp: 72 },
        w: 47.2,
        ab: 'Queenly Majesty'
    },
    Turtonator: {
        t1: 'Fire',
        t2: 'Dragon',
        bs: { hp: 60, at: 78, df: 135, sa: 91, sd: 85, sp: 36 },
        w: 212,
        ab: 'Shell Armor'
    },
    'Type: Null': {
        t1: 'Normal',
        bs: { hp: 95, at: 95, df: 95, sa: 95, sd: 95, sp: 59 },
        w: 120.5,
        ab: 'Battle Armor',
        canEvolve: true,
        gender: 'N'
    },
    Vikavolt: {
        t1: 'Bug',
        t2: 'Electric',
        bs: { hp: 77, at: 70, df: 90, sa: 145, sd: 75, sp: 43 },
        w: 45,
        ab: 'Levitate',
        formes: ['Vikavolt', 'Vikavolt-Totem']
    },
    'Vikavolt-Totem': {
        t1: 'Bug',
        t2: 'Electric',
        bs: { hp: 77, at: 70, df: 90, sa: 145, sd: 75, sp: 43 },
        w: 147.5,
        ab: 'Levitate',
        isAlternateForme: true
    },
    'Vulpix-Alola': {
        t1: 'Ice',
        bs: { hp: 38, at: 41, df: 40, sa: 50, sd: 65, sp: 65 },
        w: 9.9,
        isAlternateForme: true,
        canEvolve: true,
        ab: 'Snow Warning'
    },
    Wimpod: {
        t1: 'Bug',
        t2: 'Water',
        bs: { hp: 25, at: 35, df: 40, sa: 20, sd: 30, sp: 80 },
        w: 12,
        ab: 'Wimp Out',
        canEvolve: true
    },
    Wishiwashi: {
        t1: 'Water',
        bs: { hp: 45, at: 140, df: 130, sa: 140, sd: 135, sp: 30 },
        w: 0.3,
        formes: ['Wishiwashi', 'Wishiwashi-School'],
        ab: 'Schooling'
    },
    'Wishiwashi-School': {
        t1: 'Water',
        bs: { hp: 45, at: 140, df: 130, sa: 140, sd: 135, sp: 30 },
        w: 78.6,
        isAlternateForme: true,
        ab: 'Schooling'
    },
    Xurkitree: {
        t1: 'Electric',
        bs: { hp: 83, at: 89, df: 71, sa: 173, sd: 71, sp: 83 },
        w: 100,
        ab: 'Beast Boost',
        gender: 'N'
    },
    Yungoos: {
        t1: 'Normal',
        bs: { hp: 48, at: 70, df: 30, sa: 30, sd: 30, sp: 45 },
        w: 6,
        canEvolve: true,
        ab: 'Adaptability'
    },
    Zeraora: {
        t1: 'Electric',
        bs: { hp: 88, at: 112, df: 75, sa: 102, sd: 80, sp: 143 },
        w: 44.5,
        ab: 'Volt Absorb'
    },
    'Zygarde-10%': {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 54, at: 100, df: 71, sa: 61, sd: 85, sp: 115 },
        w: 33.5,
        ab: 'Power Construct',
        isAlternateForme: true,
        gender: 'N'
    },
    'Zygarde-Complete': {
        t1: 'Dragon',
        t2: 'Ground',
        bs: { hp: 216, at: 100, df: 121, sa: 91, sd: 95, sp: 85 },
        w: 610,
        ab: 'Power Construct',
        isAlternateForme: true,
        gender: 'N'
    }
});
var SS = util_1.extend(true, {}, SM, {
    'Aegislash-Shield': { bs: { df: 140, sd: 140 } },
    'Aegislash-Blade': { bs: { at: 140, sa: 140 } },
    'Aegislash-Both': { bs: { at: 140, df: 140, sa: 140, sd: 140 } },
    Butterfree: { formes: ['Butterfree', 'Butterfree-Gmax'] },
    Charizard: { formes: ['Charizard', 'Charizard-Mega-X', 'Charizard-Mega-Y', 'Charizard-Gmax'] },
    Corsola: { formes: ['Corsola', 'Corsola-Galar'] },
    Darmanitan: {
        formes: ['Darmanitan', 'Darmanitan-Zen', 'Darmanitan-Galar', 'Darmanitan-Galar-Zen']
    },
    Darumaka: { formes: ['Darumaka', 'Darumaka-Galar'] },
    Eevee: { formes: ['Eevee', 'Eevee-Gmax'] },
    "Farfetch'd": { formes: ["Farfetch'd", "Farfetch'd-Galar"] },
    Garbodor: { formes: ['Garbodor', 'Garbodor-Gmax'] },
    Gengar: { formes: ['Gengar', 'Gengar-Mega', 'Gengar-Gmax'] },
    Kingler: { formes: ['Kingler', 'Kingler-Gmax'] },
    Lapras: { formes: ['Lapras', 'Lapras-Gmax'] },
    Linoone: { formes: ['Linoone', 'Linoone-Galar'] },
    Machamp: { formes: ['Machamp', 'Machamp-Gmax'] },
    Melmetal: { formes: ['Melmetal', 'Melmetal-Gmax'] },
    Meowth: { formes: ['Meowth', 'Meowth-Alola', 'Meowth-Galar', 'Meowth-Gmax'] },
    Pikachu: { formes: ['Pikachu', 'Pikachu-Gmax'] },
    Ponyta: { formes: ['Ponyta', 'Ponyta-Galar'] },
    Rapidash: { formes: ['Rapidash', 'Rapidash-Galar'] },
    Slowpoke: { formes: ['Slowpoke', 'Slowpoke-Galar'] },
    Snorlax: { formes: ['Snorlax', 'Snorlax-Gmax'] },
    Stunfisk: { formes: ['Stunfisk', 'Stunfisk-Galar'] },
    Weezing: { formes: ['Weezing', 'Weezing-Galar'] },
    Yamask: { formes: ['Yamask', 'Yamask-Galar'] },
    Zigzagoon: { formes: ['Zigzagoon', 'Zigzagoon-Galar'] },
    Alcremie: {
        t1: 'Fairy',
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        w: 0.5,
        ab: 'Sweet Veil',
        formes: ['Alcremie', 'Alcremie-Gmax']
    },
    'Alcremie-Gmax': {
        t1: 'Fairy',
        bs: { hp: 65, at: 60, df: 75, sa: 110, sd: 121, sp: 64 },
        w: 0,
        ab: 'Sweet Veil',
        isAlternateForme: true
    },
    Appletun: {
        t1: 'Grass',
        t2: 'Dragon',
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        w: 13,
        ab: 'Ripen',
        formes: ['Appletun', 'Appletun-Gmax']
    },
    'Appletun-Gmax': {
        t1: 'Grass',
        t2: 'Dragon',
        bs: { hp: 110, at: 85, df: 80, sa: 100, sd: 80, sp: 30 },
        w: 0,
        ab: 'Ripen',
        isAlternateForme: true
    },
    Applin: {
        t1: 'Grass',
        t2: 'Dragon',
        bs: { hp: 40, at: 40, df: 80, sa: 40, sd: 40, sp: 20 },
        w: 0.5,
        ab: 'Ripen',
        canEvolve: true
    },
    Arctovish: {
        t1: 'Water',
        t2: 'Ice',
        bs: { hp: 90, at: 90, df: 100, sa: 80, sd: 90, sp: 55 },
        w: 175,
        ab: 'Water Absorb',
        gender: 'N'
    },
    Arctozolt: {
        t1: 'Electric',
        t2: 'Ice',
        bs: { hp: 90, at: 100, df: 90, sa: 90, sd: 80, sp: 55 },
        w: 150,
        ab: 'Volt Absorb',
        gender: 'N'
    },
    Arrokuda: {
        t1: 'Water',
        bs: { hp: 41, at: 63, df: 40, sa: 40, sd: 30, sp: 66 },
        w: 1,
        ab: 'Swift Swim',
        canEvolve: true
    },
    Barraskewda: {
        t1: 'Water',
        bs: { hp: 61, at: 123, df: 60, sa: 60, sd: 50, sp: 136 },
        w: 30,
        ab: 'Swift Swim'
    },
    Blipbug: {
        t1: 'Bug',
        bs: { hp: 25, at: 20, df: 20, sa: 25, sd: 45, sp: 45 },
        w: 8,
        ab: 'Swarm',
        canEvolve: true
    },
    Boltund: {
        t1: 'Electric',
        bs: { hp: 69, at: 90, df: 60, sa: 90, sd: 60, sp: 121 },
        w: 34,
        ab: 'Strong Jaw'
    },
    'Butterfree-Gmax': {
        t1: 'Bug',
        t2: 'Flying',
        bs: { hp: 60, at: 45, df: 50, sa: 90, sd: 80, sp: 70 },
        w: 0,
        ab: 'Compound Eyes',
        isAlternateForme: true
    },
    Carkol: {
        t1: 'Rock',
        t2: 'Fire',
        bs: { hp: 80, at: 60, df: 90, sa: 60, sd: 70, sp: 50 },
        w: 78,
        ab: 'Steam Engine',
        canEvolve: true
    },
    Centiskorch: {
        t1: 'Fire',
        t2: 'Bug',
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        w: 120,
        ab: 'Flash Fire',
        formes: ['Centiskorch', 'Centiskorch-Gmax']
    },
    'Centiskorch-Gmax': {
        t1: 'Fire',
        t2: 'Bug',
        bs: { hp: 100, at: 115, df: 65, sa: 90, sd: 90, sp: 65 },
        w: 0,
        ab: 'Flash Fire',
        isAlternateForme: true
    },
    'Charizard-Gmax': {
        t1: 'Fire',
        t2: 'Flying',
        bs: { hp: 78, at: 84, df: 78, sa: 109, sd: 85, sp: 100 },
        w: 0,
        ab: 'Blaze',
        isAlternateForme: true
    },
    Chewtle: {
        t1: 'Water',
        bs: { hp: 50, at: 64, df: 50, sa: 38, sd: 38, sp: 44 },
        w: 8.5,
        ab: 'Strong Jaw',
        canEvolve: true
    },
    Cinderace: {
        t1: 'Fire',
        bs: { hp: 80, at: 116, df: 75, sa: 65, sd: 75, sp: 119 },
        w: 33,
        ab: 'Blaze'
    },
    Clobbopus: {
        t1: 'Fighting',
        bs: { hp: 50, at: 68, df: 60, sa: 50, sd: 50, sp: 32 },
        w: 4,
        ab: 'Limber',
        canEvolve: true
    },
    Coalossal: {
        t1: 'Rock',
        t2: 'Fire',
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        w: 310.5,
        ab: 'Steam Engine',
        formes: ['Coalossal', 'Coalossal-Gmax']
    },
    'Coalossal-Gmax': {
        t1: 'Rock',
        t2: 'Fire',
        bs: { hp: 110, at: 80, df: 120, sa: 80, sd: 90, sp: 30 },
        w: 0,
        ab: 'Steam Engine',
        isAlternateForme: true
    },
    Copperajah: {
        t1: 'Steel',
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        w: 650,
        ab: 'Sheer Force',
        formes: ['Copperajah', 'Copperajah-Gmax']
    },
    'Copperajah-Gmax': {
        t1: 'Steel',
        bs: { hp: 122, at: 130, df: 69, sa: 80, sd: 69, sp: 30 },
        w: 0,
        ab: 'Sheer Force',
        isAlternateForme: true
    },
    'Corsola-Galar': {
        t1: 'Ghost',
        bs: { hp: 60, at: 55, df: 100, sa: 65, sd: 100, sp: 30 },
        w: 0.5,
        ab: 'Weak Armor',
        canEvolve: true,
        isAlternateForme: true
    },
    Corviknight: {
        t1: 'Flying',
        t2: 'Steel',
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        w: 75,
        ab: 'Pressure',
        formes: ['Corviknight', 'Corviknight-Gmax']
    },
    'Corviknight-Gmax': {
        t1: 'Flying',
        t2: 'Steel',
        bs: { hp: 98, at: 87, df: 105, sa: 53, sd: 85, sp: 67 },
        w: 0,
        ab: 'Pressure',
        isAlternateForme: true
    },
    Corvisquire: {
        t1: 'Flying',
        bs: { hp: 68, at: 67, df: 55, sa: 43, sd: 55, sp: 77 },
        w: 16,
        ab: 'Keen Eye',
        canEvolve: true
    },
    Cramorant: {
        t1: 'Flying',
        t2: 'Water',
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        w: 18,
        ab: 'Gulp Missile',
        formes: ['Cramorant', 'Cramorant-Gorging', 'Cramorant-Gulping']
    },
    'Cramorant-Gorging': {
        t1: 'Flying',
        t2: 'Water',
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        w: 18,
        ab: 'Gulp Missile',
        isAlternateForme: true
    },
    'Cramorant-Gulping': {
        t1: 'Flying',
        t2: 'Water',
        bs: { hp: 70, at: 85, df: 55, sa: 85, sd: 95, sp: 85 },
        w: 18,
        ab: 'Gulp Missile',
        isAlternateForme: true
    },
    Cufant: {
        t1: 'Steel',
        bs: { hp: 72, at: 80, df: 49, sa: 40, sd: 49, sp: 40 },
        w: 100,
        ab: 'Sheer Force',
        canEvolve: true
    },
    Cursola: {
        t1: 'Ghost',
        bs: { hp: 60, at: 95, df: 50, sa: 145, sd: 130, sp: 30 },
        w: 0.4,
        ab: 'Weak Armor'
    },
    'Darmanitan-Galar': {
        t1: 'Ice',
        bs: { hp: 105, at: 140, df: 55, sa: 30, sd: 55, sp: 95 },
        w: 120,
        ab: 'Gorilla Tactics',
        isAlternateForme: true
    },
    'Darmanitan-Galar-Zen': {
        t1: 'Ice',
        t2: 'Fire',
        bs: { hp: 105, at: 160, df: 55, sa: 30, sd: 55, sp: 135 },
        w: 120,
        ab: 'Zen Mode',
        isAlternateForme: true
    },
    'Darumaka-Galar': {
        t1: 'Ice',
        bs: { hp: 70, at: 90, df: 45, sa: 15, sd: 45, sp: 50 },
        w: 40,
        ab: 'Hustle',
        canEvolve: true,
        isAlternateForme: true
    },
    Dottler: {
        t1: 'Bug',
        t2: 'Psychic',
        bs: { hp: 50, at: 35, df: 80, sa: 50, sd: 90, sp: 30 },
        w: 19.5,
        ab: 'Swarm',
        canEvolve: true
    },
    Dracovish: {
        t1: 'Water',
        t2: 'Dragon',
        bs: { hp: 90, at: 90, df: 100, sa: 70, sd: 80, sp: 75 },
        w: 215,
        ab: 'Water Absorb',
        gender: 'N'
    },
    Dracozolt: {
        t1: 'Electric',
        t2: 'Dragon',
        bs: { hp: 90, at: 100, df: 90, sa: 80, sd: 70, sp: 75 },
        w: 190,
        ab: 'Volt Absorb',
        gender: 'N'
    },
    Dragapult: {
        t1: 'Dragon',
        t2: 'Ghost',
        bs: { hp: 88, at: 120, df: 75, sa: 100, sd: 75, sp: 142 },
        w: 50,
        ab: 'Clear Body'
    },
    Drakloak: {
        t1: 'Dragon',
        t2: 'Ghost',
        bs: { hp: 68, at: 80, df: 50, sa: 60, sd: 50, sp: 102 },
        w: 11,
        ab: 'Clear Body',
        canEvolve: true
    },
    Drednaw: {
        t1: 'Water',
        t2: 'Rock',
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        w: 115.5,
        ab: 'Strong Jaw',
        formes: ['Drednaw', 'Drednaw-Gmax']
    },
    'Drednaw-Gmax': {
        t1: 'Water',
        t2: 'Rock',
        bs: { hp: 90, at: 115, df: 90, sa: 48, sd: 68, sp: 74 },
        w: 0,
        ab: 'Strong Jaw',
        isAlternateForme: true
    },
    Dreepy: {
        t1: 'Dragon',
        t2: 'Ghost',
        bs: { hp: 28, at: 60, df: 30, sa: 40, sd: 30, sp: 82 },
        w: 2,
        ab: 'Clear Body',
        canEvolve: true
    },
    Drizzile: {
        t1: 'Water',
        bs: { hp: 65, at: 60, df: 55, sa: 95, sd: 55, sp: 90 },
        w: 11.5,
        ab: 'Torrent',
        canEvolve: true
    },
    Dubwool: {
        t1: 'Normal',
        bs: { hp: 72, at: 80, df: 100, sa: 60, sd: 90, sp: 88 },
        w: 43,
        ab: 'Fluffy'
    },
    Duraludon: {
        t1: 'Steel',
        t2: 'Dragon',
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        w: 40,
        ab: 'Light Metal',
        formes: ['Duraludon', 'Duraludon-Gmax']
    },
    'Duraludon-Gmax': {
        t1: 'Steel',
        t2: 'Dragon',
        bs: { hp: 70, at: 95, df: 115, sa: 120, sd: 50, sp: 85 },
        w: 0,
        ab: 'Light Metal',
        isAlternateForme: true
    },
    'Eevee-Gmax': {
        t1: 'Normal',
        bs: { hp: 55, at: 55, df: 50, sa: 45, sd: 65, sp: 55 },
        w: 0,
        ab: 'Run Away',
        isAlternateForme: true
    },
    Eiscue: {
        t1: 'Ice',
        bs: { hp: 75, at: 80, df: 110, sa: 65, sd: 90, sp: 50 },
        w: 89,
        ab: 'Ice Face',
        formes: ['Eiscue', 'Eiscue-Noice']
    },
    'Eiscue-Noice': {
        t1: 'Ice',
        bs: { hp: 75, at: 80, df: 70, sa: 65, sd: 50, sp: 130 },
        w: 89,
        ab: 'Ice Face',
        isAlternateForme: true
    },
    Eldegoss: {
        t1: 'Grass',
        bs: { hp: 60, at: 50, df: 90, sa: 80, sd: 120, sp: 60 },
        w: 2.5,
        ab: 'Cotton Down'
    },
    Eternatus: {
        t1: 'Poison',
        t2: 'Dragon',
        bs: { hp: 140, at: 85, df: 95, sa: 145, sd: 95, sp: 130 },
        w: 950,
        ab: 'Pressure',
        gender: 'N',
        formes: ['Eternatus', 'Eternatus-Eternamax']
    },
    'Eternatus-Eternamax': {
        t1: 'Poison',
        t2: 'Dragon',
        bs: { hp: 255, at: 115, df: 250, sa: 125, sd: 250, sp: 130 },
        w: 950,
        ab: 'Pressure',
        gender: 'N',
        isAlternateForme: true
    },
    Falinks: {
        t1: 'Fighting',
        bs: { hp: 65, at: 100, df: 100, sa: 70, sd: 60, sp: 75 },
        w: 62,
        ab: 'Battle Armor',
        gender: 'N'
    },
    "Farfetch'd-Galar": {
        t1: 'Fighting',
        bs: { hp: 52, at: 95, df: 55, sa: 58, sd: 62, sp: 55 },
        w: 15,
        ab: 'Steadfast',
        canEvolve: true,
        isAlternateForme: true
    },
    Flapple: {
        t1: 'Grass',
        t2: 'Dragon',
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        w: 1,
        ab: 'Ripen',
        formes: ['Flapple', 'Flapple-Gmax']
    },
    'Flapple-Gmax': {
        t1: 'Grass',
        t2: 'Dragon',
        bs: { hp: 70, at: 110, df: 80, sa: 95, sd: 60, sp: 70 },
        w: 0,
        ab: 'Ripen',
        isAlternateForme: true
    },
    Frosmoth: {
        t1: 'Ice',
        t2: 'Bug',
        bs: { hp: 70, at: 65, df: 60, sa: 125, sd: 90, sp: 65 },
        w: 42,
        ab: 'Shield Dust'
    },
    'Garbodor-Gmax': {
        t1: 'Poison',
        bs: { hp: 80, at: 95, df: 82, sa: 60, sd: 82, sp: 75 },
        w: 0,
        ab: 'Stench',
        isAlternateForme: true
    },
    'Gengar-Gmax': {
        t1: 'Ghost',
        t2: 'Poison',
        bs: { hp: 60, at: 65, df: 60, sa: 130, sd: 75, sp: 110 },
        w: 0,
        ab: 'Cursed Body',
        isAlternateForme: true
    },
    Gossifleur: {
        t1: 'Grass',
        bs: { hp: 40, at: 40, df: 60, sa: 40, sd: 60, sp: 10 },
        w: 2.2,
        ab: 'Cotton Down',
        canEvolve: true
    },
    Grapploct: {
        t1: 'Fighting',
        bs: { hp: 80, at: 118, df: 90, sa: 70, sd: 80, sp: 42 },
        w: 39,
        ab: 'Limber'
    },
    Greedent: {
        t1: 'Normal',
        bs: { hp: 120, at: 95, df: 95, sa: 55, sd: 75, sp: 20 },
        w: 6,
        ab: 'Cheek Pouch'
    },
    Grimmsnarl: {
        t1: 'Dark',
        t2: 'Fairy',
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        w: 61,
        ab: 'Prankster',
        formes: ['Grimmsnarl', 'Grimmsnarl-Gmax']
    },
    'Grimmsnarl-Gmax': {
        t1: 'Dark',
        t2: 'Fairy',
        bs: { hp: 95, at: 120, df: 65, sa: 95, sd: 75, sp: 60 },
        w: 0,
        ab: 'Prankster',
        isAlternateForme: true
    },
    Grookey: {
        t1: 'Grass',
        bs: { hp: 50, at: 65, df: 50, sa: 40, sd: 40, sp: 65 },
        w: 5,
        ab: 'Overgrow',
        canEvolve: true
    },
    Hatenna: {
        t1: 'Psychic',
        bs: { hp: 42, at: 30, df: 45, sa: 56, sd: 53, sp: 39 },
        w: 3.4,
        ab: 'Healer',
        canEvolve: true
    },
    Hatterene: {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        w: 5.1,
        ab: 'Healer',
        formes: ['Hatterene', 'Hatterene-Gmax']
    },
    'Hatterene-Gmax': {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 57, at: 90, df: 95, sa: 136, sd: 103, sp: 29 },
        w: 0,
        ab: 'Healer',
        isAlternateForme: true
    },
    Hattrem: {
        t1: 'Psychic',
        bs: { hp: 57, at: 40, df: 65, sa: 86, sd: 73, sp: 49 },
        w: 4.8,
        ab: 'Healer',
        canEvolve: true
    },
    Impidimp: {
        t1: 'Dark',
        t2: 'Fairy',
        bs: { hp: 45, at: 45, df: 30, sa: 55, sd: 40, sp: 50 },
        w: 5.5,
        ab: 'Prankster',
        canEvolve: true
    },
    Indeedee: {
        t1: 'Psychic',
        t2: 'Normal',
        bs: { hp: 60, at: 65, df: 55, sa: 105, sd: 95, sp: 95 },
        w: 28,
        ab: 'Inner Focus',
        formes: ['Indeedee', 'Indeedee-F']
    },
    'Indeedee-F': {
        t1: 'Psychic',
        t2: 'Normal',
        bs: { hp: 70, at: 55, df: 65, sa: 95, sd: 105, sp: 85 },
        w: 28,
        ab: 'Own Tempo',
        isAlternateForme: true
    },
    Inteleon: {
        t1: 'Water',
        bs: { hp: 70, at: 85, df: 65, sa: 125, sd: 65, sp: 120 },
        w: 45.2,
        ab: 'Torrent'
    },
    'Kingler-Gmax': {
        t1: 'Water',
        bs: { hp: 55, at: 130, df: 115, sa: 50, sd: 50, sp: 75 },
        w: 0,
        ab: 'Hyper Cutter',
        isAlternateForme: true
    },
    'Lapras-Gmax': {
        t1: 'Water',
        t2: 'Ice',
        bs: { hp: 130, at: 85, df: 80, sa: 85, sd: 95, sp: 60 },
        w: 0,
        ab: 'Water Absorb',
        isAlternateForme: true
    },
    'Linoone-Galar': {
        t1: 'Dark',
        t2: 'Normal',
        bs: { hp: 78, at: 70, df: 61, sa: 50, sd: 61, sp: 100 },
        w: 32.5,
        ab: 'Pickup',
        canEvolve: true,
        isAlternateForme: true
    },
    'Machamp-Gmax': {
        t1: 'Fighting',
        bs: { hp: 90, at: 130, df: 80, sa: 65, sd: 85, sp: 55 },
        w: 0,
        ab: 'Guts',
        isAlternateForme: true
    },
    'Melmetal-Gmax': {
        t1: 'Steel',
        bs: { hp: 135, at: 143, df: 143, sa: 80, sd: 65, sp: 34 },
        w: 0,
        ab: 'Iron Fist',
        isAlternateForme: true,
        gender: 'N'
    },
    'Meowth-Galar': {
        t1: 'Steel',
        bs: { hp: 50, at: 65, df: 55, sa: 40, sd: 40, sp: 40 },
        w: 7.5,
        ab: 'Pickup',
        canEvolve: true,
        isAlternateForme: true
    },
    'Meowth-Gmax': {
        t1: 'Normal',
        bs: { hp: 40, at: 45, df: 35, sa: 40, sd: 40, sp: 90 },
        w: 0,
        ab: 'Pickup',
        isAlternateForme: true
    },
    Milcery: {
        t1: 'Fairy',
        bs: { hp: 45, at: 40, df: 40, sa: 50, sd: 61, sp: 34 },
        w: 0.3,
        ab: 'Sweet Veil',
        canEvolve: true
    },
    Morgrem: {
        t1: 'Dark',
        t2: 'Fairy',
        bs: { hp: 65, at: 60, df: 45, sa: 75, sd: 55, sp: 70 },
        w: 12.5,
        ab: 'Prankster',
        canEvolve: true
    },
    Morpeko: {
        t1: 'Electric',
        t2: 'Dark',
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        w: 3,
        ab: 'Hunger Switch',
        formes: ['Morpeko', 'Morpeko-Hangry']
    },
    'Morpeko-Hangry': {
        t1: 'Electric',
        t2: 'Dark',
        bs: { hp: 58, at: 95, df: 58, sa: 70, sd: 58, sp: 97 },
        w: 3,
        ab: 'Hunger Switch',
        isAlternateForme: true
    },
    'Mr. Mime-Galar': {
        t1: 'Ice',
        t2: 'Psychic',
        bs: { hp: 50, at: 65, df: 65, sa: 90, sd: 90, sp: 100 },
        w: 56.8,
        ab: 'Vital Spirit',
        canEvolve: true,
        isAlternateForme: true
    },
    'Mr. Rime': {
        t1: 'Ice',
        t2: 'Psychic',
        bs: { hp: 80, at: 85, df: 75, sa: 110, sd: 100, sp: 70 },
        w: 58.2,
        ab: 'Tangled Feet'
    },
    Nickit: {
        t1: 'Dark',
        bs: { hp: 40, at: 28, df: 28, sa: 47, sd: 52, sp: 50 },
        w: 8.9,
        ab: 'Run Away',
        canEvolve: true
    },
    Obstagoon: {
        t1: 'Dark',
        t2: 'Normal',
        bs: { hp: 93, at: 90, df: 101, sa: 60, sd: 81, sp: 95 },
        w: 46,
        ab: 'Reckless'
    },
    Orbeetle: {
        t1: 'Bug',
        t2: 'Psychic',
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        w: 40.8,
        ab: 'Swarm',
        formes: ['Orbeetle', 'Orbeetle-Gmax']
    },
    'Orbeetle-Gmax': {
        t1: 'Bug',
        t2: 'Psychic',
        bs: { hp: 60, at: 45, df: 110, sa: 80, sd: 120, sp: 90 },
        w: 0,
        ab: 'Swarm',
        isAlternateForme: true
    },
    Perrserker: {
        t1: 'Steel',
        bs: { hp: 70, at: 110, df: 100, sa: 50, sd: 60, sp: 50 },
        w: 28,
        ab: 'Battle Armor'
    },
    'Pikachu-Gmax': {
        t1: 'Electric',
        bs: { hp: 35, at: 55, df: 40, sa: 50, sd: 50, sp: 90 },
        w: 0,
        ab: 'Static',
        isAlternateForme: true
    },
    Pincurchin: {
        t1: 'Electric',
        bs: { hp: 48, at: 101, df: 95, sa: 91, sd: 85, sp: 15 },
        w: 1,
        ab: 'Lightning Rod'
    },
    Polteageist: {
        t1: 'Ghost',
        bs: { hp: 60, at: 65, df: 65, sa: 134, sd: 114, sp: 70 },
        w: 0.4,
        ab: 'Weak Armor',
        gender: 'N'
    },
    'Ponyta-Galar': {
        t1: 'Psychic',
        bs: { hp: 50, at: 85, df: 55, sa: 65, sd: 65, sp: 90 },
        w: 24,
        ab: 'Run Away',
        canEvolve: true,
        isAlternateForme: true
    },
    Raboot: {
        t1: 'Fire',
        bs: { hp: 65, at: 86, df: 60, sa: 55, sd: 60, sp: 94 },
        w: 9,
        ab: 'Blaze',
        canEvolve: true
    },
    'Rapidash-Galar': {
        t1: 'Psychic',
        t2: 'Fairy',
        bs: { hp: 65, at: 100, df: 70, sa: 80, sd: 80, sp: 105 },
        w: 80,
        ab: 'Run Away',
        isAlternateForme: true
    },
    Rillaboom: {
        t1: 'Grass',
        bs: { hp: 100, at: 125, df: 90, sa: 60, sd: 70, sp: 85 },
        w: 90,
        ab: 'Overgrow'
    },
    Rolycoly: {
        t1: 'Rock',
        bs: { hp: 30, at: 40, df: 50, sa: 40, sd: 50, sp: 30 },
        w: 12,
        ab: 'Steam Engine',
        canEvolve: true
    },
    Rookidee: {
        t1: 'Flying',
        bs: { hp: 38, at: 47, df: 35, sa: 33, sd: 35, sp: 57 },
        w: 1.8,
        ab: 'Keen Eye',
        canEvolve: true
    },
    Runerigus: {
        t1: 'Ground',
        t2: 'Ghost',
        bs: { hp: 58, at: 95, df: 145, sa: 50, sd: 105, sp: 30 },
        w: 66.6,
        ab: 'Wandering Spirit'
    },
    Sandaconda: {
        t1: 'Ground',
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        w: 65.5,
        ab: 'Sand Spit',
        formes: ['Sandaconda', 'Sandaconda-Gmax']
    },
    'Sandaconda-Gmax': {
        t1: 'Ground',
        bs: { hp: 72, at: 107, df: 125, sa: 65, sd: 70, sp: 71 },
        w: 0,
        ab: 'Sand Spit',
        isAlternateForme: true
    },
    Scorbunny: {
        t1: 'Fire',
        bs: { hp: 50, at: 71, df: 40, sa: 40, sd: 40, sp: 69 },
        w: 4.5,
        ab: 'Blaze',
        canEvolve: true
    },
    Silicobra: {
        t1: 'Ground',
        bs: { hp: 52, at: 57, df: 75, sa: 35, sd: 50, sp: 46 },
        w: 7.6,
        ab: 'Sand Spit',
        canEvolve: true
    },
    Sinistea: {
        t1: 'Ghost',
        bs: { hp: 40, at: 45, df: 45, sa: 74, sd: 54, sp: 50 },
        w: 0.2,
        ab: 'Weak Armor',
        canEvolve: true,
        gender: 'N'
    },
    "Sirfetch'd": {
        t1: 'Fighting',
        bs: { hp: 62, at: 135, df: 95, sa: 68, sd: 82, sp: 65 },
        w: 117,
        ab: 'Steadfast'
    },
    Sizzlipede: {
        t1: 'Fire',
        t2: 'Bug',
        bs: { hp: 50, at: 65, df: 45, sa: 50, sd: 50, sp: 45 },
        w: 1,
        ab: 'Flash Fire',
        canEvolve: true
    },
    Skwovet: {
        t1: 'Normal',
        bs: { hp: 70, at: 55, df: 55, sa: 35, sd: 35, sp: 25 },
        w: 2.5,
        ab: 'Cheek Pouch',
        canEvolve: true
    },
    'Slowpoke-Galar': {
        t1: 'Psychic',
        bs: { hp: 90, at: 65, df: 65, sa: 40, sd: 40, sp: 15 },
        w: 36,
        ab: 'Own Tempo',
        canEvolve: true,
        isAlternateForme: true
    },
    Snom: {
        t1: 'Ice',
        t2: 'Bug',
        bs: { hp: 30, at: 25, df: 35, sa: 45, sd: 30, sp: 20 },
        w: 3.8,
        ab: 'Shield Dust',
        canEvolve: true
    },
    'Snorlax-Gmax': {
        t1: 'Normal',
        bs: { hp: 160, at: 110, df: 65, sa: 65, sd: 110, sp: 30 },
        w: 0,
        ab: 'Immunity',
        isAlternateForme: true
    },
    Sobble: {
        t1: 'Water',
        bs: { hp: 50, at: 40, df: 40, sa: 70, sd: 40, sp: 70 },
        w: 4,
        ab: 'Torrent',
        canEvolve: true
    },
    Stonjourner: {
        t1: 'Rock',
        bs: { hp: 100, at: 125, df: 135, sa: 20, sd: 20, sp: 70 },
        w: 520,
        ab: 'Power Spot'
    },
    'Stunfisk-Galar': {
        t1: 'Ground',
        t2: 'Steel',
        bs: { hp: 109, at: 81, df: 99, sa: 66, sd: 84, sp: 32 },
        w: 20.5,
        ab: 'Mimicry',
        isAlternateForme: true
    },
    Thievul: {
        t1: 'Dark',
        bs: { hp: 70, at: 58, df: 58, sa: 87, sd: 92, sp: 90 },
        w: 19.9,
        ab: 'Run Away'
    },
    Thwackey: {
        t1: 'Grass',
        bs: { hp: 70, at: 85, df: 70, sa: 55, sd: 60, sp: 80 },
        w: 14,
        ab: 'Overgrow',
        canEvolve: true
    },
    Toxel: {
        t1: 'Electric',
        t2: 'Poison',
        bs: { hp: 40, at: 38, df: 35, sa: 54, sd: 35, sp: 40 },
        w: 11,
        ab: 'Rattled',
        canEvolve: true
    },
    Toxtricity: {
        t1: 'Electric',
        t2: 'Poison',
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        w: 40,
        ab: 'Punk Rock',
        formes: ['Toxtricity', 'Toxtricity-Gmax', 'Toxtricity-Low-Key']
    },
    'Toxtricity-Gmax': {
        t1: 'Electric',
        t2: 'Poison',
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        w: 0,
        ab: 'Punk Rock',
        isAlternateForme: true
    },
    'Toxtricity-Low-Key': {
        t1: 'Electric',
        t2: 'Poison',
        bs: { hp: 75, at: 98, df: 70, sa: 114, sd: 70, sp: 75 },
        w: 40,
        ab: 'Punk Rock',
        isAlternateForme: true
    },
    'Weezing-Galar': {
        t1: 'Poison',
        t2: 'Fairy',
        bs: { hp: 65, at: 90, df: 120, sa: 85, sd: 70, sp: 60 },
        w: 16,
        ab: 'Levitate',
        isAlternateForme: true
    },
    Wooloo: {
        t1: 'Normal',
        bs: { hp: 42, at: 40, df: 55, sa: 40, sd: 45, sp: 48 },
        w: 6,
        ab: 'Fluffy',
        canEvolve: true
    },
    'Yamask-Galar': {
        t1: 'Ground',
        t2: 'Ghost',
        bs: { hp: 38, at: 55, df: 85, sa: 30, sd: 65, sp: 30 },
        w: 1.5,
        ab: 'Wandering Spirit',
        canEvolve: true,
        isAlternateForme: true
    },
    Yamper: {
        t1: 'Electric',
        bs: { hp: 59, at: 45, df: 50, sa: 40, sd: 50, sp: 26 },
        w: 13.5,
        ab: 'Ball Fetch',
        canEvolve: true
    },
    Zacian: {
        t1: 'Fairy',
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        w: 110,
        ab: 'Intrepid Sword',
        gender: 'N',
        formes: ['Zacian', 'Zacian-Crowned']
    },
    'Zacian-Crowned': {
        t1: 'Fairy',
        t2: 'Steel',
        bs: { hp: 92, at: 170, df: 115, sa: 80, sd: 115, sp: 148 },
        w: 355,
        ab: 'Intrepid Sword',
        isAlternateForme: true,
        gender: 'N'
    },
    Zamazenta: {
        t1: 'Fighting',
        bs: { hp: 92, at: 130, df: 115, sa: 80, sd: 115, sp: 138 },
        w: 210,
        ab: 'Dauntless Shield',
        gender: 'N',
        formes: ['Zamazenta', 'Zamazenta-Crowned']
    },
    'Zamazenta-Crowned': {
        t1: 'Fighting',
        t2: 'Steel',
        bs: { hp: 92, at: 130, df: 145, sa: 80, sd: 145, sp: 128 },
        w: 785,
        ab: 'Dauntless Shield',
        isAlternateForme: true,
        gender: 'N'
    },
    'Zigzagoon-Galar': {
        t1: 'Dark',
        t2: 'Normal',
        bs: { hp: 38, at: 30, df: 41, sa: 30, sd: 41, sp: 60 },
        w: 17.5,
        ab: 'Pickup',
        canEvolve: true,
        isAlternateForme: true
    }
});
exports.SPECIES = [{}, RBY, GSC, ADV, DPP, BW, XY, SM, SS];
var Species = (function () {
    function Species(gen) {
        this.gen = gen;
    }
    Species.prototype.get = function (id) {
        return SPECIES_BY_ID[this.gen][id];
    };
    Species.prototype[Symbol.iterator] = function () {
        var _a, _b, _i, id;
        return __generator(this, function (_c) {
            switch (_c.label) {
                case 0:
                    _a = [];
                    for (_b in SPECIES_BY_ID[this.gen])
                        _a.push(_b);
                    _i = 0;
                    _c.label = 1;
                case 1:
                    if (!(_i < _a.length)) return [3, 4];
                    id = _a[_i];
                    return [4, this.get(id)];
                case 2:
                    _c.sent();
                    _c.label = 3;
                case 3:
                    _i++;
                    return [3, 1];
                case 4: return [2];
            }
        });
    };
    return Species;
}());
exports.Species = Species;
var Specie = (function () {
    function Specie(name, data) {
        this.kind = 'Species';
        this.id = util_1.toID(name);
        this.name = name;
        util_1.extend(this, data);
    }
    return Specie;
}());
var SPECIES_BY_ID = [];
for (var _i = 0, SPECIES_1 = exports.SPECIES; _i < SPECIES_1.length; _i++) {
    var species = SPECIES_1[_i];
    var map = {};
    for (var specie in species) {
        var m = new Specie(specie, species[specie]);
        map[m.id] = m;
    }
    SPECIES_BY_ID.push(map);
}
//# sourceMappingURL=species.js.map