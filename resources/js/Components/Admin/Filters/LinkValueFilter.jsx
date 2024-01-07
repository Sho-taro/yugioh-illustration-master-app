import React from 'react'
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function LinkValueFilter({filters}) {
  return (
		<div className="flex justify-start items-center mb-4">
			<p style={{ color: 'rgb(33, 33, 33)' }} className="w-28 text-center">
				Link-
			</p>
			<div className="ml-2">
				<div>
					<label htmlFor="link-value-1" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="link-value-1"
							name="link-values[]"
							value="1"
							defaultChecked={isCheckboxOn(filters, 'link-values', '1')}
						/>
						１
					</label>
					<label htmlFor="link-value-2" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="link-value-2"
							name="link-values[]"
							value="2"
							defaultChecked={isCheckboxOn(filters, 'link-values', '2')}
						/>
						２
					</label>
					<label htmlFor="link-value-3" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="link-value-3"
							name="link-values[]"
							value="3"
							defaultChecked={isCheckboxOn(filters, 'link-values', '3')}
						/>
						３
					</label>
					<label htmlFor="link-value-4" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="link-value-4"
							name="link-values[]"
							value="4"
							defaultChecked={isCheckboxOn(filters, 'link-values', '4')}
						/>
						４
					</label>
					<label htmlFor="link-value-5" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="link-value-5"
							name="link-values[]"
							value="5"
							defaultChecked={isCheckboxOn(filters, 'link-values', '5')}
						/>
						５
					</label>
					<label htmlFor="link-value-6" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="link-value-6"
							name="link-values[]"
							value="6"
							defaultChecked={isCheckboxOn(filters, 'link-values', '6')}
						/>
						６
					</label>
				</div>
			</div>
		</div>
  );
}

export default LinkValueFilter