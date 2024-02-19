import React, { useState, useEffect, useRef } from 'react';
import CanvasMenuBar from './CanvasMaskModal';
import { shuffleArray } from '@/utils/shuffleArray';

import NoSleep from 'nosleep.js';
import NoSleepModal from '../MaterialUI/NoSleepModal';

function Canvas({ cards, animationState, setAnimationState, canvasCards }) {
	const [showingMenuBar, setShowingMenuBar] = useState(false);
	const [intervalId, setIntervalId] = useState(null);
	const [animationFrameId, setAnimationFrameId] = useState(null);
	const [open, setOpen] = useState(false); // MUI modal
	const canvas = useRef(null); // canvasをuseRefで取得

	const cardsNum = cards.length;
	const randomOrderCards = shuffleArray(cards);
	const speed = 0.4 * devicePixelRatio;
	let cardIndex = 0;

	// MUI modal
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	const noSleep = new NoSleep();
	// Enable wake lock.
	const enableNoSleep = () => {
		// document.removeEventListener('click', enableNoSleep, false);
		noSleep.enable();
		// console.log('noSleepを有効化しました。');
		handleClose();
	};

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

		handleOpen(); // モーダルウィンドウを表示

		// タッチ可能な端末で、ピンチイン・ピンチアウト操作を無効化
		// touchmoveイベントを使ってピンチ操作を無効化。
		// 指が画面上を動いたときのタッチ数をチェックし、二本以上の指が動いた場合に操作をキャンセル
		document.addEventListener(
			'touchmove',
			e => {
				if (e.touches.length > 1) {
					e.preventDefault();
				}
				// console.log('touchmoveイベントが発火しました。');
			},
			{ passive: false }
		);
		// windowのサイズが変更されたら、canvasのサイズもそれにあわせて変更する
		window.addEventListener('resize', () => {
			canvas.current.width = window.innerWidth * devicePixelRatio;
			canvas.current.height = window.innerHeight * devicePixelRatio;
			canvas.current.style.width = window.innerWidth;
			canvas.current.style.height = window.innerHeight;
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
		// ↓ canvasCardの影の設定
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 10 * devicePixelRatio;
		ctx.shadowColor = 'rgb(190, 188, 188)';

		window.createCanvasCard = () => {
			const imgInstance = new Image();
			imgInstance.src = `/images/card-images/${randomOrderCards[cardIndex].product_code}-${randomOrderCards[cardIndex].list_number}.jpg`;
			// const magnification = 0.5 + Math.random() * 0.5; // 倍率 0.5以上1未満
			const percent = 50 + Math.floor(Math.random() * 50); // パーセント 50以上100未満　の整数 （Canvasアニメーションでは、できるだけ浮動小数点ではなく整数型を使った方が良い）
			// const imgSize = Math.floor((320 * devicePixelRatio * percent) / 100);
			const imgSize = Math.floor(((canvas.current.width / 6) * 1.2 * percent) / 100);
			const cardIndexMod5 = cardIndex % 5;
			if (cardIndexMod5 === 0) {
				canvasCards.push({
					img: imgInstance,
					percent: percent,
					imgSize: imgSize,
					// x: Math.floor((0.4 + Math.random() * 0.2) * (canvas.current.width - imgSize)),
					x: (canvas.current.width / 5) * 3 + (canvas.current.width / 5 - imgSize) / 2,
					y: imgSize * -1,
					cardData: { ...randomOrderCards[cardIndex] },
				});
			} else if (cardIndexMod5 === 1) {
				canvasCards.push({
					img: imgInstance,
					percent: percent,
					imgSize: imgSize,
					// x: Math.floor((0 + Math.random() * 0.15) * (canvas.current.width - imgSize)),
					x: (canvas.current.width / 5) * 1 + (canvas.current.width / 5 - imgSize) / 2,
					y: imgSize * -1,
					cardData: { ...randomOrderCards[cardIndex] },
				});
			} else if (cardIndexMod5 === 2) {
				canvasCards.push({
					img: imgInstance,
					percent: percent,
					imgSize: imgSize,
					// x: Math.floor((0.65 + Math.random() * 0.2) * (canvas.current.width - imgSize)),
					x: (canvas.current.width / 5) * 4 + (canvas.current.width / 5 - imgSize) / 2,
					y: imgSize * -1,
					cardData: { ...randomOrderCards[cardIndex] },
				});
			} else if (cardIndexMod5 === 3) {
				canvasCards.push({
					img: imgInstance,
					percent: percent,
					imgSize: imgSize,
					// x: Math.floor((0.15 + Math.random() * 0.2) * (canvas.current.width - imgSize)),
					x: (canvas.current.width / 5) * 0 + (canvas.current.width / 5 - imgSize) / 2,
					y: imgSize * -1,
					cardData: { ...randomOrderCards[cardIndex] },
				});
			} else if (cardIndexMod5 === 4) {
				canvasCards.push({
					img: imgInstance,
					percent: percent,
					imgSize: imgSize,
					// x: Math.floor((0.85 + Math.random() * 0.15) * (canvas.current.width - imgSize)),
					x: (canvas.current.width / 5) * 2 + (canvas.current.width / 5 - imgSize) / 2,
					y: imgSize * -1,
					cardData: { ...randomOrderCards[cardIndex] },
				});
			}
			if (cardIndex < cardsNum - 1) {
				cardIndex++;
			} else {
				cardIndex = 0;
			}
			// console.log(canvasCards);
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
					canvasCard.imgSize,
					canvasCard.imgSize
				);
			}
			for (let i = 0; i < canvasCards.length; i++) {
				if (canvasCards[i].y > canvas.current.height) {
					canvasCards.splice(i, 1); // canvasの下端より下に出たcanvasCardは削除する
				} else {
					canvasCards[i].y +=
						Math.floor((speed + (0.2 * canvasCards[i].percent) / 100) * 100) / 100; // canvasCardを下に動かす  // y座標に + 0.5 ~ 0.6
					// console.log(i,
					// 	Math.floor((speed + (0.2 * canvasCards[i].percent) / 100) * 100) / 100
					// );
				}
			}

			let FrameId = requestAnimationFrame(draw); // draw関数を繰り返す
			// console.log(FrameId);
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
			noSleep.disable(); // noSleepを無効化
			clearInterval(intervalId);
			cancelAnimationFrame(animationFrameId);
		};
	}, []);

	return (
		<>
			<canvas
				ref={canvas}
				className="cursor-none"
				// width, height, styleの設定で、高画質で表示できるようにした
				// devicePixelRationは、css ピクセルに対する物理ピクセルの比率。
				// Retinaディスプレイなどの高画質対応のマシンでは、devicePixelRatioの値は 2 近くになる（この値が大きくなるほど高画質？）。
				width={window.innerWidth * devicePixelRatio}
				height={window.innerHeight * devicePixelRatio}
				style={{ width: window.innerWidth, height: window.innerHeight }}>
				エラー: お使いのブラウザはcanvas要素に非対応です。
			</canvas>
			<NoSleepModal
				open={open}
				handleOpen={handleOpen}
				handleClose={handleClose}
				enableNoSleep={enableNoSleep}
			/>
			{showingMenuBar && (
				<CanvasMenuBar handleClick={pauseRestartCanvas} animationState={animationState} />
			)}
		</>
	);
}

export default Canvas;
