import React, { useState } from 'react';
import { router } from '@inertiajs/react';
// import { Link } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

function Create({ auth, message, errors, handleClose }) {
	const [inputValue, setInputValue] = useState('');
	const [radioValue, setRadioValue] = useState('public');

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};
	const handleRadioChange = e => {
		setRadioValue(e.target.value);
	};
	const formSubmit = () => {
		router.post(`/tags/${auth.user.id}`, {
			name: inputValue,
			status: radioValue,
		});
	};

	return (
		<form>
			<div className="mb-2">
				{/* <label>
					MyTag名:
					<input
						type="text"
						name="name"
						placeholder="最大20文字"
						onChange={e => handleInputChange(e)}
						value={inputValue}
					/>
				</label> */}
				<TextField
					label="MyTag名を入力"
					variant="filled"
					placeholder="最大20文字"
					helperText="(作成済みのMyTagと同一の名前をつけることはできません)"
					fullWidth
					// required
					// error={Boolean(errors.name)}
					name="name"
					value={inputValue}
					onChange={e => handleInputChange(e)}
				/>
				{errors.name && (
					<Typography sx={{ textAlign: 'center', color: 'red', m: '1rem 0' }}>
						エラー: {errors.name}
					</Typography>
				)}
			</div>
			{/* 公開/非公開については調整中のため、非表示（hidden） */}
			<div className="mb-2 hidden">
				<span>公開/非公開:</span>
				<label>
					<input
						type="radio"
						name="status"
						value="public"
						onChange={e => handleRadioChange(e)}
						defaultChecked
					/>
					公開
				</label>
				<label>
					<input
						type="radio"
						name="status"
						value="private"
						onChange={e => handleRadioChange(e)}
					/>
					非公開
				</label>
				{errors.status && <p style={{ color: 'red' }}>{errors.status}</p>}
			</div>
			{message && (
				<Typography sx={{ textAlign: 'center', color: 'green', m: '1rem 0' }}>
					{message}
				</Typography>
			)}
			{/* <Button
				variant="contained"
				disabled={inputValue.length === 0}
				disableRipple
				sx={{ textTransform: 'none' }}
				onClick={formSubmit}>
				新規作成
			</Button>
			<Button
				variant="outlined"
				color="info"
				disableRipple
				sx={{ textTransform: 'none', ml: '1rem' }}
				onClick={handleClose}>
				キャンセル
			</Button> */}
			<div className="flex flex-col">
				<Button
					variant="contained"
					color="error"
					sx={{
						mt: '2rem',
						textTransform: 'none',
						borderRadius: '0.5rem',
					}}
					disabled={inputValue.length === 0}
					disableRipple={true}
					onClick={formSubmit}>
					新規作成
				</Button>
				<Button
					variant={message ? 'outlined' : 'text'}
					color="error"
					sx={{
						mt: '0.8rem',
						textTransform: 'none',
						borderRadius: '0.5rem',
					}}
					disableRipple={true}
					onClick={handleClose}>
					{message ? '閉じる' : 'キャンセル'}
				</Button>
			</div>
		</form>
	);
}

// Persistent Layoutsの設定
Create.layout = page => <Layout title="My Tag 新規作成" children={page} />;

export default Create;
