import React, { useState, useEffect } from 'react';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';

function CardNameFilterMUI({ filters, cardName, setCardName }) {
	const handleChange = e => {
		setCardName(e.target.value);
	};

	useEffect(() => {
		if (!filters) return;
		if (!filters['card-name']) return;
		setCardName(filters['card-name']);
	}, []);

	return (
		// <div className="ml-4 mb-2 flex items-center">
		// 	<Typography component="label" sx={{ mr: '1rem' }}>
		// 		カード名
		// 	</Typography>
		// 	<TextField
		// 		// variant="filled"
		// 		name="card-name"
		// 		label="カード名"
		// 		// placeholder="を含む（スペース区切りで複数入力可）"
		// 		label="カード名で検索"
		// 		// helperText="(作成済みのMyTagと同一の名前をつけることはできません)"
		// 		// fullWidth
		// 		// autoFocus
		// 		// required
		// 		// error={Boolean(errors.name)}
		// 		value={cardName}
		// 		sx={{ minWidth: '25rem' }}
		// 		onChange={e => handleChange(e)}
		// 	/>
		// </div>
		<div className="p-1">
			<TextField
				// variant="filled"
				name="card-name"
				// label="カード名"
				// placeholder="を含む（スペース区切りで複数入力可）"
				placeholder="カード名（を含む）"
				// helperText="(作成済みのMyTagと同一の名前をつけることはできません)"
				// fullWidth
				// autoFocus
				// required
				// error={Boolean(errors.name)}
				value={cardName}
				sx={{ width: '24.5rem' }}
				onChange={e => handleChange(e)}
			/>
		</div>
	);
}

export default CardNameFilterMUI;
