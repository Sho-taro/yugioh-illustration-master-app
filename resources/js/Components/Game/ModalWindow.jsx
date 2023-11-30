import React from 'react';
// import './css/ModalWindow.css';

function ModalWindow({ auth, cards, modalIndex, hideModal }) {
	// ログインしている場合と未ログインの場合で、imgタグのclass属性を変える
	let imgClassName;
	if (auth.user !== null) {
		// ログインしている場合（画像クリック/タッチで画像をダウンロードできるようになる）
		imgClassName = 'modal-image cursor-pointer';
	} else {
		// ログインしている場合（画像クリック/タッチできなくなる）
		imgClassName = 'modal-image pointer-events-none';
	}

  return (
		<>
			<div className="mask-window" onClick={hideModal}>
				<div className="modal-window" onClick={e => e.stopPropagation()}>
					<div onClick={e => e.stopPropagation()}>
						<img
							src={`/images/card-images/${cards[modalIndex].product_code}-${cards[modalIndex].list_number}.jpg`}
							alt={cards[modalIndex].name_en}
							className={imgClassName}
							// ↓ 画像をクリックしてもモーダルウィンドウが閉じないようにする
							onClick={e => e.stopPropagation()}
							// onContextMenu={e => e.preventDefault()}
							// onMouseDown={e => e.preventDefault()}
						/>
					</div>
					<p
						className="close-modal-p text-white mt-4 cursor-pointer hover:opacity-80"
						onClick={hideModal}>
						閉じる
					</p>
				</div>
			</div>
		</>
  );
}

export default ModalWindow