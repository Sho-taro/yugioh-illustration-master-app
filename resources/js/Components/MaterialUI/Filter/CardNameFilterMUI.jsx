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
		<div className="mb-4 flex items-center">
			<Typography component="label" sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
				カード名:
			</Typography>
			<TextField
				// variant="filled"
				name="card-name"
				// label="カード名"
				placeholder="を含む（スペース区切りで複数入力可）"
				// helperText="(作成済みのMyTagと同一の名前をつけることはできません)"
				// fullWidth
				// autoFocus
				// required
				// error={Boolean(errors.name)}
				value={cardName}
				sx={{ minWidth: '40rem' }}
				onChange={e => handleChange(e)}
			/>
		</div>
	);
}

export default CardNameFilterMUI;