import React from 'react';
import { Link } from '@inertiajs/react';

import Divider from '@mui/material/Divider';

function HeaderSP({}) {

	return (
		<div>
			<div className="w-full fixed top-0 left-0 bg-color-layout z-50">
				<div className="px-8 my-2 flex justify-between items-center">
					<div>
						<Link href={route('index')}>
							<img
								src="/images/logo.png"
								alt="logoアイコン"
								width="120px"
								className="hover:opacity-60"
							/>
						</Link>
					</div>
				</div>
				<Divider sx={{ borderColor: 'rgba(200, 200, 200, 0.3)' }} />
			</div>
			<div className="h-20"></div>
		</div>
	);
}

export default HeaderSP;