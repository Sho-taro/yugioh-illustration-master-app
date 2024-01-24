import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

// コンポーネント
import Header from '@/Components/Header';

function Index({ auth }) {
	return (
		<>
			<div className="px-4 py-2">
				<Header auth={auth} />
				<p>Galleryの説明</p>
				<Link href={route('gallery.setting')}>Galleryで遊ぶ</Link>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
Index.layout = page => <Layout title="トップページ" children={page} />;

export default Index;
