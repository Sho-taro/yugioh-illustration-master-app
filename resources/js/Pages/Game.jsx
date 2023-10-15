import React, { useState, useEffect, useRef } from 'react';
import { router } from '@inertiajs/react';    // GETメソッド以外で送信するため
// import { Link } from '@inertiajs/react';
import Layout from '../Layouts/Layout';

// ↓ ここからComponents
// import AnimationController from '../Components/Game/AnimationController';
import CardInfo from '../Components/Game/CardInfo';
import ImagesContainer from '../Components/Game/ImagesContainer';
import CardList from '../Components/Game/CardList';
import ProgressBar from '../Components/Game/ProgressBar';
// import CircularProgressBar from '../Components/Game/CircularProgressBar';
import DivContainer from '../Components/Game/DivContainer';
import ModalWindow from '../Components/Game/ModalWindow';

// ここからアニメーション関連 anime.js
import { blocksNum } from '../utils/animationConfig';
import { animateBlock } from '../utils/animateBlock';
import { changeValsOrder } from '../utils/changeValsOrder';
import { randomIndexFirst, randomIndexSecond } from '../utils/splitMoreMixedOrderIndex';
import { mergeNestedArray } from '../utils/mergeNestedArray';
import { playBtnAnimation } from '../utils/playBtnAnimation';


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
				<div ref={menuMask} className="menu-mask" onClick={hideMenu}></div>
				<div ref={menuNav} className="menu-nav">
					<img
						src="/images/close-gray.svg"
						alt="閉じるボタン"
						className="w-6 sm:w-8 absolute top-4 right-4 cursor-pointer hover:opacity-60"
						onClick={hideMenu}
					/>
					{auth.user === null ? (
						<nav className="list-none">
							<p className="mb-6 text-lg sm:text-2xl font-bold">メニュー</p>
							<ul>
								<li className="guest-user-name relative pl-8 mb-2 text-lg sm:text-2xl border-b border-solid border-gray-500">
									<i>未ログイン</i>
								</li>
								<li>
									<a
										href={route('register')}
										className="block text-sm sm:text-base ml-4 py-2">
										新規登録
									</a>
								</li>
								<li>
									<a
										href={route('login')}
										className="block text-sm sm:text-base ml-4 py-2">
										ログイン
									</a>
								</li>
							</ul>
						</nav>
					) : (
						<nav className="list-none">
							<p className="mb-6 text-lg sm:text-2xl font-bold">メニュー</p>
							<ul>
								<li className="login-user-name relative pl-8 mb-2 text-lg sm:text-2xl border-b border-solid border-gray-500">
									{auth.user.name}
								</li>
								<li>
									<p
										className="text-blue-600 text-sm sm:text-base ml-4 py-2 cursor-pointer"
										onClick={e => {
											e.preventDefault();
											router.post('logout');
										}}>
										ログアウト
									</p>
								</li>
							</ul>
						</nav>
					)}
				</div>
				<DivContainer>
					{gameStatus === 'preparing' && (
						<div className="account-svg-container">
							{/* <img
								src="/images/menu.svg"
								alt="メニューボタン"
								className="menu-svg w-6 sm:w-10"
								onClick={showMenu}
							/> */}
							{auth.user === null ? (
								<img
									src="/images/account-circle.svg"
									alt="アカウントアイコン"
									className="account-svg w-6 sm:w-10"
									onClick={showMenu}
								/>
							) : (
								<>
									<img
										src="/images/check-small.svg"
										alt="チェックアイコン"
										className="check-svg w-6 sm:w-10"
									/>
									<img
										src="/images/account-circle-green.svg"
										alt="アカウントアイコン"
										className="account-svg w-6 sm:w-10"
										onClick={showMenu}
									/>
								</>
							)}
						</div>
					)}
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
					<div className="max-w-full">
						<CardInfo
							index={index}
							cardName={cardName}
							cardNameKana={cardNameKana}
							card={card}
						/>
						{gameStatus === 'preparing' ? (
							<button
								className="animation-button mt-2 sm:mt-4 text-sm sm:text-base"
								onClick={startGame}>
								Click to Play
							</button>
						) : (
							<>
								<ProgressBar value={progress} />
								{/* <CircularProgressBar value={progress} /> */}
								<div key={index} className="flex justify-center items-center mt-4">
									<div className="card-index">
										<p className="text-xs sm:text-sm">
											<span className="text-sm sm:text-base font-bold">
												{index + 1}
											</span>{' '}
											/ 5
										</p>
									</div>
									<div
										ref={playPauseBtn}
										className="play-pause-button mx-4 sm:mx-6"
										onClick={() => {
											// gameStatusが'playing'な場合に限りcontrolAnimationを実行
											if (gameStatus !== 'playing') return;
											controlAnimation();
										}}></div>
									{!isAnimationCompleted ? (
										// まだアニメーションが終わっていない場合
										<div
											className="answer-button"
											onClick={finishAnimation}></div>
									) : (
										// すでにアニメーションが終わっている場合
										<div className="next-button" onClick={toNextCard}></div>
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
					<CardList auth={auth} cards={cards} showModal={showModal} />
					<a href="/" className="animation-button button mt-6 mb-2  text-sm sm:text-base">
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

// Persistant Layoutsの設定
Game.layout = page => <Layout title="イラストクイズ" children={page} />;

export default Game;

// 次にやること　→ Animation.playState をいじってみる running, paused, finished??
// Animation.currentTime　→ アニメーションの再生位置(https://www.webdesignleaves.com/pr/jquery/web-animation-api-basic.html)

// 再レンダー後に、同じ変数が重複して存在してしまっている（レンダー前の変数が残ってしまっている）
