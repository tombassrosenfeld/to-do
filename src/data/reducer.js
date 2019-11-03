

// const updateCard = ({cards}, action) => {
// let updatedCard = cards.filter(card => card.id === card_id)[0]
// }

const reducer = (state, action) => {
	switch (action.type) {
		case "updateCard" : console.log("well that worked");
		;
		break;
		default: return state;
	}
};


export default reducer;