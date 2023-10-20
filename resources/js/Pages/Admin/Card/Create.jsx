import React from 'react';
import { useState, useEffect } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { Link, usePage } from '@inertiajs/react';
// import './css/Create.css';

// コンポーネント
import RegisterForm from '@/Components/Admin/RegisterForm';
import ApiForm from '@/Components/Admin/ApiForm';
import DisplayImage from '@/Components/Admin/DisplayImage';

import { sampleData } from '@/utils/sampleCardData';
import AdminLayout from '@/Layouts/AdminLayout';

function Create({ errors, registeredCard, message }) {
	const [cardData, setCardData] = useState(sampleData);
	const [inputCardName, setInputCardName] = useState(null);
	const [imageIndex, setImageIndex] = useState(0);
	const [errMsg, setErrMsg] = useState(null); // APIを叩いた時のエラーメッセージを保持

	// DBに保存する用のデータ
	const [values, setValues] = useState({
		card_id: '',
		pack_name: '',
		list_number: '',
		name_en: '',
		name_ja: '',
		name_ja_kana: '',
		frame_type: '',
		archetype: '',
	});

	// バリデーションエラーメッセージ
	// const { errors } = usePage().props;

	const getCardData = async cardName => {
		try {
			const res = await axios.get(
				`https://db.ygoprodeck.com/api/v7/cardinfo.php?name=${cardName}`
			);
			// console.log(res.data.data[0]);
			setCardData(res.data.data[0]);
		} catch (err) {
			// console.log(err.message)
			setErrMsg(err.message);
		}
	};
	const handleApiSubmit = e => {
		e.preventDefault();
		getCardData(inputCardName);
	};
	const handleApiChange = e => {
		setInputCardName(e.target.value);
	};
	const handleValueChange = e => {
		const key = e.target.name;
		const value = e.target.value;

		setValues({
			...values,
			[key]: value,
		});
	};
	const displayNextImage = () => {
		const imgsNum = cardData.card_images.length; // APIから取得した画像の枚数
		if (imageIndex + 1 < imgsNum) {
			setImageIndex(i => i + 1);
		} else {
			setImageIndex(0);
		}
	};

	useEffect(() => {
		setValues({
			...values,
			card_id: String(cardData.id),
			name_en: cardData.name,
			frame_type: cardData.frameType,
			archetype: cardData.archetype,
		});
	}, [cardData]);

		return (
			<>
				<div className="w-4/5 mt-8 mx-auto" key={registeredCard && registeredCard.id}>
					<Link href={route('admin.card.index')} className="simple-button">
						登録したカードの一覧へ
					</Link>
					<div className="flex justify-start mt-4">
						<div>
							{message && <p className="text-green-500 my-2">{message}: {registeredCard.name_ja}</p>}
							<h2 className="text-2xl mb-8">APIからカード情報を取得する</h2>
							<ApiForm
								onSubmit={handleApiSubmit}
								onChange={handleApiChange}></ApiForm>
							{errMsg && <p className="text-red-500 my-2">{errMsg}</p>}
							<DisplayImage
								cardData={cardData}
								imageIndex={imageIndex}
								onBtnClick={displayNextImage}></DisplayImage>
						</div>
						<div className="pl-12 border-l ">
							<RegisterForm
								cardData={cardData}
								values={values}
								onChange={handleValueChange}
								imageIndex={imageIndex}
								errors={errors}
							/>
						</div>
					</div>
				</div>
			</>
		);
}

// Persistent Layoutの設定
Create.layout = page => <AdminLayout title="カードを新規登録" children={page} />;

export default Create;
