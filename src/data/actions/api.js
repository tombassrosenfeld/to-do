import axios from '../axios';
import { loadBoards } from "./state"


export const getBoards = () => dispatch => {
    console.log("called");
    
    axios.get('boards/').then(({ data }) => {
        dispatch( loadBoards(data.data) );
    });
}