import React from 'react';

function Form({ onSubmit, onChange }) {
	return (
		<>
			<form onSubmit={e => onSubmit(e)}>
				{/* <label htmlFor="card-name">カード名（英語）: </label> */}
				<input
					id="card-name"
					type="text"
					placeholder="カード名を英語で入力"
					onChange={e => onChange(e)}
					className="text-black/90"
				></input>
				<button type="submit" className="simple-button">APIを叩く</button>
			</form>
		</>
	);
}

export default Form;
