import { createSlice } from "@reduxjs/toolkit";

 const ToDoReducer =createSlice({
     name:"ToDo",
     initialState:{ToDoList:[]},
     reducers:{
         Add:(state,action)=>{
             state.ToDoList.push(action.payload);
         },
        Delete:(state ,action)=>{
             state.ToDoList.splice(action.payload,1);
         }
     }
 })
 export const {Add,Delete} = ToDoReducer.actions;
 export default ToDoReducer.reducer;