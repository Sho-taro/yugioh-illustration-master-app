import React from 'react';
import { router } from '@inertiajs/react';

function Menubar({menuMask, menuNav, hideMenu, auth}) {
  return (
		<>
			<div ref={menuMask} className="menu-mask" onClick={hideMenu}></div>
			<div ref={menuNav} className="menu-nav">
				<img
					src="/images/close-gray.svg"
					alt="閉じるボタン"
					className="w-6 sm:w-8 absolute top-4 right-4 cursor-pointer hover:opacity-60"
					onClick={hideMenu}
				/>
				{auth.user === null ? (
					<nav className="list-none">
						<p className="mb-6 text-lg sm:text-2xl font-bold">メニュー</p>
						<ul>
							<li className="guest-user-name relative pl-8 mb-2 text-lg sm:text-2xl border-b border-solid border-gray-500">
								<i>
									<p>未ログイン</p>
								</i>
							</li>
							<li>
								<a
									href={route('register')}
									className="block text-sm sm:text-base ml-4 py-2">
									新規登録
								</a>
							</li>
							<li>
								<a
									href={route('login')}
									className="block text-sm sm:text-base ml-4 py-2">
									ログイン
								</a>
							</li>
						</ul>
					</nav>
				) : (
					<nav className="list-none">
						<p className="mb-6 text-lg sm:text-2xl font-bold">メニュー</p>
						<ul>
							<li className="login-user-name relative pl-8 mb-2 text-lg sm:text-2xl border-b border-solid border-gray-500">
								<p>{auth.user.name}</p>
							</li>
							<li>
								<p
									className="text-blue-600 text-sm sm:text-base ml-4 py-2 cursor-pointer"
									onClick={e => {
										e.preventDefault();
										router.post('logout');
									}}>
									ログアウト
								</p>
							</li>
						</ul>
					</nav>
				)}
			</div>
		</>
  );
}

export default Menubar