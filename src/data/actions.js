export const UPDATE_CARD = 'UPDATE_CARD';
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';

export function cardUpdate(cardID, fieldName, content) {
	// console.log(cardID, fieldName, content);
	return { type: UPDATE_CARD, cardID, fieldName, content }
};

export function addCardToList(cardID, listID, fieldName, content) {
	// console.log(cardID, fieldName, content);
	return { type: CREATE_NEW_CARD, cardID, listID, fieldName, content }
};