import React, { useState, useCallback, memo } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import Card from '../Card';
import AddItem from '../AddItem';
import { postCard } from '../../data/actions/api';


const List = memo(({ list }) => {
	
	let { title, id: listID } = list;

	const [ cards, setCards ] = useState(useSelector(state => state.lists.byID[listID].cards_order));

	const [ allCards, setAllCards ] = useState(useSelector(state => state.cards.byID));

	const dispatch = useDispatch();

	const dispatchAddCard = (data) => dispatch( postCard(data), [dispatch] );

	let handleAddCard = useCallback((title) => {
		
		if ( title ) {
			let temp_id = new Date().getTime();
			let order = cards.length + 1;
			
			setAllCards( (allCards) => allCards = { 
				...allCards, 
				[temp_id]: { 
					id: temp_id, 
					title, 
					order,
				}
			})
			setCards( cards =>  cards = [ ...cards, temp_id ] );

			dispatchAddCard({ title, order, listID });
		}
	}, [listID, cards, dispatch]);

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
				onSubmit={ handleAddCard }
				label="Add Card" />
		</div>
	);
})
export default List;