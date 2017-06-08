export function selectBook(book) {
// selectBook is an ActionCreator. It needs to return an action,
// an object with a TYPE property.
	return {
		type: 'BOOK_SELECTED',
		payload: book
	}
}