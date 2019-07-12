import React, { Component } from 'react';
import Header from '../Header'
import Board from "../Board"

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
				<Header/>
				
				<Board
					boardIndex = {0}
				/>

			</div>
		);
	}
}

export default App;
