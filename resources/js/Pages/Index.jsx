import React, { useState } from 'react';
import { Link, router } from '@inertiajs/react';
import Header from '@/Components/Header';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
// import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

function Index({ auth }) {
	const handleRandomBtnClick = () => {
		router.get(route('gallery.play.random'));
	};
	const handleFilterBtnClick = () => {
		router.get(route('gallery.setting.filter'));
	};
	const handleMyTagBtnClick = () => {
		router.get(route('gallery.setting.myTag'));
	};
	return (
		<>
			<Header auth={auth} needOnlyLogo={false} />
			<div className="w-4/5 mx-auto text-center">
				<div className="h-screen flex flex-col justify-center">
					<div className="mb-32 flex justify-center">
						<img src="/images/logo.png" alt="ロゴ画像" style={{ width: '36rem' }} />
					</div>
					<Typography variant="h3" component="h2" sx={{ mb: '8rem', fontWeight: '700' }}>
						遊戯王を愛する、
						<ruby>
							決闘者<rt className="text-xs">デュエリスト</rt>
						</ruby>
						へ
					</Typography>
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
					variant="h4"
					component="h3"
					sx={{ mt: '10rem', mb: '2rem', fontWeight: '700' }}>
					選べる３つの遊び方
				</Typography>
				<Typography variant="h6" component="p" sx={{ mb: '2rem' }}>
					利用シーンに最適なモードをお選びいただけます。
				</Typography>
				<div className="mb-20 flex justify-center items-start">
					<div className="w-1/4 p-2 pt-4 text-center bg-gray-800 rounded-md">
						<div className="mb-4 flex justify-center items-center">
							<Typography variant="h6" component="p" sx={{ fontWeight: 700 }}>
								ランダムモード
							</Typography>
							<img
								src="/images/beginner_icon.svg"
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
					<div className="w-1/4 ml-8 p-2 pt-4 text-center bg-gray-800 rounded-md">
						<Typography variant="h6" component="p" sx={{ mb: '1rem', fontWeight: 700 }}>
							絞り込みモード
						</Typography>
						<Typography variant="p" component="p">
							降ってくるカードを絞り込むことができるモードです。
						</Typography>
						<Typography variant="p" component="p">
							カードの種類（モンスター・魔法・罠）や種族、属性、初収録時期など、様々な条件で絞り込むことができます。
						</Typography>
						<div className="mt-6 mb-4 flex justify-center">
							<Button
								variant="contained"
								color="error"
								size="large"
								disableRipple
								onClick={handleFilterBtnClick}
								sx={{ textTransform: 'none' }}>
								絞り込みモードで遊ぶ
							</Button>
						</div>
					</div>
					<div className="w-1/4 ml-8 p-2 pt-4 text-center bg-gray-800 rounded-md">
						<Typography variant="h6" component="p" sx={{ mb: '1rem', fontWeight: 700 }}>
							Myタグモード
						</Typography>
						<Typography variant="p" component="p">
							事前に「Myタグ」を作成し、好きなカードを登録しておきます。
						</Typography>
						<Typography variant="p" component="p">
							「Myタグ」に登録したカードのみ降ってくるモードです。お気に入りのカードやこだわりのカードだけをじっくり楽しみたい方におすすめです。
						</Typography>
						{!auth.user && (
							<Typography variant="p" component="p">
								（
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
								disabled={!auth.user} // 未ログインならdisabled
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
