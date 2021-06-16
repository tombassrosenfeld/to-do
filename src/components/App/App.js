import React, { useEffect } from 'react';
import Header from '../Header'
import Board from "../Board"
import Home from "../Home/Home"
import { useDispatch } from 'react-redux';
import { getBoards } from '../../data/actions/api';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import '../../styles/index.scss';

const App = () => {
	const dispatch = useDispatch();
	useEffect(() => dispatch(getBoards()), [dispatch]);

	return (
		<div className="App container">
			<Router>
				<Header/>
					<Route exact path="/" component={ Home }/>
					<Route path="/boards/:id" render={ ({ match }) => (
						<Board boardID={ +match.params.id } />
					) } />
			</Router>
		</div>
	);
}

export default App;
