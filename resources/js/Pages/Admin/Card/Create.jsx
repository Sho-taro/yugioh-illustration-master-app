import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { Link, usePage } from '@inertiajs/react';
// import './css/Create.css';

// コンポーネント
import RegisterForm from '@/Components/Admin/RegisterForm';
import ApiForm from '@/Components/Admin/ApiForm';
import DisplayImage from '@/Components/Admin/DisplayImage';
import MonsterCardApi from '@/Components/Admin/MonsterCardApi';
import SpellTrapCardApi from '@/Components/Admin/SpellTrapCardApi';
import MonsterCardInput from '@/Components/Admin/MonsterCardInput';
import SpellTrapCardInput from '@/Components/Admin/SpellTrapCardInput';
import SampleImage from '@/Components/Admin/SampleImage';
import ImageName from '@/Components/Admin/ImageName';
import IllustRegistration from '@/Components/Admin/IllustRegistration';
import MonsterCardRegistration from '@/Components/Admin/MonsterCardRegistration';
import SpellTrapCardRegistration from '@/Components/Admin/SpellTrapCardRegistration';

// import { sampleData } from '@/utils/sampleCardData';
import { getFrameTypeCode, getArchetypeCode, getRaceCode, getAttributeCode, getPlayTypeCode } from '@/utils/getCodesFunctions'
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
		level_or_rank: '',
		link_value: '',
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
		play_type_code: '',
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
	const clearInput = () => {
		cardNameInput.current.value = '';
	};

	const changeMonsterCardValue = e => {
		const key = e.target.name;
		const value = e.target.value;

		setMonsterCardValues({
			...monsterCardValues,
			[key]: value,
		});
	};
	const changeSpellTrapCardValue = e => {
		const key = e.target.name;
		const value = e.target.value;

		setSpellTrapCardValues({
			...spellTrapCardValues,
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
		// product_codeとlist_numberの値をリセット
		if (cardType === 'monster') {
			setMonsterCardValues({
				...monsterCardValues,
				product_code: '',
				list_number: ''
			})
		} else if (cardType === 'spell/trap') {
			setSpellTrapCardValues({
				...spellTrapCardValues,
				product_code: '',
				list_number: '',
			});
		}
	};

	useEffect(() => {
		if (!cardData) return; // APIを叩く前ならearly return
		setImageIndex(0); // カードイラストのインデックスを0にリセット

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
				linkValue = 'N/A';
			}
			setMonsterCardValues({
				product_code: '',
				list_number: '',
				card_official_id: String(cardData.id).padStart(8, '0'),
				name_ja: '',
				name_ja_kana: '',
				name_en: cardData.name,
				frame_type_code: getFrameTypeCode(frameType),
				archetype_code: getArchetypeCode(cardData.archetype),
				attack: String(cardData.atk),
				defense: defense,
				race_code: getRaceCode(cardData.race),
				attribute_code: getAttributeCode(cardData.attribute),
				level_or_rank: levelOrRank,
				link_value: linkValue,
			});
		} else if (cardType === 'spell/trap') {
			setSpellTrapCardValues({
				product_code: '',
				list_number: '',
				card_official_id: String(cardData.id).padStart(8, '0'),
				name_ja: '',
				name_ja_kana: '',
				name_en: cardData.name,
				frame_type_code: getFrameTypeCode(cardData.frameType),
				archetype_code: getArchetypeCode(cardData.archetype),
				play_type_code: getPlayTypeCode(cardData.race),
			});
		}
	}, [cardData]);

	// デバック用
	// console.log(monsterCardValues);
	// console.log(spellTrapCardValues);

	return (
		<>
			<div className="w-4/5 pt-8 mx-auto" key={registeredCard && registeredCard.id}>
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
								onSubmit={handleApiSubmit}
								onClick={clearInput}></ApiForm>
						</div>
					</div>
					<h2 className="text-lg">2. 取得したカード情報を編集する</h2>
					<div className="p-8 bg-gray-100 rounded-md flex justify-around mb-4">
						<div className="w-1/3">
							{cardData ? (
								<DisplayImage
									cardData={cardData}
									imageIndex={imageIndex}
									onBtnClick={displayNextImage}
								/>
							) : (
								<SampleImage />
							)}
							{cardType === 'monster' && (
								<ImageName
									product_code={monsterCardValues.product_code}
									list_number={monsterCardValues.list_number}
								/>
							)}
							{cardType === 'spell/trap' && (
								<ImageName
									product_code={spellTrapCardValues.product_code}
									list_number={spellTrapCardValues.list_number}
								/>
							)}
							<details className="mt-4">
								<summary>カード情報を表示</summary>
								{cardType === 'monster' && <MonsterCardApi cardData={cardData} />}
								{cardType === 'spell/trap' && (
									<SpellTrapCardApi cardData={cardData} />
								)}
							</details>
						</div>
						<div className="w-2/5">
							<p className="mb-2">カード情報を編集</p>
							{cardType === 'monster' && (
								<MonsterCardInput
									value={monsterCardValues}
									imageIndex={imageIndex}
									onChange={changeMonsterCardValue}
								/>
							)}
							{cardType === 'spell/trap' && (
								<SpellTrapCardInput
									value={spellTrapCardValues}
									imageIndex={imageIndex}
									onChange={changeSpellTrapCardValue}
								/>
							)}
						</div>
					</div>
					<h2 className="text-lg">3. カード情報をDBに登録する</h2>
					<div className="mb-4 p-8 bg-gray-100 rounded-md flex justify-around ">
						<div className="w-3/8">
							<p>登録済みカードの新イラストを登録</p>
							<p>（以下の内容が、released_cardsテーブルに登録されます）</p>
							{cardType === 'monster' && (
								<IllustRegistration values={monsterCardValues} />
							)}
							{cardType === 'spell/trap' && (
								<IllustRegistration values={spellTrapCardValues} />
							)}
						</div>
						<div className="w-3/8">
							<p>未登録カードを新規登録</p>
							<p>
								（以下の内容が、cardsテーブルなど３つのテーブルに分かれて登録されます）
							</p>
							{cardType === 'monster' && (
								<MonsterCardRegistration values={monsterCardValues} />
							)}
							{cardType === 'spell/trap' && (
								<SpellTrapCardRegistration values={spellTrapCardValues} />
							)}
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
