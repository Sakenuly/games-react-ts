import Box from '@mui/material/Box';
import React from 'react';
import { Outlet } from 'react-router-dom';

import { MainHeader } from '../components/header';

function MainPage() {
	return (
		<>
			<MainHeader />
			<Box sx={{ display: 'flex', gap: '10px', padding: '0px 50px' }}>
				<Outlet />
			</Box>
		</>
	);
}

export { MainPage };
