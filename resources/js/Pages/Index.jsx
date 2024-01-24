import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Layout from '@/Layouts/Layout';

function Index({ auth }) {
	return (
		<>
			<Header auth={auth} needOnlyLogo={false} />
			<p>Galleryの説明</p>
			<Link href={route('gallery.setting')}>Galleryで遊ぶ</Link>
		</>
	);
}

// Persistent Layoutsの設定
Index.layout = page => <Layout title="トップページ" children={page} />;

export default Index;
