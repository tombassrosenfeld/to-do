import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Loading from '../Loading/Loading';
import { getBoards } from '../../data/actions/api';



const Home = () => {

	let dispatch = useDispatch();
	useEffect(() => dispatch(getBoards()), [dispatch]);

	let boards = useSelector(state => state.boards);

	return (
		<div className="home container">
			<h2>Boards</h2>
			<Loading>
				<ul>
					{
						boards.allIDs.map((boardID, i)=>(
							<li 
								key={ boardID }
								className="board-nav-item"
							>
								<Link
								to={`/boards/${boardID}`}
								>{ boards.byID[boardID].title }</Link>
							</li>
						))
					}
				</ul>
			</Loading>
		</div>
	);
}

export default Home;
