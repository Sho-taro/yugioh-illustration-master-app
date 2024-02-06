import axios, { isCancel, AxiosError } from 'axios';

const getRaceData = async () => {
	try {
		const res = await axios.get(route('api.getData.races'));
		// console.log(res.data);
		return res.data;
	} catch (err) {
		console.log('データ取得失敗', err);
		throw new Error('データ取得に失敗しました。');
	}
};

export default getRaceData;
