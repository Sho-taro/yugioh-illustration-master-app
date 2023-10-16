import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
// import './css/Index.css';

function Index({ data, message }) {
	// console.log(data);
	return (
		<>
			<div className="w-4/5 mt-8 mx-auto">
				<Link href={route('admin.card.create')} className="simple-button">
					カードを新規登録
				</Link>
				{message && <p className="text-green-500">{message}</p>}
				<table border="1" className="index-table mt-4">
					<thead>
						<tr>
							<th width="350">カード名</th>
							<th>作成日時</th>
							<th>更新日時</th>
						</tr>
					</thead>
					{data.data.map(card => (
						<tbody key={card.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/card/${card.id}`}
										className="text-blue-600 underline">
										{card.name_ja}
									</Link>
								</td>
								<td className="px-2 py-4">{card.created_at}</td>
								<td className="px-2 py-4">{card.created_at}</td>
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