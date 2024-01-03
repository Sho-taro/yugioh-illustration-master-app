import React, { useState, useEffect } from 'react';
import Layout from '@/Layouts/Layout';
import FilterCards from '@/Components/Admin/Filters/FilterCards';
import Canvas from '@/Components/Gallery/Canvas';

function Gallery({ cards, filters }) {
	const [state, setState] = useState('setting');
	const [animationState, setAnimationState] = useState('waiting');
	const canvasCards = [];
	let intervalId;
	let animationFrameId;
	useEffect(() => {
		if (!filters) return;
		setState('playing');
	}, []);

	return (
		<>
			{state === 'setting' && (
				<div className="bg-white">
					<FilterCards
						routeName="gallery.play"
						isCardPeriodFilterOn={true}
						filters={filters}
					/>
				</div>
			)}
			{state === 'playing' && (
				<>
					<Canvas
						cards={cards}
						animationState={animationState}
						setAnimationState={setAnimationState}
						canvasCards={canvasCards}
						intervalId={intervalId}
						animationFrameId={animationFrameId}
					/>
				</>
			)}
		</>
	);
}

// Persistent Layoutsの設定
Gallery.layout = page => <Layout title="ギャラリー" children={page} />;

export default Gallery;
