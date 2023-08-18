import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import { Link } from 'react-router-dom';
import KeyOffIcon from '@mui/icons-material/KeyOff';
import { IconButton } from '@mui/material';
import { SearchHeader } from '../search';
import { useAppDispatch } from '../../hooks/store-hooks';
import { deleteApiKey } from '../../slices/api-key-slice';

function MainHeader() {
	const dispatch = useAppDispatch()
	return (
		<Box
			sx={{
				zIndex: 10000,
				position: 'relative',
				flexGrow: 1,
				marginBottom: '25px',
			}}
		>
			<AppBar
				sx={{
					bgcolor: '#202020',
				}}
				position='static'
			>
				<Toolbar>
					<Link to='/'>
						<Box
							sx={{
								color: '#fff',
								textDecoration: 'none',
								fontSize: '20px',
								fontWeight: '500',
							}}
						>
							HOME
						</Box>
					</Link>
					<SearchHeader />

					<Link to='/'>
						<IconButton
							onClick={() => {
								localStorage.removeItem('key');
								dispatch(deleteApiKey());
								
							}}
							sx={{
								color: '#f21d4c',
							}}
						>
							<KeyOffIcon />
						</IconButton>
					</Link>
				</Toolbar>
			</AppBar>
		</Box>
	);
}

export { MainHeader };
