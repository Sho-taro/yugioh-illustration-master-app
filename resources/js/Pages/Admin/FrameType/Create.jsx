import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

function Create({errors, registeredFrameType, message}) {
	// DBに保存する用のデータ
	const [values, setValues] = useState({
		frame_type_code: '',
		name_en: '',
		name_ja: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		// フォームの送信
		router.post(route('admin.frametype.store'), values);
	};

	const handleChange = e => {
		const key = e.target.name;
		const value = e.target.value;
		setValues({
			...values,
			[key]: value,
		});
	};

	return (
		<>
			<div className="w-2/3 mt-8 mx-auto" key="">
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">frame_type新規登録</h1>
					<Link href={route('admin.index')}>{'< '} 管理画面トップへ戻る</Link>
				</div>
				<h2 className="text-lg">frame_typeを新規登録する</h2>
				<div className="p-8 bg-gray-100 rounded-md mb-4">
					{message && (
						<p className="text-green-500 mb-2">
							{message}: {registeredFrameType.name_ja}
						</p>
					)}
					<form onSubmit={handleSubmit} method="POST">
						<table className="register-table mb-4">
							<thead className="hidden">
								<tr>
									<th colSpan="2" className="text-center">
										frame_typeを登録
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th className="text-right">frame_type_code:　</th>
									<td>
										<input
											name="frame_type_code"
											type="text"
											value={values.frame_type_code}
											className="w-80"
											onChange={handleChange}
										/>
										{errors.frame_type_code && (
											<p className="text-red-500">{errors.frame_type_code}</p>
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
											value={values.name_en}
											className="w-80"
											onChange={handleChange}
										/>
										{errors.name_en && (
											<p className="text-red-500">{errors.name_en}</p>
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
											value={values.name_ja}
											className="w-80"
											onChange={handleChange}
										/>
										{errors.name_ja && (
											<p className="text-red-500">{errors.name_ja}</p>
										)}
									</td>
								</tr>
							</tbody>
						</table>
						<button type="submit" className="simple-button mt-8 bg-black/90">
							登録
						</button>
					</form>
				</div>
			</div>
		</>
	);
}

export default Create;
