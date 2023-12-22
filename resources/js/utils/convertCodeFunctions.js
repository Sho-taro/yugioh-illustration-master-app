// frame_type_codeを変換する関数
const convertFrameTypeCode = frameTypeCode => {
	const frameTypes = {
		FR0001: 'normal',
		FR0002: 'effect',
		FR0003: 'ritual',
		FR0004: 'fusion',
		FR0005: 'synchro',
		FR0006: 'xyz',
		FR0007: 'link',
		FR0008: 'normal_pendulum',
		FR0009: 'effect_pendulum',
		FR0010: 'ritual_pendulum',
		FR0011: 'fusion_pendulum',
		FR0012: 'synchro_pendulum',
		FR0013: 'xyz_pendulum',
		FR0014: 'spell',
		FR0015: 'trap',
		FR0016: 'token',
		FR0017: 'skill',
	};

	const frameType = frameTypes[frameTypeCode];
	// console.log(frameType);  // デバック用

	return frameType;
};

// archetype_codeを変換する関数
const convertArchetypeCode = archetypeCode => {
	// const archetypes = {
	// 	'no archetypes': 'AR0000',
	// 	'To be implemented': 'AR9999',
	// };
	let archetype;
	if (archetypeCode === 'AR0000') {
		archetype = 'no archetype';
	} else if (archetypeCode === 'AR9999') {
		archetype = 'to be implemented';
	}
	// console.log(archetype);   // デバック用

	return archetype;
};

// race_codeを変換する関数
const convertRaceCode = raceCode => {
	const races = {
		RA0001: 'Spellcaster',
		RA0002: 'Dragon',
		RA0003: 'Zombie',
		RA0004: 'Warrior',
		RA0005: 'Beast-Warrior',
		RA0006: 'Beast',
		RA0007: 'Winged Beast',
		RA0008: 'Fiend',
		RA0009: 'Fairy',
		RA0010: 'Insect',
		RA0011: 'Dinosaur',
		RA0012: 'Reptile',
		RA0013: 'Fish',
		RA0014: 'Sea Serpent',
		RA0015: 'Aqua',
		RA0016: 'Pyro',
		RA0017: 'Thunder',
		RA0018: 'Rock',
		RA0019: 'Plant',
		RA0020: 'Machine',
		RA0021: 'Psychic',
		RA0022: 'Wyrm',
		RA0023: 'Cyberse',
		RA0024: 'Illusion Type',
		RA0025: 'Divine-Beast',
		RA0026: 'Creator-God',
	};

	const race = races[raceCode];
	// console.log(race);   // デバック用

	return race;
};

// attribute_codeを変換する関数
const convertAttributeCode = (attributeCode) => {
	const attributes = {
		AT0001: 'DARK',
		AT0002: 'LIGHT',
		AT0003: 'EARTH',
		AT0004: 'WATER',
		AT0005: 'FIRE',
		AT0006: 'WIND',
		AT0007: 'DIVINE',
	};

	const attribute = attributes[attributeCode];
	// console.log(attribute);  // デバック用

	return attribute;
}

// play_type_codeを変換する関数
const convertPlayTypeCode = (playTypeCode) => {
	const playTypes = {
		PL0001: 'Normal',
		PL0002: 'Field',
		PL0003: 'Equip',
		PL0004: 'Continuous',
		PL0005: 'Quick-Play',
		PL0006: 'Ritual',
		PL0007: 'Counter',
	};

	const playType = playTypes[playTypeCode];
	// console.log(playType);   // デバック用

	return playType;
}

// 名前付きエクスポート
export { convertFrameTypeCode, convertArchetypeCode, convertRaceCode, convertAttributeCode, convertPlayTypeCode };
