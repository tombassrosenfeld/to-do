import axios from '../axios';
import { loadBoards, loadBoard, isLoading } from "./state"


export const getBoards = () => dispatch => {
    console.log("api get boards called");
    dispatch(isLoading());
    axios.get('boards/').then(({ data }) => {
        dispatch( loadBoards(data.data) );
    });
}

export const getBoard = (boardID) => dispatch => {
    console.log("api get single board called");
    dispatch(isLoading());
    axios.get(`boards/${boardID}`).then(({data}) => {
        dispatch( loadBoard(data.data) );
    });
}