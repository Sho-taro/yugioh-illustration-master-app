import React from 'react'

function LinkValueFilter() {
  return (
		<div className="flex justify-start items-center mb-4">
			<p className="w-28 text-center">Link-</p>
			<div className="ml-2">
				<div>
					<input type="checkbox" id="link-value-1" name="link-values[]" value="1" />
					<label htmlFor="link-value-1" className="mr-4 select-none">
						１
					</label>
					<input type="checkbox" id="link-value-2" name="link-values[]" value="2" />
					<label htmlFor="link-value-2" className="mr-4 select-none">
						２
					</label>
					<input type="checkbox" id="link-value-3" name="link-values[]" value="3" />
					<label htmlFor="link-value-3" className="mr-4 select-none">
						３
					</label>
					<input type="checkbox" id="link-value-4" name="link-values[]" value="4" />
					<label htmlFor="link-value-4" className="mr-4 select-none">
						４
					</label>
					<input type="checkbox" id="link-value-5" name="link-values[]" value="5" />
					<label htmlFor="link-value-5" className="mr-4 select-none">
						５
					</label>
					<input type="checkbox" id="link-value-6" name="link-values[]" value="6" />
					<label htmlFor="link-value-6" className="mr-4 select-none">
						６
					</label>
				</div>
			</div>
		</div>
  );
}

export default LinkValueFilter