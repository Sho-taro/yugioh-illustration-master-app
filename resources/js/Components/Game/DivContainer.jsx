import React from 'react';
// import './css/DivContainer.css';

function DivContainer({ children }) {
	return (
		<div className="mx-auto min-h-screen px-4 flex flex-col items-center justify-center max-w-550px bg-opacity-70 sm:border-x-2 sm:border-gray-700 sm:px-12 sm:w-4/5 md:w-3/5 lg:w-1/2">
			{children}
		</div>
	);
}

export default DivContainer;
