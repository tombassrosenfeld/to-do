import axios from '../axios';
import { loadBoards, loadBoard, isLoading } from "./state"


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