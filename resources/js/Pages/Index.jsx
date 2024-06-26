import React, { useState, useEffect } from 'react';
import { Link, router } from '@inertiajs/react';
import Header from '@/Components/Header';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import HeaderSP from '@/Components/HeaderSP';
// import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

function Index({ auth }) {
	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	const handleRandomBtnClick = () => {
		router.get(route('gallery.play.random'));
	};
	const handleFilterBtnClick = () => {
		router.get(route('gallery.setting.filter'));
	};
	const handleMyTagBtnClick = () => {
		router.get(route('gallery.setting.myTag'));
	};

	useEffect(() => {
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
			// console.log(window.innerWidth);
		};
		window.addEventListener('resize', handleResize);

		const clearUpFnc = () => {
			window.removeEventListener('resize', handleResize);
		};

		return clearUpFnc;
	}, []);

	return (
		<>
			{windowWidth > 640 ? <Header auth={auth} needOnlyLogo={false} /> : <HeaderSP />}
			<div className="w-4/5 mx-auto text-center">
				<div className="h-screen flex flex-col justify-center">
					<Typography
						variant={windowWidth > 640 ? 'h5' : 'h7'}
						component="h2"
						sx={{ mb: '4rem', fontWeight: '700' }}>
						遊戯王を愛する デュエリストへ
					</Typography>
					<div className="mb-32 flex justify-center">
						<img src="/images/logo.png" alt="ロゴ画像" style={{ width: '36rem' }} />
					</div>
					{/* <Typography variant="h3" component="h2" sx={{ mb: '8rem', fontWeight: '700' }}>
						遊戯王を愛する、
						<ruby>
							決闘者<rt className="text-xs">デュエリスト</rt>
						</ruby>
						へ
					</Typography> */}
				</div>
				<Divider variant="middle" sx={{ borderColor: 'gray' }} />
				<div className="mt-40 mb-12 flex justify-center">
					<img
						src="/images/gallery07.png"
						alt="galleryイメージ"
						className="rounded-md"
						style={{ width: '48rem' }}
					/>
					{/* <img src="/images/laptop.jpg" alt="laptop" /> */}
					<div className="w-12"></div>
				</div>
				<Typography variant="h6" component="p">
					<Typography variant="h6" component="span" sx={{ fontWeight: '700' }}>
						ILLUST. FALL
					</Typography>
					（イラストフォール）は、
				</Typography>
				<Typography variant="h6" component="p">
					<Typography variant="h6" component="span" sx={{ fontWeight: '700' }}>
						遊戯王カードのイラストが次々と降ってくる鑑賞用アプリ
					</Typography>
					です。
				</Typography>
				<div className="mt-40 mb-12 flex justify-center">
					<img
						src="/images/use_case.png"
						alt="本アプリの使用例 イラスト"
						style={{ width: '28rem' }}
					/>
				</div>
				<Typography variant="h6" component="p">
					イラストを眺めながらデッキ構築を考えたり、作業用デスクトップとして使用したり、
				</Typography>
				<Typography variant="h6" component="p">
					いつでも遊戯王の世界感を楽しむことができます。
				</Typography>
				<Divider variant="middle" sx={{ mt: '10rem', borderColor: 'gray' }} />
				<Typography
					variant={windowWidth >= 640 ? 'h4' : 'h5'}
					component="h3"
					sx={{ mt: '10rem', mb: '2rem', fontWeight: '700' }}>
					選べる３つの遊び方
				</Typography>
				<Typography variant="h6" component="p" sx={{ mb: '2rem' }}>
					利用シーンに最適なモードをお選びいただけます。
				</Typography>
				<div className="mb-20 flex flex-col items-center lg:flex-row lg:justify-around lg:items-start">
					<div className="p-2 pt-4 mb-8 lg:mb-0 w-full lg:w-3/10 text-center bg-gray-800 rounded-md">
						<div className="mb-4 flex justify-center items-center">
							<Typography variant="h6" component="p" sx={{ fontWeight: 700 }}>
								ランダムモード
							</Typography>
							<img
								src="/images/beginner_icon.png"
								alt="初心者マーク"
								className="w-5 ml-1"
							/>
						</div>
						<Typography variant="p" component="p">
							降ってくるカードはランダムに選ばれます。
						</Typography>
						<Typography variant="p" component="p">
							１クリックですぐに遊ぶことができ、初めて利用する方や気軽に楽しみたい方におすすめです。
						</Typography>
						<div className="mt-6 mb-4 flex justify-center">
							<Button
								variant="contained"
								color="error"
								size="large"
								disableRipple
								onClick={handleRandomBtnClick}
								sx={{ textTransform: 'none' }}>
								ランダムモードで遊ぶ
							</Button>
						</div>
					</div>
					<div className="p-2 pt-4 mb-8 lg:mb-0 w-full lg:w-3/10 text-center bg-gray-800 rounded-md">
						<Typography variant="h6" component="p" sx={{ mb: '1rem', fontWeight: 700 }}>
							絞り込みモード
						</Typography>
						<Typography variant="p" component="p">
							降ってくるカードを絞り込むことができるモードです。
						</Typography>
						<Typography variant="p" component="p">
							カードの種類（モンスター・魔法・罠）や種族、属性、初収録時期など、様々な条件で絞り込むことができます。
						</Typography>
						{windowWidth <= 640 && (
							<Typography
								variant="p"
								component="p"
								sx={{ mt: '0.5rem', fontSize: '0.8rem' }}>
								（
								※スマートフォンからはご利用いただけません。画面の大きいPCやタブレットからご利用下さい。）
							</Typography>
						)}
						<div className="mt-6 mb-4 flex justify-center">
							<Button
								variant="contained"
								color="error"
								size="large"
								disableRipple
								disabled={windowWidth <= 640} // スマートフォンからはdisabled
								onClick={handleFilterBtnClick}
								sx={{ textTransform: 'none' }}>
								絞り込みモードで遊ぶ
							</Button>
						</div>
					</div>
					<div className="p-2 pt-4 mb-8 lg:mb-0 w-full lg:w-3/10 text-center bg-gray-800 rounded-md">
						<Typography variant="h6" component="p" sx={{ mb: '1rem', fontWeight: 700 }}>
							Myタグモード
						</Typography>
						<Typography variant="p" component="p">
							事前に「Myタグ」を作成し、好きなカードを登録しておきます。
						</Typography>
						<Typography variant="p" component="p">
							「Myタグ」に登録したカードのみ降ってくるモードです。お気に入りのカードやこだわりのカードだけをじっくり楽しみたい方におすすめです。
						</Typography>
						{windowWidth <= 640 && (
							<Typography
								variant="p"
								component="p"
								sx={{ mt: '0.5rem', fontSize: '0.8rem' }}>
								（
								※スマートフォンからはご利用いただけません。画面の大きいPCやタブレットからご利用下さい。）
							</Typography>
						)}
						{!auth.user && (
							<Typography
								variant="p"
								component="p"
								sx={{ mt: '0.5rem', fontSize: '0.8rem' }}>
								（ ※
								<Link
									href={route('register')}
									className="text-white underline hover:text-gray-400">
									ユーザー登録
								</Link>
								・
								<Link
									href={route('login')}
									className="text-white underline  hover:text-gray-400">
									ログイン
								</Link>
								が必要です）
							</Typography>
						)}
						<div className="mt-6 mb-4 flex justify-center">
							<Button
								variant="contained"
								color="error"
								size="large"
								disableRipple
								disabled={windowWidth <= 640 || !auth.user} // スマートフォンまたは未ログインならdisabled
								onClick={handleMyTagBtnClick}
								sx={{ textTransform: 'none' }}>
								Myタグモードで遊ぶ
							</Button>
						</div>
					</div>
				</div>
			</div>
		</>
	);
}

// Persistent Layoutsの設定
Index.layout = page => <Layout title="トップページ" children={page} />;

export default Index;
