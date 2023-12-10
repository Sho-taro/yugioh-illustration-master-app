import React from 'react';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({ data, message }) {
	return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key="">
				<div className="flex justify-between mb-8">
					<h1 className="font-bold text-3xl">attributes一覧</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				<div className="mb-6">
					<Link href={route('admin.attribute.create')} className="simple-button">
						+ attributeを新規登録
					</Link>
				</div>
				{message && <p className="text-green-500">{message}</p>}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>attribute_code</th>
							<th>name_ja</th>
							<th>name_en</th>
						</tr>
					</thead>
					{data.data.map(attribute => (
						<tbody key={attribute.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/attribute/${attribute.id}`}
										className="hover:text-blue-400 underline">
										{attribute.id}
									</Link>
								</td>
								<td className="px-2 py-4">{attribute.attribute_code}</td>
								<td className="px-2 py-4">{attribute.name_ja}</td>
								<td className="px-2 py-4">{attribute.name_en}</td>
								{/* <td className="px-2 py-4">
									{attribute.updated_at.substr(0, 10)} {attribute.updated_at.substr(11, 5)}
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
Index.layout = page => <AdminLayout title="attributes一覧" children={page} />;

export default Index;