import React, { useState, useEffect } from 'react';
import Canvas from '@/Components/Gallery/Canvas';
import CanvasSP from '@/Components/Gallery/CanvasSP';
import GalleryLayout from '@/Layouts/GalleryLayout';

function Gallery({ cards }) {
	// const [animationState, setAnimationState] = useState('waiting');
	const canvasCards = [];
	const windowWidth = window.innerWidth;

	return (
		<>
			{windowWidth > 640 ? (
				<Canvas
					cards={cards}
					// animationState={animationState}
					// setAnimationState={setAnimationState}
					canvasCards={canvasCards}
				/>
			) : (
				<CanvasSP
					cards={cards}
					// animationState={animationState}
					// setAnimationState={setAnimationState}
					canvasCards={canvasCards}
				/>
			)}
		</>
	);
}

// Persistent Layoutsの設定
Gallery.layout = page => <GalleryLayout title="ギャラリー" children={page} />;

export default Gallery;
