import React from 'react';
import Typography from '@mui/material/Typography';
import PeriodFilterMUI from '@/Components/MaterialUI/Filter/PeriodFilterMUI';

function CommonFilterMUI({ filter, periods, setPeriods }) {
	return (
		<>
			<div className="flex items-center">
				{/* <Typography
					component="label"
					sx={{ width: '7rem', mr: '1rem', textAlign: 'right' }}>
					初収録時期:
				</Typography> */}
				<PeriodFilterMUI filter={filter} periods={periods} setPeriods={setPeriods} />
			</div>
		</>
	);
}

export default CommonFilterMUI;