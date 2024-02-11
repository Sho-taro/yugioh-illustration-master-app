import { useEffect } from 'react';
import Checkbox from '@/Components/Checkbox';
import GuestLayout from '@/Layouts/GuestLayout';
import InputError from '@/Components/InputError';
import InputLabel from '@/Components/InputLabel';
import PrimaryButton from '@/Components/PrimaryButton';
import TextInput from '@/Components/TextInput';
import { Link, useForm } from '@inertiajs/react';
import GalleryLayout from '@/Layouts/GalleryLayout';

import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import TooltipBackButton from '@/Components/MaterialUI/TooltipBackButton';

export default function Login({ status, canResetPassword }) {
	const { data, setData, post, processing, errors, reset } = useForm({
		email: '',
		password: '',
		remember: false,
	});

	useEffect(() => {
		return () => {
			reset('password');
		};
	}, []);

	const handleBtnClick = () => {
		post(route('login'));
	};

	return (
		<div className="min-h-screen flex justify-center items-center">
			<div className="w-1/4 mx-auto">
				{status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}
				<TooltipBackButton href={route('index')} title="Topページへ戻る" />
				<Typography
					variant="h5"
					className="text-center"
					sx={{ mt: '1.5rem', mb: '0.5rem', fontWeight: '700' }}>
					ログイン
				</Typography>
				<form>
					<div>
						<InputLabel htmlFor="email" value="メールアドレス" className="text-white" />

						<TextInput
							id="email"
							type="email"
							name="email"
							value={data.email}
							className="mt-1 block w-full"
							autoComplete="username"
							isFocused={true}
							onChange={e => setData('email', e.target.value)}
						/>

						<InputError
							message={errors.email}
							className="mt-2"
							style={{ color: 'red' }}
						/>
					</div>

					<div className="mt-4">
						<InputLabel htmlFor="password" value="パスワード" className="text-white" />

						<TextInput
							id="password"
							type="password"
							name="password"
							value={data.password}
							className="mt-1 block w-full"
							autoComplete="current-password"
							onChange={e => setData('password', e.target.value)}
						/>

						<InputError
							message={errors.password}
							className="mt-2"
							style={{ color: 'red' }}
						/>
					</div>

					<div className="block mt-4 mb-2">
						<label className="flex items-center">
							<Checkbox
								name="remember"
								checked={data.remember}
								onChange={e => setData('remember', e.target.checked)}
							/>
							<span className="ml-2 text-sm text-gray-500">
								ログイン状態を保持する
							</span>
						</label>
					</div>

					<div className="flex flex-col items-center justify-center mt-12">
						<Button
							variant="contained"
							color="error"
							size="large"
							disableRipple
							disabled={processing}
							onClick={handleBtnClick}>
							ログイン
						</Button>
						<Link
							href={route('register')}
							className="block mt-6 text-gray-500 underline">
							まだ登録がお済みでない方はこちら
						</Link>
						{/* {canResetPassword && (
							<Link
								href={route('password.request')}
								className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
								パスワードをお忘れですか？
							</Link>
						)} */}
					</div>
				</form>
			</div>
		</div>
		// <GuestLayout>
		// 	<Head title="ログイン" />

		// 	{status && <div className="mb-4 font-medium text-sm text-green-600">{status}</div>}

		// <form onSubmit={submit}>
		// 	<div>
		// 		<InputLabel htmlFor="email" value="メールアドレス" />

		// 		<TextInput
		// 			id="email"
		// 			type="email"
		// 			name="email"
		// 			value={data.email}
		// 			className="mt-1 block w-full"
		// 			autoComplete="username"
		// 			isFocused={true}
		// 			onChange={e => setData('email', e.target.value)}
		// 		/>

		// 		<InputError message={errors.email} className="mt-2" />
		// 	</div>

		// 	<div className="mt-4">
		// 		<InputLabel htmlFor="password" value="パスワード" />

		// 		<TextInput
		// 			id="password"
		// 			type="password"
		// 			name="password"
		// 			value={data.password}
		// 			className="mt-1 block w-full"
		// 			autoComplete="current-password"
		// 			onChange={e => setData('password', e.target.value)}
		// 		/>

		// 		<InputError message={errors.password} className="mt-2" />
		// 	</div>

		// 	<div className="block mt-4 mb-2">
		// 		<label className="flex items-center">
		// 			<Checkbox
		// 				name="remember"
		// 				checked={data.remember}
		// 				onChange={e => setData('remember', e.target.checked)}
		// 			/>
		// 			<span className="ml-2 text-sm text-gray-600">ログイン状態を保持する</span>
		// 		</label>
		// 	</div>
		// 	<Link
		// 		href={route('register')}
		// 		className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
		// 		まだ登録がお済みでない方はこちら
		// 	</Link>

		// 	<div className="flex flex-col items-center justify-center mt-8">
		// 		<PrimaryButton className="" disabled={processing}>
		// 			ログイン
		// 		</PrimaryButton>
		// 		<Link href={route('index')} className="block mt-4 underline">または ログインせずに戻る</Link>
		// 		{/* {canResetPassword && (
		//                   <Link
		//                       href={route('password.request')}
		//                       className="underline text-sm text-gray-600 hover:text-gray-900 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
		//                       パスワードをお忘れですか？
		//                   </Link>
		//               )} */}
		// 	</div>
		// </form>
		// </GuestLayout>
	);
}

Login.layout = page => <GalleryLayout title="ログイン" children={page} />;
