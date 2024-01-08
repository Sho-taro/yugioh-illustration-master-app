import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckboxOn';


function SpellCardFilter({filters}) {
  return (
		<div id="spell-frame-types" className="mb-4 flex flex-col">
			<h3 className="my-2 pl-8 text-xl font-bold">種類</h3>
			<label
				htmlFor="Normal"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="Normal"
					name="play-types[]"
					value="Normal"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Normal')}
				/>
				通常魔法
			</label>
			<label
				htmlFor="Field"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="Field"
					name="play-types[]"
					value="Field"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Field')}
				/>
				フィールド魔法
			</label>
			<label
				htmlFor="Equip"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="Equip"
					name="play-types[]"
					value="Equip"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Equip')}
				/>
				装備魔法
			</label>
			<label
				htmlFor="Continuous"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="Continuous"
					name="play-types[]"
					value="Continuous"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Continuous')}
				/>
				永続魔法
			</label>
			<label
				htmlFor="Quick-Play"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="Quick-Play"
					name="play-types[]"
					value="Quick-Play"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Quick-Play')}
				/>
				速攻魔法
			</label>
			<label
				htmlFor="Ritual"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
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
  );
}

export default SpellCardFilter