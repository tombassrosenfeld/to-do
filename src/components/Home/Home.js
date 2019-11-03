import React, { Component } from 'react';
import { Link } from "react-router-dom";

class Home extends Component {

	constructor(props){
		super(props)

		this.state = {
			boards: this.props.boards,
		}

	}

	render() {

	    return (
		    <div className="home container">

		    	<h2>Boards</h2>

		    	<ul>
			    	{
			    		this.state.boards.map((board, i)=>(
			    			<li 
			    				key={ board.title }
			    				class="board-nav-item"
			    			>
			    				<Link
			    				to={`/boards/${board.id}`}
			    				>{ board.title }</Link>
			    			</li>
			    		))
			    	}
		    	</ul>
		    </div>
	    );
	}
}

export default Home;
