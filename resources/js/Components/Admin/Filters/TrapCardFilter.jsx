import React from 'react'

function TrapCardFilter() {
  return (
		<div className="mt-2 flex justify-start items-center">
			<p className="w-28 text-center">種類</p>
			<div className="ml-2">
				<input type="checkbox" id="Normal" name="frame-types[]" value="Normal" />
				<label htmlFor="Normal" className="mr-4 select-none">
					通常罠
				</label>
				<input type="checkbox" id="Continuous" name="frame-types[]" value="Continuous" />
				<label htmlFor="Continuous" className="mr-4 select-none">
					永続罠
				</label>
				<input type="checkbox" id="Counter" name="frame-types[]" value="Counter" />
				<label htmlFor="Counter" className="mr-4 select-none">
					カウンター罠
				</label>
			</div>
		</div>
  );
}

export default TrapCardFilter