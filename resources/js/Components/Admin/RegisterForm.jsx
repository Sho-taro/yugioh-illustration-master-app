import React, { useState } from 'react';
import { router } from '@inertiajs/react';


function RegisterForm({ cardData, values, onChange, imageIndex, errors }) {
	const [isEditable, setIsEditable] = useState(false);

	const handleSubmit = e => {
		e.preventDefault();

		// フォームの送信
		router.post(route('admin.card.store'), values);
	};

	const fileName = `${values.pack_name}-${values.list_number}`;

	return (
		<>
			<h2 className="text-2xl mb-2">カード情報をデータベースに登録する</h2>
			<input
				id="register-checkbox"
				type="checkBox"
				checked={isEditable}
				onChange={() => setIsEditable(prev => !prev)}
			/>
			<label htmlFor="register-checkbox" className="text-black select-none">
				APIから取得したデータを編集する
			</label>
			<form key={cardData.name} onSubmit={handleSubmit} method="POST">
				<table className="register-table">
					<tr>
						<th>カードID(8ケタ): </th>
						<td>
							<input
								name="card_id"
								type="text"
								value={isEditable ? null : cardData.id}
								disabled={!isEditable}
								onChange={onChange}
							/>
							{errors.card_id && <p className="text-red-500">{errors.card_id}</p>}
						</td>
					</tr>
					<tr>
						<th>パック型番: </th>
						<td>
							<input
								key={imageIndex}
								name="pack_name"
								type="text"
								onChange={onChange}
							/>
							{errors.pack_name && <p className="text-red-500">{errors.pack_name}</p>}
						</td>
					</tr>
					<tr>
						<th>パック内リスト番号: </th>
						<td>
							<input
								key={imageIndex}
								name="list_number"
								type="text"
								onChange={onChange}
							/>
							{errors.list_number && (
								<p className="text-red-500">{errors.list_number}</p>
							)}
						</td>
					</tr>
					<tr>
						<th>カード名(英語): </th>
						<td>
							<input
								name="name_en"
								type="text"
								value={isEditable ? null : cardData.name}
								disabled={!isEditable}
								onChange={onChange}
							/>
							{errors.name_en && <p className="text-red-500">{errors.name_en}</p>}
						</td>
					</tr>
					<tr>
						<th>カード名(日本語): </th>
						<td>
							<input name="name_ja" type="text" onChange={onChange} />
							{errors.name_ja && <p className="text-red-500">{errors.name_ja}</p>}
						</td>
					</tr>
					<tr>
						<th>カード名(日本語よみ): </th>
						<td>
							<input name="name_ja_kana" type="text" onChange={onChange} />
							{errors.name_ja_kana && (
								<p className="text-red-500">{errors.name_ja_kana}</p>
							)}
						</td>
					</tr>
					<tr>
						<th>カードタイプ: </th>
						<td>
							<input
								name="frame_type"
								type="text"
								value={isEditable ? null : cardData.frameType}
								disabled={!isEditable}
								onChange={onChange}
							/>
							{errors.frame_type && (
								<p className="text-red-500">{errors.frame_type}</p>
							)}
						</td>
					</tr>
					<tr>
						<th>カテゴリ: </th>
						<td>
							<input
								name="archetype"
								type="text"
								value={isEditable ? null : cardData.archetype}
								disabled={!isEditable}
								onChange={onChange}
							/>
							{errors.archetype && <p className="text-red-500">{errors.archetype}</p>}
						</td>
					</tr>
				</table>
				<div className="mt-4 flex justify-start items-center">
					<button
						className="simple-button"
						onClick={e => {
							e.preventDefault();
							navigator.clipboard.writeText(fileName);
						}}>
						クリップボードにコピー
					</button>
					<p className="ml-8">
						<i className="hover:select-all">{fileName}</i>
					</p>
				</div>
				<button type="submit" className="simple-button mt-8 bg-black/90">
					登録
				</button>
			</form>
		</>
	);
}

export default RegisterForm;