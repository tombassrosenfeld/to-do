import React from 'react';
import { useSelector, shallowEqual } from 'react-redux';
import List from '../List';

function Board({ boardID }) {
	console.log(boardID);

	let board = useSelector(state => state.boards.byID[boardID]);
	console.log(board);
	
	
	let { title, lists } = useSelector(state => state.boards.byID[boardID]);
	console.log(title);
	
	let allLists = useSelector(state => state.lists.byID, shallowEqual);

	return ( 
		<div className="board container">
			<h1>{ title }</h1>
			<div className="board-list-container">
				{	
					lists.map(listID => (
						<List 
							key={ listID }
							list={ allLists[listID] }
						/>
					))
				}
			</div>
		</div>
	)
}

export default Board;
