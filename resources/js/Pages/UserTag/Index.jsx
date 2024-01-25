import React from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Pagination from '@/Components/Admin/Pageination';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AddIcon from '@mui/icons-material/Add';
import UserTagThumbnail from '@/Components/UserTags/UserTagThumbnail';

function Index({ auth, userTagsNum, userTagsData, message }) {
	return (
		<>
			<Header auth={auth} needOnlyLogo={true} />
			<div className="w-3/5 mx-auto">
				<Link href={route('index')} className=" text-white hover:opacity-60">
					{'< '}戻る
				</Link>
				<div className="w-5/6 mx-auto mt-8">
					<div className="mb-6 flex justify-between items-start">
						<Typography variant="h5" component="h2">
							MyTag 一覧
						</Typography>
						<Link href={`/tags/${auth.user.id}/create`}>
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
						</Link>
					</div>
					<div>
						{message && (
							<p style={{ color: 'green' }} className="mb-4">
								{message}
							</p>
						)}
						{userTagsData.data ? (
							<div>
								<div className="mb-2 flex justify-end">
									<p>（全{userTagsNum}件）</p>
								</div>
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
