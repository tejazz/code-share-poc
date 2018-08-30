export const FETCH_TASKS = 'fetch_tasks';
export const ADD_TASK = 'add_task';
export const DELETE_TASK = 'delete_task';

// fetch task list
export function fetchTasks() {
    return {
        type: FETCH_TASKS
    };
}

export function addTask(task) {
    return {
        type: ADD_TASK,
        task: task
    };
}

export function deleteTask(id) {
    return {
        type: DELETE_TASK,
        id: id
    };
}