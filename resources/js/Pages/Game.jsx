import React, { useState, useEffect, useRef } from 'react';
// import { router } from '@inertiajs/react';    // GETメソッド以外で送信するため
// import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';
// imp: '@'は絶対パス'/Users/skkch96/Desktop/programing/laravel/yugioh-illustration-master-app/resources/js'を表す

// ↓ ここからComponents
// import AnimationController from '@/Components/Game/AnimationController';
import CardInfo from '@/Components/Game/CardInfo';
import ImagesContainer from '@/Components/Game/ImagesContainer';
import CardList from '@/Components/Game/CardList';
import ProgressBar from '@/Components/Game/ProgressBar';
// import CircularProgressBar from '@/Components/Game/CircularProgressBar';
import DivContainer from '@/Components/Game/DivContainer';
import ModalWindow from '@/Components/Game/ModalWindow';
import Menubar from '@/Components/Game/Menubar';
import AccountIcon from '@/Components/Game/AccountIcon';
import GameHeader from '@/Components/Game/GameHeader';
import FrameTypeImg from '@/Components/Game/FrameTypeImg';

// ここからアニメーション関連 anime.js
import { blocksNum } from '@/utils/animationConfig';
import { animateBlock } from '@/utils/animateBlock';
import { changeValsOrder } from '@/utils/changeValsOrder';
import { randomIndexFirst, randomIndexSecond } from '@/utils/splitMoreMixedOrderIndex';
import { mergeNestedArray } from '@/utils/mergeNestedArray';
import { playBtnAnimation } from '@/utils/playBtnAnimation';


