import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckboxOn';


function SpellCardFilter({filters}) {
  return (
		<div className="mt-2 flex justify-start items-center">
			<p style={{ color: 'rgb(33, 33, 33)' }} className="w-28 text-center">
				種類
			</p>
			<div className="ml-2">
				<label htmlFor="Normal" className="mr-4 select-none cursor-pointer">
					<input
						type="checkbox"
						id="Normal"
						name="play-types[]"
						value="Normal"
						defaultChecked={isCheckboxOn(filters, 'play-types', 'Normal')}
					/>
					通常魔法
				</label>
				<label htmlFor="Field" className="mr-4 select-none cursor-pointer">
					<input
						type="checkbox"
						id="Field"
						name="play-types[]"
						value="Field"
						defaultChecked={isCheckboxOn(filters, 'play-types', 'Field')}
					/>
					フィールド魔法
				</label>
				<label htmlFor="Equip" className="mr-4 select-none cursor-pointer">
					<input
						type="checkbox"
						id="Equip"
						name="play-types[]"
						value="Equip"
						defaultChecked={isCheckboxOn(filters, 'play-types', 'Equip')}
					/>
					装備魔法
				</label>
				<label htmlFor="Continuous" className="mr-4 select-none cursor-pointer">
					<input
						type="checkbox"
						id="Continuous"
						name="play-types[]"
						value="Continuous"
						defaultChecked={isCheckboxOn(filters, 'play-types', 'Continuous')}
					/>
					永続魔法
				</label>
				<label htmlFor="Quick-Play" className="mr-4 select-none cursor-pointer">
					<input
						type="checkbox"
						id="Quick-Play"
						name="play-types[]"
						value="Quick-Play"
						defaultChecked={isCheckboxOn(filters, 'play-types', 'Quick-Play')}
					/>
					速攻魔法
				</label>
				<label htmlFor="Ritual" className="mr-4 select-none cursor-pointer">
					<input
						type="checkbox"
						id="Ritual"
						name="play-types[]"
						value="Ritual"
						defaultChecked={isCheckboxOn(filters, 'play-types', 'Ritual')}
					/>
					儀式魔法
				</label>
			</div>
		</div>
  );
}

export default SpellCardFilter