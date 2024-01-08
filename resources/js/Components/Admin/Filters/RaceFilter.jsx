import React from 'react';
import { isCheckboxOn } from '@/utils/isCheckboxOn';

function RaceFilter({filters}) {
	return (
		<div className="flex justify-start items-center mb-4">
			<p style={{ color: 'rgb(33, 33, 33)' }} className="w-28">
				種族
			</p>
			<div className="ml-2">
				<div>
					<label htmlFor="Spellcaster" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Spellcaster"
							name="races[]"
							value="Spellcaster"
							defaultChecked={isCheckboxOn(filters, 'races', 'Spellcaster')}
						/>
						魔法使い族
					</label>
					<label htmlFor="Dragon" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Dragon"
							name="races[]"
							value="Dragon"
							defaultChecked={isCheckboxOn(filters, 'races', 'Dragon')}
						/>
						ドラゴン族
					</label>
					<label htmlFor="Zombie" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Zombie"
							name="races[]"
							value="Zombie"
							defaultChecked={isCheckboxOn(filters, 'races', 'Zombie')}
						/>
						アンデット族
					</label>
					<label htmlFor="Warrior" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Warrior"
							name="races[]"
							value="Warrior"
							defaultChecked={isCheckboxOn(filters, 'races', 'Warrior')}
						/>
						戦士族
					</label>
					<label htmlFor="Beast-Warrior" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Beast-Warrior"
							name="races[]"
							value="Beast-Warrior"
							defaultChecked={isCheckboxOn(filters, 'races', 'Beast-Warrior')}
						/>
						獣戦士族
					</label>
					<label htmlFor="Beast" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Beast"
							name="races[]"
							value="Beast"
							defaultChecked={isCheckboxOn(filters, 'races', 'Beast')}
						/>
						獣族
					</label>
				</div>
				<div>
					<label htmlFor="Winged Beast" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Winged Beast"
							name="races[]"
							value="Winged Beast"
							defaultChecked={isCheckboxOn(filters, 'races', 'Winged Beast')}
						/>
						鳥獣族
					</label>
					<label htmlFor="Fiend" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Fiend"
							name="races[]"
							value="Fiend"
							defaultChecked={isCheckboxOn(filters, 'races', 'Fiend')}
						/>
						悪魔族
					</label>
					<label htmlFor="Fairy" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Fairy"
							name="races[]"
							value="Fairy"
							defaultChecked={isCheckboxOn(filters, 'races', 'Fairy')}
						/>
						天使族
					</label>
					<label htmlFor="Insect" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Insect"
							name="races[]"
							value="Insect"
							defaultChecked={isCheckboxOn(filters, 'races', 'Insect')}
						/>
						昆虫族
					</label>
					<label htmlFor="Dinosaur" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Dinosaur"
							name="races[]"
							value="Dinosaur"
							defaultChecked={isCheckboxOn(filters, 'races', 'Dinosaur')}
						/>
						恐竜族
					</label>
					<label htmlFor="Reptile" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Reptile"
							name="races[]"
							value="Reptile"
							defaultChecked={isCheckboxOn(filters, 'races', 'Reptile')}
						/>
						爬虫類族
					</label>
					<label htmlFor="Fish" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Fish"
							name="races[]"
							value="Fish"
							defaultChecked={isCheckboxOn(filters, 'races', 'Fish')}
						/>
						魚族
					</label>
				</div>
				<div>
					<label htmlFor="Sea Serpent" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Sea Serpent"
							name="races[]"
							value="Sea Serpent"
							defaultChecked={isCheckboxOn(filters, 'races', 'Sea Serpent')}
						/>
						海竜族
					</label>
					<label htmlFor="Aqua" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Aqua"
							name="races[]"
							value="Aqua"
							defaultChecked={isCheckboxOn(filters, 'races', 'Aqua')}
						/>
						水族
					</label>
					<label htmlFor="Pyro" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Pyro"
							name="races[]"
							value="Pyro"
							defaultChecked={isCheckboxOn(filters, 'races', 'Pyro')}
						/>
						炎族
					</label>
					<label htmlFor="Thunder" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Thunder"
							name="races[]"
							value="Thunder"
							defaultChecked={isCheckboxOn(filters, 'races', 'Thunder')}
						/>
						雷族
					</label>
					<label htmlFor="Rock" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Rock"
							name="races[]"
							value="Rock"
							defaultChecked={isCheckboxOn(filters, 'races', 'Rock')}
						/>
						岩石族
					</label>
					<label htmlFor="Plant" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Plant"
							name="races[]"
							value="Plant"
							defaultChecked={isCheckboxOn(filters, 'races', 'Plant')}
						/>
						植物族
					</label>
					<label htmlFor="Machine" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Machine"
							name="races[]"
							value="Machine"
							defaultChecked={isCheckboxOn(filters, 'races', 'Machine')}
						/>
						機械族
					</label>
				</div>
				<div>
					<label htmlFor="Psychic" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Psychic"
							name="races[]"
							value="Psychic"
							defaultChecked={isCheckboxOn(filters, 'races', 'Psychic')}
						/>
						サイキック族
					</label>
					<label htmlFor="Wyrm" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Wyrm"
							name="races[]"
							value="Wyrm"
							defaultChecked={isCheckboxOn(filters, 'races', 'Wyrm')}
						/>
						幻竜族
					</label>
					<label htmlFor="Cyberse" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Cyberse"
							name="races[]"
							value="Cyberse"
							defaultChecked={isCheckboxOn(filters, 'races', 'Cyberse')}
						/>
						サイバース族
					</label>
					<label htmlFor="Illusion Type" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Illusion Type"
							name="races[]"
							value="Illusion Type"
							defaultChecked={isCheckboxOn(filters, 'races', 'Illusion Type')}
						/>
						幻想魔族
					</label>
					<label htmlFor="Divine-Beast" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Divine-Beast"
							name="races[]"
							value="Divine-Beast"
							defaultChecked={isCheckboxOn(filters, 'races', 'Divine-Beast')}
						/>
						幻神獣族
					</label>
					<label htmlFor="Creator-God" className="mr-4 select-none cursor-pointer">
						<input
							type="checkbox"
							id="Creator-God"
							name="races[]"
							value="Creator-God"
							defaultChecked={isCheckboxOn(filters, 'races', 'Creator-God')}
						/>
						創造神族
					</label>
				</div>
			</div>
		</div>
	);
}

export default RaceFilter;
