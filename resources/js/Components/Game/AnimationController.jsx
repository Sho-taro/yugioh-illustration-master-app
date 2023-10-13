import React from 'react';
// import './css/AnimationController.css';

function AnimationController({ index, playPauseBtn, isAnimationCompleted, finishAnimation, toNextCard }) {
  return (
		<div key={index} className="animation-button-container">
			{/* 真ん中のボタン */}
			<div ref={playPauseBtn} className="play-pause-button"></div>
			{/* 右のボタン */}
			{!isAnimationCompleted ? (
				// まだアニメーションが終わっていない場合
				<div className="answer-button" onClick={finishAnimation}></div>
			) : (
				// すでにアニメーションが終わっている場合
				<div className="next-button" onClick={toNextCard}></div>
			)}
		</div>
  );
}

export default AnimationController