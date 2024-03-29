import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';
import Header from '@/Components/Header';
import Pagination from '@/Components/Admin/Pageination';
import Layout from '@/Layouts/Layout';
import TogglingCheckMark from '@/Components/Admin/TogglingCheckMark';
import UserTagContainer from '@/Components/UserTagContainer';

import Typography from '@mui/material/Typography';
import LoyaltyIcon from '@mui/icons-material/Loyalty';
// import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
import BasicMenuEditUserTag from '@/Components/MaterialUI/BasicMenuEditUserTag';
import DeleteUserTagModalButton from '@/Components/MaterialUI/DeleteUserTagModalButton';
import UpdateUserTagNameModalButton from '@/Components/MaterialUI/UpdateUserTagNameModalButton';
// import IconButton from '@mui/material/IconButton';
// import EditIcon from '@mui/icons-material/Edit';
import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';

function Show({ auth, userTag, releasedCardsNum, releasedCardsData, messages, errors }) {
	const [mode, setMode] = useState('normal');
	const [selectedRCIds, setSelectedRCIds] = useState([]);
	const [updateMsg, setUpdateMsg] = useState(messages.updateUTMsg);
	let showingMinIndex; // 枚数表示の最小値
	releasedCardsNum === 0
		? (showingMinIndex = 0)
		: (showingMinIndex = 1 + (releasedCardsData.current_page - 1) * 50);
	let showingMaxIndex; // 枚数表示の最大値
	releasedCardsData.current_page * 50 >= releasedCardsNum
		? (showingMaxIndex = releasedCardsNum)
		: (showingMaxIndex = releasedCardsData.current_page * 50);

	const deleteUserTag = () => {
		// フォームの送信
		router.delete(`/tags/${auth.user.id}/${userTag.id}`);
	};
	const deleteCards = e => {
		e.preventDefault();
		// フォームの送信
		router.post(`/tags/${auth.user.id}/${userTag.id}/releasedCardUserTags`, {
			releasedCardIds: selectedRCIds,
		});
		setSelectedRCIds([]);
		setMode('normal');
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
	React.useEffect(() => {
		setUpdateMsg(messages.updateUTMsg);
	}, [messages]);

	return (
		<>
			<Header auth={auth} needOnlyLogo={true} />
			<UserTagContainer>
				<TooltipBackButton href={`/tags/${auth.user.id}`} />
				<div className="w-9/10 mx-auto mt-2">
					{/* <div className="mb-8">
						<Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
							Myタグ 詳細
						</Typography>
					</div> */}
					<div className="px-6 pt-5 pb-3 mb-8 border-4 border-gray-800 rounded-md bg-gray-900">
						<div className="mb-6 flex justify-between items-start">
							<div className="flex items-center">
								<LoyaltyIcon sx={{ color: 'white', opacity: '0.75' }} />
								<p className="ml-1 text-2xl font-bold">{userTag.name}</p>
								<div className="ml-4 mt-2">
									<UpdateUserTagNameModalButton
										auth={auth}
										userTag={userTag}
										message={updateMsg}
										setUpdateMsg={setUpdateMsg}
										errors={errors}
									/>
								</div>
							</div>
							{/* <BasicMenuEditUserTag
								auth={auth}
								userTag={userTag}
								releasedCardsNum={releasedCardsNum}
								setMode={setMode}
								deleteUserTag={deleteUserTag}
							/> */}
						</div>
						<div>
							<Divider
								variant="full"
								sx={{ mb: '0.4rem', borderColor: 'rgba(200, 200, 200, 0.7)' }}
							/>
							<div className="mb-6 flex justify-between items-start">
								<p>
									登録カード{' '}
									<span className="text-2xl font-bold">{releasedCardsNum}</span>枚
									（{showingMinIndex} - {showingMaxIndex} 枚を表示中 ）
								</p>
								<BasicMenuEditUserTag
									auth={auth}
									userTag={userTag}
									releasedCardsNum={releasedCardsNum}
									setMode={setMode}
									deleteUserTag={deleteUserTag}
								/>
							</div>
							{messages.deleteUTMsg && (
								<span style={{ color: 'green' }}>{messages.deleteUTMsg}</span>
							)}
							{mode === 'deleteCards' && (
								<div className="my-6">
									<p style={{ color: 'green' }}>
										削除するカードを選択し、「削除する」ボタンを押して下さい。
									</p>
									<div className="mt-2 flex items-center">
										<button
											type="button"
											onClick={() => cancelDeleteCards()}
											className="px-5 py-2 bg-gray-200 rounded-md hover:bg-red-100">
											<Typography
												component="button"
												sx={{ color: '#d32f2f' }}>
												キャンセル
											</Typography>
										</button>
										<form onSubmit={e => deleteCards(e)}>
											<button
												type="submit"
												disabled={selectedRCIds.length === 0}
												className="ml-4 px-5 py-2 bg-red-700 rounded-md hover:bg-red-800 disabled:pointer-events-none disabled:opacity-40">
												<Typography>削除する</Typography>
											</button>
										</form>
									</div>
								</div>
							)}
							{releasedCardsNum >= 1 ? (
								<div className="mt-4 max-w-full grid grid-cols-5">
									{releasedCardsData.data.map(rc => (
										<div key={rc.id} className="p-1">
											{mode === 'deleteCards' ? (
												<div className="relative">
													<img
														src={`/images/card-images/${rc.product_code}-${rc.list_number}.jpg`}
														className="cursor-pointer hover:opacity-60"
														name={rc.id}
														onClick={e => toggleRCId(e)}
														alt="イラスト"
													/>
													<TogglingCheckMark
														releasedCardId={rc.id}
														selectedRCIds={selectedRCIds}
													/>
												</div>
											) : (
												<img
													src={`/images/card-images/${rc.product_code}-${rc.list_number}.jpg`}
													alt="イラスト"
												/>
											)}
										</div>
									))}
								</div>
							) : (
								<div className="h-28 flex justify-center items-center">
									<p style={{ color: 'grey' }} className="italic">
										登録されたカードはありません。
									</p>
								</div>
							)}
							<Pagination data={releasedCardsData} />
						</div>
					</div>
					<div className="flex justify-center mb-12">
						<DeleteUserTagModalButton deleteUserTag={deleteUserTag} />
					</div>
				</div>
			</UserTagContainer>
		</>
	);
}

// Persistent Layoutsの設定
Show.layout = page => <Layout title="Myタグ 詳細" children={page} />;

export default Show;
