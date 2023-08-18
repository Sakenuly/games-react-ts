import * as React from 'react';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import { useState } from 'react';
import { saveApikey } from '../../slices/api-key-slice';
import { useAppDispatch } from '../../hooks/store-hooks';

function GamesPopup({ apiKey }: { apiKey: string }) {
	const key = 'f8e3bd1d1a9d4b9b8e2cc3032863d207';
	const apiKeyBoolean = apiKey === null;
	const [inputValue, setInputValue] = useState('');
	const dispatch = useAppDispatch();
	const handleClose = () => {
		if (inputValue === key) {
			dispatch(saveApikey(inputValue));
		}
	};
	function handleInputChange(e: React.ChangeEvent<HTMLInputElement>) {
		setInputValue(e.target.value);
	}
	return (
		<Dialog sx={{ bgcolor: '#303030' }} open={apiKeyBoolean}>
			<DialogTitle sx={{ bgcolor: '#202020', color: '#fff' }}>Вход</DialogTitle>
			<DialogContent sx={{ bgcolor: '#202020' }}>
				<DialogContentText sx={{ color: '#fff' }}>
					Для появления списка игр введите ключ
					(f8e3bd1d1a9d4b9b8e2cc3032863d207)
				</DialogContentText>
				<TextField
					sx={{
						'.css-l4u8b9-MuiInputBase-root-MuiInput-root:after': {
							borderBottom: '2px solid #f21d4c',
						},
						'>label, &:after': { color: '#fff' },
					}}
					onChange={handleInputChange}
					autoFocus
					margin='dense'
					id='key'
					label='Ключ'
					type='text'
					fullWidth
					variant='standard'
				/>
			</DialogContent>
			<DialogActions sx={{ bgcolor: '#202020' }}>
				<Button sx={{ color: '#fff' }} onClick={handleClose}>
					Войти
				</Button>
			</DialogActions>
		</Dialog>
	);
}

export { GamesPopup };
