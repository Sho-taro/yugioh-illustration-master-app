import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios, { isCancel, AxiosError } from 'axios';

// import CardNameFilter from '@/Components/Admin/Filters/CardNameFilter';
import MonsterCardFilter from '@/Components/Admin/Filters/MonsterCardFilter';
import SpellCardFilter from '@/Components/Admin/Filters/SpellCardFilter';
import TrapCardFilter from '@/Components/Admin/Filters/TrapCardFilter';
import CardPeriodFilter from '@/Components/Admin/Filters/CardPeriodFilter';

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import Typography from '@mui/material/Typography';
// import FormHelperText from '@mui/material/FormHelperText';

import CardNameFilterMUI from '@/Components/MaterialUI/Filter/CardNameFilterMUI';
import MonsterCardFilterMUI from '@/Components/MaterialUI/Filter/MonsterCardFilterMUI';

function Filter({
	apiMode,
	routeName,
	routePath,
	isCardPeriodFilterOn,
	filters,
	releasedCardsNum,
}) {
	const [target, setTarget] = useState('all');
	const [filterResult, setFilterResult] = useState(0);
	const filterForm = useRef(null);

	// formの送信先
	let formAction;
	if (routeName) {
		formAction = route(routeName);
	} else if (routePath) {
		formAction = routePath;
	}

	const handleChange = e => {
		setTarget(e.target.value);
	};

	// formの内容をFormDataオブジェクトを通して取得する関数
	const getFormData = () => {
		const filterFormData = new FormData(filterForm.current);
		const filterFormDataEntries = [...filterFormData.entries()];
		return filterFormDataEntries;
	};
	// axiosを使用してHTTPリクエストを送信
	const getFilterResult = async formData => {
		try {
			const res = await axios.post(route('gallery.filterdcardsnum'), {
				body: formData,
			});
			// console.log(res.data);
			setFilterResult(res.data); // Promiseオブジェクトの[[PromiseResult]]プロパティの内容は今このタイミングでしか参照できない
			return res;
		} catch (err) {
			console.log(err);
		}
	};

	useEffect(() => {
		if (!filters) {
			return;
		} else {
			setTarget(filters.target);
		}
	}, []);
	useEffect(() => {
		if (apiMode !== 'on') return;
		// form内の全てのinput要素にchangeイベントハンドラーを設定する
		const filterFormElements = filterForm.current.elements;
		for (let i = 0; i < filterFormElements.length; i++) {
			if (filterFormElements[i].nodeName === 'BUTTON') {
				continue;
			} else if (filterFormElements[i].nodeName === 'INPUT') {
				filterFormElements[i].onchange = () => {
					// AJAXの処理
					const filterFormDataEntries = getFormData();
					const res = getFilterResult(filterFormDataEntries);
					// console.log(res);
				};
			}
		}
		getFilterResult(getFormData());
	}, [target]);

	return (
		<>
			{/* <div className="text-left">
				<label htmlFor="target-select" className="mr-4">
					絞り込み対象
				</label>
				<select
					name="target-select"
					id="target-select"
					onChange={e => handleChange(e)}
					value={target}>
					<option value="all">全て（モンスター・魔法・罠）</option>
					<option value="monster">モンスター</option>
					<option value="spell">魔法</option>
					<option value="trap">罠</option>
				</select>
			</div> */}

			<div className="p-2 bg-white">
				<FormControl variant="filled" sx={{ mb: '1rem', minWidth: '16rem' }}>
					<InputLabel id="select-label">カードの種類</InputLabel>
					<Select
						labelId="select-label"
						id="select"
						value={target}
						onChange={e => handleChange(e)}
						inputProps={{ 'aria-label': 'Without label' }}>
						<MenuItem value="all">全て（モンスター・魔法・罠）</MenuItem>
						<MenuItem value="monster">モンスターのみ</MenuItem>
						<MenuItem value="spell">魔法のみ</MenuItem>
						<MenuItem value="trap">罠のみ</MenuItem>
					</Select>
					{/* <FormHelperText component="label">必須</FormHelperText> */}
				</FormControl>
				<form action={formAction} method="GET" ref={filterForm}>
					<input type="hidden" name="access-type" value="filtering" />
					<input type="hidden" name="target" value={target} />
					<CardNameFilterMUI filters={filters} />
					{target === 'monster' && <MonsterCardFilterMUI filters={filters} />}
				</form>
			</div>

			<div className="text-left">
				<form action={formAction} method="GET" ref={filterForm}>
					{/* <input type="hidden" name="access-type" value="filtering" />
					<input type="hidden" name="target" value={target} /> */}
					{/* <CardNameFilter filters={filters} /> */}
					{/* {target === 'monster' && <MonsterCardFilter filters={filters} />} */}
					{target === 'spell' && <SpellCardFilter filters={filters} />}
					{target === 'trap' && <TrapCardFilter filters={filters} />}
					{isCardPeriodFilterOn && <CardPeriodFilter filters={filters} />}
					<div className="flex justify-between items-center mt-4">
						{apiMode === 'on' && (
							<p style={{ color: 'black' }}>
								全{releasedCardsNum}枚中{' '}
								<span className="font-bold text-xl">{filterResult}</span>{' '}
								枚のカードがヒットしました
							</p>
						)}
						<button className="block ml-4 px-2 py-1 border-2 border-solid border-gray-300 rounded-md">
							この条件で絞り込む
						</button>
					</div>
				</form>
			</div>
		</>
	);
}

export default Filter;
