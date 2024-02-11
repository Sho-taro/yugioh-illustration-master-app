import * as React from 'react';
// import Button from '@mui/material/Button';
import Tooltip from '@mui/material/Tooltip';
import KeyboardArrowLeftRoundedIcon from '@mui/icons-material/KeyboardArrowLeftRounded';
import { Link } from '@inertiajs/react';

export default function ArrowTooltips({href, title = "戻る"}) {
	return (
		<Tooltip title={title} arrow>
			<Link href={href} className="pb-1 rounded-full hover:bg-gray-800">
				<KeyboardArrowLeftRoundedIcon fontSize="large" sx={{ color: 'white' }} />
			</Link>
		</Tooltip>
	);
}