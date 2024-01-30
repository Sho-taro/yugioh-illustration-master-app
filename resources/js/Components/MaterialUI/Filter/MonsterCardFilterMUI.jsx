import React from 'react'
import Typography from '@mui/material/Typography';

import FrameTypeFilterMUI from '@/Components/MaterialUI/Filter/FrameTypeFilterMUI';

function MonsterCardFilterMUI({filter}) {
  return (
		<>
			<div className="mb-4 flex items-center">
				<Typography component="label" sx={{ width: '5rem', mr: '1rem' }}>
					枠タイプ:
        </Typography>
        <FrameTypeFilterMUI filter={filter} />
			</div>
		</>
  );
}

export default MonsterCardFilterMUI