import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckBoxOn';

function CardPeriodFilter({filters}) {
	return (
		<div className="mt-4 flex justify-start items-center">
			<p className="w-28 text-center">初登場時期</p>
			<div className="ml-2">
				<div>
					<input
						type="checkbox"
						id="12期"
						name="periods[]"
						value="12期"
						defaultChecked={isCheckboxOn(filters, 'periods', '12期')}
					/>
					<label htmlFor="12期" className="mr-4 select-none">
						12期
					</label>
					<input
						type="checkbox"
						id="11期"
						name="periods[]"
						value="11期"
						defaultChecked={isCheckboxOn(filters, 'periods', '11期')}
					/>
					<label htmlFor="11期" className="mr-4 select-none">
						11期
					</label>
					<input
						type="checkbox"
						id="10期"
						name="periods[]"
						value="10期"
						defaultChecked={isCheckboxOn(filters, 'periods', '10期')}
					/>
					<label htmlFor="10期" className="mr-4 select-none">
						10期
					</label>
					<input
						type="checkbox"
						id="９期"
						name="periods[]"
						value="９期"
						defaultChecked={isCheckboxOn(filters, 'periods', '９期')}
					/>
					<label htmlFor="９期" className="mr-4 select-none">
						9期
					</label>
					<input
						type="checkbox"
						id="８期"
						name="periods[]"
						value="８期"
						defaultChecked={isCheckboxOn(filters, 'periods', '８期')}
					/>
					<label htmlFor="８期" className="mr-4 select-none">
						8期
					</label>
					<input
						type="checkbox"
						id="７期"
						name="periods[]"
						value="７期"
						defaultChecked={isCheckboxOn(filters, 'periods', '７期')}
					/>
					<label htmlFor="７期" className="mr-4 select-none">
						7期
					</label>
					<input
						type="checkbox"
						id="６期"
						name="periods[]"
						value="６期"
						defaultChecked={isCheckboxOn(filters, 'periods', '６期')}
					/>
					<label htmlFor="６期" className="mr-4 select-none">
						6期
					</label>
					<input
						type="checkbox"
						id="５期"
						name="periods[]"
						value="５期"
						defaultChecked={isCheckboxOn(filters, 'periods', '５期')}
					/>
					<label htmlFor="５期" className="mr-4 select-none">
						5期
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="４期"
						name="periods[]"
						value="４期"
						defaultChecked={isCheckboxOn(filters, 'periods', '４期')}
					/>
					<label htmlFor="４期" className="mr-4 select-none">
						4期
					</label>
					<input
						type="checkbox"
						id="３期"
						name="periods[]"
						value="３期"
						defaultChecked={isCheckboxOn(filters, 'periods', '３期')}
					/>
					<label htmlFor="３期" className="mr-4 select-none">
						3期
					</label>
					<input
						type="checkbox"
						id="２期"
						name="periods[]"
						value="２期"
						defaultChecked={isCheckboxOn(filters, 'periods', '２期')}
					/>
					<label htmlFor="２期" className="mr-4 select-none">
						2期
					</label>
					<input
						type="checkbox"
						id="１期"
						name="periods[]"
						value="１期"
						defaultChecked={isCheckboxOn(filters, 'periods', '１期')}
					/>
					<label htmlFor="１期" className="mr-4 select-none">
						1期
					</label>
				</div>
			</div>
		</div>
	);
}

export default CardPeriodFilter;
