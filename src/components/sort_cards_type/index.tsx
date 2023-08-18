import React from 'react';
import { ViewModule, ViewDay } from '@mui/icons-material/';
import { Box, Typography, IconButton } from '@mui/material';
import { useAppDispatch } from '../../hooks/store-hooks';
import {
	cardsType,
	setDisplayOption,
} from '../../slices/display-options-slice';

function SortCardsType() {
	const dispatch = useAppDispatch();
	function handleDisplayOptionsClick(e: React.MouseEvent<HTMLButtonElement>) {
		const displayType = e.currentTarget.getAttribute('data-option-type');
		dispatch(setDisplayOption(displayType));
	}
	return (
		<Box>
			<Typography>Display options: </Typography>
			<IconButton
				sx={{
					color: '#f21d4c',
				}}
				onClick={handleDisplayOptionsClick}
				data-option-type={cardsType.row}
			>
				<ViewModule />
			</IconButton>

			<IconButton
				sx={{
					color: '#f21d4c',
				}}
				onClick={handleDisplayOptionsClick}
				data-option-type={cardsType.column}
			>
				<ViewDay />
			</IconButton>
		</Box>
	);
}

export { SortCardsType };
