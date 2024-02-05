import React, { useState } from 'react';
import { Link } from '@inertiajs/react';
import Header from '@/Components/Header';
import Layout from '@/Layouts/Layout';

import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';

function Index({ auth }) {
	return (
		<>
			<Header auth={auth} needOnlyLogo={false} />
			<div className="w-3/5 mx-auto">
				<Typography variant="h4" component="h2" sx={{ textAlign: 'center', my: '2rem' }}>
					遊戯王 Illustration Master へようこそ
				</Typography>
				<Typography variant="p" component="p" sx={{ textAlign: 'center' }}>
					遊戯王 Illustration
					Masterは、遊戯王カードのイラストが次々と流れてくるアプリです。
				</Typography>
				<Typography variant="p" component="p" sx={{ textAlign: 'center' }}>
					イラストを眺めながらデッキ構築を考えたり、作業用デスクトップとして使用したり、
				</Typography>
				<Typography variant="p" component="p" sx={{ textAlign: 'center' }}>
					いつでも遊戯王の世界感を楽しむことができます。
				</Typography>
				<div className="my-4 flex justify-center">
					<img
						src="/images/gallery.png"
						alt="galleryイメージ"
						className="w-2/3 border border-solid border-white rounded-md"
					/>
					{/* <img src="/images/laptop.jpg" alt="laptop" /> */}
				</div>
				<Typography variant="h5" component="h3" sx={{ textAlign: 'center', mt: '4rem' }}>
					ー 遊び方 ー
				</Typography>
				<div className="mb-8 flex justify-center">
					<div className="w-2/5">
						<Typography variant="h6" component="h4" sx={{ textAlign: 'center' }}>
							気軽に楽しむなら
						</Typography>
						<div className="flex justify-center">
							<ArrowDropDownRoundedIcon fontSize="large" sx={{ color: 'gray' }} />
						</div>
						<div className="p-2 text-center bg-gray-800 rounded-md">
							<Typography
								variant="h6"
								component="p"
								sx={{ textAlign: 'center', fontWeight: 700 }}>
								ランダムモード
							</Typography>
							<Typography variant="p" component="p">
								このモードでは、ランダムに選ばれたイラストたちが登場します。絞り込み条件を指定すれば、登場するイラストを絞り込むこともできます。
							</Typography>
							<Typography variant="p" component="p">
								（ユーザー登録・ログインは不要です）
							</Typography>
							<div className="mt-6 mb-4 flex justify-center">
								<Button
									variant="contained"
									color="error"
									size="large"
									disableRipple
									sx={{ textTransform: 'none' }}>
									<Link href={route('gallery.randomMode')}>
										<Typography>ランダムモードで遊ぶ</Typography>
									</Link>
								</Button>
							</div>
						</div>
					</div>
					<Divider
						orientation="vertical"
						variant="middle"
						flexItem
						sx={{ borderColor: 'gray', mx: '2rem' }}
					/>
					<div className="w-2/5">
						<Typography variant="h6" component="h4" sx={{ textAlign: 'center' }}>
							じっくり楽しむなら
						</Typography>
						<div className="flex justify-center">
							<ArrowDropDownRoundedIcon fontSize="large" sx={{ color: 'gray' }} />
						</div>
						<div className="p-2 text-center bg-gray-800 rounded-md">
							<Typography
								variant="h6"
								component="p"
								sx={{ textAlign: 'center', fontWeight: 700 }}>
								MyTagモード
							</Typography>
							<Typography variant="p" component="p">
								事前にMyTagを作成し、お気に入りのイラストを登録しておきます。
							</Typography>
							<Typography variant="p" component="p">
								このモードでは、MyTagに登録したイラストのみ登場します。そのため、お気に入りのイラストたちをより存分に楽しむことができます。
							</Typography>
							<Typography variant="p" component="p">
								（ユーザー登録・ログインが必要です）
							</Typography>
							<div className="mt-6 mb-4 flex justify-center">
								<Button
									variant="contained"
									color="error"
									size="large"
									disableRipple
									disabled={!auth.user} // 未ログインならdisabled
									sx={{ textTransform: 'none' }}>
									<Link href={route('gallery.myTagMode')}>
										<Typography>MyTagモードで遊ぶ</Typography>
									</Link>
								</Button>
							</div>
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
