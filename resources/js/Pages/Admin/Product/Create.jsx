import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Create({errors, registeredProduct, message}) {
	// DBに保存する用のデータ
	const [values, setValues] = useState({
		name_en: '',
		name_ja: ''
	});

	const handleSubmit = e => {
		e.preventDefault();
		// フォームの送信
		router.post(route('admin.product.store'), values);
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
					<h1 className="font-bold text-3xl mb-4">product新規登録</h1>
					<Link href={route('admin.index')}>{'< '} 管理画面トップへ戻る</Link>
				</div>
				<h2 className="text-lg">productを新規登録する</h2>
				<div className="p-8 bg-gray-100 rounded-md mb-4">
					{message && (
						<p className="text-green-500 mb-2">
							{message}: {registeredProduct.name_ja}
						</p>
					)}
					<form onSubmit={handleSubmit} method="POST">
						<table className="register-table mb-4">
							<thead className="hidden">
								<tr>
									<th colSpan="2" className="text-center">
										productを登録
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th className="text-right">product_code:　</th>
									<td>
										<input
											name="product_code"
											type="text"
											value={values.product_code}
											placeholder="agov"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.product_code && (
											<p className="text-red-500">{errors.product_code}</p>
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
											placeholder="age of overload"
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
											placeholder="エイジ・オブ・オーバーロード"
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
									<th className="text-right">period:　</th>
									<td>
										<input
											name="period"
											type="text"
											value={values.period}
											placeholder="12th"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.period && (
											<p className="text-red-500">{errors.period}</p>
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

// Persistent Layoutの設定
Create.layout = page => <AdminLayout title="product新規登録" children={page} />;

export default Create;
