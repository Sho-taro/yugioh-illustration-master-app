import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';


function Show({auth, userId, userTagId}) {
  return (
		<>
			<Link href={`/tags/${auth.user.id}`}>{'< '}タグ一覧に戻る</Link>
			<div>
				<p>userId: {userId}</p>
        <p>userTagId: {userTagId}</p>
			</div>
		</>
  );
}

// Persistent Layoutsの設定
Show.layout = page => <Layout title="MyTag 詳細" children={page} />;

export default Show