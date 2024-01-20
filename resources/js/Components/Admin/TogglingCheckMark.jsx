import React from 'react';

function TogglingCheckMark({ releasedCardId, selectedRCIds }) {
  return (
		<>
			{selectedRCIds.includes(releasedCardId) ? (
				<img
					src="/images/check_circle_blue.svg"
					alt="チェックマーク（青）"
					className="w-8 absolute bottom-2 right-2"
				/>
			) : (
				<img
					src="/images/check_circle_white.svg"
					alt="チェックマーク（白）"
					className="w-8 absolute bottom-2 right-2"
				/>
			)}
		</>
  );
}

export default TogglingCheckMark