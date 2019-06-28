import React, { Component } from 'react';

class Card extends Component {

	constructor(props){
		super(props)
		this.state = {
			title: this.props.title,
			content: this.props.content,
		}

	}

	render() {
	    return (
		    <div className="card container">
		    	<h3>{this.state.title}</h3>
		    	<p>{this.state.content}</p>
		    </div>
	    );
	}
}

export default Card;
