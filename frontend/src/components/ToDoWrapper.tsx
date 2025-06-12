import React, { useState } from 'react'
import ToDoForm from './ToDoForm'
import ToDo from './ToDo'

type Todo = {
    task: string
    completed: boolean
    isEditing: boolean
}

const ToDoWrapper = () => {
    const [todos, setTodos] = useState<Todo[]>([])

    const addTodo = (todo: string) => {
        setTodos([...todos, {task:todo,completed:false,isEditing:false}])
    }

    return (
        <div className="TodoWrapper">
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <ToDo key={index} todo={todo} />
            ))}
        </div>
    )
}

export default ToDoWrapper