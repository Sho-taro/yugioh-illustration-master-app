import React from 'react'
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function TrapCardFilter({filters}) {
  return (
		<div id="trap-frame-types" className="mb-4 flex flex-col">
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
				通常罠
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
				永続罠
			</label>
			<label
				htmlFor="Counter"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="Counter"
					name="play-types[]"
					value="Counter"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Counter')}
				/>
				カウンター罠
			</label>
		</div>
  );
}

export default TrapCardFilter