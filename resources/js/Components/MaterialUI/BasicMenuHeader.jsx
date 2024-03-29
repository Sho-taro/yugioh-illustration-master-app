import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';

import { router } from '@inertiajs/react';

export default function BasicMenu({ buttonValue }) {
	const [anchorEl, setAnchorEl] = React.useState(null);
	const open = Boolean(anchorEl);
	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};
	const handleClose = () => {
		setAnchorEl(null);
	};

	return (
		<div>
			{/* Stackタグの中がIcon button */}
			<div
				onClick={handleClick}
				className="px-1 rounded-md hover:bg-gray-800 hover:opacity-80">
				<AccountCircleIcon fontSize="large" sx={{ color: 'white' }} />
				<Button
					size="large"
					id="basic-button"
					sx={{
						color: 'white',
						padding: '0.2rem 0.4rem 0.2rem 0.1rem',
						textTransform: 'none',
						fontSize: '1.5rem',
						fontWeight: '500',
					}}
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					disableRipple={true}>
					{buttonValue}
				</Button>
			</div>
			<Menu
				id="basic-menu"
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'right',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'right',
				}}
				open={open}
				onClose={handleClose}
				MenuListProps={{
					'aria-labelledby': 'basic-button',
				}}>
				<MenuItem onClick={handleClose}>
					<p
						onClick={e => {
							e.preventDefault();
							router.post('logout');
						}}>
						ログアウト
					</p>
				</MenuItem>
			</Menu>
		</div>
	);
}
