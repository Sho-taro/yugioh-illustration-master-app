import React, { useState, useEffect } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router, usePage } from '@inertiajs/react';
// import './css/Show.css';

// コンポーネント
import MonsterCardUpdateForm from '@/Components/Admin/MonsterCardUpdateForm';
import SpellTrapCardUpdateForm from '@/Components/Admin/SpellTrapCardUpdateForm';

import { getCardType } from '@/utils/getCardType';

function Show({ card, product, errors }) {
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

	const cardType = getCardType(card.frame_type_code); // 表示するカードの種類。 'monster' or 'spell/trap'

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
		router.put(`/admin/card/${values.id}`, values);
	};

	const handleDelete = e => {
		e.preventDefault();
		router.delete(`/admin/card/${values.id}`);
	};

	useEffect(() => {
		if (cardType === 'monster') {
			// モンスターカード用
			setMonsterCardValues({
				id: card.id,
				card_official_id: card.card_official_id,
				name_ja: card.name_ja,
				name_ja_kana: card.name_ja_kana,
				name_en: card.name_en,
				frame_type_code: card.frame_type_code,
				archetype_code: card.archetype_code,
				attack: card.attack,
				defense: card.defense,
				race_code: card.race_code,
				attribute_code: card.attribute_code,
				level_or_rank: card.level_or_rank,
				link_value: card.link_value,
			});
		} else if (cardType === 'spell/trap') {
			// 魔法・罠カード用
			setSpellTrapCardValues({
				id: card.id,
				card_official_id: card.card_official_id,
				name_ja: card.name_ja,
				name_ja_kana: card.name_ja_kana,
				name_en: card.name_en,
				frame_type_code: card.frame_type_code,
				archetype_code: card.archetype_code,
				play_type_code: card.play_type_code,
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
								削除可能にする
							</label>
						</div>
						<form onSubmit={handleDelete} className="ml-4">
							<button disabled={!isDeletable} className="simple-button">
								このカードを削除する
							</button>
						</form>
					</div>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
Show.layout = page => <AdminLayout title="カード詳細" children={page} />;

export default Show;
