import React from 'react';
import FieldEditor from '../FieldEditor';

function Card({id: cardID, title, content}) {


	console.log(cardID);
	

	return (
		<div className="card container">
			<FieldEditor
				content={title}
				element="h3"
				fieldName="title"/>
			<FieldEditor 
				content={content}
				fieldName="content"
				element="p"/>
		</div>
	);
}

export default Card;