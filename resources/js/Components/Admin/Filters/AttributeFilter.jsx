import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function AttributeFilter({ filters }) {
	return (
		<div className="flex justify-start items-center mb-4">
			<p style={{ color: 'rgb(33, 33, 33)' }} className="w-28">
				属性
			</p>
			<div className="ml-2">
				<div>
					<label htmlFor="DARK" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="DARK"
							name="attributes[]"
							value="DARK"
							defaultChecked={isCheckboxOn(filters, 'attributes', 'DARK')}
						/>
						闇
					</label>
					<label htmlFor="LIGHT" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="LIGHT"
							name="attributes[]"
							value="LIGHT"
							defaultChecked={isCheckboxOn(filters, 'attributes', 'LIGHT')}
						/>
						光
					</label>
					<label htmlFor="EARTH" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="EARTH"
							name="attributes[]"
							value="EARTH"
							defaultChecked={isCheckboxOn(filters, 'attributes', 'EARTH')}
						/>
						地
					</label>
					<label htmlFor="WATER" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="WATER"
							name="attributes[]"
							value="WATER"
							defaultChecked={isCheckboxOn(filters, 'attributes', 'WATER')}
						/>
						水
					</label>
					<label htmlFor="FIRE" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="FIRE"
							name="attributes[]"
							value="FIRE"
							defaultChecked={isCheckboxOn(filters, 'attributes', 'FIRE')}
						/>
						炎
					</label>
					<label htmlFor="WIND" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="WIND"
							name="attributes[]"
							value="WIND"
							defaultChecked={isCheckboxOn(filters, 'attributes', 'WIND')}
						/>
						風
					</label>
					<label htmlFor="DIVINE" className="mr-4 select-none cursor-pointer">
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
			</div>
		</div>
	);
}

export default AttributeFilter;
