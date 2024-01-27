import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
// import DeleteIcon from '@mui/icons-material/Delete';

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

export default function BasicModal({ deleteUserTag }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => setOpen(false);

	return (
		<div>
			<Button
				variant="text"
				color="error"
				size="large"
				style={{ color: 'red' }}
				sx={{
					// fontSize: '1rem',
					p: '0.5rem 1rem',
					textTransform: 'none',
					borderRadius: '0.5rem',
				}}
				// startIcon={<DeleteIcon sx={{ color: 'red' }} />}
				disableRipple={true}
				onClick={handleOpen}>
				このMyTagを削除する
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description"
				hideBackdrop>
				<Box sx={ maskStyle }>
					<Box sx={modalStyle}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							sx={{ textAlign: 'center' }}>
							MyTagを削除
						</Typography>
						<Typography
							id="modal-modal-description"
							sx={{ mt: 2, textAlign: 'center' }}>
							一度削除したMyTagは復元できません。削除しますか？
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
								onClick={deleteUserTag}>
								削除する
							</Button>
							<Button
								variant="text"
								color="error"
								sx={{
									mt: '0.8rem',
									textTransform: 'none',
									borderRadius: '0.5rem',
								}}
								disableRipple={true}
								onClick={handleClose}>
								キャンセル
							</Button>
						</div>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}
