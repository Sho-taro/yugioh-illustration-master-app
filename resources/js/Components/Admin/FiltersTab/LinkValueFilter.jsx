import React from 'react'
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function LinkValueFilter({filters}) {
  return (
		<div id="link-values" className="mb-4 flex flex-col">
			<h3 className="my-2 pl-8 text-xl font-bold">Link-</h3>
			<label
				htmlFor="link-value-1"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="link-value-1"
					name="link-values[]"
					value="1"
					defaultChecked={isCheckboxOn(filters, 'link-values', '1')}
				/>
				１
			</label>
			<label
				htmlFor="link-value-2"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="link-value-2"
					name="link-values[]"
					value="2"
					defaultChecked={isCheckboxOn(filters, 'link-values', '2')}
				/>
				２
			</label>
			<label
				htmlFor="link-value-3"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="link-value-3"
					name="link-values[]"
					value="3"
					defaultChecked={isCheckboxOn(filters, 'link-values', '3')}
				/>
				３
			</label>
			<label
				htmlFor="link-value-4"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="link-value-4"
					name="link-values[]"
					value="4"
					defaultChecked={isCheckboxOn(filters, 'link-values', '4')}
				/>
				４
			</label>
			<label
				htmlFor="link-value-5"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="link-value-5"
					name="link-values[]"
					value="5"
					defaultChecked={isCheckboxOn(filters, 'link-values', '5')}
				/>
				５
			</label>
			<label
				htmlFor="link-value-6"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
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
  );
}

export default LinkValueFilter