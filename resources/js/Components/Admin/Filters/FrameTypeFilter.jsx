import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckBoxOn';

function FrameTypeFilter({filters}) {
	return (
		<div className="flex justify-start items-center mb-4">
			<p className="w-28 text-center">種類</p>
			<div className="ml-2">
				<div>
					<input
						type="checkbox"
						id="normal"
						name="frame-types[]"
						value="normal"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'normal')}
					/>
					<label htmlFor="normal" className="mr-4 select-none">
						通常
					</label>
					<input
						type="checkbox"
						id="effect"
						name="frame-types[]"
						value="effect"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'effect')}
					/>
					<label htmlFor="effect" className="mr-4 select-none">
						効果
					</label>
					<input
						type="checkbox"
						id="ritual"
						name="frame-types[]"
						value="ritual"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'ritual')}
					/>
					<label htmlFor="ritual" className="mr-4 select-none">
						儀式
					</label>
					<input
						type="checkbox"
						id="fusion"
						name="frame-types[]"
						value="fusion"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'fusion')}
					/>
					<label htmlFor="fusion" className="mr-4 select-none">
						融合
					</label>
					<input
						type="checkbox"
						id="synchro"
						name="frame-types[]"
						value="synchro"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'synchro')}
					/>
					<label htmlFor="synchro" className="mr-4 select-none">
						シンクロ
					</label>
					<input
						type="checkbox"
						id="xyz"
						name="frame-types[]"
						value="xyz"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'xyz')}
					/>
					<label htmlFor="xyz" className="mr-4 select-none">
						エクシーズ
					</label>
					<input
						type="checkbox"
						id="link"
						name="frame-types[]"
						value="link"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'link')}
					/>
					<label htmlFor="link" className="mr-4 select-none">
						リンク
					</label>
				</div>
				<div>
					<input
						type="checkbox"
						id="normal_pendulum"
						name="frame-types[]"
						value="normal_pendulum"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'normal_pendulum')}
					/>
					<label htmlFor="normal_pendulum" className="mr-4 select-none">
						P通常
					</label>
					<input
						type="checkbox"
						id="effect_pendulum"
						name="frame-types[]"
						value="effect_pendulum"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'effect_pendulum')}
					/>
					<label htmlFor="effect_pendulum" className="mr-4 select-none">
						P効果
					</label>
					<input
						type="checkbox"
						id="ritual_pendulum"
						name="frame-types[]"
						value="ritual_pendulum"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'ritual_pendulum')}
					/>
					<label htmlFor="ritual_pendulum" className="mr-4 select-none">
						P儀式
					</label>
					<input
						type="checkbox"
						id="fusion_pendulum"
						name="frame-types[]"
						value="fusion_pendulum"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'fusion_pendulum')}
					/>
					<label htmlFor="fusion_pendulum" className="mr-4 select-none">
						P融合
					</label>
					<input
						type="checkbox"
						id="synchro_pendulum"
						name="frame-types[]"
						value="synchro_pendulum"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'synchro_pendulum')}
					/>
					<label htmlFor="synchro_pendulum" className="mr-4 select-none">
						Pシンクロ
					</label>
					<input
						type="checkbox"
						id="xyz_pendulum"
						name="frame-types[]"
						value="xyz_pendulum"
						defaultChecked={isCheckboxOn(filters, 'frame-types', 'xyz_pendulum')}
					/>
					<label htmlFor="xyz_pendulum" className="mr-4 select-none">
						Pエクシーズ
					</label>
				</div>
			</div>
		</div>
	);
}

export default FrameTypeFilter;
