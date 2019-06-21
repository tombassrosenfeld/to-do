



const reducer = (state, action) => {
	switch (action.type) {
		case "increment" : return { ...state, initialTest: state.initialTest + 1 };

		default: return state;
	}
};


export default reducer;