import React, { useEffect } from 'react';
import { createGrid } from '../../utils/createGrid';
// import './css/ImagesContainer.css';

function ImagesContainer({ gameStatus, index, card, divImg, playSvg, stopSvg, blocksNum, controlAnimation }) {
  useEffect(() => {
		// アニメーションのためのDOMの生成
		createGrid(blocksNum);
  }, [index]);

	return (
		<div className="relative w-10/12 mb-4 sm:mb-8">
			<img
				key={`card${index}`}
				src={`./images/card-images/${card.pack_name}-${card.list_number}.jpg`}
				alt={card.name_en}
				className="card-img pointer-events-none"
				// // ↓ '右クリックして画像ダウンロード'をさせないようにする（代わりにpointer-events: none を指定しているので、コメントアウト）
				// onContextMenu={e => e.preventDefault()}
				// onMouseDown={e => e.preventDefault()}
				// // ↓ スマホでのタッチ操作も禁止
				// onTouchStart={e => e.preventDefault()}
				// onTouchEnd={e => e.preventDefault()}
				// onTouchMove={e => e.preventDefault()}
			/>
			{/* ↓ anime.jsで動かすやつ */}
			<div key={index} className="blocks-container"></div>
			<div
				className="div-img"
				ref={divImg}
				onClick={() => {
					// gameStatusが'playing'な場合に限りcontrolAnimationを実行
					if (gameStatus !== 'playing') return;
					controlAnimation();
				}}></div>
			<img
				ref={playSvg}
				src="/images/play-button.svg"
				alt="スタートボタン"
				className="svg-btn"
			/>
			<img
				ref={stopSvg}
				src="/images/pause-button.svg"
				alt="ポーズボタン"
				className="svg-btn"
			/>
		</div>
	);
}

export default ImagesContainer;
