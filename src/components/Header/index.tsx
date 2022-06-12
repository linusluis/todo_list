import React from 'react';
import { nanoid } from 'nanoid';

import {ITodos} from '../../App';

import './index.css';

interface IHeaderProps{
    addTodo:(newTodo:ITodos)=>void;
}
export const Header:React.FC<IHeaderProps> = (props:IHeaderProps)=>{
    const {addTodo} = props;
    const handleKeyUp = (e:React.KeyboardEvent<HTMLInputElement>)=>{
        const {key} = e;
        let element = e.target as HTMLInputElement; 
        if(key !== 'Enter') return;  
        if(element.value === ''){  
            alert('输入的todo不能为空');  
            return;  
        }  
        
        const newTodo = {id:nanoid(),name:element.value,done:false};  
        addTodo(newTodo);
        element.value = '';
    }   
    return (
        <div className="todo-header">
            <input type="text" onKeyUp={e=>handleKeyUp(e)} placeholder='请输入您的任务！按Enter完成添加！'/>
        </div>
    )
} 