import React from 'react';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({ data, message }) {
	return (
		<>
			<div className="w-2/3 pt-8 mx-auto" key="">
				<div className="flex justify-between mb-8">
					<h1 className="font-bold text-3xl">products一覧</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				<div className="mb-6">
					<Link href={route('admin.product.create')} className="simple-button">
						+ productを新規登録
					</Link>
					<Link href={route('admin.product.newcreate')} className="simple-button">
						+ productを新規登録 その２
					</Link>
				</div>
				{message && <p className="text-green-500">{message}</p>}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>id</th>
							<th>product_code</th>
							<th>name_ja</th>
							<th>release_date</th>
						</tr>
					</thead>
					{data.data.map(product => (
						<tbody key={product.id}>
							<tr>
								<td className="px-2 py-4">
									<Link
										href={`/admin/product/${product.id}`}
										className="hover:text-blue-400 underline">
										{product.id}
									</Link>
								</td>
								<td className="px-2 py-4">{product.product_code}</td>
								<td className="px-2 py-4">{product.name_ja}</td>
								<td className="px-2 py-4">{product.release_date}</td>
								{/* <td className="px-2 py-4">
									{product.updated_at.substr(0, 10)} {product.updated_at.substr(11, 5)}
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
Index.layout = page => <AdminLayout title="products一覧" children={page} />;

export default Index;
