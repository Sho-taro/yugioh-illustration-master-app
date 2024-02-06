import React from 'react'
import { Head } from '@inertiajs/react';

function Layout({title, children}) {
  return (
		<>
			<Head title={title ? title : '遊戯王イラストクイズ'} />
			{/* <Head>
        <title>{title}</title>
      </Head> */}
			<div className="layout-bg min-h-full p-2">
				{children}
			</div>
		</>
  );
}

export default Layout