import React from 'react';
// import './css/ModalWindow.css';

function ModalWindow({cards, modalIndex, hideModal}) {
  return (
		<>
			<div className="mask-window" onClick={hideModal}>
				<div className="modal-window">
					<div>
						<img
							src={`/images/card-images/${cards[modalIndex].pack_name}-${cards[modalIndex].list_number}.jpg`}
							alt={cards[modalIndex].name_en}
							className="modal-image"
							onContextMenu={e => e.preventDefault()}
							onMouseDown={e => e.preventDefault()}
						/>
					</div>
					<p className="close-modal-p text-white mt-4" onClick={hideModal}>
						閉じる
					</p>
				</div>
			</div>
		</>
  );
}

export default ModalWindow