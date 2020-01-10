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
	console.log("data");

	return {
		type: SET_BOARDS,
		loaded: true,
		boards: data, 
	}

};
