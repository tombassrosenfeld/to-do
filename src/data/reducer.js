

const updateCard = (state, { cardID, listID, fieldName, content } ) => {
	let cardContents = state.cards.byID[cardID];
	
	let cards = {
		...state.cards.byID,
		[cardID]: {
			...cardContents,
			[fieldName]: content
		}
	};
	// console.log(cards);
	// console.log(state);
	
	return {
		...state,
		cards: {
			byID: {
				...cards
			}
		},
		lists: {
			byID: {
				[listID] : {
					cards: [...state.lists.byID[listID].cards, cardID]
				}
			}
		}
	}
}

const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_CARD" : return updateCard(state, action);
		default: return state;
	}
};


export default reducer;