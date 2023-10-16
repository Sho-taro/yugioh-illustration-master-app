import React from 'react'
import { Link } from '@inertiajs/react';
import AdminLayout from '@/Layouts/AdminLayout';

function Index({cardsNum, usersNum}) {
  return (
		<>
			<div className="w-4/5 mt-8 mx-auto">
				<Link href={route('index')} className="simple-button">
					プレイ画面へ
				</Link>
				<div className="mt-8">
					<div className="flex mb-4">
						<p className="text-2xl">
							登録済みカード: <span className="font-bold">{cardsNum}</span>枚
						</p>
						<Link href={route('admin.card.index')} className="simple-button ml-8">
							カード一覧へ
						</Link>
					</div>
					<div className="flex mb-4">
						<p className="text-2xl">
							ユーザ数: <span className="font-bold">{usersNum}</span>人
						</p>
						<Link href={route('admin.user.index')} className="simple-button ml-8">
							ユーザ一覧へ
						</Link>
					</div>
				</div>
			</div>
		</>
  );
}

// Persistent Layoutsの設定
Index.layout = page => <AdminLayout title="トップ" children={page} />;

export default Index