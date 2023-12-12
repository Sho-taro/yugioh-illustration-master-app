import React from 'react'

function SampleImage() {
  return (
		<div>
			<div>
				<img
					src="/images/sample.jpeg"
					alt="sample-image"
					className="w-72 border-2 border-slate-400 border-solid"></img>
			</div>
			<div>
				<p>
					全 - 枚中 <span className="font-bold">-</span>枚目
				</p>
				<button className="text-gray-500 block">次の画像を表示</button>
			</div>
		</div>
  );
}

export default SampleImage