import React from 'react';
import { Head } from '@inertiajs/react';

function AdminLayout({title, children}) {
  return (
		<>
			<Head title={title ? `${title} - 管理画面` : "管理画面"} />
			{/* <Head>
        <title>{title}</title>
      </Head> */}
      <div className="adminLayout-bg min-h-full">
        {children}
      </div>
		</>
  );
}

export default AdminLayout