import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import Pagination from '@/Components/Admin/Pageination';
// import './css/Index.css';

function Index({ data, usersNum ,message }) {
	// console.log(data);
	return (
		<>
			<div className="w-3/5 pt-8 mx-auto">
				<div className="flex justify-between mb-8">
					<h1 className="font-bold text-3xl">ユーザー 一覧</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				{<p>登録ユーザー数: {usersNum}</p>}
				{/* {message && <p className="text-green-500">{message}</p>} */}
				<table border="1" className="index-table mt-4 w-full">
					<thead>
						<tr>
							<th>ユーザーID</th>
							<th width="300">ユーザー名</th>
							<th width="300">メールアドレス</th>
							<th>登録日時</th>
						</tr>
					</thead>
					{data.data.map(user => (
						<tbody key={user.id}>
							<tr>
								<td className="px-2 py-4">{user.id}</td>
								<td className="px-2 py-4">
									<Link
										href={`/admin/user/${user.id}`}
										className="hover:text-blue-400 underline">
										{user.name}
									</Link>
								</td>
								<td className="px-2 py-4">{user.email}</td>
								<td className="px-2 py-4">
									{user.created_at.substr(0, 10)} {user.created_at.substr(11, 5)}
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
Index.layout = page => <AdminLayout title="ユーザ一覧" children={page} />;

export default Index;