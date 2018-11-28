import { combineReducers } from 'redux';
import itemReducer from './itemsReducer';

const rootReducer = combineReducers({
    items: itemReducer
});

export default rootReducer;
