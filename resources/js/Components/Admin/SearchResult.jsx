import React from 'react';
import { getCardTypeFromNameJa } from '@/utils/getCardTypeFromNameJa';
import MonsterCardResult from './MonsterCardResult';
import SpellTrapCardResult from './SpellTrapCardResult';

function SearchResult({ data }) {
	return (
		<>
			{data.data.map((card, index) => (
				<div key={index} className="w-full flex justify-start">
					<div className="px-2 border relative">
						<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">{index + 1}</p>
					</div>
					<div className="w-full border">
						{getCardTypeFromNameJa(card.frame_type_ja) === 'monster' && (
							<MonsterCardResult card={card} />
						)}
						{getCardTypeFromNameJa(card.frame_type_ja) === 'spell/trap' && (
							<SpellTrapCardResult card={card} />
						)}
					</div>
				</div>
			))}
		</>
	);
}

export default SearchResult;
