import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import List from '../List';
import Loading from '../Loading/Loading';
import { getBoard } from '../../data/actions/api';

function Board({ boardID }) {

	let board = useSelector(state => state.boards.byID[boardID]);
	let dispatch = useDispatch();
	useEffect(() => dispatch(getBoard(boardID)), [dispatch]);

	// let { title, lists } = useSelector(state => state.boards.byID[boardID]);

	
	// let allLists = useSelector(state => state.lists.byID, shallowEqual);

	return ( 
		<div className="board container">
			<h1>Board title</h1>
			<Loading>
				<p>Content</p>
				{/* <div className="board-list-container">
					{	
						lists.map(listID => (
							<List 
								key={ listID }
								// list={ allLists[listID] }
							/>
						))
					}
				</div> */}
			</Loading>
		</div>
	)
}

export default Board;
