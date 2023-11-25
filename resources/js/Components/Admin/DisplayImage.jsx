import React, { useState } from 'react';

function DisplayImage({ cardData, imageIndex, onBtnClick }) {
	const [index, setIndex] = useState(0);

	// APIから取得した画像が複数ある場合の処理
	const imagesData = cardData.card_images;
	const imgsNum = imagesData.length; // 画像の枚数（種類数）を取得
	// console.log(imgsNum);

	const imgSources = [];
	imagesData.forEach(ele => {
		const imgSrc = ele.image_url_cropped;
		imgSources.push(imgSrc);
	});
	// console.log(imgSources);

	// const imgSrc = cardData.card_images[0].image_url_cropped;

	// imgsNumの値によって「次の画像を表示」のcssを切り替える
	let buttonClassName = 'text-gray-500 block';
	if (imgsNum >= 2) {
		buttonClassName = 'underline text-blue-700 block';
	}
	// const handleClick = () => {
	// 	if (index + 1 < imgsNum) {
	// 		setIndex(i => i + 1);
	// 	} else {
	// 		setIndex(0);
	// 	}
	// };

	// 画像をローカルにダウンロードする
	// const handleClick = () => {
	// 	const fileName = 'aaaa.jpg';
	// 	const downloadAnker = document.querySelector('#download');

	// 	downloadAnker.href = './images/55410871.jpg';
	// 	downloadAnker.download = fileName;
	// };

	return (
		<>
			<div className="">
				<div>
					{/* 画像を１枚ずつ表示するパターン */}
					<img
						src={imgSources[imageIndex]}
						alt={cardData.name}
						className="w-72 border-2 border-slate-400 border-solid"></img>
					{/* 画像を全部表示するパターン */}
					{/* {imgSources.map((imgSource) => (
					<img key={imgSource} src={imgSource} alt={cardData.name} width="350" height="350"></img>
				))} */}

					{/* <img src={imgSrc} alt={cardData.name} width="350" height="350"></img> */}
					{/* <a href={imgSrc} id="download" onClick={() => handleClick()}>
					画像をダウンロード
				</a> */}
				</div>
				<div className="">
					<p>
						{imageIndex + 1}枚目 （全{imgsNum}枚）
					</p>
					<button
						className={buttonClassName}
						onClick={onBtnClick}
						disabled={imgsNum === 1}>
						次の画像を表示
					</button>
				</div>
			</div>
		</>
	);
}

export default DisplayImage;
