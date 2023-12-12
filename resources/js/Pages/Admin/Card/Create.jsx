import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { Link, usePage } from '@inertiajs/react';
// import './css/Create.css';

// コンポーネント
import RegisterForm from '@/Components/Admin/RegisterForm';
import ApiForm from '@/Components/Admin/ApiForm';
import DisplayImage from '@/Components/Admin/DisplayImage';
import MonsterCardInput from '@/Components/Admin/MonsterCardInput';
import SpellTrapCardInput from '@/Components/Admin/SpellTrapCardInput';
import SampleImage from '@/Components/Admin/SampleImage';

// import { sampleData } from '@/utils/sampleCardData';
import AdminLayout from '@/Layouts/AdminLayout';

function Create({ errors, registeredCard, message }) {
	const [cardData, setCardData] = useState(null);
	const [cardType, setCardType] = useState(null); // カードの種類。'monster' or 'spell/trap'
	const [imageIndex, setImageIndex] = useState(0);
	const [errMsg, setErrMsg] = useState(null); // APIを叩いた時のエラーメッセージを保持

	// DBに保存する用のデータ
	// モンスターカード用
	const [monsterCardValues, setMonsterCardValues] = useState({
		product_code: '',
		list_number: '',
		card_official_id: '',
		name_ja: '',
		name_ja_kana: '',
		name_en: '',
		frame_type_code: '',
		archetype_code: '',
		attack: '',
		defense: '',
		race_code: '',
		attribute_code: '',
		'level or rank': '',
		link_value: ''
	});
	// 魔法・罠カード用
	const [spellTrapCardValues, setSpellTrapCardValues] = useState({
		product_code: '',
		list_number: '',
		card_official_id: '',
		name_ja: '',
		name_ja_kana: '',
		name_en: '',
		frame_type_code: '',
		archetype_code: '',
		play_type_code: ''
	});

	// useRef
	const cardNameInput = useRef(null);

	// バリデーションエラーメッセージ
	// const { errors } = usePage().props;

	const getCardData = async cardName => {
		try {
			const res = await axios.get(
				`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`
			);

			// cardDataをset
			setCardData(res.data.data[0]);
			// cardTypeをset
			if (res.data.data[0].frameType === 'spell' || res.data.data[0].frameType === 'trap') {
				setCardType('spell/trap');
			} else {
				setCardType('monster');
			}
		} catch (err) {
			// console.log(err.message)
			setErrMsg(err.message);
		}
	};

	const handleApiSubmit = e => {
		e.preventDefault();
		getCardData(cardNameInput.current.value);
	};

	const handleValueChange = e => {
		const key = e.target.name;
		const value = e.target.value;

		setValues({
			...values,
			[key]: value,
		});
	};
	const displayNextImage = () => {
		const imgsNum = cardData.card_images.length; // APIから取得した画像の枚数
		if (imageIndex + 1 < imgsNum) {
			setImageIndex(i => i + 1);
		} else {
			setImageIndex(0);
		}
	};

	useEffect(() => {
		if (!cardData) return;  // APIを叩く前ならearly return
		setImageIndex(0);    // カードイラストのインデックスを0にリセット

		// DBに登録するデータをset
		// モンスターカードの場合
		if (cardType === 'monster') {
			const frameType = cardData.frameType;
			let defense;
			let levelOrRank;
			let linkValue;
			if (frameType === 'link') {
				defense = 'N/A';
				levelOrRank = 'N/A';
				linkValue = String(cardData.linkval);
			} else {
				defense = String(cardData.def);
				levelOrRank = String(cardData.level);
				linkValue = 'N/A'
			}
			setMonsterCardValues({
				...monsterCardValues,
				card_official_id: String(cardData.id).padStart(8, '0'),
				name_en: cardData.name,
				frame_type_code: frameType,
				archetype_code: cardData.archetype,
				attack: String(cardData.atk),
				defense: defense,
				race_code: cardData.race,
				attribute_code: cardData.attribute,
				'level or rank': levelOrRank,
				link_value: linkValue,
			});
		} else if (cardType === 'spell/trap') {
			setSpellTrapCardValues({
				...spellTrapCardValues,
				card_official_id: String(cardData.id).padStart(8, '0'),
				name_en: cardData.name,
				frame_type_code: cardData.frameType,
				archetype_code: cardData.archetype,
				play_type_code: cardData.race
			});
		}
	}, [cardData]);

	// デバック用
	console.log(monsterCardValues);
	console.log(spellTrapCardValues);


	return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key={registeredCard && registeredCard.id}>
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">カード新規登録</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				<div>
					<h2 className="text-lg">1. APIからカード情報を取得する</h2>
					<div className="p-8 bg-gray-100 rounded-md mb-4">
						{message && (
							<p className="text-green-500 my-2">
								{message}: {registeredCard.name_ja}
							</p>
						)}
						<div>
							{errMsg && <p className="text-red-500 my-2">{errMsg}</p>}
							<ApiForm
								cardNameInput={cardNameInput}
								onSubmit={handleApiSubmit}></ApiForm>
						</div>
					</div>
					<h2 className="text-lg">2. 取得したカード情報を編集する</h2>
					<div className="p-8 bg-gray-100 rounded-md flex justify-around">
						{cardData ? (
							<DisplayImage
								cardData={cardData}
								imageIndex={imageIndex}
								onBtnClick={displayNextImage}
							/>
						) : (
							<SampleImage />
						)}
						<div>
							<p className="mb-2">▽ APIから取得したデータが表示されます ▽</p>
							{cardType === 'monster' && <MonsterCardInput />}
							{cardType === 'spell/trap' && <SpellTrapCardInput />}
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
Create.layout = page => <AdminLayout title="カードを新規登録" children={page} />;

export default Create;
