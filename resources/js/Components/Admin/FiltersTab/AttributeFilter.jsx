import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function AttributeFilter({ filters }) {
	return (
		<div id="attributes" className="mb-4 flex flex-col">
			<h3 className="my-2 pl-8 text-xl font-bold">属性</h3>
			<label
				htmlFor="DARK"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="DARK"
					name="attributes[]"
					value="DARK"
					defaultChecked={isCheckboxOn(filters, 'attributes', 'DARK')}
				/>
				闇
			</label>
			<label
				htmlFor="LIGHT"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="LIGHT"
					name="attributes[]"
					value="LIGHT"
					defaultChecked={isCheckboxOn(filters, 'attributes', 'LIGHT')}
				/>
				光
			</label>
			<label
				htmlFor="EARTH"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="EARTH"
					name="attributes[]"
					value="EARTH"
					defaultChecked={isCheckboxOn(filters, 'attributes', 'EARTH')}
				/>
				地
			</label>
			<label
				htmlFor="WATER"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="WATER"
					name="attributes[]"
					value="WATER"
					defaultChecked={isCheckboxOn(filters, 'attributes', 'WATER')}
				/>
				水
			</label>
			<label
				htmlFor="FIRE"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="FIRE"
					name="attributes[]"
					value="FIRE"
					defaultChecked={isCheckboxOn(filters, 'attributes', 'FIRE')}
				/>
				炎
			</label>
			<label
				htmlFor="WIND"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="WIND"
					name="attributes[]"
					value="WIND"
					defaultChecked={isCheckboxOn(filters, 'attributes', 'WIND')}
				/>
				風
			</label>
			<label
				htmlFor="DIVINE"
				className="mb-1 pl-10 text-lg hover:bg-gray-800 select-none cursor-pointer">
				<input
					type="checkbox"
					id="DIVINE"
					name="attributes[]"
					value="DIVINE"
					defaultChecked={isCheckboxOn(filters, 'attributes', 'DIVINE')}
				/>
				神
			</label>
		</div>
	);
}

export default AttributeFilter;
