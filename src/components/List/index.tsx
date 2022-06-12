
import { Item } from "./Item";
import { ITodos } from "../../App";

import './index.css';

interface IListProps {
  todos: ITodos[];
  updateTodo:(id:string,done:boolean)=>void,
  deleteTodo:(id:string)=>void
}
export const List: React.FC<IListProps> = (props: IListProps) => {
    
  const { todos,updateTodo,deleteTodo } = props;
  return (
    <>
      <ul className = "todo-main">
        {todos.map((todo) => {
          return (
            <Item key = {todo.id} todo={todo} updateTodo={updateTodo} deleteTodo={deleteTodo}/>
          );
        })}
      </ul>
    </>
  );
};
