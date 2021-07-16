import React, { Fragment, useEffect, useRef, useReducer } from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'updateFieldContent':
      return { ...state, fieldContent: action.fieldContent };
    case 'updateEditState':
      return { ...state, contentEdit: !state.contentEdit };
    default:
      throw new Error();
  }
}  

function FieldEditor(props) {

  let { fieldName, element, update, content } = props;

  // check that content is 
  content = typeof content === 'string' ? content : "";

  const initialState = { contentEdit : false, fieldContent: content };
  const [state, dispatch] = useReducer(reducer, initialState);
  
  let { fieldContent, contentEdit } = state;

  const editRef = useRef();

  let handleContentClick = () => dispatch({ type: "updateEditState" });

  let handleBlur = () => {
    handleContentClick();
    updateFieldValue()
  };

  let handleSubmit = (e) => {
    e.preventDefault();
    handleContentClick();
    updateFieldValue();
  };

  const updateFieldValue = () => {
    update(fieldContent, fieldName);
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
        React.createElement( element, { onClick: handleContentClick }, fieldContent ) :
        // if content is being edited, display input element
        <form className="field-editor" onSubmit={ handleSubmit}>	
            <input data-element={ element } ref={ editRef } className={ fieldName } onBlur={ handleBlur } onFocus={ !contentEdit ? handleContentClick : null } onChange={ (e) => dispatch({ type: "updateFieldContent", fieldContent: e.currentTarget.value }) } type="text" value={ fieldContent }/>
            <label htmlFor={ fieldName } className="hidden">Update { fieldName }</label>
        </form> 
      } 
    </Fragment>
	);
};

export default FieldEditor;