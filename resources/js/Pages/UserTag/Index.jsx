import React from 'react'
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

function Index({user_tags}) {
  return (
		<>
			<div>
				{user_tags && (
					<ul>
						{user_tags.map(tag => (
							<li>{tag.name}</li>
						))}
					</ul>
				)}
				{!user_tags && <p>作成したMy Tagはありません。</p>}
      </div>
      <div>
        <Link href="">My Tagを新規作成</Link>
      </div>
		</>
  );
}

// Persistent Layoutsの設定
Index.layout = page => <Layout title="My Tag 一覧" children={page} />;


export default Index