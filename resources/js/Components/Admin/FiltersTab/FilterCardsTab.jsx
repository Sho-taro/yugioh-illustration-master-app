import React from 'react';
import { useState, useEffect, useRef } from 'react';
import axios, { isCancel, AxiosError } from 'axios';

import CardNameFilter from './CardNameFilter';
import MonsterCardFilter from './MonsterCardFilter';
import SpellCardFilter from './SpellCardFilter';
import TrapCardFilter from './TrapCardFilter';
import CardPeriodFilter from './CardPeriodFilter';

function FilterCardsTab({ apiMode, routeName, isCardPeriodFilterOn, filters, releasedCardsNum }) {
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
			const res = await axios.post(route('gallery.filteredcardsnum'), {
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
			<div className="mb-6 text-left">
				<label htmlFor="target-select" className="mr-4 text-xl font-bold">
				対象
				</label>
				<select
					name="target-select"
					id="target-select"
					onChange={e => handleChange(e)}
					value={target}>
					<option value="all">全て（モンスター・魔法・罠）</option>
					<option value="monster">モンスターのみ</option>
					<option value="spell">魔法のみ</option>
					<option value="trap">罠のみ</option>
				</select>
			</div>
			<div className="text-left">
				<form action={route(routeName)} method="GET" ref={filterForm}>
					<input type="hidden" name="access-type" value="filtering" />
					<input type="hidden" name="target" value={target} />
					<CardNameFilter filters={filters} />
					<div className="flex justify-start">
						<div className="w-2/5 flex flex-col">
							{target === 'monster' && (
								<div>
									<div className="py-2 flex justify-between">
										<p className="text-xl font-bold active:scale-90">
											<a
												className="text-white underline hover:text-gray-300"
												href="#monster-frame-types">
												種類
											</a>
										</p>
										<p className="mr-4">{'>'}</p>
									</div>
									<div className="py-2 flex justify-between">
										<p className="text-xl font-bold active:scale-90">
											<a
												className="text-white underline hover:text-gray-300"
												href="#races">
												種族
											</a>
										</p>
										<p className="mr-4">{'>'}</p>
									</div>
									<div className="py-2 flex justify-between">
										<p className="text-xl font-bold active:scale-90">
											<a
												className="text-white underline hover:text-gray-300"
												href="#attributes">
												属性
											</a>
										</p>
										<p className="mr-4">{'>'}</p>
									</div>
									<div className="py-2 flex justify-between">
										<p className="text-xl font-bold active:scale-90">
											<a
												className="text-white underline hover:text-gray-300"
												href="#level-or-ranks">
												レベル/ランク
											</a>
										</p>
										<p className="mr-4">{'>'}</p>
									</div>
									<div className="py-2 flex justify-between">
										<p className="text-xl font-bold active:scale-90">
											<a
												className="text-white underline hover:text-gray-300"
												href="#link-values">
												Link-
											</a>
										</p>
										<p className="mr-4">{'>'}</p>
									</div>
								</div>
							)}
							{target === 'spell' && (
								<div>
									<div className="py-2 flex justify-between">
										<p className="text-xl font-bold active:scale-90">
											<a
												className="text-white underline hover:text-gray-300"
												href="#spell-frame-types">
												種類
											</a>
										</p>
										<p className="mr-4">{'>'}</p>
									</div>
								</div>
							)}
							{target === 'trap' && (
								<div>
									<div className="py-2 flex justify-between">
										<p className="text-xl font-bold active:scale-90">
											<a
												className="text-white underline hover:text-gray-300"
												href="#trap-frame-types">
												種類
											</a>
										</p>
										<p className="mr-4">{'>'}</p>
									</div>
								</div>
							)}
							<div className="py-2 flex justify-between">
								<p className="text-xl font-bold active:scale-90">
									<a
										className="text-white underline hover:text-gray-300"
										href="#periods">
										初登場時期
									</a>
								</p>
								<p className="mr-4">{'>'}</p>
							</div>
						</div>
						<div className="py-2 w-3/5 max-h-60vh overflow-y-scroll bg-gray-950 rounded-md">
							{target === 'monster' && <MonsterCardFilter filters={filters} />}
							{target === 'spell' && <SpellCardFilter filters={filters} />}
							{target === 'trap' && <TrapCardFilter filters={filters} />}
							{isCardPeriodFilterOn && <CardPeriodFilter filters={filters} />}
						</div>
					</div>

					<div className="w-1/3 bg-color-layout flex justify-between items-center absolute bottom-6">
						{apiMode === 'on' && (
							<p>
								ヒット枚数:{' '}
								<span className="font-bold text-2xl">{filterResult}</span> 枚 （全
								{releasedCardsNum}枚中）
							</p>
						)}
						<button className="block px-4 py-2 shiny-button">この条件で絞り込む</button>
					</div>
				</form>
			</div>
		</>
  );
}

export default FilterCardsTab