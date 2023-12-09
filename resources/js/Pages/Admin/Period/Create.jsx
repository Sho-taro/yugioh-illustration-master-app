import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Create({errors, registeredPeriod, message}) {
	// DBに保存する用のデータ
	const [values, setValues] = useState({
		period_code: '',
		name: '',
		start_date: '',
		end_date: '',
	});

	const handleSubmit = e => {
		e.preventDefault();
		// フォームの送信
		router.post(route('admin.period.store'), values);
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
			period_code: '',
			name: '',
			start_date: '',
			end_date: '',
		});
	};

	return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key="">
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">period新規登録</h1>
					<Link href={route('admin.period.index')} className="hover:text-blue-400">
						{'< '} periods一覧へ戻る
					</Link>
				</div>
				<h2 className="text-lg">periodを新規登録する</h2>
				<div className="p-8 bg-gray-100 rounded-md mb-4">
					{message && (
						<p className="text-green-500 mb-2">
							{message}: {registeredPeriod.name_ja}
						</p>
					)}
					<form onSubmit={handleSubmit} method="POST">
						<table className="register-table mb-4">
							<thead className="hidden">
								<tr>
									<th colSpan="2" className="text-center">
										periodを登録
									</th>
								</tr>
							</thead>
							<tbody>
								<tr>
									<th className="w-20">period_code:　</th>
									<td>
										<input
											name="period_code"
											type="text"
											value={values.period_code}
											placeholder="0001"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.period_code && (
											<p className="text-red-500">{errors.period_code}</p>
										)}
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th className="w-20">name:　</th>
									<td>
										<input
											name="name"
											type="text"
											value={values.name}
											placeholder="１期"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.name && (
											<p className="text-red-500">{errors.name}</p>
										)}
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>start_date:　</th>
									<td>
										<input
											name="start_date"
											type="text"
											value={values.start_date}
											placeholder="yyyy-mm-dd"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.start_date && (
											<p className="text-red-500">{errors.start_date}</p>
										)}
									</td>
								</tr>
							</tbody>
							<tbody>
								<tr>
									<th>end_date:　</th>
									<td>
										<input
											name="end_date"
											type="text"
											value={values.end_date}
											placeholder="yyyy-mm-dd"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.end_date && (
											<p className="text-red-500">{errors.end_date}</p>
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
Create.layout = page => <AdminLayout title="period新規登録" children={page} />;

export default Create;
