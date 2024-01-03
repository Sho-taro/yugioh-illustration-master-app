import React from 'react'
import FilterCards from '@/Components/Admin/Filters/FilterCards';
import Layout from '@/Layouts/Layout';

function Setting({filters}) {
  return (
		<>
      <div className="bg-white">
        <FilterCards
          routeName="gallery.play"
          isCardPeriodFilterOn={true}
          filters={filters}
        />
      </div>
		</>
  );
}

// Persistent Layoutsの設定
Setting.layout = page => <Layout title="ギャラリー 設定" children={page} />;

export default Setting