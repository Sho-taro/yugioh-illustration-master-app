import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
import { router } from '@inertiajs/react';



function Index({auth}) {
  return (
		<>
			<div className="w-1/2 h-screen mx-auto p-4 border-x-2 border-gray-400">
				{auth.user === null ? (
					<div className="flex">
						<Link href={route('login')}>ログイン</Link>
						<p>・</p>
						<Link href={route('register')}>新規登録</Link>
					</div>
				) : (
					<div>
            <p>{auth.user.name}</p>
						<p
							className="text-blue-600 cursor-pointer"
							onClick={e => {
								e.preventDefault();
								router.post('logout');
							}}>
							ログアウト
						</p>
						<Link href={`/tags/${auth.user.id}`}>タグ一覧</Link>
					</div>
				)}
				<p>Galleryの説明</p>
				<Link href={route('gallery.setting')}>Galleryで遊ぶ</Link>
			</div>
		</>
  );
}

// Persistent Layoutsの設定
Index.layout = page => <Layout title="トップページ" children={page} />;

export default Index