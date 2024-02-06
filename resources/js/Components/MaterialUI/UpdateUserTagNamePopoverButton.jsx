import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//以下を追加
import EditIcon from '@mui/icons-material/Edit';
import Box from '@mui/material/Box';

export default function BasicPopover({}) {
	const [anchorEl, setAnchorEl] = React.useState(null);

	const handleClick = event => {
		setAnchorEl(event.currentTarget);
	};

	const handleClose = () => {
		setAnchorEl(null);
	};

	const open = Boolean(anchorEl);
	const id = open ? 'simple-popover' : undefined;

	return (
		<div>
			{/* <Button
				aria-describedby={id}
				onClick={handleClick}
				variant="outlined"
				color="error"
				size="large"
				style={{ color: 'red' }}
				sx={{
					textTransform: 'none',
					border: '1px solid red',
				}}
				disableRipple
				startIcon={<AddIcon sx={{ color: 'red' }} />}>
				MyTagを新規作成
			</Button> */}
			<div
				className="ml-4 mt-2 px-2 py-1 flex items-center cursor-pointer rounded-md hover:bg-gray-800"
				onClick={handleClick}>
				<EditIcon fontSize="small" sx={{ color: 'gray' }} />
				<Typography variant="p" sx={{ fontSize: '0.8rem' }}>
					MyTag名を編集
				</Typography>
			</div>
			<Popover
				id={id}
				open={open}
				onClose={handleClose}
				anchorEl={anchorEl}
				anchorOrigin={{
					vertical: 'bottom',
					horizontal: 'left',
				}}
				transformOrigin={{
					vertical: 'top',
					horizontal: 'left',
				}}>
				<Box sx={{ width: '28rem', p: 4 }}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						sx={{ textAlign: 'center', mb: '1rem' }}>
						MyTagを新規作成
					</Typography>
				</Box>
			</Popover>
		</div>
	);
}