//add todo
//complete todo
//update todo
//delete todo
//get todos

export const ADD_TODO = 'ADD_TODO';
export const COMPLETE_TODO = 'COMPLETE_TODO';
export const UPDATE_TODO = 'UPDATE_TODO';
export const DELETE_TODO = 'DELETE_TODO';
export const GET_TODOS = 'GET_TODOS';

export const addTodoAction = (todo) => {
    return {
        type: ADD_TODO,
        payload: todo
    }
}

export const completeTodoAction = (todo) => {
    return {
        type: COMPLETE_TODO,
        payload: todo
    }
}

export const updateTodoAction = (index, newtodo) => {
    return {
        type: UPDATE_TODO,
        payload: { index, newtodo }
    }
}

export const deleteTodoAction = (index) => {
    return {
        type: DELETE_TODO,
        payload: index
    }
}

export const getTodosAction = () => {
    return {
        type: GET_TODOS
    }
}