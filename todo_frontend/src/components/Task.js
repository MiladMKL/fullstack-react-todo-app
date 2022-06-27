import React from 'react'

const Task = ({ task, toggleTaskStatus, deleteTask }) => {
  const buttonLabel = "delete"
  const taskLabel = task.done ? <s>{task.name}</s> : `${task.name}`

  return (
    <div className="task-container">
      <li onClick={toggleTaskStatus}>
        {taskLabel}
      </li>
      <button className="delete_btn" onClick={deleteTask}>{buttonLabel}</button>
    </div>
  )
}

export default Task
