import React from 'react';
import axios, { isCancel, AxiosError } from 'axios';

function SearchResultUserTag({ userId, userTagId, data, releasedCardIds, setReleasedCardIds }) {
	// console.log(releasedCardIds);
	// タグにカードを登録する関数
	const addCard = async e => {
		try {
			// console.log(e.target.name)
			const res = await axios.post(route('api.addCards'), {
				userTagId: userTagId,
				releasedCardId: e.target.name,
			});
			setReleasedCardIds([...res.data]);
		} catch (err) {
			console.log(err);
		}
	};
	// タグからカードを削除する関数
	const removeCard = async e => {
		try {
			const res = await axios.post(route('api.removeCards'), {
				userTagId: userTagId,
				releasedCardId: e.target.name,
			});
			setReleasedCardIds([...res.data]);
		} catch (err) {
			console.log(err);
		}
	};

	return (
		<>
			<div className="grid grid-cols-6">
				{data.data.map((card, index) => (
					<div key={index} className="mb-2 p-1">
						{releasedCardIds.includes(card.released_card_id) ? (
							<div className="relative">
								<img
									src={`/images/card-images/${card.product_code}-${card.list_number}.jpg`}
									alt="イラスト"
									name={card.released_card_id}
									className="cursor-pointer hover:opacity-60"
									onClick={e => removeCard(e)}
								/>
								<img
									src="/images/tag_blue.svg"
									alt="tag（青）"
									className="w-8 absolute bottom-2 right-2"
								/>
							</div>
						) : (
							<div className="relative">
								<img
									src={`/images/card-images/${card.product_code}-${card.list_number}.jpg`}
									alt="イラスト"
									name={card.released_card_id}
									className="cursor-pointer hover:opacity-60"
									onClick={e => addCard(e)}
								/>
								<img
									src="/images/tag_white.svg"
									alt="tag（白）"
									className="w-8 absolute bottom-2 right-2"
								/>
							</div>
						)}
						<p>{card.card_ja}</p>
					</div>
				))}
			</div>
		</>
	);
}

export default SearchResultUserTag;
