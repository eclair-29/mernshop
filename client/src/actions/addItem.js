import axios from 'axios';

export const addItem = item => {
    return dispatch => {
        axios
            .post('/api/items', item)
            .then(res => {
                dispatch({
                    type: "ADD_ITEM",
                    item: res.data
                })
            });
    }
};
