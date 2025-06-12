import React, { useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'   
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

type Todo = {
    task: string
    completed: boolean
    isEditing: boolean
}

const ToDo = ({ todo, toggleComplete, deleteTodo, editTodo, updateTodo }: {
    todo: Todo,
    toggleComplete: () => void,
    deleteTodo: () => void,
    editTodo: () => void,
    updateTodo: (newTask: string) => void
}) => {
    const [editValue, setEditValue] = useState(todo.task);

    const handleEditClick = () => {
        if (todo.isEditing) {
            updateTodo(editValue);
        }
        editTodo();
    };

    return(
        <div className="Todo">
            {todo.isEditing ? (
                <input
                    type="text"
                    value={editValue}
                    onChange={(e) => setEditValue(e.target.value)}
                    className="todo-edit-input"
                    autoFocus
                />
            ) : (
                <p onClick={toggleComplete} className={`${todo.completed ? 'completed' : 'todo-text'}`}>{todo.task}</p>
            )}
            <div className="todo-icons">
                <FontAwesomeIcon onClick={handleEditClick} icon={faPenToSquare} />
                <FontAwesomeIcon onClick={deleteTodo} icon={faTrash} />
            </div>
        </div>
    )
}

export default ToDo
