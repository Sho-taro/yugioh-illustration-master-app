import React from 'react';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

function TogglingCheckMark({ releasedCardId, selectedRCIds }) {
  return (
		<>
			{selectedRCIds.includes(releasedCardId) ? (
				// <img
				// 	src="/images/check_circle_blue.svg"
				// 	alt="チェックマーク（青）"
				// 	className="w-8 absolute bottom-2 right-2"
				// />
				<CheckRoundedIcon
					sx={{
						color: 'gray',
						width: '2rem',
						height: '2rem',
						p: '0.3rem',
						backgroundColor: 'tomato',
						borderRadius: '10rem',
						position: 'absolute',
						bottom: '0.5rem',
						right: '0.5rem',
					}}
				/>
			) : (
				// <img
				// 	src="/images/check_circle_white.svg"
				// 	alt="チェックマーク（白）"
				// 	className="w-8 absolute bottom-2 right-2"
				// />
				<CheckRoundedIcon
					sx={{
						color: 'gray',
						width: '2rem',
						height: '2rem',
						p: '0.3rem',
						backgroundColor: 'white',
						borderRadius: '10rem',
						position: 'absolute',
						bottom: '0.5rem',
						right: '0.5rem',
					}}
				/>
			)}
		</>
  );
}

export default TogglingCheckMark