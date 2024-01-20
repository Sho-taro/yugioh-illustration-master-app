import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

function Show({ auth, userTag, releasedCards, message, errors }) {
	const [mode, setMode] = useState('normal');
	const [userTagName, setUserTagName] = useState(userTag.name);
	const handleInputChange = e => {
		setUserTagName(e.target.value);
  };
  const cancelUpdate = () => {
    setUserTagName(userTag.name);
    setMode('normal');
  }
  const handleSubmit = (e) => {
		e.preventDefault();
		// フォームの送信
		router.put(`/tags/${auth.user.id}/${userTag.id}`, {
			userTagName: userTagName,
		});
  }

	return (
		<>
			<Link href={`/tags/${auth.user.id}`}>{'< '}MyTag一覧に戻る</Link>
			<div>
				{message && <span style={{ color: 'green' }}>{message}</span>}
				<p>userTagId: {userTag.id}</p>
				<p>userId: {userTag.user_id}</p>
				<div className="flex">
					<p>name: {userTag.name}</p>
					<button
						className="ml-4 inline-block underline"
						onClick={() => setMode('updateName')}>
						MyTag名を変更
					</button>
				</div>
				{mode === 'updateName' && (
					<form onSubmit={e => handleSubmit(e)}>
						<label>
							新しいMyTag名を入力:{' '}
							<input
								type="text"
								onChange={e => handleInputChange(e)}
								value={userTagName}
							/>
							{errors.userTagName && (
								<span style={{ color: 'red' }}>{errors.userTagName}</span>
							)}
						</label>
						<button
							type="submit"
							disabled={userTagName === userTag.name}
							className="disabled:opacity-50">
							変更
						</button>
						<span onClick={cancelUpdate} className="underline">
							キャンセル
						</span>
					</form>
				)}
			</div>
			<div>
				<h2>このMyTagに登録されているカード数: {releasedCards.length}</h2>
				<h2>このMyTagに登録されているカード一覧</h2>
				<div className="max-w-full flex flex-wrap">
					{releasedCards.map(rc => (
						<div key={rc.id} className="p-1">
							<img
								width="150px"
								src={`/images/card-images/${rc.product_code}-${rc.list_number}.jpg`}
								alt="イラスト"
							/>
						</div>
					))}
				</div>
			</div>
			<div>
				<Link href={`/tags/${auth.user.id}/${userTag.id}/addCards`}>+ カードを登録</Link>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
Show.layout = page => <Layout title="MyTag 詳細" children={page} />;

export default Show;
