// import { mixedOrderIndex } from './mixedOrderIndex';

// anime.js によるアニメーション
export function animateBlock(randomIndex, callback) {
	const targets = [];
	for (let i = 0; i < randomIndex.length; i++) {
		targets.push(`.block-index${randomIndex[i]}`);
	}
	const animation = anime({
		targets: targets,
		opacity: [{ value: 1 }, { value: 0 }],
		easing: 'easeOutExpo',
		duration: 500,
		delay: anime.stagger(100),
		complete: function () {
			callback();
		},
	});

	return animation;
}
