export const UPDATE_CARD = 'UPDATE_CARD';
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const SET_BOARDS = 'SET_BOARDS';

export const cardUpdate = (cardID, fieldName, content) => ({
	type: UPDATE_CARD, 
	cardID, 
	fieldName, 
	content
});

export const addCardToList = (cardID, listID, fieldName, content) => ({
	type: CREATE_NEW_CARD, 
	cardID, 
	listID, 
	fieldName, 
	content 
});

export const loadBoards = ( data ) => {
	
	let boards = data.reduce((boardsObject, board) => {
		boardsObject[board.id] = board;
		return boardsObject;
	}, {});

	let allBoards = data.map(board => board.id)
	
	return {
		type: SET_BOARDS,
		loading: false,
		boards, 
		allBoards,
	}
};
