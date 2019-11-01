import React from 'react';
import { useSelector } from 'react-redux';
import List from '../List';

function Board({ boardID }) {

	let { title } = useSelector(state => state.boards).filter(board => boardID === board.id)[0];

	let lists = useSelector(state => state.lists).filter( list => list.board_id === boardID );

	return (
		<div className="board container">
			<h1>{ title }</h1>
			<div className="board-list-container">
				{	
					lists.map((list) => (
						<List 
							list={list}
						/>
					))
				}
			</div>
		</div>
	)
}

export default Board;
