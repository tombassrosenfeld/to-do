import React, { useState, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import { addCardToList } from '../../data/actions/state';


const List = memo(({ list }) => {
	
	
	let { title, id: listID } = list;

	const [ cards, setCards ] = useState(useSelector(state => state.lists.byID[listID].cards_order));

	const [ allCards, setAllCards ] = useState(useSelector(state => state.cards.byID));

	const dispatch = useDispatch();

	const dispatchAddCard = (tempID, listID) => dispatch( addCardToList(tempID, listID, cards), [dispatch] );

	let handleAddCard = () => {
		let tempID = new Date().getTime();
		
		setAllCards( (allCards) => allCards = { 
			...allCards, 
			[tempID]: { 
				id: tempID, 
				title: "", 
				content: "",
			}
		})
		setCards( cards =>  cards = [ ...cards, tempID ] );

		dispatchAddCard(tempID, listID);
	}

	return (
		<div className="list container">
			<h2 className="list__heading">{ title }</h2>
			{	cards &&
				cards.map((cardID) => (
					<Card
						key={ cardID }
						card={ allCards[cardID] }
						listID = { listID }
					/>
				))
			}
			<button onClick={ handleAddCard }>Add card</button>
		</div>
	);
})
export default List;