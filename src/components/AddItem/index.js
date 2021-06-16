import React, { useState, useEffect, useRef } from 'react';

const AddItem = ( { onSubmit, label } ) => {
    const titleFieldRef = useRef();
    const [addCard, setAddCard] = useState(false);
    const [title, setTitle] = useState("");

    const submitHandler = (e) => {
        e.preventDefault();
        setAddCard(false);

        title && onSubmit(title);
        setTitle("");
    }

    const handleChange = (e) => {
        setTitle( e.currentTarget.value );
    }

    const clickHandler = () => {
        setAddCard(true);
    }

    useEffect(() => {
        if ( addCard ) {
            titleFieldRef.current.focus();
        }
    }, [addCard]);

    return (
        <div className="add-item">
        {
            addCard && 
            <form
                onSubmit={ e => submitHandler(e) }>
                <input 
                    value={ title } 
                    placeholder="Title" type="text" 
                    onChange={ (e) => handleChange(e) } 
                    ref={ titleFieldRef }/>
                <input 
                    className="add-item__button"
                    value={ label }
                    type="submit"
                    />
            </form>
        }
        {
            !addCard &&
            <button className="add-item__button" onClick={ clickHandler }>+</button>
        }
        </div>
    )
}

export default AddItem;