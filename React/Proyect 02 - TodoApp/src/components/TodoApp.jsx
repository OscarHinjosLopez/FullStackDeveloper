import { useEffect, useReducer } from "react";
import { TodoList } from "./TodoList";
import { todoReducer } from "./todoReducer";
import { TodoAdd } from "./TodoAdd";
import { useTodo } from "../hooks/useTodo";





const TodoApp = () => {

    const {todos,todoCount,pendingTodosCount,handleNewTodo,handleDeleteTodo,handleToggleTodo} = useTodo()


    return (
        <>
            <div className="mx-2 my-2">
                <h1>TodoApp: {todoCount} | Pendientes: {pendingTodosCount}</h1>
                <hr />
                <div className="row">
                    <div className="col-7 ">
                        <TodoList data={todos} onDeleteTodo = {handleDeleteTodo} onToggleTodo={handleToggleTodo}/>
                    </div>
                    <div className="col-5 ">
                        <h4>Agregar TODO</h4>
                        <hr/>
                        <TodoAdd onNewTodo={handleNewTodo}/>
                    </div>
                </div>
            </div>

        </>
    )
}

export default TodoApp