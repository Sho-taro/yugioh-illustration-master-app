import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Create({ errors, registeredTag, message }) {
	// DBに保存する用のデータ
	const [values, setValues] = useState({
		name: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		// フォームの送信
		router.post(route('admin.tag.store'), values);
	};

	const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		setValues({
			...values,
			[key]: value,
		});
	};

	const clearInput = () => {
    setValues({
		name: '',
    });
	};

	return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key="">
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">tag新規登録</h1>
					<Link href={route('admin.tag.index')} className="hover:text-blue-400">
						{'< '} tags一覧へ戻る
					</Link>
				</div>
				<h2 className="text-lg">tagを新規登録する</h2>
				<div className="p-8 bg-gray-100 rounded-md mb-4">
					{message && (
						<p className="text-green-500 mb-2">
							{message}: {registeredTag.name_ja}
						</p>
					)}
					<form onSubmit={handleSubmit} method="POST">
						<table className="register-table mb-4">
							<thead className="hidden">
								<tr>
									<th colSpan="2" className="text-center">
										tagを登録
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>name:　</th>
									<td>
										<input
											name="name"
											type="text"
											value={values.name}
											placeholder="かっこいい"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.name && (
											<p className="text-red-500">{errors.name}</p>
										)}
									</td>
								</tr>
							</tbody>
						</table>
						<div>
							<button type="submit" className="simple-button bg-black/90">
								登録
							</button>
							<button
								type="button"
								onClick={clearInput}
								className="mt-8 block underline text-blue-600 hover:text-blue-400">
								入力内容をクリア
							</button>
						</div>
					</form>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
Create.layout = page => <AdminLayout title="tag新規登録" children={page} />;

export default Create;