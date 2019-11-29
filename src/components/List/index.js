import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Card from '../Card';

const List = ({ list }) => {
	
	
	let { title, id: listID } = list;

	const [ cards, setCards ] = useState(useSelector(state => state.lists.byID[listID].cards));

	const [ allCards, setAllCards ] = useState(useSelector(state => state.cards.byID));

	console.log(listID);

	// const dispatchAddCard = (tempID, listID) => dispatch({ type: "ADD_CARD", tempID, listID });

	let handleAddCard = () => {
		let tempID = new Date().getTime();
		// console.log(cards);
		
		setAllCards( (allCards) => allCards = { 
			...allCards, 
			[tempID]: { 
				id: tempID, 
				title: "", 
				content: ""
			}
		})
		setCards( cards =>  cards = [ ...cards, tempID ] );

		// dispatchAddCard(tempID, listID);
	}

	return (
		<div className="list container">
			<h2 className="list__heading">{ title }</h2>
			{
				cards.map((cardID) => (
					<Card
						key={cardID}
						card={ allCards[cardID] }
						listID = { listID }
					/>
				))
			}
			<button onClick={handleAddCard}>Add card</button>
		</div>
	);
}
export default List;