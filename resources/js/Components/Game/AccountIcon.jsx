import React from 'react'

function AccountIcon({gameStatus, showMenu, auth}) {
  return (
		<>
			{gameStatus === 'preparing' && (
				<div className="account-svg-container">
					{/* <img
								src="/images/menu.svg"
								alt="メニューボタン"
								className="menu-svg w-6 sm:w-10"
								onClick={showMenu}
							/> */}
					{auth.user === null ? (
						<img
							src="/images/account-circle.svg"
							alt="アカウントアイコン"
							className="account-svg w-6 sm:w-10"
							onClick={showMenu}
						/>
					) : (
						<>
							<img
								src="/images/check-small.svg"
								alt="チェックアイコン"
								className="check-svg w-6 sm:w-10"
							/>
							<img
								src="/images/account-circle-green.svg"
								alt="アカウントアイコン"
								className="account-svg w-6 sm:w-10"
								onClick={showMenu}
							/>
						</>
					)}
				</div>
			)}
		</>
  );
}

export default AccountIcon