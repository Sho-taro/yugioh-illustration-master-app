import React, { useState, useEffect } from 'react';
import Canvas from '@/Components/Gallery/Canvas';
import Layout from '@/Layouts/Layout';

function Gallery({ cards }) {
	const [animationState, setAnimationState] = useState('waiting');
	const canvasCards = [];

	return (
		<>
			<Canvas
				cards={cards}
				animationState={animationState}
				setAnimationState={setAnimationState}
				canvasCards={canvasCards}
			/>
		</>
	);
}

// Persistent Layoutsの設定
Gallery.layout = page => <Layout title="ギャラリー" children={page} />;

export default Gallery;
