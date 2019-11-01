import React from 'react';
import { useSelector } from 'react-redux';

import Card from '../Card';


const List = ({list}) => {
	
	let { title, id: listID } = list;

	let cards = useSelector(state => state.cards).filter(card => card.list_id === listID);

	

	return (
		<div className="list container">
			<h2 className="list__heading">{ title }</h2>
			{
				cards.map((card) => (
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
export default List;