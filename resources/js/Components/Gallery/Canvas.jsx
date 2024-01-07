import React, { useState, useEffect, useRef } from 'react'
import CanvasMenuBar from './CanvasMaskModal';

function Canvas({ cards, animationState, setAnimationState, canvasCards }) {
	const [showingMenuBar, setShowingMenuBar] = useState(false);
	const [intervalId, setIntervalId] = useState(null);
	const [animationFrameId, setAnimationFrameId] = useState(null);
	const canvas = useRef(null); // canvasをuseRefで取得

	const cardsNum = cards.length;
	const speed = 0.8;
	let cardIndex = 0;

	// canvasアニメーションを一時停止/リスタートする関数
	const pauseRestartCanvas = () => {
		if (animationState === 'playing') {
			// 一時停止する処理
			clearInterval(intervalId);
			cancelAnimationFrame(animationFrameId);
      setAnimationState('pausing');
      // console.log('アニメーション停止')
		} else if (animationState === 'pausing') {
			// リスタートする処理
			let id = setInterval(() => {
				createCanvasCard();
			}, 3000);
      setIntervalId(id);
      draw();
      setAnimationState('playing');
      // console.log('アニメーション再開')
		}
	};

	useEffect(() => {
		if (!canvas.current.getContext) return; // ユーザが使用しているブラウザがcanvas未対応だった場合、early return
		// windowのサイズが変更されたら、canvasのサイズもそれにあわせて変更する
		window.addEventListener('resize', () => {
			canvas.current.width = window.innerWidth;
			canvas.current.height = window.innerHeight;
		});
		// 一定時間動かなかったらカーソルとメニューバーを非表示
		let timer;
		window.addEventListener('mousemove', () => {
			canvas.current.classList.remove('cursor-none');
			setShowingMenuBar(true);
			clearTimeout(timer);
			timer = setTimeout(() => {
				canvas.current.classList.add('cursor-none');
				setShowingMenuBar(false);
			}, 4000);
		});

		const ctx = canvas.current.getContext('2d'); // 描画コンテクストを取得
		// ↓ canvasCardのbox-shadowの設定
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 15;
		ctx.shadowColor = 'rgb(190, 188, 188)';

		window.createCanvasCard = () => {
			const imgInstance = new Image();
			imgInstance.src = `/images/card-images/${cards[cardIndex].product_code}-${cards[cardIndex].list_number}.jpg`;
			const magnification = 0.5 + Math.random() * 0.5; // 倍率 0.5以上1未満
			if (cardIndex % 5 === 0) {
				canvasCards.push({
					img: imgInstance,
					magnification: magnification,
					x: (0.4 + Math.random() * 0.2) * (canvas.current.width - 300 * magnification),
					y: -(300 * magnification),
					cardData: { ...cards[cardIndex] },
				});
			} else if (cardIndex % 5 === 1) {
				canvasCards.push({
					img: imgInstance,
					magnification: magnification,
					x: (0 + Math.random() * 0.2) * (canvas.current.width - 300 * magnification),
					y: -(300 * magnification),
					cardData: { ...cards[cardIndex] },
				});
			} else if (cardIndex % 5 === 2) {
				canvasCards.push({
					img: imgInstance,
					magnification: magnification,
					x: (0.6 + Math.random() * 0.2) * (canvas.current.width - 300 * magnification),
					y: -(300 * magnification),
					cardData: { ...cards[cardIndex] },
				});
			} else if (cardIndex % 5 === 3) {
				canvasCards.push({
					img: imgInstance,
					magnification: magnification,
					x: (0.2 + Math.random() * 0.2) * (canvas.current.width - 300 * magnification),
					y: -(300 * magnification),
					cardData: { ...cards[cardIndex] },
				});
			} else if (cardIndex % 5 === 4) {
				canvasCards.push({
					img: imgInstance,
					magnification: magnification,
					x: (0.8 + Math.random() * 0.2) * (canvas.current.width - 300 * magnification),
					y: -(300 * magnification),
					cardData: { ...cards[cardIndex] },
				});
			}
			if (cardIndex < cardsNum - 1) {
				cardIndex++;
			} else {
				cardIndex = 0;
			}
		};

		window.draw = () => {
			ctx.clearRect(0, 0, canvas.current.width, canvas.current.height); // canvas内全体を初期化
			for (const canvasCard of canvasCards) {
				// imageの描画
				// ctx.drawImage(imageオブジェクト, x, y, width, height);
				ctx.drawImage(
					canvasCard.img,
					canvasCard.x,
					canvasCard.y,
					300 * canvasCard.magnification,
					300 * canvasCard.magnification
				);
			}
			for (const canvasCard of canvasCards) {
				if (canvasCard.y <= canvas.current.height) {
					canvasCard.y += speed * canvasCard.magnification ** 2;
				}
			}
			for (let i = 0; i < canvasCards.length; i++) {
				if (canvasCards[i].y > canvas.current.height) {
					canvasCards.splice(i, 1);
				}
			}

			let FrameId = requestAnimationFrame(draw); // draw関数を繰り返す
			setAnimationFrameId(FrameId);
		};

		setAnimationState('playing');
		createCanvasCard();
		let id = setInterval(() => {
			createCanvasCard();
		}, 3000);
		setIntervalId(id);

		draw();

		// クリーンアップ関数
		return () => {
			clearInterval(intervalId);
      cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<>
			<canvas
				ref={canvas}
				width={window.innerWidth}
				height={window.innerHeight}
				className="cursor-none">
				エラー:お使いのブラウザが古いため、アニメーションを表示できません。
			</canvas>
			{showingMenuBar && <CanvasMenuBar handleClick={pauseRestartCanvas} animationState={animationState} />}
		</>
	);
};

export default Canvas