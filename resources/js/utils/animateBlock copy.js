// import { mixedOrderIndex } from './mixedOrderIndex';

// anime.js によるアニメーション
export function animateBlock(randomIndex, callback) {
	const targets = [];
	for (let i = 0; i < randomIndex.length; i++) {
		targets.push(`.block-index${randomIndex[i]}`);
	}
	const animation = anime({
		targets: targets,
		// translateX: 0,
		// translateY: 0,
		// translateY: function () {
		//   return anime.random(-100, -50);
		// },
		translateY: 10,
		backgroundColor: [
			{ value: 'rgba(100, 100, 100, 0.6)', duration: 150 },
			{ value: 'rgba(50, 50, 50, 0)', duration: 250 }
		],
		border: [
			{ value: '2px solid rgba(45, 45, 45, 1)', duration: 10 },
			{ value: '0px solid rgba(45, 45, 45, 0)' },
		],
		opacity: [
			{ value: 1, duration: 100 },
			{ value: 0, duration: 100 },
			// { value: 0, duration: 40, delay: 10 },
		],
		easing: 'easeOutExpo',
		duration: 500,
		delay: anime.stagger(100),
		// delay: anime.stagger(800, { grid: [6, 8], from: 'last' }), // grid: [横のセル数, 縦のセル数]
		// complete: function () {
		// 	if (index < randomIndex.length - 3) {
		// 		animateBlock(randomIndex, index + 4); // 次のアニメーションをスタートさせる
		// 	} else {
		// 		console.log('アニメーション終了')
		// 	}
		// },
		complete: function () {
			callback();
		},
	});

	return animation;
}
