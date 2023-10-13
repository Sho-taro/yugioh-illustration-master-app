export const createGrid = (blocksNum) => {
	// アニメーションのためのDOMの生成
	const container = document.querySelector('.blocks-container');

	for (let i = 0; i < blocksNum; i++) {
		const block = document.createElement('div');
		block.classList.add('blocks');
		block.classList.add(`block-index${i}`)
		container.appendChild(block);
	}
}