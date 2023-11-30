import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Show({user, errors}) {
    const [values, setValues] = useState({
		id: user.id,
		name: user.name,
		email: user.email,
		password: user.password,
		created_at: user.created_at,
		updated_at: user.updated_at,
	});

  // この詳細表示画面からは、user情報は編集・削除できない仕様にしておく
	// const [isEditable, setIsEditable] = useState(false); // 編集可or編集不可についての状態
	// const [isDeletable, setIsDeletable] = useState(false); // 削除可or削除不可についての状態

	// userの情報を編集
	// const handleChange = e => {
	// 	const key = e.target.name;
	// 	const value = e.target.value;
	// 	setValues({
	// 		...values,
	// 		[key]: value,
	// 	});
	// };

	// フォームの送信
	// const handleSubmit = e => {
	// 	e.preventDefault();
	// 	router.put(`/admin/user/${values.id}`, values);
	// };

	// userの削除
	// const handleDelete = e => {
	// 	e.preventDefault();
	// 	router.delete(`/admin/user/${values.id}`);
  // };

	return (
		<>
			<div className="w-3/5 mt-8 mx-auto">
				<div className="flex justify-between">
					<h1 className="font-bold text-3xl mb-8">user詳細</h1>
					<Link href={route('admin.user.index')} className="hover:text-blue-400">
						{'< '} user一覧へ戻る
					</Link>
				</div>
				<h2 className="text-lg">user詳細を確認・編集</h2>
				<div className="p-8 mb-4 bg-gray-100 rounded-md">
					<input
						id="edit-checkbox"
						type="checkBox"
						// checked={isEditable}
						// onChange={() => setIsEditable(prev => !prev)}
						className="w-4 h-4"
					/>
					<label htmlFor="edit-checkbox" className="text-black select-none">
						編集可能にする
					</label>
					<form
						// onSubmit={handleSubmit}
						method="POST">
						<table className="show-table">
							<thead className="hidden">
								<tr>
									<th colSpan="2" className="text-center">
										user情報
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
									<th className="text-right">name:　</th>
									<td>
										<input
											name="name"
											type="text"
											className="w-80"
											// onChange={handleChange}
											value={values.name}
											disabled
											// disabled={!isEditable}
										/>
										{errors.name && (
											<p className="text-red-500">{errors.name}</p>
										)}
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th className="text-right">email:　</th>
									<td>
										<input
											name="email"
											type="text"
											className="w-80"
											// onChange={handleChange}
											value={values.email}
											disabled
											// disabled={!isEditable}
										/>
										{errors.email && (
											<p className="text-red-500">{errors.email}</p>
										)}
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th className="text-right">password:　</th>
									<td>
										<input
											name="password"
											type="text"
											className="w-80"
											// onChange={handleChange}
											value={values.password}
											disabled
											// disabled={!isEditable}
										/>
										{errors.password && (
											<p className="text-red-500">{errors.password}</p>
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
											// onChange={handleChange}
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
											// onChange={handleChange}
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
						<div className="flex justify-end mt-4">
							<button
								type="submit"
								className="simple-button bg-black/90 block"
								disabled
								// disabled={!isEditable}
							>
								変更を保存
							</button>
						</div>
					</form>
				</div>
				<h2 className="text-lg">userを削除</h2>
				<div className="p-8 bg-gray-100 rounded-md flex justify-start">
					<div>
						<input
							id="delete-checkbox"
							type="checkBox"
							// checked={isDeletable}
							// onChange={() => setIsDeletable(prev => !prev)}
						/>
						<label htmlFor="delete-checkbox" className="text-black select-none">
							削除可能にする
						</label>
					</div>
					<form
						// onSubmit={handleDelete}
						className="ml-4">
						<button
							disabled
							// disabled={!isDeletable}
							className="simple-button delete-btn">
							このuserを削除する
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
Show.layout = page => <AdminLayout title="user詳細" children={page} />;

export default Show;
