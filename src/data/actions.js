export const UPDATE_CARD = 'UPDATE_CARD';

export function cardUpdate(cardID, fieldName, content) {
	console.log(cardID, fieldName, content);
	return { type: UPDATE_CARD, cardID, fieldName, content }
};