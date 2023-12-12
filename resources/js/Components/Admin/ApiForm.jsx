import React from 'react';

function Form({ cardNameInput, onSubmit, onClick }) {
	return (
		<>
			<form onSubmit={e => onSubmit(e)}>
				{/* <label htmlFor="card-name">カード名（英語）: </label> */}
				<input
					ref={cardNameInput}
					id="card-name"
					type="text"
					placeholder="カード名を英語で入力"
					className="text-black/90 w-96"></input>
				<button type="submit" className="simple-button ml-8">
					APIを叩く
				</button>
			</form>
			<button type="button" className="mt-2 text-blue-600 underline hover:text-blue-400" onClick={onClick}>入力内容をクリア</button>
		</>
	);
}

export default Form;
