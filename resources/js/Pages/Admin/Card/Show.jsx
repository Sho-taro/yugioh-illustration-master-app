import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router, usePage } from '@inertiajs/react';
// import './css/Show.css';

// コンポーネント
import MonsterCardUpdateForm from '@/Components/Admin/MonsterCardUpdateForm';
import SpellTrapCardUpdateForm from '@/Components/Admin/SpellTrapCardUpdateForm';
import ReleasedCardsList from '@/Components/Admin/ReleasedCardsList';

import { getCardType } from '@/utils/getCardType';

function Show({ cardDetail, releasedCards, errors }) {
	// モンスターカード用
	const [monsterCardValues, setMonsterCardValues] = useState({
		id: '',
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
		id: '',
		card_official_id: '',
		name_ja: '',
		name_ja_kana: '',
		name_en: '',
		frame_type_code: '',
		archetype_code: '',
		play_type_code: '',
	});

	const [isEditable, setIsEditable] = useState(false);
	const [isDeletable, setIsDeletable] = useState(false);

	// バリデーションエラーメッセージ
	// const { errors } = usePage().props;

	const cardType = getCardType(cardDetail.frame_type_code); // 表示するカードの種類。 'monster' or 'spell/trap'

	const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		if (cardType === 'monster') {
			setMonsterCardValues({
				...monsterCardValues,
				[key]: value,
			});
		} else if (cardType === 'spell/trap') {
			setSpellTrapCardValues({
				...spellTrapCardValues,
				[key]: value,
			});
		}
	};

	const handleSubmit = e => {
		e.preventDefault();

		// フォームの送信
		if (cardType === 'monster') {
			router.put(`/admin/card/${monsterCardValues.id}`, monsterCardValues);
		} else if (cardType === 'spell/trap') {
			router.put(`/admin/card/${spellTrapCardValues.id}`, spellTrapCardValues);
		}
	};

	const handleDelete = e => {
		e.preventDefault();

		// フォームの送信
		if (cardType === 'monster') {
			router.delete(`/admin/card/${monsterCardValues.id}`);
		} else if (cardType === 'spell/trap') {
			router.delete(`/admin/card/${spellTrapCardValues.id}`);
		}
	};

	useEffect(() => {
		if (cardType === 'monster') {
			// モンスターカード用
			setMonsterCardValues({
				id: cardDetail.id,
				card_official_id: cardDetail.card_official_id,
				name_ja: cardDetail.name_ja,
				name_ja_kana: cardDetail.name_ja_kana,
				name_en: cardDetail.name_en,
				frame_type_code: cardDetail.frame_type_code,
				archetype_code: cardDetail.archetype_code,
				attack: cardDetail.attack,
				defense: cardDetail.defense,
				race_code: cardDetail.race_code,
				attribute_code: cardDetail.attribute_code,
				level_or_rank: cardDetail.level_or_rank,
				link_value: cardDetail.link_value,
			});
		} else if (cardType === 'spell/trap') {
			// 魔法・罠カード用
			setSpellTrapCardValues({
				id: cardDetail.id,
				card_official_id: cardDetail.card_official_id,
				name_ja: cardDetail.name_ja,
				name_ja_kana: cardDetail.name_ja_kana,
				name_en: cardDetail.name_en,
				frame_type_code: cardDetail.frame_type_code,
				archetype_code: cardDetail.archetype_code,
				play_type_code: cardDetail.play_type_code,
			});
		}
	}, []);

	return (
		<>
			<div className="w-2/3 pt-8 mx-auto">
				<div className="flex justify-between">
					<h1 className="font-bold text-3xl mb-8">カード詳細</h1>
					<Link href={route('admin.card.index')} className="hover:text-blue-400">
						{'< '} カード一覧へ戻る
					</Link>
				</div>
				<h2 className="text-lg">カード詳細を確認・編集・削除</h2>
				<div className="p-8 mb-4 bg-gray-100 rounded-md">
					<div className="mb-6">
						<input
							id="edit-checkbox"
							type="checkBox"
							checked={isEditable}
							onChange={() => setIsEditable(prev => !prev)}
							className="w-4 h-4"
						/>
						<label htmlFor="edit-checkbox" className="text-black select-none">
							編集可能にする
						</label>
						{cardType === 'monster' && (
							<MonsterCardUpdateForm
								values={monsterCardValues}
								handleSubmit={handleSubmit}
								onChange={handleChange}
								isEditable={isEditable}
								errors={errors}
							/>
						)}
						{cardType === 'spell/trap' && (
							<SpellTrapCardUpdateForm
								values={spellTrapCardValues}
								handleSubmit={handleSubmit}
								onChange={handleChange}
								isEditable={isEditable}
								errors={errors}
							/>
						)}
					</div>
					<div className="bg-gray-100 rounded-md flex justify-start">
						<div>
							<input
								id="delete-checkbox"
								type="checkBox"
								checked={isDeletable}
								onChange={() => setIsDeletable(prev => !prev)}
							/>
							<label htmlFor="delete-checkbox" className="text-black select-none">
								削除可能にする（※このカードに紐付いた全てのreleased_cardsも自動的に削除されます）
							</label>
						</div>
						<form onSubmit={handleDelete} className="ml-4">
							<button disabled={!isDeletable} className="simple-button">
								このカードを削除する
							</button>
						</form>
					</div>
				</div>
				<h2 className="text-lg">このカードに紐付いたreleased_cards</h2>
				<div className="p-8 mb-4 bg-gray-100 rounded-md">
					<ReleasedCardsList releasedCards={releasedCards} />
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
Show.layout = page => <AdminLayout title="カード詳細" children={page} />;

export default Show;
