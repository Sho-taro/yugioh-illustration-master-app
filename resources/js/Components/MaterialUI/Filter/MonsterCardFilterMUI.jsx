import React from 'react'
import Typography from '@mui/material/Typography';

import FrameTypeFilterMUI from '@/Components/MaterialUI/Filter/FrameTypeFilterMUI';
import RaceFilterMUI from '@/Components/MaterialUI/Filter/RaceFilterMUI';
import AttributeFilterMUI from '@/Components/MaterialUI/Filter/AttributeFilterMUI';
import LevelOrRankFilterMUI from '@/Components/MaterialUI/Filter/LevelOrRankFilterMUI';
import LinkValueFilterMUI from '@/Components/MaterialUI/Filter/LinkValueFilterMUI';

function MonsterCardFilterMUI({filter}) {
  return (
		<>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					枠タイプ:
				</Typography>
				<FrameTypeFilterMUI filter={filter} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					種族:
				</Typography>
				<RaceFilterMUI filter={filter} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					属性:
				</Typography>
				<AttributeFilterMUI filter={filter} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					レベル/ランク:
				</Typography>
				<LevelOrRankFilterMUI filter={filter} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					Link-:
				</Typography>
				<LinkValueFilterMUI filter={filter} />
			</div>
		</>
  );
}

export default MonsterCardFilterMUI