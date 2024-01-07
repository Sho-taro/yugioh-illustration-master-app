import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios, { isCancel, AxiosError } from 'axios';

import CardNameFilter from './CardNameFilter';
import MonsterCardFilter from './MonsterCardFilter';
import SpellCardFilter from './SpellCardFilter';
import TrapCardFilter from './TrapCardFilter';
import CardPeriodFilter from './CardPeriodFilter';

function FilterCards({ apiMode, routeName, isCardPeriodFilterOn, filters, releasedCardsNum }) {
	const [target, setTarget] = useState('all');
	const [filterResult, setFilterResult] = useState(0);
	const filterForm = useRef(null);
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
			setFilterResult(res.data);   // Promiseオブジェクトの[[PromiseResult]]プロパティの内容は今このタイミングでしか参照できない
			return res;
		} catch (err) {
			console.log(err)
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
			<div className="text-left">
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
			</div>
			<div className="text-left">
				<form action={route(routeName)} method="GET" ref={filterForm}>
					<input type="hidden" name="access-type" value="filtering" />
					<input type="hidden" name="target" value={target} />
					<CardNameFilter filters={filters} />
					{target === 'monster' && <MonsterCardFilter filters={filters} />}
					{target === 'spell' && <SpellCardFilter filters={filters} />}
					{target === 'trap' && <TrapCardFilter filters={filters} />}
					{isCardPeriodFilterOn && <CardPeriodFilter filters={filters} />}
					<div className="flex justify-between items-end mt-4">
						{apiMode === 'on' && (
							<p style={{ color: 'black' }}>
								全{releasedCardsNum}枚中{' '}
								<span className="font-bold">{filterResult}</span>{' '}
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

export default FilterCards;
