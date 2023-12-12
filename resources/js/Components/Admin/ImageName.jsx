import React from 'react'

function ImageName({ product_code, list_number }) {
  const imageName = `${product_code}-${list_number}`;
  return (
		<>
			<div className="mt-4">
				<p className="mr-8">
					カードナンバー: <span className="font-bold hover:select-all">{imageName}</span>
				</p>
				<button
					className="text-blue-600 hover:text-blue-400 active:scale-95"
					onClick={e => {
						e.preventDefault();
						navigator.clipboard.writeText(imageName);
					}}>
					クリップボードにコピーする
				</button>
			</div>
		</>
  );
}

export default ImageName