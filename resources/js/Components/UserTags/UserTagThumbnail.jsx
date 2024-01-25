import React, { useState, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';

import LoyaltyIcon from '@mui/icons-material/Loyalty';
import Divider from '@mui/material/Divider';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

function UserTagThumbnail({ userTag, mapIndex }) {
	const [releasedCards, setReleasedCards] = useState([]);
	const [releasedCardsNum, setReleasedCardsNum] = useState(null);

	// releasedCardsのレコードを取得する関数
	const getReleasedCards = async userTagId => {
		try {
			const res = await axios.post(route('api.getReleasedCards'), {
				userTagId: userTagId,
			});
			// console.log(res.data)
			setReleasedCards([...res.data.releasedCards]);
			setReleasedCardsNum(res.data.releasedCardsNum);
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		setTimeout(() => {
			// 同時にたくさんのXHLをしずぎないように、リクエストにラグを持たせる
			getReleasedCards(userTag.id);
		}, mapIndex * 400);
	}, []);

	return (
		<div>
			<div className="flex justify-between py-3 px-4">
				<div className="flex items-center">
					<LoyaltyIcon sx={{ color: 'red', opacity: '0.75' }} />
					<p className="ml-1 text-2xl font-bold">{userTag.name}</p>
				</div>
				{releasedCardsNum === null ? (
					<p>タグ付けされたカード - 枚</p>
				) : (
					<p>
						タグ付けされたカード{' '}
						<span className="text-2xl font-bold">{releasedCardsNum}</span>枚
					</p>
				)}
			</div>
			<Divider variant="full" sx={{ borderColor: 'rgba(200, 200, 200, 0.7)' }} />
			{releasedCardsNum >= 1 && (
				<div className="flex items-center py-3 px-4">
					{releasedCards.map(releasedCard => (
						<img
							key={releasedCard.id}
							className="w-28 aspect-auto mx-1"
							src={`/images/card-images/${releasedCard.product_code}-${releasedCard.list_number}.jpg`}
							alt="イラスト"
						/>
					))}
					{releasedCardsNum >= 7 && (
						<MoreHorizIcon fontSize="large" sx={{ color: 'gray' }} />
					)}
				</div>
			)}
			{releasedCardsNum !== null && releasedCardsNum === 0 && (
				<div className="h-32 flex justify-center items-center">
					<p style={{ color: 'grey' }} className="italic">
						タグ付けされたカードはありません。
					</p>
				</div>
			)}
		</div>
	);
}

export default UserTagThumbnail;
