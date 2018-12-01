const initialState = {
    items: [
        { id: 1, name: "Pasta" },
        { id: 2, name: "Vinegar" },
    ]
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

        case "DELETE_ITEM":
            const filteredID = state.items.filter(item => {
                return item.id !== action.id
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
