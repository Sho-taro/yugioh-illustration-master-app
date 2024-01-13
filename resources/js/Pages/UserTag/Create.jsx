import React, { useState } from 'react';
import { router } from '@inertiajs/react';
import Layout from '@/Layouts/Layout';

function Create({ auth, errors }) {
  console.log(errors);  // バリデーションエラーをデバック
	const [inputValue, setInputValue] = useState('');
	const [radioValue, setRadioValue] = useState('public');

	const handleInputChange = e => {
		setInputValue(e.target.value);
	};
	const handleRadioChange = e => {
		setRadioValue(e.target.value);
	};
	const handleSubmit = e => {
		e.preventDefault();
    router.post(`/tags/${auth.user.id}`, {
      name: inputValue,
      status: radioValue
    });
	};

	return (
		<>
			<form action="" onSubmit={e => handleSubmit(e)}>
				<input
					type="text"
					name="name"
					placeholder="My Tag名を入力（最大20文字）"
					onChange={e => handleInputChange(e)}
					value={inputValue}
				/>
				{/* <label>
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
				</label> */}
				<button type="submit">新規作成</button>
			</form>
		</>
	);
}

// Persistent Layoutsの設定
Create.layout = page => <Layout title="My Tag 新規作成" children={page} />;

export default Create;
