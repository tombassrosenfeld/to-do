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
	content,
});

export const addCardToList = (cardID, listID, cards) => ({
	type: CREATE_NEW_CARD, 
	cardID, 
	listID, 
	cards,
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
	const { id, title, description, order, lists_order } = data;
	let cards = {};
	let lists = {};

	data.lists.forEach(list => {
		lists[list.id] = {
			id: list.id,
			title: list.title,
			description: list.description,
			order: list.order,
			cards_order: list.tasks_order,
		}

		list.tasks.forEach(task => {
			cards[task.id] = {
				id: task.id,
				title: task.title,
				description: task.description,
				order: task.order,
			}
		})
	});
	
	return {
		type: LOAD_BOARD,

		board: {
			[id]: {
				id,
				title,
				description,
				order,
				lists_order,
			}
		},

		lists: {
			...lists,
		},

		cards: {
			...cards,
		},
	}
};
