import React from 'react'

function GameHeader({ index }) {
  return (
		<>
			<div className="game-header mb-4 sm:mb-6 px-1 sm:px-2">
				<div>
					<p className="text-sm sm:text-xl">
						第<span> {index + 1} </span>問
					</p>
				</div>
			</div>
		</>
  );
}

export default GameHeader