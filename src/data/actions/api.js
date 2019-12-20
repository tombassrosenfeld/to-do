import axios from '../axios';


export const getBoards = () => dispatch => {
    console.log("dispatched");
    
    axios.get('boards/').then(({ data }) => {
        console.log(data.data);
        // dispatch()
    });
}