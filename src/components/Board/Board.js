import React, { Component, } from 'react';

import List from '../List';


class Board extends Component {

	constructor(props){
		super(props)

		this.state =  {
			board: this.props.boards.filter(board => board.id === this.props.boardID),
			// boardTitle: this.state.board.title,
			lists: this.props.lists.filter(list => list.board_id === this.props.boardID),
		}

		// this.handleClick = this.handleClick.bind(this);
	}

	// handleClick() {
	// 	this.props.handleIncrement();
	// }

	render() {
		
	    return ( console.log(this.state.lists) ||
		    <div className="board container">

		    	<h1>{ this.state.boardTitle }</h1>
		    	

		    	<div className="board-list-container">
		    		{
						this.state.lists.map((list) => (
				    		<List 
				    			key={list.title}
				    			title={list.title}
				    			// cards={list.cards}
				    		/>
						))
					}
		    	</div>
		    	
		    	
		    </div>
	    );
	}
}

export default Board;
