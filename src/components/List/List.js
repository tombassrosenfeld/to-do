import React, { Component } from 'react';

class List extends Component {

	constructor(props){
		super(props)
		this.state: {
			title: this.props.title;

		}

	}

	render() {
	    return (
		    <div className="list">
		    	<h2>{this.state.title}</h2>

		    	
		    </div>
	    );
	}
}

export default List;
