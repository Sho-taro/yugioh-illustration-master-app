import React from 'react';
// import './css/CardInfo.css';


function CardInfo({index, cardName, cardNameKana, card}) {
  return (
		<div key={index} className="cardName-container px-1 mb-4 sm:px-2 sm:mb-6">
			<p
				ref={cardName}
				className="text-base font-bold sm:text-2xl sm:mb-1 whitespace-nowrap">
				?????
			</p>
			<p className="text-xs">
				<span ref={cardNameKana} className="text-gray">
					?????
				</span>
			</p>
		</div>
  );
}

export default CardInfo