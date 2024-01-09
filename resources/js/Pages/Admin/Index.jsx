import React from 'react';
import { Link } from '@inertiajs/react';
import DatabaseCard from '@/Components/Admin/DatabaseCard';
import AdminLayout from '@/Layouts/AdminLayout';

function Index() {
	return (
		<>
			<div className="w-4/5 pt-8 mx-auto">
				<div className="mb-12 flex justify-between">
					<h1 className="text-3xl font-bold">管理画面トップ</h1>
					<div>
						<Link href={route('game')} className="simple-button">
							プレイ画面へ
						</Link>
					</div>
				</div>
				<section className="mb-8">
					<div className="w-60 bg-blue-200 text-center rounded-md hover:opacity-70 active:scale-95">
						<Link href={route('admin.searchcard.index')} className="block text-black">
							<img
								src="/images/search.svg"
								className="h-24 aspect-auto inline-block"
								alt="検索"
							/>
							カードを検索する
						</Link>
					</div>
				</section>
				<section className="mb-8">
					<h2>カードに関するテーブル（クリックしてデータを一覧表示）</h2>
					<div>
						<div className="flex justify-start mb-4">
							<DatabaseCard
								isMlOn={false}
								src="/images/cards.jpg"
								dbName="cards"
								routeName="admin.card.index"
							/>
							<DatabaseCard
								isMlOn={true}
								src="/images/released_cards.jpg"
								dbName="released_cards"
								routeName="admin.releasedcard.index"
							/>
							<DatabaseCard
								isMlOn={true}
								src="/images/tags.svg"
								dbName="tags"
								routeName="admin.tag.index"
							/>
						</div>
						<div className="flex justify-start">
							<DatabaseCard
								isMlOn={false}
								src="/images/products.jpeg"
								dbName="products"
								routeName="admin.product.index"
							/>
							<DatabaseCard
								isMlOn={true}
								src="/images/periods.svg"
								dbName="periods"
								routeName="admin.period.index"
							/>
							<DatabaseCard
								isMlOn={true}
								src="/images/archetypes.svg"
								dbName="archetypes"
								routeName="admin.archetype.index"
							/>
							<DatabaseCard
								isMlOn={true}
								src="/images/frame_types.jpg"
								dbName="frame_types"
								routeName="admin.frametype.index"
							/>
							<DatabaseCard
								isMlOn={true}
								src="/images/races.jpg"
								dbName="races"
								routeName="admin.race.index"
							/>
							<DatabaseCard
								isMlOn={true}
								src="/images/attributes.jpeg"
								dbName="attributes"
								routeName="admin.attribute.index"
							/>
							<DatabaseCard
								isMlOn={true}
								src="/images/spell_trap_play_types.jpeg"
								dbName="spell_trap_play_types"
								routeName="admin.playtype.index"
							/>
						</div>
					</div>
				</section>
				<section className="mb-8">
					<h2>ユーザーに関するテーブル（クリックしてデータを一覧表示）</h2>
					<div>
						<div className="flex justify-start mb-4">
							<DatabaseCard
								isMlOn={false}
								src="/images/account-circle-black.svg"
								dbName="users"
								routeName="admin.user.index"
							/>
						</div>
					</div>
				</section>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
Index.layout = page => <AdminLayout title="トップ" children={page} />;

export default Index;
