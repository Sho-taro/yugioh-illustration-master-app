import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckBoxOn';


function SpellCardFilter({filters}) {
  return (
		<div className="mt-2 flex justify-start items-center">
			<p className="w-28 text-center">種類</p>
			<div className="ml-2">
				<input
					type="checkbox"
					id="Normal"
					name="play-types[]"
					value="Normal"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Normal')}
				/>
				<label htmlFor="Normal" className="mr-4 select-none">
					通常魔法
				</label>
				<input
					type="checkbox"
					id="Field"
					name="play-types[]"
					value="Field"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Field')}
				/>
				<label htmlFor="Field" className="mr-4 select-none">
					フィールド魔法
				</label>
				<input
					type="checkbox"
					id="Equip"
					name="play-types[]"
					value="Equip"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Equip')}
				/>
				<label htmlFor="Equip" className="mr-4 select-none">
					装備魔法
				</label>
				<input
					type="checkbox"
					id="Continuous"
					name="play-types[]"
					value="Continuous"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Continuous')}
				/>
				<label htmlFor="Continuous" className="mr-4 select-none">
					永続魔法
				</label>
				<input
					type="checkbox"
					id="Quick-Play"
					name="play-types[]"
					value="Quick-Play"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Quick-Play')}
				/>
				<label htmlFor="Quick-Play" className="mr-4 select-none">
					速攻魔法
				</label>
				<input
					type="checkbox"
					id="Ritual"
					name="play-types[]"
					value="Ritual"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Ritual')}
				/>
				<label htmlFor="Ritual" className="mr-4 select-none">
					儀式魔法
				</label>
			</div>
		</div>
  );
}

export default SpellCardFilter