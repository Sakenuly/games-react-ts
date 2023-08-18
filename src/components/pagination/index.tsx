import * as React from 'react';
import Pagination from '@mui/material/Pagination';
import { useAppDispatch } from '../../hooks/store-hooks';
import { setPagination } from '../../slices/pagination-slice';
import { mainSelector } from '../../functions/main-selector';
import { paginationTotalPages } from '../../functions/pagination-total-pages';

function PaginationGames({ cardsCount }: { cardsCount: number }) {
	const dispatch = useAppDispatch();
	const paginationPageSelector = mainSelector(
		'paginationSlice',
		'paginationPage'
	);



	function handlePaginationChange(
		e: React.ChangeEvent<unknown>,
		value: number
	) {
		dispatch(setPagination(value));
	}
	return (
		<Pagination
			sx={{
				paddingBottom: '30px',
				'.MuiPaginationItem-root': {
					color: '#fff',
				},
			}}
			onChange={handlePaginationChange}
			page={paginationPageSelector}
			count={paginationTotalPages(cardsCount)}
		/>
	);
}

export { PaginationGames };
