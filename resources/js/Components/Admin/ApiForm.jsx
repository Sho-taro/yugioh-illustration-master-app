import React from 'react';

function Form({ cardNameInput, onSubmit }) {
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
		</>
	);
}

export default Form;
