import React, { useState, useEffect, useRef } from 'react';
import CanvasMenuBar from './CanvasMaskModal';
import { shuffleArray } from '@/utils/shuffleArray';

import NoSleep from 'nosleep.js';
import NoSleepModal from '../MaterialUI/NoSleepModal';

function Canvas({ cards, animationState, setAnimationState, canvasCards }) {
	const [showingMenuBar, setShowingMenuBar] = useState(false);
	const [animationFrameId, setAnimationFrameId] = useState(null);
	const [open, setOpen] = useState(false); // MUI modal
	const canvas = useRef(null); // canvasをuseRefで取得

	const cardsNum = cards.length;
	const randomOrderCards = shuffleArray(cards);
	const speed = 0.4 * devicePixelRatio;
	let cardIndex = 0;

	let timer; // カーソルを非表示にするためのタイマー

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
			cancelAnimationFrame(animationFrameId);
			setAnimationState('pausing');
			// console.log('アニメーション停止')
		} else if (animationState === 'pausing') {
			// リスタートする処理
			draw();
			setAnimationState('playing');
			// console.log('アニメーション再開')
		}
	};
	// 一定時間動かなかったらカーソルとメニューバーを非表示にする関数
	const hideCursor = () => {
		canvas.current.classList.remove('cursor-none');
		setShowingMenuBar(true);
		clearTimeout(timer);
		timer = setTimeout(() => {
			canvas.current.classList.add('cursor-none');
			setShowingMenuBar(false);
		}, 4000);
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
		window.addEventListener('mousemove', hideCursor);

		const ctx = canvas.current.getContext('2d'); // 描画コンテクストを取得
		// ↓ canvasCardの影の設定
		ctx.shadowOffsetX = 0;
		ctx.shadowOffsetY = 0;
		ctx.shadowBlur = 10 * devicePixelRatio;
		ctx.shadowColor = 'rgb(190, 188, 188)';

		window.createCanvasCard = () => {
			const imgInstance = new Image();
			imgInstance.src = `/images/card-images/${randomOrderCards[cardIndex].product_code}-${randomOrderCards[cardIndex].list_number}.jpg`;
			const imgSize = Math.floor((canvas.current.width / 2) * 0.95);
			if (cardIndex % 2 === 0) {
				canvasCards.push({
					img: imgInstance,
					imgSize: imgSize,
					x: Math.floor((canvas.current.width / 2 - imgSize) / 2),
					y: imgSize * -1,
					cardData: { ...randomOrderCards[cardIndex] },
				});
			} else if (cardIndex % 2 === 1) {
				canvasCards.push({
					img: imgInstance,
					imgSize: imgSize,
					x: Math.floor(
						canvas.current.width / 2 + (canvas.current.width / 2 - imgSize) / 2
					),
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
			// イラストの描画
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
			// ここからイラスト表示位置の更新
			for (let i = 0; i < canvasCards.length; i++) {
				if (canvasCards[i].y > canvas.current.height) {
					canvasCards.splice(i, 1); // canvasの下端より下に出たcanvasCardは削除する
				} else {
					canvasCards[i].y += speed; // canvasCardを下に動かす
					// console.log(i,
					// 	Math.floor((speed + (0.2 * canvasCards[i].percent) / 100) * 100) / 100
					// );
				}
			}

			// 最新のイラストが半分ちょっとまで表示されたら、次のイラストのオブジェクトを作成
			if (
				canvasCards[canvasCards.length - 1].y >
				-canvasCards[canvasCards.length - 1].imgSize / 2.1
			) {
				createCanvasCard();
			}

			let FrameId = requestAnimationFrame(draw); // draw関数を繰り返す
			// console.log(FrameId);
			setAnimationFrameId(FrameId);
		};

		setAnimationState('playing');
		createCanvasCard();

		draw();

		// クリーンアップ関数
		return () => {
			noSleep.disable(); // noSleepを無効化
			window.removeEventListener('mousemove', hideCursor);
			// window.draw = null;
			// window.createCanvasCard = null;
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
			<NoSleepModal open={open} handleClose={handleClose} enableNoSleep={enableNoSleep} />
			{showingMenuBar && (
				<CanvasMenuBar handleClick={pauseRestartCanvas} animationState={animationState} />
			)}
		</>
	);
}

export default Canvas;
