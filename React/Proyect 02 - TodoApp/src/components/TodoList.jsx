import { ItemList } from "./ItemList"




export const TodoList = ({data, onDeleteTodo, onToggleTodo}) => {
 
  return (
    <ul className="list-group ">
        <ItemList data={data} onDeleteTodo={onDeleteTodo} onToggleTodo={onToggleTodo}/>
    </ul>
  )
}
