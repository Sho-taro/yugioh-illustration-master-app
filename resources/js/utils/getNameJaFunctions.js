// name_enをname_jaに変換する関数

// frame_type_codeを取得する関数
const getFrameTypeNameJa = fr => {
	const frameTypeNameJaArray = {
		normal: '通常',
		effect: '効果',
		ritual: '儀式',
		fusion: '融合',
		synchro: 'シンクロ',
		xyz: 'エクシーズ',
		link: 'リンク',
		normal_pendulum: 'P通常',
		effect_pendulum: 'P効果',
		ritual_pendulum: 'P儀式',
		fusion_pendulum: 'P融合',
		synchro_pendulum: 'Pシンクロ',
		xyz_pendulum: 'Pエクシーズ',
		spell: '魔法',
		trap: '罠',
		token: 'トークン',
		skill: 'スキル',
	};

	const frameTypeNameJa = frameTypeNameJaArray[fr];
	// console.log(frameTypeNameJa);  // デバック用

	return frameTypeNameJa;
};

// race_codeを取得する関数
const getRaceNameJa = ra => {
	const raceNameJaArray = {
		Spellcaster: '魔法使い族',
		Dragon: 'ドラゴン族',
		Zombie: 'アンデット族',
		Warrior: '戦士族',
		'Beast-Warrior': '獣戦士族',
		Beast: '獣族',
		'Winged Beast': '鳥獣族',
		Fiend: '悪魔族',
		Fairy: '天使族',
		Insect: '昆虫族',
		Dinosaur: '恐竜族',
		Reptile: '爬虫類族',
		Fish: '魚族',
		'Sea Serpent': '海竜族',
		Aqua: '水族',
		Pyro: '炎族',
		Thunder: '雷族',
		Rock: '岩石族',
		Plant: '植物族',
		Machine: '機械族',
		Psychic: 'サイキック族',
		Wyrm: '幻竜族',
		Cyberse: 'サイバース族',
		'Illusion Type': '幻想魔族',
		'Divine-Beast': '幻神獣族',
		'Creator-God': '創造神族',
	};

	const raceNameJa = raceNameJaArray[ra];
	// console.log(raceNameJa);   // デバック用

	return raceNameJa;
};

// attribute_codeを取得する関数
const getAttributeNameJa = at => {
	const attributeNameJaArray = {
		DARK: '闇',
		LIGHT: '光',
		EARTH: '地',
		WATER: '水',
		FIRE: '炎',
		WIND: '風',
		DIVINE: '神',
	};

	const attributeNameJa = attributeNameJaArray[at];
	// console.log(attributeNameJa);  // デバック用

	return attributeNameJa;
};

// play_type_codeを取得する関数
const getPlayTypeNameJa = pl => {
	const playTypeNameJaArray = {
		Normal: '通常',
		Field: 'フィールド',
		Equip: '装備',
		Continuous: '永続',
		'Quick-Play': '速攻',
		Ritual: '儀式',
		Counter: 'カウンター',
	};

	const playTypeNameJa = playTypeNameJaArray[pl];
	// console.log(playTypeNameJa);   // デバック用

	return playTypeNameJa;
};

const getTargetJa = target => {
	const targetJaArray = {
		all: '全て（モンスター・魔法・罠）',
		monster: 'モンスターのみ',
		spell: '魔法のみ',
		trap: '罠のみ'
	}

	const targetJa = targetJaArray[target];

	return targetJa;
}

// 名前付きエクスポート
export { getFrameTypeNameJa, getRaceNameJa, getAttributeNameJa, getPlayTypeNameJa, getTargetJa };
