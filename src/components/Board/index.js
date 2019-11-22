import React from 'react';
import { useSelector } from 'react-redux';
import List from '../List';

function Board({ boardID }) {

	let {title, lists} = useSelector(state => state.boards.byID[boardID]);

	let allLists = useSelector(state => state.lists.byID);

	return ( 
		<div className="board container">
			<h1>{ title }</h1>
			<div className="board-list-container">
				{	
					lists.map((listID) => (
						<List 
							key={listID}
							list={allLists[listID]}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Board;
