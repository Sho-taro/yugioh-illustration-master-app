import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
// import './css/Index.css';

function Index({ data, cardsNum, errMessage }) {
	// console.log(data);
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	router.get(route('admin.card.index'), values);
	// }
	return (
		<>
			<div className="w-3/5 mt-8 mx-auto">
				<div className="flex justify-between">
					<h1 className="font-bold text-3xl mb-4">カード 一覧</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				{
					<p>
						登録カード枚数: <span className="font-bold">{cardsNum}</span> 枚
					</p>
				}
				<div>
					<details>
						<summary>カードを検索する</summary>
						<form action={route('admin.card.index')}>
							<div className="ml-4">
								<p>検索方法を選択: </p>
								<div>
									<div>
										<input
											type="radio"
											name="search-type"
											id="std"
											value="std"
											defaultChecked
										/>
										<label htmlFor="std">カード名（標準）</label>
									</div>
									<div>
										<input
											type="radio"
											name="search-type"
											id="kana"
											value="kana"
										/>
										<label htmlFor="kana">カード名（読み）</label>
									</div>
								</div>
							</div>
							<div className="relative w-1/2">
								<input
									type="text"
									name="card-name"
									placeholder="カード名を入力"
									className="w-full"
								/>
								<button
									type="submit"
									className="absolute top-1/2 right-2 -translate-y-1/2">
									<img
										src="/images/search.svg"
										alt="検索ボタン"
										className="cursor-pointer hover:opacity-50"
									/>
								</button>
							</div>
						</form>
					</details>
				</div>
				{errMessage && <p className="text-red-500">{errMessage}</p>}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th width="350">カード名</th>
							<th width="350">カード名（読み）</th>
							<th>イラスト</th>
							<th>更新日時</th>
						</tr>
					</thead>
					{data.data.map(card => (
						<tbody key={card.id}>
							<tr>
								<td className="px-2 py-4">{card.id}</td>
								<td className="px-2 py-4">
									<Link
										href={`/admin/card/${card.id}`}
										className="hover:text-blue-400 underline">
										{card.name_ja}
									</Link>
								</td>
								<td className="px-2 py-4">
									{card.name_ja_kana}
								</td>
								<td>
									<div className="mx-auto w-12">
										<img
											src={`/images/card-images/${card.product_code}-${card.list_number}.jpg`}
											alt="カードイラスト"
											className="w-12"
										/>
									</div>
								</td>
								<td className="px-2 py-4">
									{card.updated_at.substr(0, 10)} {card.updated_at.substr(11, 5)}
								</td>
							</tr>
						</tbody>
					))}
				</table>
				<Pagination data={data} />
			</div>
		</>
	);
}

// Persistent Layoutの設定
Index.layout = page => <AdminLayout title="カード一覧" children={page} />;

export default Index;
