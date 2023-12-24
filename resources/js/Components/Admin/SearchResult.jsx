import React, {useState} from 'react';
import { getCardTypeFromNameJa } from '@/utils/getCardTypeFromNameJa';
import MonsterCardResult from './MonsterCardResult';
import SpellTrapCardResult from './SpellTrapCardResult';
import MaskModal from '@/Components/Admin/MaskModal';

function SearchResult({ data }) {
	const [cardImageSrc, setCardImageSrc] = useState(null);
	const [showingModal, setShowingModal] = useState(false);
	const handleImageClick = (e) => {
		setCardImageSrc(e.target.src)
		setShowingModal(true);
	};
	const handleMaskClick = () => {
		setShowingModal(false);
	}

	return (
		<>
			{data.data.map((card, index) => (
				<div key={index} className="w-full flex justify-start">
					<div className="px-2 border relative">
						<p className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
							{index + 1}
						</p>
					</div>
					<div className="w-full border">
						{getCardTypeFromNameJa(card.frame_type_ja) === 'monster' && (
							<MonsterCardResult card={card} handleImageClick={handleImageClick} />
						)}
						{getCardTypeFromNameJa(card.frame_type_ja) === 'spell/trap' && (
							<SpellTrapCardResult card={card} handleImageClick={handleImageClick} />
						)}
					</div>
				</div>
			))}
			{showingModal && <MaskModal handleMaskClick={handleMaskClick} cardImageSrc={cardImageSrc} />}
		</>
	);
}

export default SearchResult;
