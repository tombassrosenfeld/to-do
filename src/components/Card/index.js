import React from 'react';
import FieldEditor from '../FieldEditor';
import {updateCard} from '../../data/actions';
import {useDispatch} from 'react-redux';

function Card({card}) {
	const {id: cardID, title, content} = card;

	let update = (fieldName, content) => updateCard(cardID, fieldName, content);

	return (
		<div className="card container">
			<FieldEditor
				content={ title }
				element="h3"
				fieldName="title"
				update={ updateCard }/>

			<FieldEditor 
				content={ content }
				fieldName="content"
				element="p"
				update={ update }/>
		</div>
	);
}

export default Card;