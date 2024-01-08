import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function LevelOrRankFilter({filters}) {
  return (
		<div className="flex justify-start items-center mb-4">
			<p style={{ color: 'rgb(33, 33, 33)' }} className="w-28">
				レベル/ランク
			</p>
			<div className="ml-2">
				<div>
					<label htmlFor="level-or-rank-1" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-1"
							name="level-or-ranks[]"
							value="1"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '1')}
						/>
						１
					</label>
					<label htmlFor="level-or-rank-2" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-2"
							name="level-or-ranks[]"
							value="2"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '2')}
						/>
						２
					</label>
					<label htmlFor="level-or-rank-3" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-3"
							name="level-or-ranks[]"
							value="3"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '3')}
						/>
						３
					</label>
					<label htmlFor="level-or-rank-4" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-4"
							name="level-or-ranks[]"
							value="4"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '4')}
						/>
						４
					</label>
					<label htmlFor="level-or-rank-5" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-5"
							name="level-or-ranks[]"
							value="5"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '5')}
						/>
						５
					</label>
					<label htmlFor="level-or-rank-6" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-6"
							name="level-or-ranks[]"
							value="6"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '6')}
						/>
						６
					</label>
					<label htmlFor="level-or-rank-7" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-7"
							name="level-or-ranks[]"
							value="7"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '7')}
						/>
						７
					</label>
					<label htmlFor="level-or-rank-8" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-8"
							name="level-or-ranks[]"
							value="8"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '8')}
						/>
						８
					</label>
					<label htmlFor="level-or-rank-9" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-9"
							name="level-or-ranks[]"
							value="9"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '9')}
						/>
						９
					</label>
					<label htmlFor="level-or-rank-10" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-10"
							name="level-or-ranks[]"
							value="10"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '10')}
						/>
						10
					</label>
					<label htmlFor="level-or-rank-11" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-11"
							name="level-or-ranks[]"
							value="11"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '11')}
						/>
						11
					</label>
					<label htmlFor="level-or-rank-12" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-12"
							name="level-or-ranks[]"
							value="12"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '12')}
						/>
						12
					</label>
					<label htmlFor="level-or-rank-13" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="level-or-rank-13"
							name="level-or-ranks[]"
							value="13"
							defaultChecked={isCheckboxOn(filters, 'level-or-ranks', '13')}
						/>
						13
					</label>
				</div>
			</div>
		</div>
  );
}

export default LevelOrRankFilter