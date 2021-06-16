import React from 'react';
import { useSelector } from 'react-redux';
import { Link } from "react-router-dom";
import Loading from '../Loading/Loading';

const Home = () => {

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
