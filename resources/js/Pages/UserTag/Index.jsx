import React from 'react'
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

function Index({ auth, userTags, message }) {
  return (
		<>
			<Link href={route('index')}>{'< '}TOPページに戻る</Link>
      <div>
        {message && (
          <p style={{color: 'green'}}>{message}</p>
        )}
				{userTags && (
					<ul>
						{userTags.map(tag => (
							<li key={tag.id}>{tag.name}</li>
						))}
					</ul>
				)}
				{!userTags && <p>作成したMy Tagはありません。</p>}
			</div>
			<div>
				<Link href={`/tags/${auth.user.id}/create`}>My Tagを新規作成</Link>
			</div>
		</>
  );
}

// Persistent Layoutsの設定
Index.layout = page => <Layout title="My Tag 一覧" children={page} />;


export default Index