import React from 'react'

function CardNameFilter() {
  return (
		<div className="my-4 flex justify-start items-center">
			<p className='w-28 text-center'>カード名</p>
			<input type="text" name="card-name" id="card-name" placeholder=" を含む" className="w-2/3 ml-2" />
			{/* <img
        src="/images/search.svg"
        alt="検索ボタン"
        className="cursor-pointer hover:opacity-50"
        /> */}
		</div>
  );
}

export default CardNameFilter