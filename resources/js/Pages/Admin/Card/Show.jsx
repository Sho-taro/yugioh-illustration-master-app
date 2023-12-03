import React, { useState } from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link, router, usePage } from '@inertiajs/react';
// import './css/Show.css';

function Show({ card, errors }) {
	const [values, setValues] = useState({
		id: card.id,
		product_code: card.product_code,
		list_number: card.list_number,
		card_id: card.card_id,
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
			<div className="w-2/3 pt-8 mx-auto">
				<div className="flex justify-between">
					<h1 className="font-bold text-3xl mb-8">カード詳細</h1>
					<Link href={route('admin.card.index')} className="hover:text-blue-400">
						{'< '} カード一覧へ戻る
					</Link>
				</div>
				<h2 className="text-lg">カード詳細を確認・編集</h2>
				<div className="p-8 mb-4 bg-gray-100 rounded-md flex justify-center">
					<div className="">
						<img
							src={`/images/card-images/${card.product_code}-${card.list_number}.jpg`}
							alt={card.name_ja}
							className="w-80 border-4 border-slate-400 border-solid"
						/>
					</div>
					<div className="ml-8">
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
										<th className="text-right">データベース内ID:　</th>
										<td>
											<p className="w-80">{values.id}</p>
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th className="text-right">商品コード:　</th>
										<td>
											<input
												name="product_code"
												type="text"
												className="w-80"
												onChange={handleChange}
												value={values.product_code}
												disabled={!isEditable}
											/>
											{errors.product_code && (
												<p className="text-red-500">
													{errors.product_code}
												</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th className="text-right">商品内リスト番号:　</th>
										<td>
											<input
												name="list_number"
												type="text"
												className="w-80"
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
										<th className="text-right">カードID(8ケタ):　</th>
										<td>
											<input
												name="card_id"
												type="text"
												className="w-80"
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
										<th className="text-right">カード名(英語):　</th>
										<td>
											<input
												name="name_en"
												type="text"
												className="w-80"
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
										<th className="text-right">カード名(日本語):　</th>
										<td>
											<input
												name="name_ja"
												type="text"
												className="w-80"
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
										<th className="text-right">カード名(日本語よみ):　</th>
										<td>
											<input
												name="name_ja_kana"
												type="text"
												className="w-80"
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
										<th className="text-right">フレームタイプ:　</th>
										<td>
											<input
												name="frame_type"
												type="text"
												className="w-80"
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
										<th className="text-right">カテゴリ:　</th>
										<td>
											<input
												name="archetype"
												type="text"
												className="w-80"
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
								<tbody>
									<tr>
										<th className="text-right">作成日時:　</th>
										<td>
											<p>
												{card.created_at.substr(0, 10)}{' '}
												{card.created_at.substr(11, 5)}
											</p>
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th className="text-right">更新日時:　</th>
										<td>
											<p>
												{card.updated_at.substr(0, 10)}{' '}
												{card.updated_at.substr(11, 5)}
											</p>
										</td>
									</tr>
								</tbody>
							</table>
							<div className="flex justify-end mt-4">
								<button
									type="submit"
									className="simple-button bg-black/90 block"
									disabled={!isEditable}>
									変更を保存
								</button>
							</div>
						</form>
					</div>
				</div>
				<h2 className="text-lg">カードを削除</h2>
				<div className="p-8 bg-gray-100 rounded-md flex justify-start">
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
						<button disabled={!isDeletable} className="simple-button delete-btn">
							このカードを削除する
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
Show.layout = page => <AdminLayout title="カード詳細" children={page} />;

export default Show;