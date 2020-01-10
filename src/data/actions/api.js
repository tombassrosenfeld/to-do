import axios from '../axios';
import { loadBoards } from "./state"


export const getBoards = () => dispatch => {
    
    axios.get('boards/').then(({ data }) => {
        console.log(data.data);
        dispatch( loadBoards(data.data) );
    });
}