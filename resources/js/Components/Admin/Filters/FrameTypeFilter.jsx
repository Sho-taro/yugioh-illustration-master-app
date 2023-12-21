import React from 'react'

function FrameTypeFilter() {
  return (
		<div className="flex justify-start items-center mb-4">
			<p className="w-28 text-center">種類</p>
			<div className="ml-2">
				<div>
					<input type="checkbox" id="normal" name="frame-types[]" value="normal" />
					<label htmlFor="normal" className="mr-4 select-none">
						通常
					</label>
					<input type="checkbox" id="effect" name="frame-types[]" value="effect" />
					<label htmlFor="effect" className="mr-4 select-none">
						効果
					</label>
					<input type="checkbox" id="ritual" name="frame-types[]" value="ritual" />
					<label htmlFor="ritual" className="mr-4 select-none">
						儀式
					</label>
					<input type="checkbox" id="fusion" name="frame-types[]" value="fusion" />
					<label htmlFor="fusion" className="mr-4 select-none">
						融合
					</label>
					<input type="checkbox" id="synchro" name="frame-types[]" value="synchro" />
					<label htmlFor="synchro" className="mr-4 select-none">
						シンクロ
					</label>
					<input type="checkbox" id="xyz" name="frame-types[]" value="xyz" />
					<label htmlFor="xyz" className="mr-4 select-none">
						エクシーズ
					</label>
					<input type="checkbox" id="link" name="frame-types[]" value="link" />
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
					/>
					<label htmlFor="normal_pendulum" className="mr-4 select-none">
						P通常
					</label>
					<input
						type="checkbox"
						id="effect_pendulum"
						name="frame-types[]"
						value="effect_pendulum"
					/>
					<label htmlFor="effect_pendulum" className="mr-4 select-none">
						P効果
					</label>
					<input
						type="checkbox"
						id="ritual_pendulum"
						name="frame-types[]"
						value="ritual_pendulum"
					/>
					<label htmlFor="ritual_pendulum" className="mr-4 select-none">
						P儀式
					</label>
					<input
						type="checkbox"
						id="fusion_pendulum"
						name="frame-types[]"
						value="fusion_pendulum"
					/>
					<label htmlFor="fusion_pendulum" className="mr-4 select-none">
						P融合
					</label>
					<input
						type="checkbox"
						id="synchro_pendulum"
						name="frame-types[]"
						value="synchro_pendulum"
					/>
					<label htmlFor="synchro_pendulum" className="mr-4 select-none">
						Pシンクロ
					</label>
					<input
						type="checkbox"
						id="xyz_pendulum"
						name="frame-types[]"
						value="xyz_pendulum"
					/>
					<label htmlFor="xyz_pendulum" className="mr-4 select-none">
						Pエクシーズ
					</label>
				</div>
			</div>
		</div>
  );
}

export default FrameTypeFilter