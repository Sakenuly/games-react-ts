import { paginationTotalPages } from '../functions/pagination-total-pages';

test('number / 20', () => {
	expect(paginationTotalPages(40)).toBe(2);
});
