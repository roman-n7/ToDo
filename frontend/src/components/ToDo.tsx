import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'   
import {faPenToSquare} from '@fortawesome/free-solid-svg-icons'
import {faTrash} from '@fortawesome/free-solid-svg-icons'

type Todo = {
    task: string
    completed: boolean
    isEditing: boolean
}

const ToDo = ({ todo }: { todo: Todo }) => {
    return(
        <div className="Todo">
            {todo.task}
        </div>
    )
}

export default ToDo
