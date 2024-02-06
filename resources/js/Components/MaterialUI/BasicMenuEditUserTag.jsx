import * as React from 'react';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Divider from '@mui/material/Divider';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';

import { Link } from '@inertiajs/react';
import { router } from '@inertiajs/react';

export default function BasicMenu({ auth, userTag, releasedCardsNum, setMode, deleteUserTag }) {
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
			<div onClick={handleClick} className="rounded-md">
				<Button
					id="basic-button"
					variant="outlined"
					color="error"
					size="large"
					style={{ color: 'red' }}
					sx={{
						textTransform: 'none',
						border: '1px solid red',
					}}
					aria-controls={open ? 'basic-menu' : undefined}
					aria-haspopup="true"
					aria-expanded={open ? 'true' : undefined}
					endIcon={open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
					disableRipple={true}>
					編集
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
				<MenuItem onClick={handleClose} disableRipple>
					<AddIcon sx={{ color: 'gray', mr: '0.5rem' }} />
					<Link href={`/tags/${auth.user.id}/${userTag.id}/releasedCardUserTags`}>
						<Typography>カードを登録する</Typography>
					</Link>
				</MenuItem>
				{/* 登録カードが0枚であれば、削除ボタンは非表示 */}
				{releasedCardsNum >= 1 && (
					<MenuItem onClick={handleClose} disableRipple>
						<RemoveIcon sx={{ color: 'gray', mr: '0.5rem' }} />
						<button onClick={() => setMode('deleteCards')}>
							<Typography>カードを削除する</Typography>
						</button>
					</MenuItem>
				)}
				{/* <Divider sx={{ my: 0.5 }} /> */}
				{/* <MenuItem onClick={handleClose} disableRipple>
					<EditIcon sx={{ color: 'gray', mr: '0.5rem' }} />
					<p
						onClick={e => {
							e.preventDefault();
							router.post('/logout');
						}}>
						Myタグ名を変更
					</p>
				</MenuItem> */}
				{/* <MenuItem onClick={handleClose} disableRipple>
					<DeleteIcon sx={{ color: 'gray', mr: '0.5rem' }} />
					<form onSubmit={e => deleteUserTag(e)}>
						<button type="submit">
							<Typography>このMyタグを削除</Typography>
						</button>
					</form>
				</MenuItem> */}
			</Menu>
		</div>
	);
}
