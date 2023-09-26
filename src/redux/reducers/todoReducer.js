import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from '../actions/todoAction'

const initialState = {
    todos: [{
        id: 1,
        title: 'Learn React',
        completed: false
    }],
    completedTodos: [{
        id: 2,
        title: 'Learn Redux',
        completed: true
    }]
}
export default function reducer(state = initialState, action) {
    switch (action.type) {
        case ADD_TODO:
            return {
                ...state,
                todos: [...state.todos, action.payload]
            }
        case COMPLETE_TODO:
            return {
                ...state,
                completedTodos: [...state.completedTodos, action.payload]
            }
        case UPDATE_TODO:
            state.todos[index] = action.payload;
            return { ...state }
        case DELETE_TODO:
            state.todos.splice(index, 1);
            return { ...state }
        case GET_TODOS:
            return { ...state }
        default:
            return state;
    }
}