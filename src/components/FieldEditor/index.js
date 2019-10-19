import React, { Fragment, useState, useEffect, useRef } from 'react';


function FieldEditor(props) {

	const [ content, setContent ] = useState(props.content);
	const [ contentEdit, setContentEdit ] = useState(false);


	const editRef = useRef();

	useEffect(() => {
		if (contentEdit) {
		  editRef.current.focus();
		}
	  }, [contentEdit]);

	let handleContentChange = (e) => setContent(e.target.value);
	let handleContentClick = (e) => {
		setContentEdit(!contentEdit);
		if (contentEdit) {
			editRef.current.focus();
		}
	}

    console.log(content);
    

	return (
        <Fragment>
			{ !contentEdit ? 
	
			<h3 onClick={handleContentClick} >{content}</h3> :

			<form>	
				<div>
					<input ref={editRef} id="title" onBlur={handleContentClick} onChange={handleContentChange} type="text" value={content}/>
					<label for="title" class="hidden">Update Title</label>
				</div>
			</form> } 
        </Fragment>
	);
}

export default FieldEditor;