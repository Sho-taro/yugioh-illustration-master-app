import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

import TogglingCheckMark from '@/Components/Admin/TogglingCheckMark';

function Show({ auth, userTag, releasedCards, message, errors }) {
	const [mode, setMode] = useState('normal');
	const [userTagName, setUserTagName] = useState(userTag.name);
	const [selectedRCIds, setSelectedRCIds] = useState([]);
	const handleInputChange = e => {
		setUserTagName(e.target.value);
	};
	const cancelUpdate = () => {
		setUserTagName(userTag.name);
		setMode('normal');
	};
	const updateName = e => {
		e.preventDefault();
		// フォームの送信
		router.put(`/tags/${auth.user.id}/${userTag.id}`, {
			userTagName: userTagName,
		});
	};
	const deleteUserTag = e => {
		e.preventDefault();
		// フォームの送信
		router.delete(`/tags/${auth.user.id}/${userTag.id}`);
	};
	const deleteCards = e => {
		e.preventDefault();
		// フォームの送信
		router.post(`/tags/${auth.user.id}/${userTag.id}/releasedCardUserTags`, {
			releasedCardIds: selectedRCIds,
		});
	};
	const cancelDeleteCards = () => {
		setSelectedRCIds([]);
		setMode('normal');
	};
	const toggleRCId = e => {
		const targetRCId = Number(e.target.name);
		if (selectedRCIds.includes(targetRCId)) {
			// selectedRCIdsに含まれている場合、削除する
			const index = selectedRCIds.indexOf(targetRCId); // 配列から削除したい要素のindexを取得
			const selectedRCIdsCopy = selectedRCIds; // 配列をコピー
			selectedRCIdsCopy.splice(index, 1); // 配列の要素を削除
			setSelectedRCIds([...selectedRCIdsCopy]);
		} else {
			// selectedRCIdsに含まれていない場合、追加する
			setSelectedRCIds([...selectedRCIds, targetRCId]);
		}
	};

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
					<form onSubmit={e => updateName(e)}>
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
				<h2>登録カード数: {releasedCards.length}枚</h2>
				<h2>登録カード一覧</h2>
				<div className="flex">
					<Link href={`/tags/${auth.user.id}/${userTag.id}/releasedCardUserTags`}>
						+ カードを追加登録
					</Link>
					<button onClick={() => setMode('deleteCards')} className="ml-6">
						- カードを削除
					</button>
				</div>
				{mode === 'deleteCards' && (
					<div className="flex">
						<p style={{ color: 'green' }}>
							削除するカードを選択し、「削除する」ボタンを押して下さい。
						</p>
						<form onSubmit={e => deleteCards(e)}>
							<button type="submit" disabled={selectedRCIds.length === 0} className="disabled:opacity-50">削除する</button>
						</form>
						<p onClick={() => cancelDeleteCards()} className="ml-4 underline">
							キャンセル
						</p>
					</div>
				)}
				<div className="max-w-full flex flex-wrap">
					{releasedCards.map(rc => (
						<div key={rc.id} className="p-1">
							{mode === 'deleteCards' ? (
								<div className="relative">
									<img
										width="150px"
										src={`/images/card-images/${rc.product_code}-${rc.list_number}.jpg`}
										className="cursor-pointer hover:opacity-60"
										name={rc.id}
										onClick={e => toggleRCId(e)}
										alt="イラスト"
									/>
									<TogglingCheckMark releasedCardId={rc.id} selectedRCIds={selectedRCIds} />
								</div>
							) : (
								<img
									width="150px"
									src={`/images/card-images/${rc.product_code}-${rc.list_number}.jpg`}
									alt="イラスト"
								/>
							)}
						</div>
					))}
				</div>
			</div>
			<form onSubmit={e => deleteUserTag(e)}>
				<button type="submit" className="underline">
					このMyTagを削除
				</button>
			</form>
		</>
	);
}

// Persistent Layoutsの設定
Show.layout = page => <Layout title="MyTag 詳細" children={page} />;

export default Show;
