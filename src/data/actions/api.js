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

export const postCard = ({ order, title, listID }) => dispatch => {
    axios.post("tasks/", {
        title, 
        order,
        task_list_id: listID,
        description: "",
    }).then(({data}) => {
        dispatch( cardUpdate(data.data) );
    }).catch(error => console.log(error));
}

export const putCard = ({id, description, title, order, listID: task_list_id}) => dispatch => {
    
    axios.put(`tasks/${id}`,{
        description,
        title, 
        order,
        task_list_id,
    }).then(({data}) => {
        dispatch( cardUpdate(data.data) );
    }).catch(error => console.log(error));

}