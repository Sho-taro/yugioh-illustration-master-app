import React, {useState} from 'react'
import FilterCards from '@/Components/Admin/Filters/FilterCards';
import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

import FilterCardsTab from '@/Components/Admin/FiltersTab/FilterCardsTab';

function Setting({ auth, filters, releasedCardsNum, userTags, message }) {
	const [option, setOption] = useState(null);   // 'filter'または'myTag'
  return (
		<>
			{option === null && (
				<div>
					<Link href={route('index')}>{'< '}Topページへ戻る</Link>
					<p>1. カードの絞り込み方法を選択してください。</p>
					{message && (
						<p style={{ color: 'red' }} className="mb-2">
							{message}
						</p>
					)}
					<button onClick={() => setOption('filter')}>条件を選択する</button>
					<button onClick={() => setOption('myTag')} disabled={!auth.user}>
						MyTagに登録したカードに絞り込む{!auth.user && '(要ログイン)'}
					</button>
					{/* <label>
						<input type="radio" name="option" value="filter" />
						条件を選択する
					</label>
					<label>
						<input type="radio" name="option" value="myTag" disabled={!auth.user} />
						MyTagに登録したカードに絞り込む
					</label> */}
				</div>
			)}
			{option === 'filter' && (
				<div className="h-screen flex justify-center">
					<div className="px-16 py-4 h-screen w-4/5 border-x-2 border-gray-500 md:w-3/5 lg:w-2/5">
						<button onClick={() => setOption(null)}>{'< '}戻る</button>
						<p className="text-2xl font-bold mb-10">2. カードを絞り込む</p>
						<FilterCardsTab
							apiMode={'on'}
							routeName="gallery.filter"
							isCardPeriodFilterOn={true}
							filters={filters}
							releasedCardsNum={releasedCardsNum}
						/>
					</div>
				</div>
			)}
			{option === 'myTag' && userTags !== null && (
				<div>
					<button onClick={() => setOption(null)}>{'< '}戻る</button>
					<p>2. MyTagを選択する</p>
					<form action={route('gallery.userTag')}>
						{userTags.reverse().map((userTag, index) => (
							<label>
								<input type="radio" name="user-tag-id" value={userTag.id} defaultChecked={index === 0} />
								{userTag.name}
							</label>
						))}
						<button>決定</button>
					</form>
				</div>
			)}
		</>
  );
}

// Persistent Layoutsの設定
Setting.layout = page => <Layout title="ギャラリー 設定" children={page} />;

export default Setting