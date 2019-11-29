

const updateCardInState = (state, { cardID, fieldName, content } ) => {

	let cardContents = state.cards.byID[cardID];
	
	return {
		...state,
		cards: {
			byID: {
				...state.cards.byID,
				[cardID]: {
					...cardContents,
					[fieldName]: content
				}
			}
		}
	}
};

// const addCard = () => {

// };

const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_CARD" : return updateCardInState(state, action);
		default: return state;
	}
};


export default reducer;