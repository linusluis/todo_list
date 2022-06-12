import React, { useState } from "react";

import { Header } from "./components/Header";
import { List } from "./components/List";
import {Footer} from "./components/Footer";

import "./App.css";
export interface ITodos {
  id: string;
  name: string;
  done: boolean;
}
function App() {
  const [todos, setTodos] = useState<ITodos[]>([
    { id: "001", name: "play basketball", done: false },
    { id: "002", name: "play chess", done: false },
    { id: "003", name: "do homework", done: true },
    { id: "004", name: "play volleyball", done: false },
    { id: "005", name: "play football", done: false },
  ]);
  const addTodo = (newTodo: ITodos) => {
    setTodos([newTodo, ...todos]);
  };
  const updateTodo = (id: string, done: boolean) => {
    const newTodos = todos.map((todoObj) => {
      if (todoObj.id === id) {
        return { ...todoObj, done };
      }
      return todoObj;
    });
    setTodos(newTodos);
  };
  const deleteTodo = (id: string) => {
    const newTodos = todos.filter((todoObj) => {
      return todoObj.id !== id;
    });
    setTodos(newTodos);
  };
  const updateAllTodos = (done:boolean) =>{
    const newTodos = todos.map((todoObj)=>{  
      return {...todoObj,done};  
    })  
    setTodos(newTodos);
  }
  const clearAllDone = ()=>{  
    const newTodos = todos.filter((todoObj)=>{  
      return !todoObj.done;  
    }) 
    setTodos(newTodos);
  }  
  return (
    <div className="todo-container">
      <div className="todo-wrap">
        <Header addTodo={addTodo} />
        <List todos={todos} updateTodo={updateTodo} deleteTodo={deleteTodo} />
        <Footer updateAllTodos = {updateAllTodos} clearAllDone = {clearAllDone} todos = {todos}/>
      </div>
    </div>
  );
}

export default App;
