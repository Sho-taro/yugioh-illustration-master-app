import React from 'react'
import FilterCards from '@/Components/Admin/Filters/FilterCards';
import Layout from '@/Layouts/Layout';

function Setting({filters, releasedCardsNum, message}) {
  return (
		<>
			<div className="h-screen flex justify-center items-center">
				<div className="px-16 py-4 h-2/3 w-3/5 bg-white rounded-md">
					{message && <p style={{ color: 'red' }} className="mb-2">{message}</p>}
          <FilterCards
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