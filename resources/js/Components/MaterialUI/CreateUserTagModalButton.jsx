import * as React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import AddIcon from '@mui/icons-material/Add';
import Create from '@/Pages/UserTag/Create';


const style = {
	position: 'absolute',
	top: '40%',
	left: '50%',
	transform: 'translate(-50%, -50%)',
	width: 600,
  bgcolor: 'background.paper',
  borderRadius: '0.5rem',
	boxShadow: 24,
	p: 4,
};

function CreateUserTagModalButton({auth, errors}) {
	const [open, setOpen] = React.useState(false);
	const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

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
				MyTagを新規作成
			</Button>
			<Modal
				open={open}
				onClose={handleClose}
				aria-labelledby="modal-modal-title"
				aria-describedby="modal-modal-description">
				<Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2" sx={{textAlign: 'center', mb: '1rem'}}>
            MyTagを新規作成
          </Typography>
					{/* <Typography id="modal-modal-description" sx={{ mt: 2 }}>
						Duis mollis, est non commodo luctus, nisi erat porttitor ligula.
          </Typography> */}
					<Create auth={auth} errors={errors} handleClose={handleClose} />
				</Box>
			</Modal>
		</div>
	);
}

export default CreateUserTagModalButton;