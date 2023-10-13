import React from 'react';
// import './css/CardInfo.css';


function CardInfo({index, cardName, cardNameKana, card}) {
  return (
		<div key={index} className="cardName-container">
			<p ref={cardNameKana} className="text-xs text-gray-500 leading-3">?????</p>
			<p ref={cardName} className="text-base font-bold sm:text-2xl">?????</p>
		</div>
  );
}

export default CardInfo