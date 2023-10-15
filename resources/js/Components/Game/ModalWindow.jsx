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
				<div className="modal-window">
					<div>
						<img
							src={`/images/card-images/${cards[modalIndex].pack_name}-${cards[modalIndex].list_number}.jpg`}
							alt={cards[modalIndex].name_en}
							className={imgClassName}
							// onContextMenu={e => e.preventDefault()}
							// onMouseDown={e => e.preventDefault()}
						/>
					</div>
					<p className="close-modal-p text-white mt-4 cursor-pointer" onClick={hideModal}>
						閉じる
					</p>
				</div>
			</div>
		</>
  );
}

export default ModalWindow