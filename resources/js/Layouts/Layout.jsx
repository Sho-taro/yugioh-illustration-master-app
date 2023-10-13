import React from 'react'
import { Head } from '@inertiajs/react';

function Layout({title, children}) {
  return (
    <>
      <Head title={title ? title : "イラストクイズ"} />
      {/* <Head>
        <title>{title}</title>
      </Head> */}
			<div className="layout-bg min-h-full">
				{children}
			</div>
		</>
  );
}

export default Layout