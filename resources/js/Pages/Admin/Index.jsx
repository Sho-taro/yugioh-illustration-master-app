import React from 'react'
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({cardsNum, usersNum}) {
  return (
		<>
			<div className="w-4/5 pt-8 mx-auto">
				<Link href={route('index')} className="simple-button">
					プレイ画面へ
				</Link>
				<div className="mt-8">
					<div>
						<div className="w-1/3 mb-8">
							<p className="text-lg">
								<span className="font-bold">一覧表示</span>はこちら
							</p>
							<div className="px-4 py-2 bg-gray-100 rounded-md">
								<p>カード</p>
								<div className="ml-4 mb-4">
									<ul>
										<li>
											<Link
												href={route('admin.card.index')}
												className="hover:text-blue-400">
												cardsテーブル
											</Link>
										</li>
										<li>
											<Link
												href={route('admin.product.index')}
												className="hover:text-blue-400">
												productsテーブル
											</Link>
										</li>
										<li>
											<Link
												href={route('admin.period.index')}
												className="hover:text-blue-400">
												periodsテーブル
											</Link>
										</li>
										<li>
											<Link
												href={route('admin.frametype.index')}
												className="hover:text-blue-400">
												frame_typesテーブル
											</Link>
										</li>
									</ul>
								</div>
								<p>ユーザー</p>
								<div className="ml-4">
									<ul>
										<li>
											<Link
												href={route('admin.user.index')}
												className="hover:text-blue-400">
												usersテーブル
											</Link>
										</li>
									</ul>
								</div>
							</div>
						</div>
						<div className="w-1/3">
							<p className="text-lg">
								<span className="font-bold">新規登録</span>はこちら
							</p>
							<div className="px-4 py-2 bg-gray-100 rounded-md">
								<p>カード</p>
								<div className="ml-4">
									<ul>
										<li>
											<Link
												href={route('admin.card.create')}
												className="hover:text-blue-400">
												cardsテーブル
											</Link>
										</li>
										<li>
											<Link
												href={route('admin.product.create')}
												className="hover:text-blue-400">
												productsテーブル
											</Link>
										</li>
										<li>
											<Link
												href={route('admin.period.create')}
												className="hover:text-blue-400">
												periodsテーブル
											</Link>
										</li>
										<li>
											<Link
												href={route('admin.frametype.create')}
												className="hover:text-blue-400">
												frame_typesテーブル
											</Link>
										</li>
									</ul>
								</div>
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

export default Index