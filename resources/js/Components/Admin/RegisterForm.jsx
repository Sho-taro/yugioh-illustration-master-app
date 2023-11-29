import React, { useState } from 'react';
import { router } from '@inertiajs/react';


function RegisterForm({ cardData, values, onChange, imageIndex, errors }) {
	const [isEditable, setIsEditable] = useState(false);
	const fileName = `${values.product_code}-${values.list_number}`;

	const handleSubmit = e => {
		e.preventDefault();

		// フォームの送信
		router.post(route('admin.card.store'), values);
	};

	return (
		<>
			<form key={cardData.name} onSubmit={handleSubmit} method="POST">
				<table className="register-table mb-4">
					<thead className="hidden">
						<tr>
							<th colSpan="2" className="text-center">
								カード情報を登録
							</th>
						</tr>
					</thead>
					<tbody>
						<tr>
							<th className="text-right">商品コード:　</th>
							<td>
								<input
									key={imageIndex}
									name="product_code"
									type="text"
									className="w-80"
									onChange={onChange}
								/>
								{errors.product_code && (
									<p className="text-red-500">{errors.product_code}</p>
								)}
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th className="text-right">商品内リスト番号:　</th>
							<td>
								<input
									key={imageIndex}
									name="list_number"
									type="text"
									className="w-80"
									onChange={onChange}
								/>
								{errors.list_number && (
									<p className="text-red-500">{errors.list_number}</p>
								)}
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th className="text-right">カードID(8ケタ):　</th>
							<td>
								<input
									name="card_id"
									type="text"
									value={isEditable ? null : cardData.id}
									className="w-80"
									disabled={!isEditable}
									onChange={onChange}
								/>
								{errors.card_id && <p className="text-red-500">{errors.card_id}</p>}
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th className="text-right">カード名(英語):　</th>
							<td>
								<input
									name="name_en"
									type="text"
									value={isEditable ? null : cardData.name}
									className="w-80"
									disabled={!isEditable}
									onChange={onChange}
								/>
								{errors.name_en && <p className="text-red-500">{errors.name_en}</p>}
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th className="text-right">カード名(日本語):　</th>
							<td>
								<input
									name="name_ja"
									type="text"
									onChange={onChange}
									className="w-80"
								/>
								{errors.name_ja && <p className="text-red-500">{errors.name_ja}</p>}
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th className="text-right">カード名(日本語よみ):　</th>
							<td>
								<input
									name="name_ja_kana"
									type="text"
									onChange={onChange}
									className="w-80"
								/>
								{errors.name_ja_kana && (
									<p className="text-red-500">{errors.name_ja_kana}</p>
								)}
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th className="text-right">フレームタイプ:　</th>
							<td>
								<input
									name="frame_type"
									type="text"
									value={isEditable ? null : cardData.frameType}
									className="w-80"
									disabled={!isEditable}
									onChange={onChange}
								/>
								{errors.frame_type && (
									<p className="text-red-500">{errors.frame_type}</p>
								)}
							</td>
						</tr>
					</tbody>
					<tbody>
						<tr>
							<th className="text-right">カテゴリ:　</th>
							<td>
								<input
									name="archetype"
									type="text"
									value={isEditable ? null : cardData.archetype}
									className="w-80"
									disabled={!isEditable}
									onChange={onChange}
								/>
								{errors.archetype && (
									<p className="text-red-500">{errors.archetype}</p>
								)}
							</td>
						</tr>
					</tbody>
				</table>
				<div className="mb-4">
					<input
						id="register-checkbox"
						type="checkBox"
						checked={isEditable}
						onChange={() => setIsEditable(prev => !prev)}
					/>
					<label htmlFor="register-checkbox" className="text-black select-none">
						APIから取得したデータを編集可能にする
					</label>
				</div>
				<div className="mt-4 flex justify-between">
					<p className="mr-8">
						カードナンバー: <i className="font-bold hover:select-all">{fileName}</i>
					</p>
					<button
						className="text-blue-700 underline hover:text-blue-500 active:scale-95"
						onClick={e => {
							e.preventDefault();
							navigator.clipboard.writeText(fileName);
						}}>
						クリップボードにコピーする
					</button>
				</div>
				<button type="submit" className="simple-button mt-8 bg-black/90">
					登録
				</button>
			</form>
		</>
	);
}

export default RegisterForm;