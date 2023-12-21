import React from 'react'

function SpellCardFilter() {
  return (
		<div className="mt-2 flex justify-start items-center">
			<p className="w-28 text-center">種類</p>
			<div className="ml-2">
				<input type="checkbox" id="Normal" name="frame-types[]" value="Normal" />
				<label htmlFor="Normal" className="mr-4 select-none">
					通常魔法
				</label>
				<input type="checkbox" id="Field" name="frame-types[]" value="Field" />
				<label htmlFor="Field" className="mr-4 select-none">
					フィールド魔法
				</label>
				<input type="checkbox" id="Equip" name="frame-types[]" value="Equip" />
				<label htmlFor="Equip" className="mr-4 select-none">
					装備魔法
				</label>
				<input type="checkbox" id="Continuous" name="frame-types[]" value="Continuous" />
				<label htmlFor="Continuous" className="mr-4 select-none">
					永続魔法
				</label>
				<input type="checkbox" id="Quick-Play" name="frame-types[]" value="Quick-Play" />
				<label htmlFor="Quick-Play" className="mr-4 select-none">
					速攻魔法
				</label>
				<input type="checkbox" id="Ritual" name="frame-types[]" value="Ritual" />
				<label htmlFor="Ritual" className="mr-4 select-none">
					儀式魔法
				</label>
			</div>
		</div>
  );
}

export default SpellCardFilter