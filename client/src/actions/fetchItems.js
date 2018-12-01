import axios from 'axios';

export const fetchItems = () => {
    return dispatch => {
        axios
            .get('/api/items')
            .then(res => {
                dispatch({
                    type: "FETCH_ITEMS",
                    payload: res.data
                });
            })
    }
};
