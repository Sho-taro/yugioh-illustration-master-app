import React from 'react'
import { Link } from '@inertiajs/react';

function CanvasMenuBar() {
  return (
		<>
			<div className="canvas-menu-bar">
				<div className="h-full flex justify-end items-center">
					<div className="mr-8">
						<button className="text-xl text-white font-bold">設定</button>
					</div>
					<div className="mr-8">
						<Link href={route('gallery.setting')} className="text-xl text-white font-bold">終了</Link>
					</div>
				</div>
			</div>
		</>
  );
}

export default CanvasMenuBar