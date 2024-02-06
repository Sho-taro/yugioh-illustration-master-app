import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Create from '@/Pages/UserTag/Create';

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
	width: '28rem',
	bgcolor: 'background.paper',
	border: '0px solid #000',
	borderRadius: '0.5rem',
	boxShadow: 24,
	p: 4,
};

function CreateUserTagModalButton({ auth, message, setStoreMsg, errors }) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
	const handleClose = () => {
		setStoreMsg(null);
		setOpen(false);
	};

	return (
		<div>
			<Button
				onClick={handleOpen}
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
				Myタグを新規作成
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={maskStyle}>
					<Box sx={modalStyle}>
						<Typography
							id="modal-modal-title"
							variant="h6"
							component="h2"
							sx={{ textAlign: 'center', mb: '2rem' }}>
							Myタグを新規作成
						</Typography>
						<Create
							auth={auth}
							message={message}
							errors={errors}
							handleClose={handleClose}
						/>
					</Box>
				</Box>
			</Modal>
		</div>
	);
}

export default CreateUserTagModalButton;
