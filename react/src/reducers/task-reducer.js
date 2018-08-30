import { FETCH_TASKS, ADD_TASK, DELETE_TASK } from '../actions';

let allTasks = [];

export default (state = {}, action) => {
    switch (action.type) {
        case FETCH_TASKS:
            return { ...state, tasks: allTasks };
        case ADD_TASK:
            allTasks.push(action.task);
            return { ...state, tasks: allTasks };
        case DELETE_TASK:
            allTasks = allTasks.filter(task => {
                return task.id !== action.id;
            })
            return {
                ...state, tasks: allTasks
            };
        default:
            return state;
    }
}