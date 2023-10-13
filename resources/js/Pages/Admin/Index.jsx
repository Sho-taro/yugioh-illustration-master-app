import React from 'react';
import AdminLayout from '../../Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
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

				{/* ↓ ここから下はページネーション */}
				{/* {data.links.map(link => (
					<p>
						<a href={link.url}>{link.label}</a>
					</p>
				))} */}
				{/* {console.log(data.links[1])} */}
				{/* <a href={data.links[2].url}>次のページ</a> */}

				{data.links.map((link, i) => {
					if (i === 0) {
						if (data.current_page === 1) {
							return <p key={i}>前のページへ</p>;
						} else {
							return (
								<p key={i}>
									<a href={link.url}>前のページへ</a>
								</p>
							);
						}
					} else if (i === 1) {
						if (data.current_page === 1) {
							return <span key={i}>　{link.label}　</span>;
						} else {
							return (
								<span key={i}>
									<a href={link.url}>　{link.label}　</a>
								</span>
							);
						}
					} else if (i === data.last_page) {
						if (i === data.current_page) {
							return <span key={i}>　{link.label}　</span>;
						} else {
							return (
								<span key={i}>
									<a href={link.url}>　{link.label}　</a>
								</span>
							);
						}
					} else if (i === data.last_page + 1) {
						if (data.current_page === data.last_page) {
							return <p key={i}>次のページへ</p>;
						} else {
							return (
								<p key={i}>
									<a href={link.url}>次のページへ</a>
								</p>
							);
						}
					} else if (i === data.current_page) {
						return <span key={i}>　{link.label}　</span>;
					} else if (i >= data.current_page - 3 && i <= data.current_page + 3) {
						return (
							<span key={i}>
								<a href={link.url}>　{link.label}　</a>
							</span>
						);
					} else {
						return null;
					}
				})}
			</div>
		</>
	);
}

// Persistent Layoutの設定
Index.layout = page => <AdminLayout title="カード一覧" children={page} />;

export default Index;