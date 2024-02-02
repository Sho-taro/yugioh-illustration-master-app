import React, { useState } from 'react';
import Header from '@/Components/Header';
import UserTagThumbnail from '@/Components/UserTags/UserTagThumbnail';
import { router } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import CheckCircleRoundedIcon from '@mui/icons-material/CheckCircleRounded';
import Divider from '@mui/material/Divider';

import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';

function MyTagMode({ auth, userTags, errorMsg }) {
	const [targetUserTagId, setTargetUserTagId] = useState(null);
	const targetUTClassName = 'mb-8 border-4 border-green-800 rounded-md cursor-pointer relative';
  const notTargetUTClassName = 'mb-8 cursor-pointer';
  const handleBtnClick = () => {
    if (!targetUserTagId) return;
    router.get(route('gallery.userTag'), {
      'user-tag-id': targetUserTagId,
    });
  }

	return (
		<>
			<Header auth={auth} needOnlyLogo={true} />
			<div className="w-3/5 mx-auto">
				<TooltipBackButton href={route('index')} />
				<div className="max-w-fit mx-auto" style={{ minWidth: '80%' }}>
					<Typography
						variant="h5"
						component="h2"
						sx={{ textAlign: 'center', fontWeight: 700, mb: '1rem' }}>
						MyTagモード
					</Typography>
					<Typography variant="p" component="p">
						MyTagモードでは、MyTagに登録したイラストのみ登場します。
					</Typography>
					<Typography variant="p" component="p">
						対象とするMyTagを１つ選択し、スタートボタンを押して下さい。
					</Typography>
					{errorMsg && (
						<div className="mt-6">
							<Typography variant="p" component="span" sx={{ color: 'red' }}>
								エラー: {errorMsg}
							</Typography>
						</div>
					)}

					<Divider variant="full" sx={{ borderColor: 'gray', my: '2rem' }} />

					{userTags.length > 0 ? (
						<div className="mt-8 mb-16">
							{userTags.map((userTag, mapIndex) => (
								<div
									key={mapIndex}
									className={
										targetUserTagId === userTag.id
											? targetUTClassName
											: notTargetUTClassName
									}
									onClick={() => setTargetUserTagId(userTag.id)}>
									<UserTagThumbnail userTag={userTag} mapIndex={mapIndex} />
									{targetUserTagId === userTag.id && (
										<div className="absolute top-1/2 left-0 -translate-x-12 -translate-y-1/2">
											<CheckCircleRoundedIcon
												fontSize="large"
												sx={{ color: '#065F46' }}
											/>
										</div>
									)}
								</div>
							))}
						</div>
					) : (
						<p className="mb-8 text-center italic" style={{ color: 'gray' }}>
							作成したMy Tagはありません。
						</p>
					)}

					<div className="mb-8 max-w-fit mx-auto">
						<Button
							variant="contained"
							color="error"
							size="large"
							disableRipple
							disabled={!targetUserTagId}
							onClick={handleBtnClick}
							sx={{ textTransform: 'none' }}>
							<span className="text-white">スタート</span>
						</Button>
					</div>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
MyTagMode.layout = page => <Layout title="トップページ" children={page} />;

export default MyTagMode;
