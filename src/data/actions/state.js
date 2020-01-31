export const UPDATE_CARD = 'UPDATE_CARD';
export const CREATE_NEW_CARD = 'CREATE_NEW_CARD';
export const SET_BOARDS = 'SET_BOARDS';
export const LOAD_BOARD = 'LOAD_BOARD';
export const SET_LOADING = 'SET_LOADING';


export const isLoading = () => ({ type: SET_LOADING});

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
	
	let boardsOrder = [];
	const boards = data.reduce((boardsObject, board) => {
		boardsObject[board.id] = board;
		boardsOrder.push(board.id);
		return boardsObject;
	}, {} );
	
	return {
		type: SET_BOARDS,
		loading: false,
		boards, 
		allBoards: boardsOrder,
	}
};

export const loadBoard = (data) => {
	console.log(data);
	let { id, title, description, order, lists_order } = data;
	let cards = {};
	const lists = data.lists.reduce((listsObject, list) => {

		listsObject[list.id] = {
			id: list.id,

		}
	}, {} );
	return {

		board: {
			id: {
				id,
				title,
				description,
				order,
				lists: lists_order,
			}
		},

		lists: {

		},


		type: LOAD_BOARD,
		
	}

};
