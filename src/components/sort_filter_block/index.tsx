import React from 'react';
import { Box } from '@mui/material';
import { SortSelect } from '../sort_select';
import { SortCardsType } from '../sort_cards_type';
import { FilterPlatform } from '../filter_platform';

function SortFilterBlock() {
	return (
		<Box
			sx={{
				display: 'flex',
				justifyContent: 'space-between',
				mb: '30px',
				alignItems: 'flex-end',
			}}
		>
			<Box
				sx={{
					flex: '0 1 300px',
				}}
			>
				<SortSelect />
				<FilterPlatform />
			</Box>
			<SortCardsType />
		</Box>
	);
}

export { SortFilterBlock };
