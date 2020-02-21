import React, { useState, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import { addCardToList } from '../../data/actions/state';
import AddItem from '../AddItem/AddItem';
import { postCard } from '../../data/actions/api';


const List = memo(({ list }) => {
	
	let { title, id: listID } = list;

	const [addCard, setAddCard] = useState(false);

	const [ cards, setCards ] = useState(useSelector(state => state.lists.byID[listID].cards_order));

	const [ allCards, setAllCards ] = useState(useSelector(state => state.cards.byID));

	const dispatch = useDispatch();

	const dispatchAddCard = (tempID, order, listID) => dispatch( postCard(tempID, listID, cards), [dispatch] );

	let handleAddCard = useCallback((title) => {
		if ( title ) {
			let tempID = new Date().getTime();
			let order = cards.length
			
			setAllCards( (allCards) => allCards = { 
				...allCards, 
				[tempID]: { 
					id: tempID, 
					title, 
					order,
				}
			})
			setCards( cards =>  cards = [ ...cards, tempID ] );
	
			dispatchAddCard(tempID, order, listID);
		}
	})

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
			<AddItem
				onSubmit={ handleAddCard }/>
		</div>
	);
})
export default List;