import React from 'react'

function FilterCards({ routeName }) {
  return (
		<>
			<details>
				<summary>絞り込み</summary>
				<div className="text-left">
					<form action={route(routeName)}>
						<input type="hidden" name="access-type" value="filtering" />
						<div className="my-4 w-1/2">
							<p>カード名で絞り込む :</p>
							<input
								type="text"
								name="card-name"
								placeholder=" を含む"
								className="w-full"
							/>
							{/* <img
										src="/images/search.svg"
										alt="検索ボタン"
										className="cursor-pointer hover:opacity-50"
									/> */}
						</div>
						<div>
							<p>カードの種類で絞り込む :</p>
							<div className="flex justify-start items-center">
								<p className="w-20">モンスター</p>
								<div className="ml-4">
									<div>
										<input
											type="checkbox"
											id="normal"
											name="frame-types[]"
											value="normal"
											defaultChecked
										/>
										<label htmlFor="normal" className="inline-block mr-4">
											通常
										</label>
										<input
											type="checkbox"
											id="effect"
											name="frame-types[]"
											value="effect"
											defaultChecked
										/>
										<label htmlFor="effect" className="inline-block mr-4">
											効果
										</label>
										<input
											type="checkbox"
											id="ritual"
											name="frame-types[]"
											value="ritual"
											defaultChecked
										/>
										<label htmlFor="ritual" className="inline-block mr-4">
											儀式
										</label>
										<input
											type="checkbox"
											id="fusion"
											name="frame-types[]"
											value="fusion"
											defaultChecked
										/>
										<label htmlFor="fusion" className="inline-block mr-4">
											融合
										</label>
										<input
											type="checkbox"
											id="synchro"
											name="frame-types[]"
											value="synchro"
											defaultChecked
										/>
										<label htmlFor="synchro" className="inline-block mr-4">
											シンクロ
										</label>
										<input
											type="checkbox"
											id="xyz"
											name="frame-types[]"
											value="xyz"
											defaultChecked
										/>
										<label htmlFor="xyz" className="inline-block mr-4">
											エクシーズ
										</label>
										<input
											type="checkbox"
											id="link"
											name="frame-types[]"
											value="link"
											defaultChecked
										/>
										<label htmlFor="link" className="inline-block mr-4">
											リンク
										</label>
									</div>
									<div>
										<input
											type="checkbox"
											id="normal_pendulum"
											name="frame-types[]"
											value="normal_pendulum"
											defaultChecked
										/>
										<label
											htmlFor="normal_pendulum"
											className="inline-block mr-4">
											P通常
										</label>
										<input
											type="checkbox"
											id="effect_pendulum"
											name="frame-types[]"
											value="effect_pendulum"
											defaultChecked
										/>
										<label
											htmlFor="effect_pendulum"
											className="inline-block mr-4">
											P効果
										</label>
										<input
											type="checkbox"
											id="ritual_pendulum"
											name="frame-types[]"
											value="ritual_pendulum"
											defaultChecked
										/>
										<label
											htmlFor="ritual_pendulum"
											className="inline-block mr-4">
											P儀式
										</label>
										<input
											type="checkbox"
											id="fusion_pendulum"
											name="frame-types[]"
											value="fusion_pendulum"
											defaultChecked
										/>
										<label
											htmlFor="fusion_pendulum"
											className="inline-block mr-4">
											P融合
										</label>
										<input
											type="checkbox"
											id="synchro_pendulum"
											name="frame-types[]"
											value="synchro_pendulum"
											defaultChecked
										/>
										<label
											htmlFor="synchro_pendulum"
											className="inline-block mr-4">
											Pシンクロ
										</label>
										<input
											type="checkbox"
											id="xyz_pendulum"
											name="frame-types[]"
											value="xyz_pendulum"
											defaultChecked
										/>
										<label htmlFor="xyz_pendulum" className="inline-block mr-4">
											Pエクシーズ
										</label>
									</div>
								</div>
							</div>
							<div className="mt-2 flex justify-start items-center">
								<p className="w-20">魔法</p>
								<div className="ml-4">
									<input
										type="checkbox"
										id="spell"
										name="frame-types[]"
										value="spell"
										defaultChecked
									/>
									<label htmlFor="spell">魔法</label>
								</div>
							</div>
							<div className="mt-2 flex justify-start items-center">
								<p className="w-20">罠</p>
								<div className="ml-4">
									<input
										type="checkbox"
										id="trap"
										name="frame-types[]"
										value="trap"
										defaultChecked
									/>
									<label htmlFor="trap">罠</label>
								</div>
							</div>
						</div>
						<div className="mt-4">
							<p>カードの初登場時期で絞り込む :</p>
							<div>
								<input
									type="checkbox"
									id="12th"
									name="periods[]"
									value="12th"
									defaultChecked
								/>
								<label htmlFor="12th" className="inline-block mr-4">
									12期
								</label>
								<input
									type="checkbox"
									id="11th"
									name="periods[]"
									value="11th"
									defaultChecked
								/>
								<label htmlFor="11th" className="inline-block mr-4">
									11期
								</label>
								<input
									type="checkbox"
									id="10th"
									name="periods[]"
									value="10th"
									defaultChecked
								/>
								<label htmlFor="10th" className="inline-block mr-4">
									10期
								</label>
								<input
									type="checkbox"
									id="9th"
									name="periods[]"
									value="9th"
									defaultChecked
								/>
								<label htmlFor="9th" className="inline-block mr-4">
									9期
								</label>
								<input
									type="checkbox"
									id="8th"
									name="periods[]"
									value="8th"
									defaultChecked
								/>
								<label htmlFor="8th" className="inline-block mr-4">
									8期
								</label>

								<input
									type="checkbox"
									id="7th"
									name="periods[]"
									value="7th"
									defaultChecked
								/>
								<label htmlFor="7th" className="inline-block mr-4">
									7期
								</label>
								<input
									type="checkbox"
									id="6th"
									name="periods[]"
									value="6th"
									defaultChecked
								/>
								<label htmlFor="6th" className="inline-block mr-4">
									6期
								</label>
								<input
									type="checkbox"
									id="5th"
									name="periods[]"
									value="5th"
									defaultChecked
								/>
								<label htmlFor="5th" className="inline-block mr-4">
									5期
								</label>
								<input
									type="checkbox"
									id="4th"
									name="periods[]"
									value="4th"
									defaultChecked
								/>
								<label htmlFor="4th" className="inline-block mr-4">
									4期
								</label>
								<input
									type="checkbox"
									id="3rd"
									name="periods[]"
									value="3rd"
									defaultChecked
								/>
								<label htmlFor="3rd" className="inline-block mr-4">
									3期
								</label>
								<input
									type="checkbox"
									id="2nd"
									name="periods[]"
									value="2nd"
									defaultChecked
								/>
								<label htmlFor="2nd" className="inline-block mr-4">
									2期
								</label>
								<input
									type="checkbox"
									id="1st"
									name="periods[]"
									value="1st"
									defaultChecked
								/>
								<label htmlFor="1st" className="inline-block mr-4">
									1期
								</label>
							</div>
						</div>
						<button className="block mt-4 px-2 py-1 border-2 border-solid border-gray-300 rounded-md">
							この条件で絞り込む
						</button>
					</form>
				</div>
			</details>
		</>
  );
}

export default FilterCards