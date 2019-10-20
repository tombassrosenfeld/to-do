import React, { Fragment, useState, useEffect, useRef } from 'react';


function FieldEditor(props) {

	const [ content, setContent ] = useState(props.content ? props.content : "");
	const [ contentEdit, setContentEdit ] = useState(false);
    const editRef = useRef();

    //prevent error if all attributes aren't defined
    let fieldName = props.fieldName ? props.fieldName : "content";
    let element = props.element ? props.element : "h1";

    
    // ensures that the focus is on the input when it's rendered. 
    
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
    
    let handleSubmit = (e) => {
        e.preventDefault()
        e.target.blur();
    }

    console.log(content);
    

	return (
        <Fragment>
			{ !contentEdit && content ? 
                //if content is not being edited, display stipulated HTML element
                React.createElement( element, { onClick: handleContentClick }, content ) :
                // if content is being edited, display input element
                <form onSubmit={handleSubmit}>	
                    <div>
                        <input ref={editRef} id="{fieldName}" onBlur={handleContentClick} onChange={handleContentChange} type="text" value={content}/>
                        <label for="{fieldName}" class="hidden">Update {fieldName}</label>
                    </div>
                </form> 
            } 
        </Fragment>
	);
}

export default FieldEditor;