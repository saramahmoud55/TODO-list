import { useSelector } from "react-redux";
import Task from "./Task";

export default function ListTask() {
    const ToDo =useSelector(state=>state.ToDoList);

  return (
    ToDo.map((todo,index) => (
      <>
        <Task
        
        key={index}
        index={index}
        title={todo.title}
        content={todo.content}
        
        />
     
        </>
    ))
  )
}
