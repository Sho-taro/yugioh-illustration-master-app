import React from 'react'

function SpellTrapCardResult({card, handleImageClick}) {
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
				{card.frame_type_ja === '魔法' && <p className="mt-2">{card.play_type}魔法</p>}
				{card.frame_type_ja === '罠' && <p className="mt-2">{card.play_type}罠</p>}
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

export default SpellTrapCardResult