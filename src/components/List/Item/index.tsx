import React, { useState } from 'react';
import { ITodos } from '../../../App';

import './index.css'

interface IItemProps {
    todo: ITodos;
    updateTodo:(id:string,done:boolean)=>void,
    deleteTodo:(id:string)=>void
  }
export const Item:React.FC<IItemProps> = (props:IItemProps)=>{
    const [mouse,setMouse] = useState(false);
    const { todo,updateTodo,deleteTodo } = props;
    const handleCheck = (e:React.ChangeEvent<HTMLInputElement>,id:string)=>{
        updateTodo(id,e.target.checked);  
  }
  const handleDelete = (id:string)=>{
    deleteTodo(id);
  }
  const handleMouse = (e:React.MouseEvent<HTMLLIElement, MouseEvent>,isMove:boolean)=>{
    e.cancelable =true;
    setMouse(isMove);
  }
    return (
        <li style= {{backgroundColor:mouse?'#ddd':'#fff'}} onMouseEnter={(e)=>handleMouse(e,true)} onMouseLeave = {(e)=>handleMouse(e,false)}>
              <label>
                <input
                  type="checkbox"
                  checked={todo.done}
                  onChange={(e)=>handleCheck(e,todo.id)}
                />
                <span
                  style={{ textDecoration: todo.done ? "line-through" : "none" }}
                >
                  {todo.name}
                </span>
              </label>
              <button className="btn btn-danger" style={{display:mouse?'block':'none'}} onClick = {()=>handleDelete(todo.id)}>删除</button>
            </li>
    )
} 