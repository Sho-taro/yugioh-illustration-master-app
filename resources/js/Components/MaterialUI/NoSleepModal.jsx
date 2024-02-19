import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function NoSleepModal({open, handleClose, enableNoSleep }) {
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
		width: '20rem',
		bgcolor: 'background.paper',
		border: '0px solid #000',
		borderRadius: '0.5rem',
		boxShadow: 24,
		p: 4,
  };

  return (
		<Modal
			open={open}
			onClose={handleClose}
			aria-labelledby="modal-modal-title"
			aria-describedby="modal-modal-description"
			hideBackdrop // デフォルトのマスクウィンドウを非表示
		>
			<Box sx={maskStyle}>
				<Box sx={modalStyle}>
					<Typography
						id="modal-modal-title"
						variant="h6"
						component="h2"
						sx={{ textAlign: 'center' }}>
						アニメーション中は、ディスプレイの自動スリープ機能がOFFになります。
					</Typography>
					<div className="flex flex-col">
						<Button
							variant="contained"
							color="error"
							sx={{
								mt: '2rem',
								textTransform: 'none',
								borderRadius: '0.5rem',
							}}
							disableRipple={true}
							onClick={enableNoSleep}>
							OK
						</Button>
					</div>
				</Box>
			</Box>
		</Modal>
  );
}

export default NoSleepModal