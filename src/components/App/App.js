import React, { Component } from 'react';
import Header from '../Header'
import Board from "../Board"
import Home from "../Home"
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";

import '../../styles/index.scss';


class App extends Component {

	constructor(props){
		super(props)
		this.state = {
			boards: this.props.boards,
		}
	}

	render() {
		return (
			<div className="App container">
				<Router>
					<Header/>

					<Route exact path="/" component={ Home }/>
					<Route path="/boards/:index" render={ ({ match }) => (
						<Board boardIndex={ match.params.index } />
					) } />
				</Router>
			</div>
		);
	}
}

export default App;
