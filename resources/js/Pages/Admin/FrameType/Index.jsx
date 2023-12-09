import React from 'react';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({ data, message }) {
	return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key="">
				<div className="flex justify-between mb-8">
					<h1 className="font-bold text-3xl">frame_type一覧</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				<div className="mb-6">
					<Link href={route('admin.frametype.create')} className="simple-button">
						+ frame_typeを新規登録
					</Link>
				</div>
				{message && <p className="text-green-500">{message}</p>}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>frame_type_code</th>
							<th>name_ja</th>
							<th>name_en</th>
						</tr>
					</thead>
					{data.data.map(ft => (
						<tbody key={ft.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/frametype/${ft.id}`}
										className="hover:text-blue-400 underline">
										{ft.id}
									</Link>
								</td>
								<td className="px-2 py-4">{ft.frame_type_code}</td>
								<td className="px-2 py-4">{ft.name_ja}</td>
								<td className="px-2 py-4">{ft.name_en}</td>
								{/* <td className="px-2 py-4">
									{ft.updated_at.substr(0, 10)} {ft.updated_at.substr(11, 5)}
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
Index.layout = page => <AdminLayout title="frame_types一覧" children={page} />;

export default Index;
