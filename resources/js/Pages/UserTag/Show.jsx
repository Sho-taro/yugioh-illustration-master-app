import React from 'react'
import Layout from '@/Layouts/Layout';


function Show({userId, userTagId}) {
  return (
		<div>
			<p>userId: {userId}</p>
			<p>userTagId: {userTagId}</p>
		</div>
  );
}

// Persistent Layoutsの設定
Show.layout = page => <Layout title="MyTag 詳細" children={page} />;

export default Show