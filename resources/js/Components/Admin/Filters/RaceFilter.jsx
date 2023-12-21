import React from 'react';

function RaceFilter() {
	return (
		<div className="flex justify-start items-center mb-4">
			<p className="w-28 text-center">種族</p>
			<div className="ml-2">
				<div>
					<input type="checkbox" id="Spellcaster" name="races[]" value="Spellcaster" />
					<label htmlFor="Spellcaster" className="mr-4 select-none">
						魔法使い族
					</label>
					<input type="checkbox" id="Dragon" name="races[]" value="Dragon" />
					<label htmlFor="Dragon" className="mr-4 select-none">
						ドラゴン族
					</label>
					<input type="checkbox" id="Zombie" name="races[]" value="Zombie" />
					<label htmlFor="Zombie" className="mr-4 select-none">
						アンデット族
					</label>
					<input type="checkbox" id="Warrior" name="races[]" value="Warrior" />
					<label htmlFor="Warrior" className="mr-4 select-none">
						戦士族
					</label>
					<input
						type="checkbox"
						id="Beast-Warrior"
						name="races[]"
						value="Beast-Warrior"
					/>
					<label htmlFor="Beast-Warrior" className="mr-4 select-none">
						獣戦士族
					</label>
					<input type="checkbox" id="Beast" name="races[]" value="Beast" />
					<label htmlFor="Beast" className="mr-4 select-none">
						獣族
					</label>
				</div>
				<div>
					<input type="checkbox" id="Winged Beast" name="races[]" value="Winged Beast" />
					<label htmlFor="Winged Beast" className="mr-4 select-none">
						鳥獣族
					</label>
					<input type="checkbox" id="Fiend" name="races[]" value="Fiend" />
					<label htmlFor="Fiend" className="mr-4 select-none">
						悪魔族
					</label>
					<input type="checkbox" id="Fairy" name="races[]" value="Fairy" />
					<label htmlFor="Fairy" className="mr-4 select-none">
						天使族
					</label>
					<input type="checkbox" id="Insect" name="races[]" value="Insect" />
					<label htmlFor="Insect" className="mr-4 select-none">
						昆虫族
					</label>
					<input type="checkbox" id="Dinosaur" name="races[]" value="Dinosaur" />
					<label htmlFor="Dinosaur" className="mr-4 select-none">
						恐竜族
					</label>
					<input type="checkbox" id="Reptile" name="races[]" value="Reptile" />
					<label htmlFor="Reptile" className="mr-4 select-none">
						爬虫類族
					</label>
					<input type="checkbox" id="Fish" name="races[]" value="Fish" />
					<label htmlFor="Fish" className="mr-4 select-none">
						魚族
					</label>
				</div>
				<div>
					<input type="checkbox" id="Sea Serpent" name="races[]" value="Sea Serpent" />
					<label htmlFor="Sea Serpent" className="mr-4 select-none">
						海竜族
					</label>
					<input type="checkbox" id="Aqua" name="races[]" value="Aqua" />
					<label htmlFor="Aqua" className="mr-4 select-none">
						水族
					</label>
					<input type="checkbox" id="Pyro" name="races[]" value="Pyro" />
					<label htmlFor="Pyro" className="mr-4 select-none">
						炎族
					</label>
					<input type="checkbox" id="Thunder" name="races[]" value="Thunder" />
					<label htmlFor="Thunder" className="mr-4 select-none">
						雷族
					</label>
					<input type="checkbox" id="Rock" name="races[]" value="Rock" />
					<label htmlFor="Rock" className="mr-4 select-none">
						岩石族
					</label>
					<input type="checkbox" id="Plant" name="races[]" value="Plant" />
					<label htmlFor="Plant" className="mr-4 select-none">
						植物族
					</label>
					<input type="checkbox" id="Machine" name="races[]" value="Machine" />
					<label htmlFor="Machine" className="mr-4 select-none">
						機械族
					</label>
				</div>
				<div>
					<input type="checkbox" id="Psychic" name="races[]" value="Psychic" />
					<label htmlFor="Psychic" className="mr-4 select-none">
						サイキック族
					</label>
					<input type="checkbox" id="Wyrm" name="races[]" value="Wyrm" />
					<label htmlFor="Wyrm" className="mr-4 select-none">
						幻竜族
					</label>
					<input type="checkbox" id="Cyberse" name="races[]" value="Cyberse" />
					<label htmlFor="Cyberse" className="mr-4 select-none">
						サイバース族
					</label>
					<input
						type="checkbox"
						id="Illusion Type"
						name="races[]"
						value="Illusion Type"
					/>
					<label htmlFor="Illusion Type" className="mr-4 select-none">
						幻想魔族
					</label>
					<input type="checkbox" id="Divine-Beast" name="races[]" value="Divine-Beast" />
					<label htmlFor="Divine-Beast" className="mr-4 select-none">
						幻神獣族
					</label>
					<input type="checkbox" id="Creator-God" name="races[]" value="Creator-God" />
					<label htmlFor="Creator-God" className="mr-4 select-none">
						創造神族
					</label>
				</div>
			</div>
		</div>
	);
}

export default RaceFilter;
