import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import FilterCards from '@/Components/Admin/FilterCards';
import Pagination from '@/Components/Admin/Pageination';
// import './css/Index.css';

function Index({ data, cardsNum, errMessage, message }) {
	// console.log(data);
	// const handleSubmit = (e) => {
	// 	e.preventDefault();
	// 	router.get(route('admin.card.index'), values);
	// }
	return (
		<>
			<div className="w-4/5 pt-8 mx-auto">
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
				<FilterCards routeName="admin.card.index" />
				{errMessage && <p className="text-red-500">{errMessage}</p>}
				{message && <p className="text-green-500">{message}</p>}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>card_official_id</th>
							<th width="350">カード名</th>
							<th>イラスト</th>
							<th>更新日時</th>
						</tr>
					</thead>
					{data.data.map(card => (
						<tbody key={card.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/card/${card.id}`}
										className="hover:text-blue-400 underline">
										{card.id}
									</Link>
								</td>
								<td className="px-2 py-4">{card.card_official_id}</td>
								<td className="px-2 py-4">
									<p className="text-xs">{card.name_ja_kana}</p>
									<p>{card.name_ja}</p>
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
