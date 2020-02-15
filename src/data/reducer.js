
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

const addCardToList = (state, { cardID, listID, cards}) => {
	return {
		...state,
		lists: {
			...state.lists,
			byID: {
				...state.lists.byID,
				[listID]: {
					...state.lists.byID[listID],
					cards_order: [
						...cards
					]
				}
			}
		}
	}
};

const updateBoards = (state, {boards, allBoards}) => {
	return {
		...state,
		boards: {
			...state.boards,
			byID: {
				...boards
			},
			allIDs: allBoards
		}
	}
}

const setBoardContent = (state, action) => {
	return {
		...state,
		boards: {
			...state.boards,
			byID : {
				...state.boards.byID,
				...action.board,
			}
		},
		lists: {
			...state.lists,
			byID: {
				...state.lists.byID,
				...action.lists,
			}
		},
		cards: {
			...state.cards,
			byID: {
				...state.cards.byID,
				...action.cards,
			}
		}
	}
}

const setLoaded = (state) => ({ ...state, loading: false });

const reducer = (state, action) => {
	switch (action.type) {
		case "UPDATE_CARD" : return updateCardInState(state, action);
		case "CREATE_NEW_CARD" : return addCardToList(updateCardInState(state, action), action);
		case "SET_BOARDS" : return setLoaded(updateBoards(state, action));
		case "LOAD_BOARD" : return setLoaded(setBoardContent(state, action));
		case "SET_LOADING" : return { ...state, loading: true };
		
		default: return state;
	}
};


export default reducer;