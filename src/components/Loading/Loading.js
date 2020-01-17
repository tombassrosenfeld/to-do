import React from 'react';
import { useSelector } from 'react-redux';

const Loading = ({children}) => {

    let loading = useSelector( state => state.loading );
    
    return !loading ? children : (
         <div>
             <h1>Loading...</h1>
         </div>
    );
}
export default Loading;

