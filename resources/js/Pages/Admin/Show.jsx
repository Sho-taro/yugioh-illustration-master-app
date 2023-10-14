import React, { useState } from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import { Link, router, usePage } from '@inertiajs/react';
// import './css/Show.css';

function Show({ card, errors }) {
	const [values, setValues] = useState({
		id: card.id,
		card_id: card.card_id,
		pack_name: card.pack_name,
		list_number: card.list_number,
		name_en: card.name_en,
		name_ja: card.name_ja,
		name_ja_kana: card.name_ja_kana,
		frame_type: card.frame_type,
		archetype: card.archetype,
	});

	const [isEditable, setIsEditable] = useState(false);
	const [isDeletable, setIsDeletable] = useState(false);

	// バリデーションエラーメッセージ
	// const { errors } = usePage().props;

	const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		setValues({
			...values,
			[key]: value,
		});
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

	return (
		<>
			<div className="w-4/5 mt-8 mx-auto">
				<Link href={route('admin.card.index')} className="simple-button">
					一覧へ戻る
				</Link>
				<div className="flex justify-center mt-4">
					<div className="w-1/2 mx-auto mt-12 mr-12">
						<input
							id="delete-checkbox"
							type="checkBox"
							checked={isDeletable}
							onChange={() => setIsDeletable(prev => !prev)}
						/>
						<label htmlFor="delete-checkbox" className="text-black select-none">
							削除可能にする
						</label>
						<img
							src={`/images/card-images/${card.pack_name}-${card.list_number}.jpg`}
							alt={card.name_ja}
							className="w-4/5 border-4 border-slate-400 border-solid"
						/>
						<form onSubmit={handleDelete} className="mt-4">
							<button disabled={!isDeletable} className="simple-button delete-btn">
								このカードを削除する
							</button>
						</form>
					</div>
					<div className="pl-12 border-l">
						<h2 className="text-2xl mb-4">カード詳細</h2>
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
						<form onSubmit={handleSubmit} method="POST">
							<table className="show-table">
								<thead className="hidden">
									<tr>
										<th colSpan="2" className="text-center">
											カード情報
										</th>
									</tr>
								</thead>
								<tbody>
									<tr>
										<th>データベース内ID: </th>
										<td>
											<p>{values.id}</p>
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>カードID(8ケタ): </th>
										<td>
											<input
												name="card_id"
												type="text"
												onChange={handleChange}
												value={values.card_id}
												disabled={!isEditable}
											/>
											{errors.card_id && (
												<p className="text-red-500">{errors.card_id}</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>パック型番: </th>
										<td>
											<input
												name="pack_name"
												type="text"
												onChange={handleChange}
												value={values.pack_name}
												disabled={!isEditable}
											/>
											{errors.pack_name && (
												<p className="text-red-500">{errors.pack_name}</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>パック内リスト番号: </th>
										<td>
											<input
												name="list_number"
												type="text"
												onChange={handleChange}
												value={values.list_number}
												disabled={!isEditable}
											/>
											{errors.list_number && (
												<p className="text-red-500">{errors.list_number}</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>カード名(英語): </th>
										<td>
											<input
												name="name_en"
												type="text"
												style={{ color: 'gray' }}
												onChange={handleChange}
												value={values.name_en}
												disabled={!isEditable}
											/>
											{errors.name_en && (
												<p className="text-red-500">{errors.name_en}</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>カード名(日本語): </th>
										<td>
											<input
												name="name_ja"
												type="text"
												onChange={handleChange}
												value={values.name_ja}
												disabled={!isEditable}
											/>
											{errors.name_ja && (
												<p className="text-red-500">{errors.name_ja}</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>カード名(日本語よみ): </th>
										<td>
											<input
												name="name_ja_kana"
												type="text"
												onChange={handleChange}
												value={values.name_ja_kana}
												disabled={!isEditable}
											/>
											{errors.name_ja_kana && (
												<p className="text-red-500">
													{errors.name_ja_kana}
												</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>カードタイプ: </th>
										<td>
											<input
												name="frame_type"
												type="text"
												style={{ color: 'gray' }}
												onChange={handleChange}
												value={values.frame_type}
												disabled={!isEditable}
											/>
											{errors.frame_type && (
												<p className="text-red-500">{errors.frame_type}</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th>カテゴリ: </th>
										<td>
											<input
												name="archetype"
												type="text"
												style={{ color: 'gray' }}
												onChange={handleChange}
												value={values.archetype}
												disabled={!isEditable}
											/>
											{errors.archetype && (
												<p className="text-red-500">{errors.archetype}</p>
											)}
										</td>
									</tr>
								</tbody>
							</table>
							<button
								type="submit"
								className="simple-button mt-2 bg-black/90"
								disabled={!isEditable}>
								変更を保存
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