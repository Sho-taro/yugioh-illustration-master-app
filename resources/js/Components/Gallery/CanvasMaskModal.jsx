import React from 'react';
// import { Link } from '@inertiajs/react';

function CanvasMenuBar({}) {

	return (
		<>
			<div className="canvas-menu-bar">
				<div className="h-full flex justify-end items-center">
					{/* <div className="mr-8 h-10 hover:opacity-50 active:scale-90">
						<button onClick={handleClick} className="text-xl text-white font-bold">
							{animationState === 'playing' && (
								<img
									src="/images/pause-white.svg"
									alt="ポーズボタン"
									className="w-10"
								/>
							)}
							{animationState === 'pausing' && (
								<img
									src="/images/play-arrow-white.svg"
									alt="スタートボタン"
									className="h-10"
								/>
							)}
						</button>
					</div> */}
					{/* <div className="mr-8 hover:opacity-50 active:scale-90">
						<button className="text-xl text-white font-bold">
							設定
						</button>
					</div> */}
					<div className="mr-8 hover:opacity-50 active:scale-90">
						<a href={route('index')} className="text-xl text-white font-bold">
							{/* <img
								src="/images/close-white.svg"
								alt="閉じるボタン"
								className="w-10"
							/> */}
							終了する
						</a>
					</div>
				</div>
			</div>
		</>
	);
}

export default CanvasMenuBar;
