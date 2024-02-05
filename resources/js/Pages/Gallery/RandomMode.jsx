import React, { useState } from 'react';
import Header from '@/Components/Header';
import { router } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

import Filter from '@/Components/MaterialUI/Filter/Filter';
import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';

function RandomMode({ auth, releasedCardsNum, errorMsg }) {
	const [needFilter, setNeedFilter] = useState('selecting'); // 'selecting' or 'yes'
	const handleBtnClick = () => {
		router.get(route('gallery.filter'), {
			'access-type': "filtering",
			target: "all",
			'card-name': null,
		});
	}

	return (
		<>
			<Header auth={auth} needOnlyLogo={true} />
			<div className="w-3/5 mx-auto">
				<TooltipBackButton href={route('index')} />
				<div className="w-2/3 mx-auto text-center">
					<Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: '1rem' }}>
						ランダムモード
					</Typography>
					{errorMsg && (
						<div className="mt-6">
							<Typography variant="p" component="span" sx={{ color: 'red' }}>
								エラー: {errorMsg}
							</Typography>
						</div>
					)}
					{needFilter === 'selecting' && (
						<div>
							<Typography variant="p" component="p">
								ランダムモードでは、登場するイラストがランダムに選ばれます。
							</Typography>
							<Typography variant="p" component="p">
								絞り込み条件を指定することで、選ばれるイラストを絞り込むこともできます。
							</Typography>
							<div className="mt-6 w-1/2 mx-auto flex flex-col">
								<Button
									variant="contained"
									size="large"
									color="error"
									disableRipple
									sx={{
										color: 'white',
										textTransform: 'none',
										mb: '1rem',
									}}
									onClick={() => setNeedFilter('yes')}>
									絞り込み条件を指定する
								</Button>
								<Typography variant="p" component="p" sx={{ mb: '1rem' }}>
									または
								</Typography>
								<Button
									variant="contained"
									size="large"
									color="error"
									disableRipple
									sx={{ color: 'white', textTransform: 'none', mb: '1rem' }}
									onClick={() => handleBtnClick()}
								>
									絞り込まずにスタート!
								</Button>
							</div>
						</div>
					)}
					{needFilter === 'yes' && (
						<div>
							<Typography variant="p" component="p">
								手順に従って絞り込み条件を入力し、「この条件でスタート!」ボタンを押して下さい。
							</Typography>
							<Typography variant="p" component="p">
								（または
								<span
									className="text-blue-600 underline cursor-pointer"
									onClick={() => setNeedFilter('selecting')}>
									前の画面に戻る
								</span>
								）
							</Typography>
							<div className="my-6 px-16 py-8 max-w-fit mx-auto bg-white rounded-md text-left">
								<Filter
									routeName="gallery.filter"
									isPeriodFilterOn={true}
									filters={null}
									apiMode="on"
									releasedCardsNum={releasedCardsNum}
									handleClose={null}
									buttonValue="この条件でスタート!"
								/>
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
RandomMode.layout = page => <Layout title="トップページ" children={page} />;

export default RandomMode;
