import React from 'react';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({ data, message }) {
	return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key="">
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">periods一覧</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				{message && <p className="text-green-500">{message}</p>}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>period_code</th>
							<th>name</th>
							<th>start_date</th>
							<th>end_date</th>
						</tr>
					</thead>
					{data.data.map(period => (
						<tbody key={period.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/period/${period.id}`}
										className="hover:text-blue-400 underline">
										{period.id}
									</Link>
								</td>
								<td className="px-2 py-4">{period.period_code}</td>
								<td className="px-2 py-4">{period.name}</td>
								<td className="px-2 py-4">{period.start_date}</td>
								<td className="px-2 py-4">{period.end_date}</td>
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
