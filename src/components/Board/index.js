import React, { useEffect } from 'react';
import { useSelector, shallowEqual, useDispatch } from 'react-redux';
import List from '../List';
import Loading from '../Loading/Loading';
import { getBoard } from '../../data/actions/api';

function Board({ boardID }) {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getBoard(boardID)), [dispatch, boardID]);

	const board = useSelector(state => state.boards.byID[boardID]);
	const lists = board.lists_order ? board.lists_order : [];
	
	let allLists = useSelector(state => state.lists.byID, shallowEqual);

	return ( 
		<div className="board container">
			<h1>Board title</h1>
			<Loading>
				<div className="board-list-container">
					<h1>content</h1>
					{	
						lists.map(listID => (
							allLists[listID] &&
							<List 
								key={ listID }
								list={ allLists[listID] }
							/>
						))
					}
				</div> 
			</Loading>
		</div>
	)
}

export default Board;
