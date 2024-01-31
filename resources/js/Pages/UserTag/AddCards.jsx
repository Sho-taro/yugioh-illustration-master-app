import React, {useState} from 'react'
import { Link } from '@inertiajs/react';
// import FilterCards from '@/Components/Admin/Filters/FilterCards';
import SearchResultUserTag from '@/Components/UserTags/SearchResultUserTag';
import Pagination from '@/Components/Admin/Pageination';
import Layout from '@/Layouts/Layout';

import Header from '@/Components/Header';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import FilterModalButton from '@/Components/MaterialUI/Filter/FilterModalButton';
import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';


function AddCards({ auth, userTag, data, cardsNum, filteredCardsNum, filters, releasedCardIdArray }) {
	const [releasedCardIds, setReleasedCardIds] = useState([...releasedCardIdArray]);

	let showingMinIndex; // 枚数表示の最小値
	filteredCardsNum === 0
		? (showingMinIndex = 0)
		: (showingMinIndex = 1 + (data.current_page - 1) * 30);
	let showingMaxIndex; // 枚数表示の最大値
	data.current_page * 30 >= filteredCardsNum
		? (showingMaxIndex = filteredCardsNum)
		: (showingMaxIndex = data.current_page * 30);

  return (
		<>
			<Header auth={auth} needOnlyLogo={true} />
			<div className="w-3/5 mx-auto">
				<TooltipBackButton href={`/tags/${auth.user.id}/${userTag.id}`} />
				<div className="w-5/6 mx-auto mt-2">
					<div className="mb-12">
						<Typography variant="p" component="p">
							MyTag「{userTag.name}」をタグ付けするカードをクリックして下さい。
						</Typography>
						<Typography variant="p" component="p">
							タグ付けされたカード{' '}
							<span className="text-2xl font-bold">{releasedCardIds.length}</span>枚
						</Typography>
					</div>
					<Divider
						variant="full"
						sx={{ mb: '0.4rem', borderColor: 'rgba(200, 200, 200, 0.7)' }}
					/>
					<div className="mb-4 flex justify-between items-start">
						<p>
							全 <span className="text-2xl font-bold">{filteredCardsNum}</span>枚 （
							{showingMinIndex} - {showingMaxIndex} 枚を表示中 ）
						</p>
						<FilterModalButton
							routePath={`/tags/${auth.user.id}/${userTag.id}/releasedCardUserTags`}
							isPeriodFilterOn={true}
							filters={filters}
							apiMode="on"
							releasedCardsNum={cardsNum}
						/>
					</div>
					<div className="mb-8">
						{/* <p className="mt-4 mb-2 w-full text-center border">↓ 検索結果 ↓</p> */}
						{/* {data && <SearchResult data={data} />} */}
						{data && (
							<SearchResultUserTag
								userId={auth.user.id}
								userTagId={userTag.id}
								data={data}
								releasedCardIds={releasedCardIds}
								setReleasedCardIds={setReleasedCardIds}
							/>
						)}
						{data && <Pagination data={data} />}
					</div>
				</div>
			</div>
		</>
  );
}

// Persistent Layoutsの設定
AddCards.layout = page => <Layout title="MyTag カード登録" children={page} />;

export default AddCards