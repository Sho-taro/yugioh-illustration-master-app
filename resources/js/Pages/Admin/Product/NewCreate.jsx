import React from 'react';
import { useState, useEffect } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import { productCodes } from '@/utils/productCodes/allProducts';
import AdminLayout from '@/Layouts/AdminLayout';

function NewCreate({ errors, registeredProduct, message }) {
	// DBに保存する用のデータ
	const [values, setValues] = useState({
		product_code: '',
		name_ja: '',
		name_en: '',
		release_date: '',
  });
  const [index, setIndex] = useState(0);

  const handleMinus = () => {
    if (index !== 0) {
      setIndex(i => i - 1);
    } else if (index === 0) {
      setIndex(productCodes.length - 1);
    }
  }
  const handlePlus = () => {
		if (index !== productCodes.length - 1) {
			setIndex(i => i + 1);
		} else if (index === productCodes.length - 1) {
			setIndex(0);
		}
  };

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

  useEffect(() => {
    setValues({
		product_code: productCodes[index][0],
		name_ja: productCodes[index][1],
		name_en: productCodes[index][2],
		release_date: productCodes[index][3],
	});
  }, [index]);

	return (
		<>
			<div className="w-2/3 pt-8 mx-auto">
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">product新規登録</h1>
					<Link href={route('admin.product.index')} className="hover:text-blue-400">
						{'< '} products一覧へ戻る
					</Link>
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
									<th>product_code:　</th>
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
									<th>name_ja:　</th>
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
									<th>name_en:　</th>
									<td>
										<input
											name="name_en"
											type="text"
											value={values.name_en}
											placeholder="age of overload（※空欄可）"
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
									<th>release_date:　</th>
									<td>
										<input
											name="release_date"
											type="text"
											value={values.release_date}
											placeholder="2023-07-22"
											className="w-80"
											onChange={handleChange}
										/>
										{errors.release_date && (
											<p className="text-red-500">{errors.release_date}</p>
										)}
									</td>
								</tr>
							</tbody>
						</table>
						<div>
							<button type="submit" className="block simple-button bg-black/90">
								登録
							</button>
						</div>
					</form>
					<div className="mt-4">
						<span>index: {index}　</span>
						<button
							className="px-2 bg-gray-300 rounded-md hover:bg-gray-400"
							onClick={handleMinus}>
							-
						</button>
						<button
							className="px-2 bg-gray-300 rounded-md hover:bg-gray-400"
							onClick={handlePlus}>
							+
						</button>
					</div>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
NewCreate.layout = page => <AdminLayout title="product新規登録" children={page} />;


export default NewCreate;
