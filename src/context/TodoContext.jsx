import { createContext, useContext } from "react";


export const TodoContext=createContext({
  todos:{
    id:0,
    todos:"Hi there.",
    completed:false,
   } ,
  addtodo : (todo) => {},
  updatetodo:(id,todo)=>{},
  deletetodo :(id)=>{}, 
  toggleComplete:(id)=>{}
})
export const useTodo  = () => (useContext(TodoContext));

export const TodoProvider = TodoContext.Provider;