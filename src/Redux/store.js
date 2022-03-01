import { configureStore } from "@reduxjs/toolkit";
import ToDoReducer from './ToDoReducer'

const store = configureStore({reducer:ToDoReducer});

export default store;