export const fetchCat = () => dispatch => {
	dispatch(fetchBoardRequest());
	fetch('/board')
		.then(res => {
			if (!res.ok) {
				return Promise.reject(res.statusText);
			}
			return res.json();
		})
		.then(board => {
			dispatch(fetchCatSuccess(board));
		})
		.catch(err => {
			dispatch(fetchCatError(err));
		});
};
