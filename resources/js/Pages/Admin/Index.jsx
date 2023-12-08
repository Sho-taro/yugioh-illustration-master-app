import React from 'react';
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({ cardsNum, usersNum }) {
	return (
		<>
			<div className="w-4/5 pt-8 mx-auto">
				<Link href={route('index')} className="simple-button">
					プレイ画面へ
				</Link>
				<h1 className="text-3xl font-bold mt-8 mb-12">管理画面トップ</h1>
				<div className="mb-8">
					<p>カードに関するテーブル（クリックしてデータを一覧表示）</p>
					<div className="py-4">
						<div className="flex justify-start mb-4">
							<div className="p-2 bg-gray-300 text-center rounded-md">
								<img
									src="/images/cards.jpg"
									className="w-24 h-24 inline-block"
									alt="cards"
								/>
								<Link
									href={route('admin.card.index')}
									className="hover:text-blue-400 block">
									cards
								</Link>
							</div>
							<div className="ml-4 p-2 bg-gray-300 text-center rounded-md">
								<img
									src="/images/tags.png"
									className="w-24 h-24 inline-block"
									alt="tags"
								/>
								<Link href="" className="hover:text-blue-400 block">
									tags
								</Link>
							</div>
						</div>
						<div className="flex justify-start">
							<div className="p-2 bg-gray-300 text-center rounded-md">
								<img
									src="/images/products.jpeg"
									className="w-24 h-24 inline-block"
									alt="products"
								/>
								<Link
									href={route('admin.product.index')}
									className="hover:text-blue-400 block">
									products
								</Link>
							</div>
							<div className="p-2 ml-4 bg-gray-300 text-center rounded-md">
								<img
									src="/images/periods.png"
									className="w-24 h-24 inline-block"
									alt="periods"
								/>
								<Link
									href={route('admin.period.index')}
									className="hover:text-blue-400 block">
									periods
								</Link>
							</div>
							<div className="p-2 ml-4 bg-gray-300 text-center rounded-md">
								<img
									src="/images/archetypes.png"
									className="w-24 h-24 inline-block"
									alt="archetypes"
								/>
								<Link href="" className="hover:text-blue-400 block">
									archetypes
								</Link>
							</div>
							<div className="p-2 ml-4 bg-gray-300 text-center rounded-md">
								<img
									src="/images/frame_types.jpg"
									className="h-24 aspect-auto inline-block"
									alt="frame_types"
								/>
								<Link
									href={route('admin.frametype.index')}
									className="hover:text-blue-400 block">
									frame_types
								</Link>
							</div>
							<div className="p-2 ml-4 bg-gray-300 text-center rounded-md">
								<img
									src="/images/races.jpg"
									className="w-24 h-24 inline-block"
									alt="races"
								/>
								<Link href="" className="hover:text-blue-400 block">
									races
								</Link>
							</div>
							<div className="p-2 ml-4 bg-gray-300 text-center rounded-md">
								<img
									src="/images/attributes.jpeg"
									className="w-24 h-24 inline-block"
									alt="attributes"
								/>
								<Link href="" className="hover:text-blue-400 block">
									attributes
								</Link>
							</div>
							<div className="p-2 ml-4 bg-gray-300 text-center rounded-md">
								<img
									src="/images/spell_trap_play_types.jpeg"
									className="w-24 h-24 inline-block"
									alt="spell_trap_play_types"
								/>
								<Link href="" className="hover:text-blue-400 block">
									spell_trap_play_types
								</Link>
							</div>
						</div>
					</div>
				</div>
				<div className="mb-8">
					<p>ユーザーに関するテーブル（クリックしてデータを一覧表示）</p>
					<div className="py-4">
						<div className="flex justify-start mb-4">
							<div className="p-2 bg-gray-300 text-center rounded-md">
								<img
									src="/images/account-circle-black.svg"
									className="w-24 h-24 inline-block"
									alt="users"
								/>
								<Link
									href={route('admin.user.index')}
									className="hover:text-blue-400 block">
									usersテーブル
								</Link>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
Index.layout = page => <AdminLayout title="トップ" children={page} />;

export default Index;
