import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios, { isCancel, AxiosError } from 'axios';
import { router } from '@inertiajs/react';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import SearchIcon from '@mui/icons-material/Search';
// import FormHelperText from '@mui/material/FormHelperText';
import Divider from '@mui/material/Divider';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import Tooltip from '@mui/material/Tooltip';

import CardNameFilterMUI from '@/Components/MaterialUI/Filter/CardNameFilterMUI';
import MonsterCardFilterMUI from '@/Components/MaterialUI/Filter/MonsterCardFilterMUI';
import SpellCardFilterMUI from '@/Components/MaterialUI/Filter/SpellCardFilterMUI';
import TrapCardFilterMUI from '@/Components/MaterialUI/Filter/TrapCardFilterMUI';
import CommonFilterMUI from '@/Components/MaterialUI/Filter/CommonFilterMUI';
import { getTargetJa } from '@/utils/getNameJaFunctions';

function Filter({
	routeName,
	routePath,
	isPeriodFilterOn, // true　または false
	filters,
	apiMode, // 'on' または 'off'
	releasedCardsNum, // apiModeが'on'なら必須
	handleClose, // モーダルウィンドウを閉じる関数（モーダルで使用しない場合、nullでいい）
	buttonValue, // ボタンに表示される文字列。nullの場合、'絞り込む'になる
}) {
	const [filterResult, setFilterResult] = useState(0);

	// フォーム送信用に保持しておくデータ
	const [target, setTarget] = useState(null); // null, 'all', 'monster, 'spell', 'trap'
	const [cardName, setCardName] = useState('');
	const [frameTypes, setFrameTypes] = useState([]);
	const [races, setRaces] = useState([]);
	const [attributes, setAttributes] = useState([]);
	const [levelOrRanks, setLevelOrRanks] = useState([]);
	const [linkValues, setLinkValues] = useState([]);
	const [spellPlayTypes, setSpellPlayTypes] = useState([]);
	const [trapPlayTypes, setTrapPlayTypes] = useState([]);
	const [periods, setPeriods] = useState([]);

	// routerの送信先パス
	let routerURL;
	if (routeName) {
		routerURL = route(routeName);
	}
	if (routePath) {
		routerURL = routePath;
	}

	//targetを設定するボタンのsx
	const targetBtnSx = {
		color: 'white',
		backgroundColor: 'gray',
		textTransform: 'none',
		mb: '0.4rem',
	};
	// targetを表示するtypographyのsxを取得する関数
	const getTargetTypoSx = target => {
		let bgColor;
		switch (target) {
			case 'all':
				bgColor = 'rgba(140, 140, 140, 1)';
				break;
			case 'monster':
				bgColor = 'rgba(237, 206, 119, 1)';
				break;
			case 'spell':
				bgColor = 'rgba(43, 140, 45, 1)';
				break;
			case 'trap':
				bgColor = 'rgba(130, 30, 62, 1)';
				break;
			default:
				bgColor = 'white';
		}
		const targetTypoSx = {
			ml: '0.5rem',
			px: '1rem',
			py: '0.25rem',
			fontSize: '0.8rem',
			fontWeight: '700',
			borderRadius: '1rem',
			// color: 'white',
			backgroundColor: bgColor,
		};
		return targetTypoSx;
	};

	// const handleChange = e => {
	// 	setTarget(e.target.value); // targetを変更
	// 	// すべてのuseStateを初期値に戻す
	// 	setCardName('');
	// 	setFrameTypes([]);
	// 	setRaces([]);
	// 	setAttributes([]);
	// 	setLevelOrRanks([]);
	// 	setLinkValues([]);
	// 	setSpellPlayTypes([]);
	// 	setTrapPlayTypes([]);
	// 	setPeriods([]);
	// };

	// 絞り込みを実行する関数
	const handleSearchButtonClick = () => {
		if (target === 'all') {
			router.get(routerURL, {
				// 絞り込み条件
				'access-type': 'filtering',
				target: target,
				'card-name': cardName,
				periods: periods,
			});
		} else if (target === 'monster') {
			router.get(routerURL, {
				// 絞り込み条件
				'access-type': 'filtering',
				target: target,
				'card-name': cardName,
				'frame-types': frameTypes,
				races: races,
				attributes: attributes,
				'level-or-ranks': levelOrRanks,
				'link-values': linkValues,
				periods: periods,
			});
		} else if (target === 'spell') {
			router.get(routerURL, {
				// 絞り込み条件
				'access-type': 'filtering',
				target: target,
				'card-name': cardName,
				'play-types': spellPlayTypes,
				periods: periods,
			});
		} else if (target === 'trap') {
			router.get(routerURL, {
				// 絞り込み条件
				'access-type': 'filtering',
				target: target,
				'card-name': cardName,
				'play-types': trapPlayTypes,
				periods: periods,
			});
		}
	};
	// targetをクリアする関数（その際、ほかのstateクリアする）
	const clearTarget = () => {
		setTarget(null);
		setCardName('');
		setFrameTypes([]);
		setRaces([]);
		setAttributes([]);
		setLevelOrRanks([]);
		setLinkValues([]);
		setSpellPlayTypes([]);
		setTrapPlayTypes([]);
		setPeriods([]);
	};
	// 絞り込み条件をすべてクリアする関数
	const clearAllFilters = () => {
		router.get(routerURL);
	};

	// XHRで絞り込み条件に合致するカードの枚数を取得する関数
	const getFilterResult = async () => {
		try {
			let filter;
			if (target === 'all') {
				filter = {
					target: target,
					'card-name': cardName,
					periods: periods,
				};
			} else if (target === 'monster') {
				filter = {
					target: target,
					'card-name': cardName,
					'frame-types': frameTypes,
					races: races,
					attributes: attributes,
					'level-or-ranks': levelOrRanks,
					'link-values': linkValues,
					periods: periods,
				};
			} else if (target === 'spell') {
				filter = {
					target: target,
					'card-name': cardName,
					'play-types': spellPlayTypes,
					periods: periods,
				};
			} else if (target === 'trap') {
				filter = {
					target: target,
					'card-name': cardName,
					'play-types': trapPlayTypes,
					periods: periods,
				};
			}
			const res = await axios.post(route('api.filteredCardsNum'), {
				...filter,
			});
			// console.log(res.data);
			setFilterResult(res.data); // Promiseオブジェクトの[[PromiseResult]]プロパティの内容は今このタイミングでしか参照できない
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (!filters) return;
		// 前回の絞り込み条件を再現する
		setTarget(filters.target);
		filters['card-name'] && setCardName(filters['card-name']);
		filters['frame-types'] && setFrameTypes([...filters['frame-types']]);
		filters['races'] && setRaces([...filters['races']]);
		filters['attributes'] && setAttributes([...filters['attributes']]);
		filters['level-or-ranks'] && setLevelOrRanks([...filters['level-or-ranks']]);
		filters['link-values'] && setLinkValues([...filters['link-values']]);
		if (filters.target === 'spell' && filters['play-types']) {
			setSpellPlayTypes([...filters['play-types']]);
		}
		if (filters.target === 'trap' && filters['play-types']) {
			setTrapPlayTypes([...filters['play-types']]);
		}
		filters['periods'] && setPeriods([...filters['periods']]);
	}, [filters]);

	useEffect(() => {
		if (apiMode !== 'on') return;
		if (target === null) return;
		// 現時点での絞り込み条件に何枚のカードが該当するか表示するための処理
		setTimeout(() => {
			// 0.5秒後にXHRを実行することで、useStateの値が空の状態でXHRが実行されてしまう不具合を防ぐ
			getFilterResult();
		}, 500);
	}, [
		target,
		cardName,
		frameTypes,
		races,
		attributes,
		levelOrRanks,
		linkValues,
		spellPlayTypes,
		trapPlayTypes,
		periods,
	]);

	return (
		<>
			<div className="textColorBlack bg-white">
				<Typography variant="h5" component="h2" sx={{ textAlign: 'center', mb: '1.5rem' }}>
					絞り込み
				</Typography>
				<div>
					{/* <div className="flex">
						<Typography variant="p" component="span">
							カードの種類を選択:{' '}
						</Typography>
						<FormControl
							variant="standard"
							sx={{
								mb: '2rem',
								px: '0.5rem',
								py: '0.2rem',
								color: 'white',
								backgroundColor: 'red',
								borderRadius: '1rem',
							}}>
							<Select
								labelId="select-label"
								id="select"
								value={target}
								onChange={e => handleChange(e)}
								sx={{ color: 'white', fontWeight: '700' }}>
								<MenuItem value="all">全て（モンスター・魔法・罠）</MenuItem>
								<MenuItem value="monster">モンスターのみ</MenuItem>
								<MenuItem value="spell">魔法のみ</MenuItem>
								<MenuItem value="trap">罠のみ</MenuItem>
							</Select>
						</FormControl>
					</div> */}
					{target === null && (
						<div className="mt-4 flex flex-col" style={{ width: '25rem' }}>
							<Typography variant="p" component="p" sx={{ mb: '0.5rem' }}>
								絞り込み対象を1つ選択して下さい:
							</Typography>
							<Button
								variant="contained"
								size="large"
								color="error"
								disableRipple
								sx={targetBtnSx}
								onClick={() => setTarget('all')}>
								全て（モンスター・魔法・罠）
							</Button>
							<Button
								variant="contained"
								size="large"
								color="error"
								disableRipple
								sx={targetBtnSx}
								onClick={() => setTarget('monster')}>
								モンスターのみ
							</Button>
							<Button
								variant="contained"
								size="large"
								color="error"
								disableRipple
								sx={targetBtnSx}
								onClick={() => setTarget('spell')}>
								魔法のみ
							</Button>
							<Button
								variant="contained"
								size="large"
								color="error"
								disableRipple
								sx={targetBtnSx}
								onClick={() => setTarget('trap')}>
								罠のみ
							</Button>
							{/* ↓ handleCloseがpropで渡されている（＝filterをモーダルで使用している）なら、キャンセルボタンを表示 */}
							{handleClose && (
								<Button
									variant="text"
									size="large"
									color="error"
									disableRipple
									sx={{ textTransform: 'none', mt: '2rem' }}
									onClick={handleClose}>
									キャンセル
								</Button>
							)}
						</div>
					)}
					{target !== null && (
						<div>
							<Tooltip title="戻る" arrow>
								<div
									className="mb-4 w-fit rounded-full hover:bg-gray-100"
									onClick={() => clearTarget()}>
									<KeyboardArrowLeftRoundedIcon
										fontSize="large"
										sx={{ color: 'gray' }}
									/>
								</div>
							</Tooltip>
							<div className="flex items-center mb-4">
								<Typography variant="p" component="p">
									対象:
								</Typography>
								<Typography
									variant="p"
									component="p"
									sx={getTargetTypoSx(target)}
									style={{ color: 'white' }}>
									{getTargetJa(target)}
								</Typography>
							</div>

							<div className="mb-16 bg-gray-100 rounded-md">
								{/* <div className="mb-12 w-9/10 ml-4 pl-2 border-l-2 border-gray-200"> */}
								<CardNameFilterMUI
									filters={filters}
									cardName={cardName}
									setCardName={setCardName}
								/>
								{target === 'monster' && (
									<MonsterCardFilterMUI
										filters={filters}
										frameTypes={frameTypes}
										setFrameTypes={setFrameTypes}
										races={races}
										setRaces={setRaces}
										attributes={attributes}
										setAttributes={setAttributes}
										levelOrRanks={levelOrRanks}
										setLevelOrRanks={setLevelOrRanks}
										linkValues={linkValues}
										setLinkValues={setLinkValues}
									/>
								)}
								{target === 'spell' && (
									<SpellCardFilterMUI
										filters={filters}
										spellPlayTypes={spellPlayTypes}
										setSpellPlayTypes={setSpellPlayTypes}
									/>
								)}
								{target === 'trap' && (
									<TrapCardFilterMUI
										filters={filters}
										trapPlayTypes={trapPlayTypes}
										setTrapPlayTypes={setTrapPlayTypes}
									/>
								)}
								{isPeriodFilterOn && (
									<CommonFilterMUI
										filters={filters}
										periods={periods}
										setPeriods={setPeriods}
									/>
								)}
							</div>
							<div className="flex flex-col">
								{apiMode === 'on' && (
									<p style={{ color: 'black' }} className="mb-4">
										全{releasedCardsNum}枚中{' '}
										<span className="font-bold text-xl">{filterResult}</span> 枚
										ヒット!
									</p>
								)}
								<Button
									variant="contained"
									size="large"
									color="error"
									disableRipple
									startIcon={<SearchIcon />}
									sx={{ color: 'white', textTransform: 'none', mb: '1rem' }}
									onClick={() => handleSearchButtonClick()}>
									{buttonValue ? buttonValue : '絞り込む'}
								</Button>
								{handleClose && (
									<div className="flex flex-col">
										<Divider
											sx={{
												borderColor: 'rgba(200, 200, 200, 1)',
												mb: '0.4rem',
											}}
										/>
										<Button
											variant="text"
											size="large"
											color="info"
											disableRipple
											sx={{ textTransform: 'none' }}
											onClick={clearAllFilters}>
											全ての絞り込み条件をリセット
										</Button>
									</div>
								)}
							</div>
						</div>
					)}
				</div>
			</div>
		</>
	);
}

export default Filter;
