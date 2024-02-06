import React from 'react';
import Typography from '@mui/material/Typography';
import SpellPlayTypeFilterMUI from '@/Components/MaterialUI/Filter/SpellPlayTypeFilterMUI';

function SpellCardFilterMUI({ filter, spellPlayTypes, setSpellPlayTypes }) {
	return (
		<>
			{/* <div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					分類:
				</Typography>
				<SpellPlayTypeFilterMUI
					filter={filter}
					spellPlayTypes={spellPlayTypes}
					setSpellPlayTypes={setSpellPlayTypes}
				/>
			</div> */}
			<SpellPlayTypeFilterMUI
				filter={filter}
				spellPlayTypes={spellPlayTypes}
				setSpellPlayTypes={setSpellPlayTypes}
			/>
		</>
	);
}

export default SpellCardFilterMUI;
