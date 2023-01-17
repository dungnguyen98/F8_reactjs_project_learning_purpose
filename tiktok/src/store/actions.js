import { SET_TODO_INPUT, ADD_TODO } from './constants';
export const set_todo_input = payload => (
    {
        type: SET_TODO_INPUT,
        payload
    }
)

export const add_todo = payload => (
    {
        type: ADD_TODO,
        payload
    }
)