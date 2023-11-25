import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
// import './css/Index.css';

function Index({ data, message }) {
	// console.log(data);
	return (
		<>
      <div className="w-4/5 mt-8 mx-auto">
        <h1 className="font-bold text-3xl mb-4">ユーザー 一覧</h1>
				<div>
					<Link href={route('admin.index')}>
						← 管理画面トップへ戻る
					</Link>
				</div>
				{/* {message && <p className="text-green-500">{message}</p>} */}
				<table border="1" className="index-table mt-4">
					<thead>
						<tr>
							<th>ユーザーID</th>
							<th width="400">ユーザー名</th>
							<th>登録日時</th>
						</tr>
					</thead>
					{data.data.map(user => (
						<tbody key={user.id}>
							<tr>
								<td className="px-2 py-4">
                  {user.id}
								</td>
								<td className="px-2 py-4">
									<Link
										href={`/admin/user/${user.id}`}
										className="text-blue-600 no-underline">
										{user.name}
									</Link>
								</td>
								<td className="px-2 py-4">{user.created_at}</td>
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
Index.layout = page => <AdminLayout title="ユーザ一覧" children={page} />;

export default Index;