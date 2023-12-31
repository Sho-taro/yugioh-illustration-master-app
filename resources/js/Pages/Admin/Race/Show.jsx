import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Show({ race, errors }) {
	const [values, setValues] = useState({
		id: race.id,
		race_code: race.race_code,
		name_ja: race.name_ja,
		name_en: race.name_en,
		created_at: race.created_at,
		updated_at: race.updated_at,
	});

	const [isEditable, setIsEditable] = useState(false); // 編集可or編集不可についての状態
	const [isDeletable, setIsDeletable] = useState(false); // 削除可or削除不可についての状態

	// raceの情報を編集
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
		router.put(`/admin/race/${values.id}`, values);
	};

	// raceの削除
	const handleDelete = e => {
		e.preventDefault();
		router.delete(`/admin/race/${values.id}`);
	};

	return (
		<>
			<div className="w-2/3 pt-8 mx-auto">
				<div className="flex justify-between">
					<h1 className="font-bold text-3xl mb-8">race詳細</h1>
					<Link href={route('admin.race.index')} className="hover:text-blue-400">
						{'< '} races一覧へ戻る
					</Link>
				</div>
				<h2 className="text-lg">race詳細を確認・編集</h2>
				<div className="p-8 mb-4 bg-gray-100 rounded-md">
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
										race情報
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
									<th className="text-right">race_code:　</th>
									<td>
										<input
											name="race_code"
											type="text"
											className="w-80"
											onChange={handleChange}
											value={values.race_code}
											disabled={!isEditable}
										/>
										{errors.race_code && (
											<p className="text-red-500">{errors.race_code}</p>
										)}
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th className="text-right">name_ja:　</th>
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
									<th className="text-right">name_en:　</th>
									<td>
										<input
											name="name_en"
											type="text"
											className="w-80"
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
				<h2 className="text-lg">raceを削除</h2>
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
							このraceを削除する
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
Show.layout = page => <AdminLayout title="races詳細" children={page} />;

export default Show;