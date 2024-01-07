import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function FrameTypeFilter({filters}) {
	return (
		<div className="flex justify-start items-center mb-4">
			<p style={{color: 'rgb(33, 33, 33)'}} className="w-28 text-center">種類</p>
			<div className="ml-2">
				<div>
					<label htmlFor="normal" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="normal"
							name="frame-types[]"
							value="normal"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'normal')}
						/>
						通常
					</label>
					<label htmlFor="effect" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="effect"
							name="frame-types[]"
							value="effect"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'effect')}
						/>
						効果
					</label>
					<label htmlFor="ritual" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="ritual"
							name="frame-types[]"
							value="ritual"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'ritual')}
						/>
						儀式
					</label>
					<label htmlFor="fusion" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="fusion"
							name="frame-types[]"
							value="fusion"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'fusion')}
						/>
						融合
					</label>
					<label htmlFor="synchro" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="synchro"
							name="frame-types[]"
							value="synchro"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'synchro')}
						/>
						シンクロ
					</label>
					<label htmlFor="xyz" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="xyz"
							name="frame-types[]"
							value="xyz"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'xyz')}
						/>
						エクシーズ
					</label>
					<label htmlFor="link" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="link"
							name="frame-types[]"
							value="link"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'link')}
						/>
						リンク
					</label>
				</div>
				<div>
					<label htmlFor="normal_pendulum" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="normal_pendulum"
							name="frame-types[]"
							value="normal_pendulum"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'normal_pendulum')}
						/>
						P通常
					</label>
					<label htmlFor="effect_pendulum" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="effect_pendulum"
							name="frame-types[]"
							value="effect_pendulum"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'effect_pendulum')}
						/>
						P効果
					</label>
					<label htmlFor="ritual_pendulum" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="ritual_pendulum"
							name="frame-types[]"
							value="ritual_pendulum"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'ritual_pendulum')}
						/>
						P儀式
					</label>
					<label htmlFor="fusion_pendulum" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="fusion_pendulum"
							name="frame-types[]"
							value="fusion_pendulum"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'fusion_pendulum')}
						/>
						P融合
					</label>
					<label htmlFor="synchro_pendulum" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="synchro_pendulum"
							name="frame-types[]"
							value="synchro_pendulum"
							defaultChecked={isCheckboxOn(
								filters,
								'frame-types',
								'synchro_pendulum'
							)}
						/>
						Pシンクロ
					</label>
					<label htmlFor="xyz_pendulum" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="xyz_pendulum"
							name="frame-types[]"
							value="xyz_pendulum"
							defaultChecked={isCheckboxOn(filters, 'frame-types', 'xyz_pendulum')}
						/>
						Pエクシーズ
					</label>
				</div>
			</div>
		</div>
	);
}

export default FrameTypeFilter;
