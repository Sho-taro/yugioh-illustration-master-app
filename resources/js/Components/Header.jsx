import React from 'react';
import { Link } from '@inertiajs/react';
// import { router } from '@inertiajs/react';

import Typography from '@mui/material/Typography';
import BasicMenuHeader from '@/Components/MaterialUI/BasicMenuHeader';
import LoyaltyIcon from '@mui/icons-material/Loyalty';

import Divider from '@mui/material/Divider';

function Header({ auth, needOnlyLogo }) {
	return (
		<div>
			<div className="w-full fixed top-0 left-0 bg-color-layout z-50">
				<div className="px-8 my-2 flex justify-between items-center">
					<div>
						<Link href={route('index')}>
							<img
								src="/images/app-icon_no_bg.png"
								alt="appアイコン"
								width="50px"
								className="hover:opacity-60"
							/>
						</Link>
					</div>
					{needOnlyLogo === false && (
						<div>
							{auth.user === null ? (
								<div className="flex items-center">
									{/* 見た目はh6で、実際の出力はpタグ */}
									<Typography variant="h6" component="p">
										<Link href={route('login')} className="text-white">
											ログイン
										</Link>
									</Typography>
									<Typography variant="h6" component="p">
										<Link href={route('register')} className="text-white ml-8">
											ユーザー登録
										</Link>
									</Typography>
								</div>
							) : (
								<div className="flex items-center">
									<div className="flex items-center">
										<BasicMenuHeader buttonValue={auth.user.name} />
									</div>
									<div className="ml-6 rounded-md bg-red-700 hover:bg-red-800">
										<Link href={`/tags/${auth.user.id}`} className="block px-2 py-1">
											<LoyaltyIcon fontSize="large" sx={{ color: 'white' }} />
											<Typography variant="h6" component="span" sx={{color: 'white'}}>
												{' '}
												MyTag一覧
											</Typography>
										</Link>
									</div>
								</div>
							)}
						</div>
					)}
				</div>
				<Divider sx={{ borderColor: 'rgba(200, 200, 200, 0.7)' }} />
			</div>
			<div className="h-20">
			</div>
		</div>
	);
}

export default Header;
