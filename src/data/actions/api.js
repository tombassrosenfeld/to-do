import axios from '../axios';
import { loadBoards, loadBoard, isLoading, cardUpdate } from "./state"


export const getBoards = () => dispatch => {
    dispatch(isLoading());
    axios.get('boards/').then(({ data }) => {
        dispatch( loadBoards(data.data) );
    });
}

export const getBoard = (boardID) => dispatch => {
    dispatch(isLoading());
    axios.get(`boards/${boardID}`).then(({data}) => {
        dispatch( loadBoard(data.data) );
    });
}

// need to create new card in API with placeholder values for title and description
export const postCard = ( cardID, order, fieldName, content) => dispatch => {
    axios.post("tasks/", {
        id: cardID,
        [fieldName]: content, 
        order,
    }).then(({data}) => {
        dispatch( cardUpdate(data.data) );
    });
}