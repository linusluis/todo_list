import React from 'react';
import { ITodos } from '../../App';

import './index.css'

interface IFooterProps{
    updateAllTodos:(done:boolean)=>void,
    clearAllDone:()=>void,
    todos:ITodos[]
}

export const Footer:React.FC<IFooterProps> = (props:IFooterProps)=>{
    const {updateAllTodos,clearAllDone,todos} = props;
    const handleCheckAll = (e:React.ChangeEvent<HTMLInputElement>)=>{  
        updateAllTodos(e.target.checked);  
    }  
    const handleClear = ()=>{  
        clearAllDone();  
    }

    const allTodos = todos.length;  
    const doneTodos = todos.reduce((prev,todoObj)=>{  
            return prev+(todoObj.done?1:0);  
        },0)  
    return (
        <div className="todo-footer">  
                <label>  
                    <input type="checkbox" checked = {allTodos === doneTodos && allTodos !== 0?true:false} onChange = {(e)=>handleCheckAll(e)}/>  
                </label>  
                <span>  
                    <span>已完成{doneTodos}</span> / 全部{allTodos}  
                </span>  
                <button className="btn btn-danger" onClick={()=>handleClear()}>清除已完成任务</button>  
            </div>  
    )
} 