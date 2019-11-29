import React, { useCallback } from 'react';
import FieldEditor from '../FieldEditor';
import { useDispatch } from 'react-redux';
import { cardUpdate } from '../../data/actions';


function Card({ card, listID }) {
	const { id: cardID, title, content } = card;

	const dispatch = useDispatch();

	const dispatchCardUpdate = useCallback((fieldName, content) => 
		dispatch( cardUpdate (cardID, fieldName, content) ),
		[dispatch, cardID, listID]
	);

	return (
		<div className="card container">
			<FieldEditor
				content={ title }
				element="h3"
				fieldName="title"
				update={ dispatchCardUpdate }/>

			<FieldEditor 
				content={ content }
				fieldName="content"
				element="p"
				update={ dispatchCardUpdate }/>
		</div>
	);
}

export default Card;