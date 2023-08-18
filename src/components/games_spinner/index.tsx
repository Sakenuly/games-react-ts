import * as React from 'react';
import Stack from '@mui/material/Stack';
import LinearProgress from '@mui/material/LinearProgress';
import { useGetGamesQuery } from '../../api/games_api/games-api';
import { generateCardsUrl } from '../../functions/generate-cards-url';

const spinnerColor = {
	bgcolor: '#202020',
	'>span': {
		bgcolor: '#f21d4c',
	},
};

function GamesSpinner(): JSX.Element | null {
	const { isLoading } = useGetGamesQuery(generateCardsUrl());
	if (isLoading) {
		return (
			<Stack sx={{ width: '100%', color: 'grey.500' }} spacing={2}>
				<LinearProgress sx={spinnerColor} />
				<LinearProgress
					sx={{
						bgcolor: '#f21d4c',
						'>span': {
							bgcolor: '#202020',
						},
					}}
				/>
				<LinearProgress sx={spinnerColor} />
			</Stack>
		);
	}
	return null;
}

export { GamesSpinner };
