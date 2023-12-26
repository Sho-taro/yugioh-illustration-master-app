import React from 'react'
import { isCheckboxOn } from '@/utils/isCheckBoxOn';

function TrapCardFilter({filters}) {
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
					通常罠
				</label>
				<input
					type="checkbox"
					id="Continuous"
					name="play-types[]"
					value="Continuous"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Continuous')}
				/>
				<label htmlFor="Continuous" className="mr-4 select-none">
					永続罠
				</label>
				<input
					type="checkbox"
					id="Counter"
					name="play-types[]"
					value="Counter"
					defaultChecked={isCheckboxOn(filters, 'play-types', 'Counter')}
				/>
				<label htmlFor="Counter" className="mr-4 select-none">
					カウンター罠
				</label>
			</div>
		</div>
  );
}

export default TrapCardFilter