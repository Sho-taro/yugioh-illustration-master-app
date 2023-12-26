import React, { useState } from 'react';

function MaskModal({ handleMaskClick, cardImageSrc }) {
	return (
		<div className="mask-window" onClick={handleMaskClick}>
			<div className="modal-window">
				<img
					src={cardImageSrc}
					alt="イラスト"
					className="modal-image"
					onClick={e => e.stopPropagation()}
				/>
				<p
					className="close-modal-p text-white mt-4 cursor-pointer hover:opacity-80"
					onClick={handleMaskClick}>
					閉じる
				</p>
			</div>
		</div>
	);
}

export default MaskModal;
