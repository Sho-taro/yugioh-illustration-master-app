import React from 'react'

function AttributeFilter() {
  return (
		<div className="flex justify-start items-center">
			<p className="w-28 text-center">属性</p>
			<div className="ml-2">
				<div>
					<input type="checkbox" id="DARK" name="attributes[]" value="DARK" />
					<label htmlFor="DARK" className="mr-4 select-none">
						闇
					</label>
					<input type="checkbox" id="LIGHT" name="attributes[]" value="LIGHT" />
					<label htmlFor="LIGHT" className="mr-4 select-none">
						光
					</label>
					<input type="checkbox" id="EARTH" name="attributes[]" value="EARTH" />
					<label htmlFor="EARTH" className="mr-4 select-none">
						地
					</label>
					<input type="checkbox" id="WATER" name="attributes[]" value="WATER" />
					<label htmlFor="WATER" className="mr-4 select-none">
						水
					</label>
					<input type="checkbox" id="FIRE" name="attributes[]" value="FIRE" />
					<label htmlFor="FIRE" className="mr-4 select-none">
						炎
					</label>
					<input type="checkbox" id="WIND" name="attributes[]" value="WIND" />
					<label htmlFor="WIND" className="mr-4 select-none">
						風
					</label>
					<input type="checkbox" id="DIVINE" name="attributes[]" value="DIVINE" />
					<label htmlFor="DIVINE" className="mr-4 select-none">
						神
					</label>
				</div>
			</div>
		</div>
  );
}

export default AttributeFilter