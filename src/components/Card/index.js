import React, { useState, useEffect, useRef } from 'react';
import { format } from 'util';
import FieldEditor from '../FieldEditor';

function Card(props) {

	const [ title, setTitle ] = useState(props.title);
	const [ titleEdit, setTitleEdit ] = useState(false);

	const [ content, setContent ] = useState(props.content);
	const [ contentEdit, setContentEdit ] = useState(false);

	const editRef = useRef();

	useEffect(() => {
		if (titleEdit) {
		  editRef.current.focus();
		}
	  }, [titleEdit]);

	let handleTitleChange = (e) => setTitle(e.target.value);
	let handleTitleClick = (e) => {
		setTitleEdit(!titleEdit);
		if (titleEdit) {
			editRef.current.focus();
		}
	}


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