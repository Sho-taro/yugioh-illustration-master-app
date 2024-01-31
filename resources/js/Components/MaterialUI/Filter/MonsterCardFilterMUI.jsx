import React from 'react';
import Typography from '@mui/material/Typography';

import FrameTypeFilterMUI from '@/Components/MaterialUI/Filter/FrameTypeFilterMUI';
import RaceFilterMUI from '@/Components/MaterialUI/Filter/RaceFilterMUI';
import AttributeFilterMUI from '@/Components/MaterialUI/Filter/AttributeFilterMUI';
import LevelOrRankFilterMUI from '@/Components/MaterialUI/Filter/LevelOrRankFilterMUI';
import LinkValueFilterMUI from '@/Components/MaterialUI/Filter/LinkValueFilterMUI';

function MonsterCardFilterMUI({
	filter,
	frameTypes,
	setFrameTypes,
	races,
	setRaces,
	attributes,
	setAttributes,
	levelOrRanks,
	setLevelOrRanks,
	linkValues,
	setLinkValues
}) {
	return (
		<>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					枠タイプ:
				</Typography>
				<FrameTypeFilterMUI filter={filter} frameTypes={frameTypes} setFrameTypes={setFrameTypes} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					種族:
				</Typography>
				<RaceFilterMUI filter={filter} races={races} setRaces={setRaces} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					属性:
				</Typography>
				<AttributeFilterMUI filter={filter} attributes={attributes} setAttributes={setAttributes} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					レベル/ランク:
				</Typography>
				<LevelOrRankFilterMUI filter={filter} levelOrRanks={levelOrRanks} setLevelOrRanks={setLevelOrRanks} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					Link-:
				</Typography>
				<LinkValueFilterMUI filter={filter} linkValues={linkValues} setLinkValues={setLinkValues} />
			</div>
		</>
	);
}

export default MonsterCardFilterMUI;
