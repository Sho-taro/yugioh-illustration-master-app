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
				<div className="w-5/6 mx-auto mt-2">
					<div className="mb-4">
						<Typography variant="h4" component="h2" sx={{ textAlign: 'center' }}>
							MyTag 一覧
						</Typography>
					</div>
					<div className="mb-2 flex justify-between items-end">
						<p>
							全 <span className="text-xl font-bold">{userTagsNum}</span> 件 （
							{showingMinIndex} - {showingMaxIndex} 件を表示中 ）
						</p>
						{/* <Link href={`/tags/${auth.user.id}/create`}>
							<Button
								variant="outlined"
								color="error"
								size="large"
								style={{ color: 'red' }}
								sx={{
									textTransform: 'none',
									border: '1px solid red',
								}}
								startIcon={<AddIcon sx={{ color: 'red' }} />}>
								MyTagを新規作成
							</Button>
						</Link> */}
						<CreateUserTagModalButton
							auth={auth}
							message={storeMsg}
							setStoreMsg={setStoreMsg}
							errors={errors}
						/>
						{/* <CreateUserTagPopoverButton auth={auth} errors={errors} /> */}
					</div>
					<Divider variant="full" sx={{ borderColor: 'rgba(200, 200, 200, 0.7)' }} />
					<div className="mt-12">
						{messages.deleteUTMsg && (
							<p style={{ color: 'green' }} className="mb-4">
								{messages.deleteUTMsg}
							</p>
						)}
						{userTagsData.data ? (
							<div>
								<ul>
									{userTagsData.data.map((tag, mapIndex) => (
										<li key={tag.id}>
											<Link href={`/tags/${auth.user.id}/${tag.id}`}>
												<UserTagThumbnail
													userTag={tag}
													mapIndex={mapIndex}
												/>
											</Link>
										</li>
									))}
								</ul>
								<Pagination data={userTagsData} />
							</div>
						) : (
							<p>作成したMy Tagはありません。</p>
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
