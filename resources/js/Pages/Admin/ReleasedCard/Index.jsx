import React from 'react';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({ data, message }) {
	return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key="">
				<div className="flex justify-between mb-8">
					<h1 className="font-bold text-3xl">released_cards一覧</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				{message && <p className="text-green-500">{message}</p>}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>イラスト</th>
							<th>product_code</th>
							<th>list_number</th>
							<th>card_official_id</th>
						</tr>
					</thead>
					{data.data.map(releasedCard => (
						<tbody key={releasedCard.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/releasedcard/${releasedCard.id}`}
										className="hover:text-blue-400 underline">
										{releasedCard.id}
									</Link>
								</td>
								<td className="px-2 py-4">
									<img
										src={`/images/card-images/${releasedCard.product_code}-${releasedCard.list_number}.jpg`}
                    alt="イラスト"
                    className="w-40"
									/>
								</td>
								<td className="px-2 py-4">{releasedCard.product_code}</td>
								<td className="px-2 py-4">{releasedCard.list_number}</td>
								<td className="px-2 py-4">{releasedCard.card_official_id}</td>
								{/* <td className="px-2 py-4">
									{releasedCard.updated_at.substr(0, 10)} {releasedCard.updated_at.substr(11, 5)}
								</td> */}
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
Index.layout = page => <AdminLayout title="released_cards一覧" children={page} />;

export default Index;
