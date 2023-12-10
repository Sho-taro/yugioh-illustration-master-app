import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Create({ errors, registeredArchetype, message }) {
	// DBに保存する用のデータ
	const [values, setValues] = useState({
		archetype_code: '',
		name_ja: '',
		name_en: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		// フォームの送信
		router.post(route('admin.archetype.store'), values);
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
			archetype_code: '',
			name_ja: '',
			name_en: '',
		});
  };

  return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key="">
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">archetype新規登録</h1>
					<Link href={route('admin.archetype.index')} className="hover:text-blue-400">
						{'< '} archetypes一覧へ戻る
					</Link>
				</div>
				<h2 className="text-lg">archetypeを新規登録する</h2>
				<div className="p-8 bg-gray-100 rounded-md mb-4">
					{message && (
						<p className="text-green-500 mb-2">
							{message}: {registeredArchetype.name_ja}
						</p>
					)}
					<form onSubmit={handleSubmit} method="POST">
						<table className="register-table mb-4">
							<thead className="hidden">
								<tr>
									<th colSpan="2" className="text-center">
										archetypeを登録
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th>archetype_code:　</th>
									<td>
										<input
											name="archetype_code"
											type="text"
											value={values.archetype_code}
											placeholder="0001"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.archetype_code && (
											<p className="text-red-500">{errors.archetype_code}</p>
										)}
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>name_ja:　</th>
									<td>
										<input
											name="name_ja"
											type="text"
											value={values.name_ja}
											placeholder="ブルーアイズ"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.name_ja && (
											<p className="text-red-500">{errors.name_ja}</p>
										)}
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>name_en:　</th>
									<td>
										<input
											name="name_en"
											type="text"
											value={values.name_en}
											placeholder="Blue-Eyes"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.name_en && (
											<p className="text-red-500">{errors.name_en}</p>
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
Create.layout = page => <AdminLayout title="archetype新規登録" children={page} />;


export default Create