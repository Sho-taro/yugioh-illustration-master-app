import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Show({ releasedCard, errors }) {
  const [values, setValues] = useState({
		id: releasedCard.id,
		product_code: releasedCard.product_code,
		list_number: releasedCard.list_number,
		card_official_id: releasedCard.card_official_id,
		created_at: releasedCard.created_at,
		updated_at: releasedCard.updated_at,
  });

  const [isEditable, setIsEditable] = useState(false); // 編集可or編集不可についての状態
  const [isDeletable, setIsDeletable] = useState(false); // 削除可or削除不可についての状態

  // released_cardの情報を編集
  const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		setValues({
			...values,
			[key]: value,
		});
  };

  // フォームの送信
  const handleSubmit = e => {
		e.preventDefault();
		router.put(`/admin/releasedcard/${values.id}`, values);
  };

  // released_cardの削除
  const handleDelete = e => {
		e.preventDefault();
		router.delete(`/admin/releasedcard/${values.id}`);
  };

  return (
		<>
			<div className="w-2/3 pt-8 mx-auto">
				<div className="flex justify-between">
					<h1 className="font-bold text-3xl mb-8">released_card詳細</h1>
					<Link href={route('admin.releasedcard.index')} className="hover:text-blue-400">
						{'< '} releasedCards一覧へ戻る
					</Link>
				</div>
				<h2 className="text-lg">released_card詳細を確認・編集</h2>
				<div className="p-8 mb-4 bg-gray-100 rounded-md flex justify-around">
					<div>
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
											released_card情報
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
										<th className="text-right">product_code:　</th>
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
										<th className="text-right">list_number:　</th>
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
										<th className="text-right">card_official_id:　</th>
										<td>
											<p>{values.card_official_id}</p>
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th className="text-right">created_at:　</th>
										<td>
											<input
												name="created_at"
												type="text"
												className="w-80"
												onChange={handleChange}
												value={values.created_at}
												disabled
											/>
											{errors.created_at && (
												<p className="text-red-500">{errors.created_at}</p>
											)}
										</td>
									</tr>
								</tbody>
								<tbody>
									<tr>
										<th className="text-right">updated_at:　</th>
										<td>
											<input
												name="updated_at"
												type="text"
												className="w-80"
												onChange={handleChange}
												value={values.updated_at}
												disabled
											/>
											{errors.updated_at && (
												<p className="text-red-500">{errors.updated_at}</p>
											)}
										</td>
									</tr>
								</tbody>
							</table>
							<div className="mt-4">
								<button
									type="submit"
									className="simple-button bg-black/90 block"
									disabled={!isEditable}>
									変更を保存
								</button>
							</div>
						</form>
					</div>
					<div>
						<img
							src={`/images/card-images/${releasedCard.product_code}-${releasedCard.list_number}.jpg`}
							alt="イラスト"
							className="w-60"
						/>
					</div>
				</div>
				<h2 className="text-lg">released_cardを削除</h2>
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
							このreleased_cardを削除する
						</button>
					</form>
				</div>
			</div>
		</>
  );
}

// Persistent Layoutの設定
Show.layout = page => <AdminLayout title="released_cards詳細" children={page} />;

export default Show;