function Game({ auth, cards }) {
	const [gameStatus, setGameStatus] = useState('preparing');
	const [index, setIndex] = useState(0);
	const [card, setCard] = useState(cards[0]);
	const [isAnimationCompleted, setIsAnimationCompleted] = useState(false); // アニメーションが終了しているかどうか
	const [progress, setProgress] = useState(0); // Progress bar（初期値は0(%)）
	const [firstAnimation, setFirstAnimation] = useState(null);
	const [secondAnimation, setSecondAnimation] = useState(null);
	const [randomOrderFirst, setRandomOrderFirst] = useState(changeValsOrder(randomIndexFirst));
	const [randomOrderSecond, setRandomOrderSecond] = useState(changeValsOrder(randomIndexSecond));
	const [showingModal, setShowingModal] = useState(false);
	const [modalIndex, setModalIndex] = useState(0);

	// refを使ったDOM要素の取得
	const menuMask = useRef(null);
	const menuNav = useRef(null);
	const divImg = useRef(null);
	const cardName = useRef(null);
	const cardNameKana = useRef(null);
	const playSvg = useRef(null);
	const stopSvg = useRef(null);
	const playPauseBtn = useRef(null);

	// const animationTargetsFirst = [];
	// for (let i = 0; i < randomIndexFirst.length; i++) {
	// 	targets.push(`.block-index${randomIndexFirst[i]}`);
	// }
	// const animationTargetsSecond = [];
	// for (let i = 0; i < randomIndexSecond.length; i++) {
	// 	targets.push(`.block-index${randomIndexSecond[i]}`);
	// }

	useEffect(() => {
		if (gameStatus !== 'playing') return;
		// console.log(randomOrderFirst)
		setFirstAnimation(animateBlock(mergeNestedArray(randomOrderFirst), showCardName));
		setSecondAnimation(animateBlock(mergeNestedArray(randomOrderSecond), logFinished));
		setTimeout(() => playBtnAnimation(playSvg.current), 100);
	}, [gameStatus, index]);

	useEffect(() => {
		if (!firstAnimation) return;
		const intervalId = setInterval(() => {
			setProgress(firstAnimation.progress);
			// console.log(`id: ${intervalId} 0.5秒ごとのinterval`);
		}, 500);
		return function () {
			clearInterval(intervalId);
		};
	}, [firstAnimation]);

	// // デバイスの画面サイズ
	// console.log(screen.height);
	// console.log(screen.width);
	// // ウィンドウのサイズ
	// console.log(window.innerHeight);
	// console.log(window.innerWidth);
	// // html要素のサイズ
	// console.log(document.documentElement.scrollHeight);     // スクロールできる部分も含めたページ全体の高さ
	// console.log(document.documentElement.clientHeight);     // clientの画面に表示されている部分の高さ

	const startGame = () => {
		setGameStatus('playing');
	};

	const controlAnimation = () => {
		// console.log('クリック')
		// console.log('paused:', firstAnimation.paused);
		// console.log('completed:', firstAnimation.completed);
		// console.log('進捗度:', firstAnimation.progress);
		if (firstAnimation.completed) return; // アニメーションが終了していたらearly return
		if (firstAnimation.paused === false) {
			// アニメーションが再生中なら
			// console.log('アニメーション停止');
			firstAnimation.pause();
			secondAnimation.pause();
			playBtnAnimation(stopSvg.current);
		} else if (firstAnimation.paused === true) {
			// console.log('アニメーション再開');
			firstAnimation.play();
			secondAnimation.play();
			playBtnAnimation(playSvg.current);
		}
	};

	const showMenu = () => {
		menuMask.current.classList.add('open');
		menuNav.current.classList.add('open');
	};
	const hideMenu = () => {
		menuMask.current.classList.remove('open');
		menuNav.current.classList.remove('open');
	}

	const finishAnimation = () => {
		if (firstAnimation.completed) return;
		firstAnimation.pause();
		secondAnimation.pause();
		firstAnimation.seek(firstAnimation.duration); // アニメーション終了時点までスキップ
		secondAnimation.seek(secondAnimation.duration);
		playBtnAnimation(stopSvg.current);
	};

	// アニメーション終了時に実行されるコールバック関数
	const showCardName = () => {
		// console.log('アニメーション終了');
		// ??? に正解のカード名を表示する
		// console.log(cards);
		// console.log(card);
		cardName.current.textContent = card.name_ja;
		cardNameKana.current.textContent = card.name_ja_kana;
		// useStateにアニメーションが終了したことを登録する
		setIsAnimationCompleted(true);
		// playPauseボタンを無効化する
		playPauseBtn.current.classList.add('disabled-button');
	};
	const logFinished = () => {
		// console.log('アニメーション終了');
		return;
	};

	const toNextCard = () => {
		if (index <= 3) {
			// console.log(firstAnimation)
			firstAnimation.pause();
			secondAnimation.pause();
			firstAnimation.seek(firstAnimation.duration);
			secondAnimation.seek(secondAnimation.duration);
			setFirstAnimation(null);
			setSecondAnimation(null);
			setProgress(0); // アニメーションの進捗度合いをリセット
			setRandomOrderFirst(changeValsOrder(randomOrderFirst));
			setRandomOrderSecond(changeValsOrder(randomOrderSecond));
			setIsAnimationCompleted(false);
			setIndex(i => i + 1);
			setCard(cards[index + 1]);
		} else if (index === 4) {
			setGameStatus('finished');
		}
	};
	const showModal = e => {
		setShowingModal(true);
		setModalIndex(e.target.id);
	};
	const hideModal = () => {
		setShowingModal(false);
	};

	if (gameStatus === 'preparing' || gameStatus === 'playing') {
		return (
			<>
				{gameStatus === 'preparing' && (
					<Menubar
						menuMask={menuMask}
						menuNav={menuNav}
						hideMenu={hideMenu}
						auth={auth}></Menubar>
				)}
				<DivContainer>
					{gameStatus === 'preparing' && (
						<AccountIcon
							gameStatus={gameStatus}
							showMenu={showMenu}
							auth={auth}></AccountIcon>
					)}
					{gameStatus === 'playing' && <GameHeader index={index}></GameHeader>}
					<ImagesContainer
						gameStatus={gameStatus}
						index={index}
						card={card}
						divImg={divImg}
						playSvg={playSvg}
						stopSvg={stopSvg}
						blocksNum={blocksNum}
						controlAnimation={controlAnimation}
					/>
					<div className="w-full">
						<CardInfo
							index={index}
							cardName={cardName}
							cardNameKana={cardNameKana}
							card={card}
						/>
						<ProgressBar value={progress} />
						{/* <CircularProgressBar value={progress} /> */}
						{gameStatus === 'preparing' ? (
							<div className="text-center">
								<button
									className="shiny-button mx-auto text-sm sm:text-base px-5 py-3 sm:px-8 sm:py-4"
									onClick={startGame}>
									Click to Play
								</button>
							</div>
						) : (
							<>
								<div
									key={index}
									className="flex justify-center items-center relative">
									{/* <div className="card-index">
										<p className="text-xs sm:text-sm">
											<span className="text-sm sm:text-base font-bold">
												{index + 1}
											</span>{' '}
											/ 5
										</p>
									</div> */}
									<div className="text-xs absolute top-1/2 left-1/4 -translate-x-2/3 -translate-y-1/2">
										<FrameTypeImg card={card}></FrameTypeImg>
									</div>
									<div
										ref={playPauseBtn}
										className="play-pause-button"
										onClick={() => {
											// gameStatusが'playing'な場合に限りcontrolAnimationを実行
											if (gameStatus !== 'playing') return;
											controlAnimation();
										}}></div>
									{!isAnimationCompleted ? (
										// まだアニメーションが終わっていない場合
										<div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2">
											<div
												className="answer-button"
												onClick={finishAnimation}></div>
										</div>
									) : (
										// すでにアニメーションが終わっている場合
										<div className="absolute top-1/2 right-1/4 translate-x-1/2 -translate-y-1/2">
											<div className="next-button" onClick={toNextCard}></div>
										</div>
									)}
									{/* <div className="ml-4 sm:ml-8">
										<AnimationController
											index={index}
											isAnimationCompleted={isAnimationCompleted}
											// finishBtn={finishBtn}
											// nextBtn={nextBtn}
											finishAnimation={finishAnimation}
											toNextCard={toNextCard}
										/>
									</div> */}
								</div>
							</>
						)}
					</div>
				</DivContainer>
			</>
		);
	} else if (gameStatus === 'finished') {
		return (
			<>
				<DivContainer>
					<CardList
						auth={auth}
						cards={cards}
						showModal={showModal}
						showingModal={showingModal}
					/>
					<a
						href="/"
						className="shiny-button button mt-8 mb-10 text-sm sm:text-base px-5 py-3 sm:px-8 sm:py-4">
						Play again
					</a>
				</DivContainer>
				{showingModal ? (
					<ModalWindow
						auth={auth}
						cards={cards}
						modalIndex={modalIndex}
						hideModal={hideModal}
					/>
				) : null}
			</>
		);
	}
}

// Persistent Layoutsの設定
Game.layout = page => <Layout title="遊戯王イラストクイズ" children={page} />;

export default Game;

// 次にやること　→ Animation.playState をいじってみる running, paused, finished??
// Animation.currentTime　→ アニメーションの再生位置(https://www.webdesignleaves.com/pr/jquery/web-animation-api-basic.html)

// 再レンダー後に、同じ変数が重複して存在してしまっている（レンダー前の変数が残ってしまっている）
