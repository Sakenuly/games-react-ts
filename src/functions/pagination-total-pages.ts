function paginationTotalPages(count: number) {
	const cardsPerPage = 20;
	return Math.ceil(count / cardsPerPage);
}
export {paginationTotalPages}
