import React from 'react'
import FilterCards from '@/Components/Admin/Filters/FilterCards';
import Layout from '@/Layouts/Layout';
import FilterCardsTab from '@/Components/Admin/FiltersTab/FilterCardsTab';

function Setting({filters, releasedCardsNum, message}) {
  return (
		<>
			<div className="h-screen flex justify-center">
				<div className="px-16 py-4 h-screen w-4/5 border-x-2 border-gray-500 md:w-3/5 lg:w-2/5">
					<h2 className="text-2xl font-bold mb-10">カードを絞り込む</h2>
					{message && <p style={{ color: 'red' }} className="mb-2">{message}</p>}
          <FilterCardsTab
            apiMode={'on'}
						routeName="gallery.play"
						isCardPeriodFilterOn={true}
            filters={filters}
            releasedCardsNum={releasedCardsNum}
					/>
				</div>
			</div>
		</>
  );
}

// Persistent Layoutsの設定
Setting.layout = page => <Layout title="ギャラリー 設定" children={page} />;

export default Setting