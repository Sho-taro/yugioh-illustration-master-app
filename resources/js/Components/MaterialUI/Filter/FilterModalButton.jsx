import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
// import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import FilterAltIcon from '@mui/icons-material/FilterAlt';

import Filter from '@/Components/MaterialUI/Filter/Filter';

const maskStyle = {
	position: 'fixed',
	top: '0',
	left: '0',
	// transform: 'translate(-50%, -50%)',
	width: '100vw',
	height: '100vh',
	backgroundColor: 'rgba(0, 0, 0, 0.7)',
	// border: '0px solid #000',
	// borderRadius: '0.5rem',
	// boxShadow: 24,
	// p: 4,
};
const modalStyle = {
	position: 'absolute',
	top: '50%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: '55rem',
	maxHeight: '95vh',
	overflowY: 'scroll',   // 要素が縦方向にはみ出した場合、スクロールする
	bgcolor: 'background.paper',
	border: '0px solid #000',
	borderRadius: '0.5rem',
	boxShadow: 24,
	p: 4,
};

function FilterModalButton({
	routeName,
	routePath,
	isPeriodFilterOn,
	filters,
	apiMode, // 'on' または 'off'
	releasedCardsNum,
}) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setOpen(false);
	};

	return (
		<div>
			{/* <Button
				variant="text"
				// color="error"
				size="small"
				style={{ color: 'gray', backgroundColor: 'rgba(30, 35, 50, 1)' }}
				sx={{
					fontSize: '0.8rem',
					// p: '0.5rem 1rem',
					textTransform: 'none',
					borderRadius: '0.5rem',
				}}
				disableRipple={true}
				onClick={handleOpen}>
				MyTag名を変更
			</Button> */}
			<Tooltip title="絞り込み" arrow>
				<IconButton
					aria-label="filter"
					size="normal"
					disableRipple={true}
					sx={
						filters
							? { border: '1px solid tomato', borderRadius: '0.5rem' }
							: { border: '1px solid gray', borderRadius: '0.5rem' }
					}
					onClick={handleOpen}>
					{/* 前回入力した絞り込み条件があれば、アイコンに色をつける */}
					<FilterAltIcon
						fontSize="normal"
						sx={filters ? { color: 'tomato' } : { color: 'gray' }}
					/>
				</IconButton>
			</Tooltip>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				hideBackdrop>
				<Box sx={maskStyle}>
					<Box sx={modalStyle}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							sx={{ textAlign: 'center' }}>
							カードを絞り込む
						</Typography>
						<Filter
							routeName={routeName}
							routePath={routePath}
							isPeriodFilterOn={isPeriodFilterOn}
							filters={filters}
							apiMode={apiMode}
							releasedCardsNum={releasedCardsNum}
							handleClose={handleClose}
						/>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}

export default FilterModalButton;
