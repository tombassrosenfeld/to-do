import React, { useState } from 'react';

const AddItem = ( { onSubmit } ) => {

    const [addCard, setAddCard] = useState(false);
    const [title, setTitle] = useState("");

    const clickHandler = (e) => {
        e.preventDefault();
        setAddCard(false);
        onSubmit(title);
        setTitle("");
    }

    const handleChange = (e) => {
        setTitle( e.currentTarget.value);
    }

    return (
        <>
        {
            addCard && 
            <form>
                <input value={ title } placeholder="Title" type="text" onChange={ (e) => handleChange(e) }/>
                <input 
                    type="submit"
                    onClick={ e => clickHandler(e) }/>
            </form>
        }
        {
            !addCard &&
            <button onClick={ () => setAddCard(true) }>+</button>
        }
        </>
    )
}

export default AddItem;