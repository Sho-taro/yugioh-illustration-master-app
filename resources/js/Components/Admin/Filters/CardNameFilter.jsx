import React, { useState, useEffect } from 'react';

function CardNameFilter({ filters }) {
	const [cardName, setCardName] = useState('');

	const handleChange = e => {
		setCardName(e.target.value);
  };

  useEffect(() => {
    if (!filters) return;
    if (!filters['card-name']) return;
    setCardName(filters['card-name']);
  }, []);

	return (
		<div className="my-4 flex justify-start items-center">
			<p style={{ color: 'rgb(33, 33, 33)' }} className="w-28">
				カード名
			</p>
			<input
				type="text"
				name="card-name"
				id="card-name"
				placeholder=" を含む"
				className="w-2/3 ml-2"
				value={cardName}
				onChange={e => handleChange(e)}
			/>
			{/* <img
        src="/images/search.svg"
        alt="検索ボタン"
        className="cursor-pointer hover:opacity-50"
        /> */}
		</div>
	);
}

export default CardNameFilter;
