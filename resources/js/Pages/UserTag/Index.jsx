import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Pagination from '@/Components/Admin/Pageination';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Divider from '@mui/material/Divider';
// import AddIcon from '@mui/icons-material/Add';
import UserTagThumbnail from '@/Components/UserTags/UserTagThumbnail';
import CreateUserTagModalButton from '@/Components/MaterialUI/CreateUserTagModalButton';
// import CreateUserTagPopoverButton from '@/Components/MaterialUI/CreateUserTagPopoverButton';
import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';

function Index({ auth, errors, userTagsNum, userTagsData, messages }) {
	const [storeMsg, setStoreMsg] = React.useState(messages.storeUTMsg);
	let showingMinIndex; // 枚数表示の最小値
	userTagsNum === 0
		? (showingMinIndex = 0)
		: (showingMinIndex = 1 + (userTagsData.current_page - 1) * 5);
	let showingMaxIndex; // 枚数表示の最大値
	userTagsData.current_page * 5 >= userTagsNum
		? (showingMaxIndex = userTagsNum)
		: (showingMaxIndex = userTagsData.current_page * 5);

	React.useEffect(() => {
		setStoreMsg(messages.storeUTMsg);
	}, [messages]);

	return (
		<>
			<Header auth={auth} needOnlyLogo={true} />
			<div className="w-3/5 mx-auto">
				<TooltipBackButton href={route('index')} />
				<div className="max-w-fit mx-auto mt-2" style={{ minWidth: '80%' }}>
					<div className="mb-8">
						<Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
							MyTag 一覧
						</Typography>
					</div>
					<Divider
						variant="full"
						sx={{ mb: '0.4rem', borderColor: 'rgba(200, 200, 200, 0.7)' }}
					/>
					<div className="flex justify-between items-start">
						<p>
							全 <span className="text-xl font-bold">{userTagsNum}</span> 件 （
							{showingMinIndex} - {showingMaxIndex} 件を表示中 ）
						</p>
						<CreateUserTagModalButton
							auth={auth}
							message={storeMsg}
							setStoreMsg={setStoreMsg}
							errors={errors}
						/>
						{/* <CreateUserTagPopoverButton auth={auth} errors={errors} /> */}
					</div>
					<div className="mt-12">
						{messages.deleteUTMsg && (
							<p style={{ color: 'green' }} className="mb-4">
								{messages.deleteUTMsg}
							</p>
						)}
						{userTagsData.data.length > 0 ? (
							<div className="flex flex-col">
								{userTagsData.data.map((tag, mapIndex) => (
										<div className="mb-8 border-4 border-gray-800 rounded-xl">
											<Link
												key={tag.id}
												href={`/tags/${auth.user.id}/${tag.id}`}>
												<UserTagThumbnail
													userTag={tag}
													mapIndex={mapIndex}
												/>
											</Link>
										</div>
								))}
								<Pagination data={userTagsData} />
							</div>
						) : (
							<p className="text-center italic" style={{ color: 'gray' }}>
								作成したMy Tagはありません。
							</p>
						)}
					</div>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
Index.layout = page => <Layout title="My Tag 一覧" children={page} />;

export default Index;
