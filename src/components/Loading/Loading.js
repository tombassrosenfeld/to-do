import React from 'react';
import { useSelector } from 'react-redux';

const Loading = (children) => {

    let loaded = useSelector( state => state.loaded );

    return loaded ? children : (
         <div>
             <h1>Loading...</h1>
         </div>
    );
}
export default Loading;

