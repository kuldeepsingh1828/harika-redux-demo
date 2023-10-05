import { ADD_TODO, COMPLETE_TODO, DELETE_TODO, GET_TODOS, UPDATE_TODO } from '../actions/todoAction'

const initialState = {
    todos: [{
        id: 1,
        title: 'Learn React',
        completed: false
    },
    {
        id: 2,
        title: 'Learn Redux',
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
                todos: [{ id: state.todos.length + 1, title: action.payload, completed: false }, ...state.todos]
            }
        case COMPLETE_TODO:
            let { index: id, todo } = action.payload;
            let pending = state.todos.filter((t, i) => i != id);
            return {
                todos: [...pending],
                completedTodos: [...state.completedTodos, state.todos[id]]
            }
        case UPDATE_TODO:
            const { index, newtodo } = action.payload;
            console.log(action.payload)
            state.todos[index].title = newtodo;

            return { ...state, todos: [...state.todos] }
        case DELETE_TODO:
            state.todos.splice(action.payload.index, 1);
            console.log(state)
            return { ...state, todos: [...state.todos] }
        case GET_TODOS:
            return { ...state }
        default:
            return state;
    }
}