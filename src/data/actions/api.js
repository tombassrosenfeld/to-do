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

export const postCard = ( cardID, order, title) => dispatch => {
    axios.post("tasks/", {
        temp_id: cardID,
        title, 
        order,
    }).then(({data}) => {
        dispatch( cardUpdate(data.data) );
    });
}