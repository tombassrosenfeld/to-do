import React, { Component, } from 'react';

import List from '../List';


class Board extends Component {

	constructor(props){
		super(props)

		this.state =  {
			boardTitle: this.props.boards[this.props.boardIndex].title,
			lists: this.props.boards[this.props.boardIndex].lists,
		}

		// this.handleClick = this.handleClick.bind(this);
	}

	// handleClick() {
	// 	this.props.handleIncrement();
	// }

	render() {
		// console.log(boards);
	    return (
		    <div className="board container">

		    	<h1>{ this.state.boardTitle }</h1>
		    	

		    	<div className="board-list-container">
		    		{
						this.state.lists.map((list) => console.log("hello") || (
				    		<List 
				    			key={list.title}
				    			title={list.title}
				    			cards={list.cards}
				    		/>
						))
					}
		    	</div>
		    	
		    	
		    </div>
	    );
	}
}

export default Board;
