import React from 'react';
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';


function Show({ auth, userTag, releasedCards }) {
  return (
		<>
			<Link href={`/tags/${auth.user.id}`}>{'< '}MyTag一覧に戻る</Link>
			<div>
				<p>userTagId: {userTag.id}</p>
				<p>userId: {userTag.user_id}</p>
				<p>name: {userTag.name}</p>
			</div>
			<div>
				<h2>このMyTagに登録されているカード一覧</h2>
				<ul>
					{releasedCards.map(rc => (
						<li key={rc.id}>{rc.released_card_id}</li>
					))}
				</ul>
			</div>
			<div>
				<Link href={`/tags/${auth.user.id}/${userTag.id}/addCards`}>+ カードを登録</Link>
			</div>
		</>
  );
}

// Persistent Layoutsの設定
Show.layout = page => <Layout title="MyTag 詳細" children={page} />;

export default Show