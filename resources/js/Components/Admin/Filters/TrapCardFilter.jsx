import React from 'react'
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function TrapCardFilter({filters}) {
  return (
		<div className="mt-2 flex justify-start items-center">
			<p style={{ color: 'rgb(33, 33, 33)' }} className="w-28">
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
					通常罠
				</label>
				<label htmlFor="Continuous" className="mr-4 select-none cursor-pointer">
					<input
						type="checkbox"
						id="Continuous"
						name="play-types[]"
						value="Continuous"
						defaultChecked={isCheckboxOn(filters, 'play-types', 'Continuous')}
					/>
					永続罠
				</label>
				<label htmlFor="Counter" className="mr-4 select-none cursor-pointer">
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
		</div>
  );
}

export default TrapCardFilter