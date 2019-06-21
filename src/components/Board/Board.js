import React, { Component } from 'react';

class Board extends Component {

	constructor(props){
		super(props)

		this.state =  {
			lists: this.props.lists,
			boardTitle: this.props.boardTitle,
			lists: this.props.lists,
		}
		

		// this.handleClick = this.handleClick.bind(this);
	}

	// handleClick() {
	// 	this.props.handleIncrement();
	// }

	render() {
		// console.log(boards);
	    return (
		    <div className="board">

		    	<h1>{ this.state.boardTitle }</h1>

		    	{
		    		this.state.lists.map((list) => (
			    		<div key={list.title}>
			    			<h2>{list.title}</h2>
			    			<div>
			    				{
			    					list.cards.map((card) => (
			    						<h3>card.title</h3>
			    						<p>card.content

			    					))
			    				}
			    			</div>
			    		</div>

		    		))
	    		}
		    	
		    	
		    </div>
	    );
	}
}

export default Board;
