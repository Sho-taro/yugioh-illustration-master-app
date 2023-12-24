import React from 'react';
import AdminLayout from '@/Layouts/AdminLayout';
import { Link } from '@inertiajs/react';
import FilterCards from '@/Components/Admin/Filters/FilterCards';
import SearchResult from '@/Components/Admin/SearchResult';
import Pagination from '@/Components/Admin/Pageination';

function Index({ data }) {
	return (
		<>
			<div className="w-4/5 pt-8 mx-auto">
				<div className="flex justify-between mb-8">
					<h1 className="font-bold text-3xl">カード検索</h1>
					<Link href={route('admin.index')} className="hover:text-blue-400">
						{'< '} 管理画面トップへ戻る
					</Link>
				</div>
				<FilterCards
					isOpen={true}
					routeName="admin.searchcard.index"
					isCardPeriodFilterOn={true}
				/>
				<div className="w-2/3 mx-auto mb-8">
					<p className="mt-4 w-full text-center border">↓ 検索結果 ↓</p>
					{data && <SearchResult data={data} />}
					{data && <Pagination data={data} />}
				</div>
			</div>
		</>
	);
}

// Persistent Layoutの設定
Index.layout = page => <AdminLayout title="カード検索" children={page} />;

export default Index;
