// const subKeyframes = {
// 	opacity: [0, 1, 0],
// 	width: ['80px', '100px', '120px'],
// 	height: ['80px', '100px', '120px'],
// 	offset: [0, 0.05, 1],
// };
// const subOptions = {
// 	duration: 600,
// 	fill: 'backwards',
// 	easing: 'ease-in',
// };

const subKeyframes = {
	opacity: [.8, 0],
	width: ['60px', '80px'],
	height: ['60px', '80px'],
	offset: [0, 1],
};
const subOptions = {
	duration: 350,
	fill: 'backwards',
	easing: 'ease-in',
};

export const playBtnAnimation = (ele) => {
		ele.animate(subKeyframes, subOptions);
  };