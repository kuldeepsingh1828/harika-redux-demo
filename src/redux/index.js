import { createStore } from "redux";
import reducer from "./reducers/todoReducer";

const store = createStore(reducer);//call the intial state of the reducer

console.log(store.getState());//get the state of the store
export default store;