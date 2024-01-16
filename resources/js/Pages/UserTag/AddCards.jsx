import React, {useState} from 'react'
import { Link } from '@inertiajs/react';
import FilterCards from '@/Components/Admin/Filters/FilterCards';
import SearchResultUserTag from '@/Components/UserTags/SearchResultUserTag';
import Pagination from '@/Components/Admin/Pageination';
import Layout from '@/Layouts/Layout';

function AddCards({ auth, userTag, data, cardsNum, message, filters, releasedCardIdArray }) {
  // console.log(releasedCardIds);
  const [releasedCardIds, setReleasedCardIds] = useState([...releasedCardIdArray]);
  return (
		<>
      <Link href={`/tags/${auth.user.id}/${userTag.id}`}>{'< '}MyTag詳細ページに戻る</Link>
			<details open>
				<summary>絞り込み</summary>
				<FilterCards
					routePath={`/tags/${auth.user.id}/${userTag.id}/addCards`}
					isCardPeriodFilterOn={true}
					filters={filters}
				/>
			</details>
			<div className="w-2/3 mx-auto mb-8">
				<p className="mt-4 mb-2 w-full text-center border">↓ 検索結果 ↓</p>
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
		</>
  );
}

// Persistent Layoutsの設定
AddCards.layout = page => <Layout title="MyTag カード登録" children={page} />;

export default AddCards