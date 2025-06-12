import React, { useState, FormEvent } from 'react'
import ToDoWrapper from './ToDoWrapper'

const ToDoForm = ({addTodo}: {addTodo: (todo: string) => void}) => {
    const [value, setValue] = useState("")

    const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        if(value.trim() !== ""){
            addTodo(value)
            setValue("")
        }
    }

    return (
        <form className='ToDoForm' onSubmit={handleSubmit}>
            <input type="text" className='todo-input' value = {value} placeholder="Add a new todo" onChange={(e) => setValue(e.target.value)} />
            <button type="submit" className='todo-btn'>Add</button>
        </form>
    )
}

export default ToDoForm