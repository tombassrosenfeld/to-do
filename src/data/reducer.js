

const updateCardInState = (state, { cardID, fieldName, content } ) => {
	
	return {
		...state,
		cards: {
			...state.cards,
			byID: {
				...state.cards.byID,
				[cardID]: {
					...state.cards.byID[cardID],
					[fieldName]: content
				}
			}
		}
	}
};

const addCardToList = (state, { cardID, listID}) => {
	return {
		...state,
		lists: {
			...state.lists,
			byID: {
				...state.lists.byID,
				[listID]: {
					...state.lists.byID[listID],
					cards: [
						...state.lists.byID[listID].cards,
						cardID
					]
				}
			}
		}
	}
};

const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_CARD" : return updateCardInState(state, action);
		case "CREATE_NEW_CARD" : return addCardToList(updateCardInState(state, action), action);
		default: return state;
	}
};


export default reducer;