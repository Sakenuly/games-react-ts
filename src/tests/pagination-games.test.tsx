import React from 'react';
import '@testing-library/jest-dom/extend-expect';
import { render, screen } from '@testing-library/react';
import { Provider } from 'react-redux';
import userEvent from '@testing-library/user-event';
import { store } from '../store/store';
import { PaginationGames } from '../components/pagination';

describe('PaginationGames component', () => {
	test('PaginationGames renders', () => {
		render(
			<Provider store={store}>
				<PaginationGames cardsCount={90} />
			</Provider>
		);
		const findPagination = screen.queryByText('1');

		expect(findPagination).toBeInTheDocument();
	});
	test('PaginationGames click second page', () => {
		render(
			<Provider store={store}>
				<PaginationGames cardsCount={90} />
			</Provider>
		);
		const findPagination = screen.queryByText('2');
		if (findPagination) {
			const handleClick = jest.fn();
			findPagination.addEventListener('click', handleClick);
			userEvent.click(findPagination);
			expect(handleClick).toHaveBeenCalledTimes(1);
		}
	});
});
