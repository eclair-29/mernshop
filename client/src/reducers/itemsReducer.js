const initialState = {
    items: []
};

const itemReducer = (state = initialState, action) => {
    switch (action.type) {
        case "ADD_ITEM":
            action.item.id = Math.random();
            const items = [...state.items, action.item];
            console.log(items);
            return {
                ...state,
                items
            };

        case "FETCH_ITEMS":
            return {
                ...state,
                items: action.payload
            }

        case "DELETE_ITEM":
            const filteredID = state.items.filter(item => {
                return item._id !== action.id
            });

            return {
                ...state,
                items: filteredID
            }

        default:
            return state;
    }
};

export default itemReducer;
