import React from 'react';
import { getCardInfoUrl } from '../../utils/getCardInfoUrl';
// import './css/CardList.css';

function CardList({ auth, cards, showModal }) {
  return (
		<>
			<h2 className="my-2 text-xl sm:text-3xl font-bold">Card list</h2>
			<ul className="card-list-ul">
				{cards.map((card, i) => (
					<li key={card.id} className="card-list-li">
						<div className="index-container">
							<p>{i + 1}</p>
						</div>
						<div className="main-container">
							<div className="flex flex-start flex-col sm:flex-row">
								<img
									id={i}
									src={`./images/card-images/${card.pack_name}-${card.list_number}.jpg`}
									alt={card.name_en}
									onClick={e => showModal(e)}
									className="w-24 h-auto hover:opacity-50"
									onContextMenu={e => e.preventDefault()}
									onMouseDown={e => e.preventDefault()}
								/>
								<div className="sm:ml-4">
									<p className="text-xs text-gray-500 text-start">
										{card.name_ja_kana}
									</p>
									<p className="text-sm font-bold text-start sm:text-base">
										{card.name_ja}
									</p>
									{/* <p>
										<span>{card.frame_type}</span>
									</p> */}
									<p className="text-xs text-start">
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
					<p className="text-left text-xs text-gray-500">ログインすると、次回からイラスト画像をダウンロードできます（完全無料）</p>
					<p className="text-left text-xs text-gray-500">⇒
						<a href="http://yugiohim.com/login">ログイン</a>または
						<a href="http://yugiohim.com/register">新規登録</a>
					</p>
				</div>
			)}
		</>
  );
}

export default CardList