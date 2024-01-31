import React from 'react'
import Typography from '@mui/material/Typography';

import FrameTypeFilterMUI from '@/Components/MaterialUI/Filter/FrameTypeFilterMUI';
import RaceFilterMUI from '@/Components/MaterialUI/Filter/RaceFilterMUI';
import AttributeFilterMUI from '@/Components/MaterialUI/Filter/AttributeFilterMUI';

function MonsterCardFilterMUI({filter}) {
  return (
		<>
			<div className="mb-4 flex items-center">
				<Typography component="label" sx={{ width: '5rem', mr: '1rem' }}>
					枠タイプ:
				</Typography>
				<FrameTypeFilterMUI filter={filter} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography component="label" sx={{ width: '5rem', mr: '1rem' }}>
					種族:
				</Typography>
				<RaceFilterMUI filter={filter} />
			</div>
			<div className="mb-4 flex items-center">
				<Typography component="label" sx={{ width: '5rem', mr: '1rem' }}>
					属性:
				</Typography>
				<AttributeFilterMUI filter={filter} />
			</div>
		</>
  );
}

export default MonsterCardFilterMUI