import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Cards } from '../components/cards';
import { SortFilterBlock } from '../components/sort_filter_block';
import { GamesPopup } from '../components/games_popup';
import { mainSelector } from '../functions/main-selector';

function GameCardsPage() {
	const apiKeySelector = mainSelector('apiKeySlice');
	return (
		<>
			<GamesPopup apiKey={apiKeySelector} />
			{apiKeySelector && (
				<Box sx={{ flexGrow: 1, marginRight: '20px' }}>
					<Box
						sx={{
							mb: '30px',
						}}
					>
						<Typography
							sx={{
								fontSize: '72px',
								fontWeight: '700',
							}}
							component='h2'
						>
							New and trending
						</Typography>
						<Box sx={{}} component='span'>
							Based on player counts and release date
						</Box>
					</Box>
					<SortFilterBlock />
					<Cards />
				</Box>
			)}
		</>
	);
}

export { GameCardsPage };
