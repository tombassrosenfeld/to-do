import React, { useCallback, memo } from 'react';
import FieldEditor from '../FieldEditor';
import { useDispatch } from 'react-redux';
// import { cardUpdate } from '../../data/actions/state';
import { putCard } from '../../data/actions/api';


const Card = memo(({ card, listID }) => {
	const { title, description } = card;

	const dispatch = useDispatch();
	
	const handleCardUpdate = useCallback((content, fieldName) => {

		card[fieldName] = content;
		console.log(card[fieldName]);
		const dispatchUpdateCard = () => {
			const data = {...card, listID };
			console.log(data);
			dispatch( putCard(data), [card, listID])
		};
		dispatchUpdateCard();
	}, [dispatch,	card, listID]);

	return (
		<div className="card container">
			<FieldEditor
				content={ title }
				element="h3"
				fieldName="title"
				update={ handleCardUpdate }/>

			<FieldEditor 
				content={ description }
				fieldName="description"
				element="p"
				update={ handleCardUpdate }/>
		</div>
	);
});

export default Card;