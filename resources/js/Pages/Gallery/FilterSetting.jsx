import React from 'react';
import Header from '@/Components/Header';
// import { router } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
// import Button from '@mui/material/Button';

import Filter from '@/Components/MaterialUI/Filter/Filter';
import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';

function FilterSetting({ auth, releasedCardsNum, errorMsg }) {
	return (
		<>
			<Header auth={auth} needOnlyLogo={true} />
			<div className="w-3/5 mx-auto">
				<TooltipBackButton href={route('index')} />
				<div className="w-5/6 mx-auto text-center">
					<Typography variant="h5" component="h2" sx={{ fontWeight: 700, mb: '1rem' }}>
						絞り込みモード
					</Typography>
					{errorMsg && (
						<div className="mt-6">
							<Typography variant="p" component="span" sx={{ color: 'red' }}>
								エラー: {errorMsg}
							</Typography>
						</div>
					)}
					<div>
						<Typography variant="p" component="p">
							このモードでは、降ってくるカードを様々な条件で絞り込むことができます。
						</Typography>
						<Typography variant="p" component="p">
							手順に従って絞り込み条件を入力し、「この条件でスタート」ボタンを押して下さい。
						</Typography>
						<div className="my-6 px-16 py-8 max-w-fit mx-auto bg-white rounded-md text-left">
							<Filter
								routeName="gallery.play.filter"
								isPeriodFilterOn={true}
								filters={null}
								apiMode="on"
								releasedCardsNum={releasedCardsNum}
								handleClose={null}
								buttonValue="この条件でスタート!"
							/>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
FilterSetting.layout = page => <Layout title="トップページ" children={page} />;

export default FilterSetting;
