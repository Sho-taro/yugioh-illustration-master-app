import { useEffect } from 'react';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
// import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/react';
import GalleryLayout from '@/Layouts/GalleryLayout';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';

export default function Register() {
	const { data, setData, post, processing, errors, reset } = useForm({
		name: '',
		email: '',
		password: '',
		password_confirmation: '',
	});

	useEffect(() => {
		return () => {
			reset('password', 'password_confirmation');
		};
	}, []);

	const handleBtnClick = e => {
		post(route('register'));
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="w-1/4 mx-auto">
				<TooltipBackButton href={route('index')} title="Topページへ戻る" />
				<Typography
					variant="h5"
					className="text-center"
					sx={{ mt: '1.5rem', mb: '0.5rem', fontWeight: '700' }}>
					ユーザー登録
				</Typography>
				<form>
					<div>
						<InputLabel htmlFor="name" value="ユーザー名" className="text-white" />

						<TextInput
							id="name"
							name="name"
							value={data.name}
							className="mt-1 block w-full"
							autoComplete="name"
							isFocused={true}
							onChange={e => setData('name', e.target.value)}
							required
						/>

						<InputError
							message={errors.name}
							className="mt-2"
							style={{ color: 'red' }}
						/>
					</div>

					<div className="mt-4">
						<InputLabel htmlFor="email" value="メールアドレス" className="text-white" />

						<TextInput
							id="email"
							type="email"
							name="email"
							value={data.email}
							className="mt-1 block w-full"
							autoComplete="username"
							onChange={e => setData('email', e.target.value)}
							required
						/>

						<InputError
							message={errors.email}
							className="mt-2"
							style={{ color: 'red' }}
						/>
					</div>

					<div className="mt-4">
						<InputLabel
							htmlFor="password"
							value="パスワード（半角英数字8文字以上）"
							className="text-white"
						/>

						<TextInput
							id="password"
							type="password"
							name="password"
							value={data.password}
							className="mt-1 block w-full"
							autoComplete="new-password"
							onChange={e => setData('password', e.target.value)}
							required
						/>

						<InputError
							message={errors.password}
							className="mt-2"
							style={{ color: 'red' }}
						/>
					</div>

					<div className="my-4">
						<InputLabel
							htmlFor="password_confirmation"
							value="パスワード再入力"
							className="text-white"
						/>

						<TextInput
							id="password_confirmation"
							type="password"
							name="password_confirmation"
							value={data.password_confirmation}
							className="mt-1 block w-full"
							autoComplete="new-password"
							onChange={e => setData('password_confirmation', e.target.value)}
							required
						/>

						<InputError
							message={errors.password_confirmation}
							className="mt-2"
							style={{ color: 'red' }}
						/>
					</div>
					<div className="flex flex-col items-center justify-center mt-12">
						<Button
							variant="contained"
							color="error"
							size="large"
							disableRipple
							disabled={processing}
							onClick={handleBtnClick}>
							新規登録
						</Button>
						<Link href={route('login')} className="block mt-6 text-gray-500 underline">
							既に登録済みの方はこちら
						</Link>
					</div>
				</form>
			</div>
		</div>
	);
}
Register.layout = page => <GalleryLayout title="ユーザー登録" children={page} />;
