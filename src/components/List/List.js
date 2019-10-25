import React, { Component } from 'react';

import Card from '../Card';

class List extends Component {

	constructor(props){
		super(props)
		this.state = {
			title: this.props.title,
			cards: this.props.cards,
		}
	}

	render() {
	    return (
		    <div className="list container">
		    	<h2 className="list__heading">{this.state.title}</h2>
		    	{
		    		this.state.cards.map((card) => (
		    			<Card
		    				title={card.title}
							content={card.content}
							id={card.id}
		    			/>
		    		))
		    	}
		    </div>
	    );
	}
}

export default List;
