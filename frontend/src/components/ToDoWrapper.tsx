import React, { useState, useEffect } from 'react'
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

    const deleteTodo = (index: number) => {
        const newTodos = [...todos]
        newTodos.splice(index, 1)
        setTodos(newTodos)
    }

    const updateTodo = (index: number, updatedTask: string) => {
        const newTodos = [...todos]
        newTodos[index].task = updatedTask
        newTodos[index].isEditing = false
        setTodos(newTodos)
    }

    const editTodo = (index: number) => {
        const newTodos = [...todos]
        newTodos[index].isEditing = !newTodos[index].isEditing
        setTodos(newTodos)
    }

    const toggleComplete = (index: number) => {
        const newTodos = [...todos]
        newTodos[index].completed = !newTodos[index].completed
        setTodos(newTodos)
    }

    return (
        <div className="TodoWrapper">
            <ToDoForm addTodo={addTodo} />
            {todos.map((todo, index) => (
                <ToDo
                    key={index}
                    todo={todo}
                    toggleComplete={() => toggleComplete(index)}
                    deleteTodo={() => deleteTodo(index)}
                    editTodo={() => editTodo(index)}
                    updateTodo={(newTask) => updateTodo(index, newTask)}
                />
            ))}
        </div>
    )
}

export default ToDoWrapper