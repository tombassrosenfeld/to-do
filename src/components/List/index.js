import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';


const List = ({list}) => {
	
	let { title, id: listID } = list;

	const [ cards, setCards ] = useState(useSelector(state => state.cards).filter(card => card.list_id === listID));

	let handleAddCard = () => setCards( cards => [ ...cards, { list_id: listID, title: "", content: "" } ] );

	return (
		console.log(cards) ||
		
		<div className="list container">
			<h2 className="list__heading">{ title }</h2>
			{
				cards.map((card) => (
					console.log(card) ||
					
					<Card
						key={card.id}
						card={ card }
					/>
				))
			}
			<button onClick={handleAddCard}>Add card</button>
		</div>
	);
}
export default List;