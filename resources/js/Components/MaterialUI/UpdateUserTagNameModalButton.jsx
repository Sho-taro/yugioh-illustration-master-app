import * as React from 'react';
import Box from '@mui/material/Box';
import Tooltip from '@mui/material/Tooltip';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import TextField from '@mui/material/TextField';
import EditIcon from '@mui/icons-material/Edit';

import { router } from '@inertiajs/react';

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

function UpdateUserTagNameModalButton({auth, userTag, message, setUpdateMsg, errors}) {
  const [open, setOpen] = React.useState(false);
	const [userTagName, setUserTagName] = React.useState(userTag.name);   // 新しいuserTag名
	const handleOpen = () => setOpen(true);
  const handleClose = () => {
    setUserTagName(userTag.name);
    setUpdateMsg(null);
    setOpen(false);
  };

  const handleInputChange = e => {
		setUserTagName(e.target.value);
  };
  const formSubmit = () => {
		// フォームの送信
		router.put(`/tags/${auth.user.id}/${userTag.id}`, {
			userTagName: userTagName,
		});
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
			<Tooltip title="MyTag名を変更する" arrow>
				<IconButton
					aria-label="edit"
					size="small"
					disableRipple={true}
					sx={{ border: '1px solid gray', borderRadius: '0.5rem' }}
					onClick={handleOpen}>
					<EditIcon fontSize="small" sx={{ color: 'white' }} />
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
							MyTag名を変更
						</Typography>
						<TextField
							label="MyTag名"
							variant="filled"
							placeholder="最大20文字"
							// helperText="(作成済みのMyTagと同一の名前をつけることはできません)"
							fullWidth
							autoFocus
							// required
							error={Boolean(errors.userTagName)}
							name="userTagName"
							value={userTagName}
							onChange={e => handleInputChange(e)}
						/>
						{errors.userTagName && (
							<Typography sx={{ textAlign: 'center', color: 'red', m: '1rem 0' }}>
								エラー: {errors.userTagName}
							</Typography>
						)}
						{message && (
							<Typography sx={{ textAlign: 'center', color: 'green', m: '1rem 0' }}>
								{message}
							</Typography>
						)}
						<div className="flex flex-col">
							<Button
								variant="contained"
								color="error"
								sx={{
									mt: '2rem',
									textTransform: 'none',
									borderRadius: '0.5rem',
								}}
								disabled={userTagName.length === 0 || userTagName === userTag.name}
								disableRipple={true}
								onClick={formSubmit}>
								変更
							</Button>
							<Button
								variant={message ? 'outlined' : 'text'}
								color="error"
								sx={{
									mt: '0.8rem',
									textTransform: 'none',
									borderRadius: '0.5rem',
								}}
								disableRipple={true}
								onClick={handleClose}>
								{message ? '閉じる' : 'キャンセル'}
							</Button>
						</div>
					</Box>
				</Box>
			</Modal>
		</div>
  );
}

export default UpdateUserTagNameModalButton;
