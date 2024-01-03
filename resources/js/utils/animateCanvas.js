// export const animateCanvas = () => {
// 	const canvas1 = document.querySelector('#canvas1'); // canvasをidで取得
// 	const ctx1 = canvas1.getContext('2d'); // 描画コンテクストを取得

// 	//　色の設定（描画の前に行う）
// 	ctx1.fillStyle = 'orange';
// 	ctx1.strokeStyle = 'rgba(0, 100, 240, 1)';

// 	ctx1.fillRect(100, 100, 250, 200); // 描画メソッド その１
// 	ctx1.strokeRect(400, 400, 50, 100); // 描画メソッド その２

// 	ctx1.clearRect(200, 200, 100, 100); //描画メソッド その３ （領域を消去し、完全な透明にする）

// 	// imageの描画
//   // cxt1.drawImage(imageオブジェクト, x, y, width, height);
//   const img = new Image();  // imageインスタンスを新規作成
//   img.src = '/images/card-images/agov-jp006.jpg';   // src属性を指定
//   img.onload = function (e) {   // 画像が読み込まれたら描画
//     ctx1.drawImage(img, 0, 0, 500, 500);
//   }
// };

export const animateCanvas = cards => {
	const canvas1 = document.querySelector('#canvas1'); // canvasをidで取得
	const ctx1 = canvas1.getContext('2d'); // 描画コンテクストを取得

	// imageの描画
	// cxt1.drawImage(imageオブジェクト, x, y, width, height);
	const cardsNum = cards.length;
	const imgs = [];
	let imgSrcIndex = 0;
	setInterval(() => {
		const imgInstance = new Image();
		imgInstance.src = `/images/card-images/${cards[imgSrcIndex].product_code}-${cards[imgSrcIndex].list_number}.jpg`;
		const magnification = 0.5 + Math.random() / 2; // 倍率 0.5以上1未満
		imgs.push({
			img: imgInstance,
			magnification: magnification,
			x: Math.random() * (canvas1.width - 400 * magnification),
      y: -(400 * magnification),
      cardData: cards[imgSrcIndex],
		});
		// console.log(imgs[index])
		if (imgSrcIndex >= cardsNum - 1) {
			imgSrcIndex = 0;
		} else {
			imgSrcIndex++;
		}
		// console.log(imgs);
	}, 5000);
	// const img = new Image();  // imageインスタンスを新規作成
	// img.src = '/images/card-images/agov-jp006.jpg';   // src属性を指定

	const speed = 0.7;

	function animate() {
		ctx1.clearRect(0, 0, canvas1.width, canvas1.height); // canvas内全体を初期化
		for (const img of imgs) {
			ctx1.drawImage(img.img, img.x, img.y, 400 * img.magnification, 400 * img.magnification);
		}

		for (const img of imgs) {
			if (img.y <= canvas1.height) {
				img.y += speed * img.magnification;
			}
		}
		for (let i = 0; i < imgs.length; i++) {
			if (imgs[i].y > canvas1.height) {
				imgs.splice(i, 1);
			}
		}

		requestAnimationFrame(animate); // animate関数を繰り返す
	}

	animate();
};
