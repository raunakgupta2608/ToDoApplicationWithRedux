import { createStore } from "redux";
import toDoReducer from "./todoApp/reducers/toDoReducer";

const store =  createStore(toDoReducer);

export default store;