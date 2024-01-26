import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';

//以下を追加
import AddIcon from '@mui/icons-material/Add';
import Box from '@mui/material/Box';
import Create from '@/Pages/UserTag/Create';

export default function BasicPopover({auth, errors}) {
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
			<Button
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
			</Button>
			<Popover
				id={id}
				open={open}
				anchorEl={anchorEl}
				onClose={handleClose}
				anchorOrigin={{
					vertical: 'bottom',
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
					<Create auth={auth} errors={errors} handleClose={handleClose} />
				</Box>
			</Popover>
		</div>
	);
}
