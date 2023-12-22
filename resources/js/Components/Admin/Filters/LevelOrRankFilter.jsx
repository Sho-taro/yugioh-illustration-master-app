import React from 'react'

function LevelOrRankFilter() {
  return (
		<div className="flex justify-start items-center mb-4">
			<p className="w-28 text-center">レベル/ランク</p>
			<div className="ml-2">
				<div>
					<input type="checkbox" id="level-or-rank-1" name="level-or-ranks[]" value="1" />
					<label htmlFor="level-or-rank-1" className="mr-4 select-none">
						１
					</label>
					<input type="checkbox" id="level-or-rank-2" name="level-or-ranks[]" value="2" />
					<label htmlFor="level-or-rank-2" className="mr-4 select-none">
						２
					</label>
					<input type="checkbox" id="level-or-rank-3" name="level-or-ranks[]" value="3" />
					<label htmlFor="level-or-rank-3" className="mr-4 select-none">
						３
					</label>
					<input type="checkbox" id="level-or-rank-4" name="level-or-ranks[]" value="4" />
					<label htmlFor="level-or-rank-4" className="mr-4 select-none">
						４
					</label>
					<input type="checkbox" id="level-or-rank-5" name="level-or-ranks[]" value="5" />
					<label htmlFor="level-or-rank-5" className="mr-4 select-none">
						５
					</label>
					<input type="checkbox" id="level-or-rank-6" name="level-or-ranks[]" value="6" />
					<label htmlFor="level-or-rank-6" className="mr-4 select-none">
						６
					</label>
					<input type="checkbox" id="level-or-rank-7" name="level-or-ranks[]" value="7" />
					<label htmlFor="level-or-rank-7" className="mr-4 select-none">
						７
					</label>
					<input type="checkbox" id="level-or-rank-8" name="level-or-ranks[]" value="8" />
					<label htmlFor="level-or-rank-8" className="mr-4 select-none">
						８
					</label>
					<input type="checkbox" id="level-or-rank-9" name="level-or-ranks[]" value="9" />
					<label htmlFor="level-or-rank-9" className="mr-4 select-none">
						９
					</label>
					<input
						type="checkbox"
						id="level-or-rank-10"
						name="level-or-ranks[]"
						value="10"
					/>
					<label htmlFor="level-or-rank-10" className="mr-4 select-none">
						10
					</label>
					<input
						type="checkbox"
						id="level-or-rank-11"
						name="level-or-ranks[]"
						value="11"
					/>
					<label htmlFor="level-or-rank-11" className="mr-4 select-none">
						11
					</label>
					<input
						type="checkbox"
						id="level-or-rank-12"
						name="level-or-ranks[]"
						value="12"
					/>
					<label htmlFor="level-or-rank-12" className="mr-4 select-none">
						12
					</label>
					<input
						type="checkbox"
						id="level-or-rank-13"
						name="level-or-ranks[]"
						value="13"
					/>
					<label htmlFor="level-or-rank-13" className="mr-4 select-none">
						13
					</label>
				</div>
			</div>
		</div>
  );
}

export default LevelOrRankFilter