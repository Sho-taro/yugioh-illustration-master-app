import React from 'react'

function AccountIcon({gameStatus, showMenu, auth}) {
  return (
		<>
			<div className="account-svg-container mb-4 sm:mb-6">
				{/* <img
							src="/images/menu.svg"
							alt="メニューボタン"
							className="menu-svg w-6 sm:w-10"
							onClick={showMenu}
						/> */}
				{auth.user === null ? (
					<div>
						<img
							src="/images/account-circle.svg"
							alt="アカウントアイコン"
							className="account-svg w-6 sm:w-10 cursor-pointer"
							onClick={showMenu}
						/>
					</div>
				) : (
					<div>
						<img
							src="/images/account-circle-green.svg"
							alt="アカウントアイコン"
							className="account-svg w-6 sm:w-10"
							onClick={showMenu}
						/>
					</div>
				)}
			</div>
		</>
  );
}

export default AccountIcon