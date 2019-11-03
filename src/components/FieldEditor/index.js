import React, { Fragment, useState, useEffect, useRef } from 'react';


function FieldEditor(props) {

	const [ content, setContent ] = useState(props.content ? props.content : "");
	const [ contentEdit, setContentEdit ] = useState(false);
  const editRef = useRef();

  //prevent error if all attributes aren't defined
  let fieldName = props.fieldName ? props.fieldName : "content";
  let element = props.element ? props.element : "h1";
  let handleContentChange = (e) => setContent(e.target.value);
	let handleContentClick = (e) => setContentEdit(!contentEdit);
  let handleSubmit = (e) => {
    e.preventDefault();
    props.update(fieldName, content);
    editRef.current.blur();
    handleContentClick();
  }
  // ensures that the focus is on the input when it's rendered. 
  useEffect(() => {
    if (contentEdit) {
      editRef.current.focus();
    }
    }, [contentEdit]);
    
	return (
    <Fragment>
			{ 
        !contentEdit && content ? 
        //if content is not being edited, display stipulated HTML element
        React.createElement( element, { onClick: handleContentClick }, content ) :
        // if content is being edited, display input element
        <form className="field-editor" onSubmit={handleSubmit}>	
            <input data-element={element} ref={editRef} id={fieldName} onBlur={handleSubmit} onFocus={!contentEdit ? handleContentClick : null} onChange={handleContentChange} type="text" value={content}/>
            <label htmlFor={fieldName} className="hidden">Update {fieldName}</label>
        </form> 
      } 
    </Fragment>
	);
}

export default FieldEditor;