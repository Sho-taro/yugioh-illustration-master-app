import React from 'react';
import { Head } from '@inertiajs/react';

function Layout({ title, children }) {
	return (
		<>
			<Head title={title ? title : '遊戯王イラストクイズ'} />
			{/* <Head>
        <title>{title}</title>
      </Head> */}
			<div className="layout-bg min-h-full p-2 relative">
				{children}
				<div className="mt-16 mb-4 flex justify-center">
					<small className="text-gray-500"> Copyright &copy; 2024 sk</small>
				</div>
			</div>
		</>
	);
}

export default Layout;
