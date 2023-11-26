import React from 'react';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';

function Index({ data }) {
	return (
		<>
			<div className="w-2/3 mt-8 mx-auto" key="">
				<div className="flex justify-between mb-4">
					<h1 className="font-bold text-3xl mb-4">frame_type一覧</h1>
					<Link href={route('admin.index')}>{'< '} 管理画面トップへ戻る</Link>
				</div>
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>frame_type_code</th>
							<th>name_en</th>
							<th>name_ja</th>
						</tr>
					</thead>
					{data.data.map(ft => (
						<tbody key={ft.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/frametype/${ft.id}`}
										className="text-blue-600 underline">
										{ft.id}
									</Link>
								</td>
								<td className="px-2 py-4">{ft.frame_type_code}</td>
								<td className="px-2 py-4">{ft.name_en}</td>
								<td className="px-2 py-4">{ft.name_ja}</td>
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

export default Index;
