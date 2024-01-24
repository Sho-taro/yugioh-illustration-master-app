import React from 'react';
import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

function Header({auth}) {
  return (
		<div className="flex justify-between items-center">
			<div>
				<img
					src="/images/app-icon_no_bg.png"
					alt="appアイコン"
					width="50px"
					className="hover:opacity-60"
        />
			</div>
			{auth.user === null ? (
				<div className="flex">
					<Link href={route('login')}>ログイン</Link>
					<p>・</p>
					<Link href={route('register')}>新規登録</Link>
				</div>
			) : (
				<div className="flex ">
					<p>{auth.user.name}</p>
					<p
						className="text-blue-600 cursor-pointer"
						onClick={e => {
							e.preventDefault();
							router.post('logout');
						}}>
						ログアウト
					</p>
					<Link href={`/tags/${auth.user.id}`}>タグ一覧</Link>
				</div>
			)}
		</div>
  );
}

export default Header