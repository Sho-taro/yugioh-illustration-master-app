// frame_type_codeを取得する関数
const getFrameTypeCode = fr => {
	const frameTypeCodes = {
		normal: 'FR0001',
		effect: 'FR0002',
		ritual: 'FR0003',
		fusion: 'FR0004',
		synchro: 'FR0005',
		xyz: 'FR0006',
		link: 'FR0007',
		normal_pendulum: 'FR0008',
		effect_pendulum: 'FR0009',
		ritual_pendulum: 'FR0010',
		fusion_pendulum: 'FR0011',
		synchro_pendulum: 'FR0012',
		xyz_pendulum: 'FR0013',
		spell: 'FR0014',
		trap: 'FR0015',
		token: 'FR0016',
		skill: 'FR0017',
	};

	const frameTypeCode = frameTypeCodes[fr];
	// console.log(frameTypeCode);  // デバック用

	return frameTypeCode;
};

// archetype_codeを取得する関数
const getArchetypeCode = ar => {
	// const archetypes = {
	// 	'no archetypes': 'AR0000',
	// 	'To be implemented': 'AR9999',
	// };
	let archetypeCode;
	if (!ar) {
		archetypeCode = 'AR0000';
	} else {
		archetypeCode = 'AR9999';
	}
	// console.log(archetypeCode);   // デバック用

	return archetypeCode;
};

// race_codeを取得する関数
const getRaceCode = ra => {
	const raceCodes = {
		Spellcaster: 'RA0001',
		Dragon: 'RA0002',
		Zombie: 'RA0003',
		Warrior: 'RA0004',
		'Beast-Warrior': 'RA0005',
		Beast: 'RA0006',
		'Winged Beast': 'RA0007',
		Fiend: 'RA0008',
		Fairy: 'RA0009',
		Insect: 'RA0010',
		Dinosaur: 'RA0011',
		Reptile: 'RA0012',
		Fish: 'RA0013',
		'Sea Serpent': 'RA0014',
		Aqua: 'RA0015',
		Pyro: 'RA0016',
		Thunder: 'RA0017',
		Rock: 'RA0018',
		Plant: 'RA0019',
		Machine: 'RA0020',
		Psychic: 'RA0021',
		Wyrm: 'RA0022',
		Cyberse: 'RA0023',
		'Illusion Type': 'RA0024',
		'Divine-Beast': 'RA0025',
		'Creator-God': 'RA0026',
	};

	const raceCode = raceCodes[ra];
	// console.log(raceCode);   // デバック用

	return raceCode;
};

// attribute_codeを取得する関数
const getAttributeCode = (at) => {
	const attributeCodes = {
		DARK: 'AT0001',
		LIGHT: 'AT0002',
		EARTH: 'AT0003',
		WATER: 'AT0004',
		FIRE: 'AT0005',
		WIND: 'AT0006',
		DIVINE: 'AT0007'
	};

	const attributeCode = attributeCodes[at];
	// console.log(attributeCode);  // デバック用

	return attributeCode;
}

// play_type_codeを取得する関数
const getPlayTypeCode = (pl) => {
	const playTypeCodes = {
		Normal: 'PL0001',
		Field: 'PL0002',
		Equip: 'PL0003',
		Continuous: 'PL0004',
		'Quick-Play': 'PL0005',
		Ritual: 'PL0006',
		Counter: 'PL0007',
	};

	const playTypeCode = playTypeCodes[pl];
	// console.log(playTypeCode);   // デバック用

	return playTypeCode;
}

// 名前付きエクスポート
export { getFrameTypeCode, getArchetypeCode, getRaceCode, getAttributeCode, getPlayTypeCode };
