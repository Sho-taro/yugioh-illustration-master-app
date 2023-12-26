import React from 'react';

function MonsterCardResult({ card, handleImageClick }) {
	return (
		<div className="p-2 flex justify-start">
			<div className="w-36">
				<img
					src={`/images/card-images/${card.product_code}-${card.list_number}.jpg`}
					alt="イラスト"
					className="cursor-pointer"
					onClick={e => handleImageClick(e)}
				/>
			</div>
			<div className="w-full ml-2">
				<div className="flex justify-between items-center">
					<div>
						<p className="text-xs">{card.card_ja_kana}</p>
						<p className="font-bold">{card.card_ja}</p>
					</div>
					<div>
						<img
							src={`/images/frame-type-white/${card.frame_type_en}.png`}
							alt="フレームタイプ"
							className="w-16"
						/>
					</div>
				</div>
				<div className="mt-2 flex justify-between">
					<div className="flex justify-start">
						<p>{card.race}</p>
						<p className="ml-2">{card.attribute}属性</p>
						{card.frame_type_ja !== 'エクシーズ' &&
							card.frame_type_ja !== 'Pエクシーズ' &&
							card.frame_type_ja !== 'リンク' && (
								<p className="ml-2">レベル{card.level_or_rank}</p>
							)}
						{(card.frame_type_ja === 'エクシーズ' ||
							card.frame_type_ja === 'Pエクシーズ') && (
							<p className="ml-2">ランク{card.level_or_rank}</p>
						)}
						{card.frame_type_ja === 'リンク' && (
							<p className="ml-2">Link-{card.link_value}</p>
						)}
					</div>
					<div className="flex justify-end">
						<p>攻撃力 {card.attack}</p>
						{card.frame_type_ja === 'リンク' ? (
							<p className="ml-4">守備力 -</p>
						) : (
							<p className="ml-4">守備力 {card.defense}</p>
						)}
					</div>
				</div>
				<div className="flex justify-between">
					<p className="text-gray-400">
						{card.product_code}-{card.list_number}
					</p>
					<p className="text-gray-400">
						{card.release_date} {card.product_ja} ({card.period})
					</p>
				</div>
			</div>
		</div>
	);
}

export default MonsterCardResult;
