import React from 'react';
import { getCardInfoUrl } from '../../utils/getCardInfoUrl';
// import './css/CardList.css';

function CardList({ auth, cards, showModal, showingModal }) {
	// imgのclassName
	let imgClassName;
	if (showingModal) {
		// モーダルウィンドウを表示している間は、カードリストの画像を選択できないようにする
		imgClassName = 'w-24 h-24 cursor-pointer hover:opacity-50 pointer-events-none';
	} else {
		imgClassName = 'w-24 h-24 cursor-pointer hover:opacity-50';
	}

  return (
		<>
			<h2 className="my-4 text-xl sm:text-3xl font-bold">Card list</h2>
			<ul className="card-list-ul">
				{cards.map((card, i) => (
					<li key={card.id} className="card-list-li">
						<div className="index-container">
							<p>{i + 1}</p>
						</div>
						<div className="w-full flex justify-between py-4 pl-5 pr-1 sm:pl-8 sm:pr-4">
							<div className="flex flex-start flex-col sm:flex-row">
								<img
									id={i}
									src={`./images/card-images/${card.pack_name}-${card.list_number}.jpg`}
									alt={card.name_en}
									onClick={e => showModal(e)}
									className={imgClassName}
									// ↓ マウスの右クリックをできなくする
									onContextMenu={e => e.preventDefault()}
									onMouseDown={e => e.preventDefault()}
								/>
								<div className="sm:ml-4">
									<div className="mb-2">
										<p className="text-sm font-bold text-start sm:text-base">
											{card.name_ja}
										</p>
										<p className="text-xs text-start">
											<span className="text-gray">{card.name_ja_kana}</span>
										</p>
									</div>
									<img src={`/images/frame-type-white/${card.frame_type}.png`} alt="フレームタイプ" className="w-12" />
									<p className="text-xs text-start mt-2">
										<a
											href={getCardInfoUrl(card)}
											target="_blank"
											rel="noreferrer noopener"
											className="card-detail-anchor text-blue-700 relative">
											カード詳細
										</a>
									</p>
								</div>
							</div>
							<div className="download-container">
								<div>
									{auth.user !== null && (
										<a
											href={`./images/card-images/${card.pack_name}-${card.list_number}.jpg`}
											download={`${card.name_en}`}>
											<img
												src="/images/download.svg"
												alt="イラストダウンロード"
											/>
										</a>
									)}
								</div>
							</div>
						</div>
					</li>
				))}
			</ul>
			{!auth.user && (
				<div>
					<p className="text-left text-xs text-gray-500">
						ログインすると、次回からイラスト画像をダウンロードできます（完全無料）
					</p>
					<p className="text-left text-xs text-gray-500">
						⇒<a href={route('login')}>ログイン</a>または
						<a href={route('register')}>新規登録</a>
					</p>
				</div>
			)}
		</>
  );
}

export default CardList