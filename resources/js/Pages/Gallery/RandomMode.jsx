import React from 'react'
import Header from '@/Components/Header';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';

import Filter from '@/Components/MaterialUI/Filter/Filter';
import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';

function RandomMode({auth, releasedCardsNum, errorMsg}) {
  return (
		<>
			<Header auth={auth} needOnlyLogo={true} />
			<div className="w-3/5 mx-auto">
				<TooltipBackButton href={route('index')} />
				<div className="w-2/3 mx-auto">
					<Typography
						variant="h5"
						component="h2"
						sx={{ textAlign: 'center', fontWeight: 700, mb: '1rem' }}>
						ランダムモード
					</Typography>
					<Typography variant="p" component="p">
						ランダムモードでは、登場するイラストはランダムに選ばれます。
					</Typography>
					<Typography variant="p" component="p">
						選ばれるイラストを絞り込みたい場合は、各種絞り込み条件を指定してから「この条件でスタート」ボタンを押して下さい。
					</Typography>
					<Typography variant="p" component="p">
						絞り込まない場合は、そのまま「この条件でスタート」ボタンを押して下さい。
					</Typography>
					{errorMsg && (
						<div className="mt-6">
							<Typography variant="p" component="span" sx={{ color: 'red' }}>
								エラー: {errorMsg}
							</Typography>
						</div>
					)}
					<div className="my-6 p-4 max-w-fit mx-auto bg-white rounded-md">
						<Filter
							routeName="gallery.filter"
							isPeriodFilterOn={true}
							filters={null}
							apiMode="on"
							releasedCardsNum={releasedCardsNum}
							handleClose={null}
							buttonValue="この条件でスタート"
						/>
					</div>
				</div>
			</div>
		</>
  );
}

// Persistent Layoutsの設定
RandomMode.layout = page => <Layout title="トップページ" children={page} />;

export default RandomMode