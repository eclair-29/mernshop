import axios from 'axios';

export const deleteItem = id => {
    return dispatch => {
        axios
            .delete(`/api/items/${id}`)
            .then(() => {
                dispatch({
                    type: "DELETE_ITEM",
                    id
                })
            })
    }
};
