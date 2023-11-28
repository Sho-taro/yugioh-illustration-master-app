import React from 'react';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({ data, message }) {
	return (
		<>
			<div className="w-2/3 mt-8 mx-auto" key="">
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">periods一覧</h1>
					<Link href={route('admin.index')}>{'< '} 管理画面トップへ戻る</Link>
				</div>
				{message && <p className="text-green-500">{message}</p>}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>name_en</th>
							<th>name_ja</th>
						</tr>
					</thead>
					{data.data.map(period => (
						<tbody key={period.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/frametype/${period.id}`}
										className="text-blue-600 underline">
										{period.id}
									</Link>
								</td>
								<td className="px-2 py-4">{period.name_en}</td>
								<td className="px-2 py-4">{period.name_ja}</td>
								{/* <td className="px-2 py-4">
									{period.updated_at.substr(0, 10)} {period.updated_at.substr(11, 5)}
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
Index.layout = page => <AdminLayout title="periods一覧" children={page} />;

export default Index;
