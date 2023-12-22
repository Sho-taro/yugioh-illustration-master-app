import React from 'react'
import { useState } from 'react';
import CardNameFilter from './CardNameFilter';
import MonsterCardFilter from './MonsterCardFilter';
import SpellCardFilter from './SpellCardFilter';
import TrapCardFilter from './TrapCardFilter';
import CardPeriodFilter from './CardPeriodFilter';

function FilterCards({ routeName, isCardPeriodFilterOn }) {
	const [target, setTarget] = useState('monster');

	const handleChange = (e) => {
		setTarget(e.target.value);
	}

  return (
		<>
			<details>
				<summary>絞り込み</summary>
				<div className="text-left">
					<label htmlFor="target-select">絞り込みの対象を選択:</label>
					<select name="target-select" id="target-select" onChange={e => handleChange(e)}>
						<option value="monster">モンスター</option>
						<option value="spell">魔法</option>
						<option value="trap">罠</option>
						<option value="all">全て（モンスター・魔法・罠）</option>
					</select>
				</div>
				<div className="text-left">
					<form action={route(routeName)} method="GET">
						<input type="hidden" name="access-type" value="filtering" />
						<input type="hidden" name="target" value={target} />
						<CardNameFilter />
						{target === 'monster' && <MonsterCardFilter />}
						{target === 'spell' && <SpellCardFilter />}
						{target === 'trap' && <TrapCardFilter />}
						{isCardPeriodFilterOn && <CardPeriodFilter />}
						<button className="block mt-4 px-2 py-1 border-2 border-solid border-gray-300 rounded-md">
							この条件で絞り込む
						</button>
					</form>
				</div>
			</details>
		</>
  );
}

export default FilterCards