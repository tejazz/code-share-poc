import { combineReducers } from 'redux';

// calling the default reducer to create a link
import tasksReducer from './task-reducer';

const rootReducers = combineReducers({
    // add reducer files references here
    tasks: tasksReducer
});

export default rootReducers;