import React from 'react';
import Typography from '@mui/material/Typography';
import TrapPlayTypeFilterMUI from '@/Components/MaterialUI/Filter/TrapPlayTypeFilterMUI';

function TrapCardFilterMUI({filter}) {
  return (
		<>
			<div className="mb-4 flex items-center">
				<Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					分類:
				</Typography>
				<TrapPlayTypeFilterMUI filter={filter} />
			</div>
		</>
  );
}

export default TrapCardFilterMUI;
