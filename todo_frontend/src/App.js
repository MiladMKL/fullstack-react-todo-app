import { useState, useEffect } from 'react'
import Task from './components/Task'
import taskService from './services/tasks'
import Notification from './components/Notification'
import './index.css'


const App = () => {
  const [allTasks, setAllTasks] = useState([])
  const [newTask, setNewTask] = useState('')
  const [showAll, setShowAll] = useState(true)
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    taskService
      .getAllTasks()
      .then(initialTasks => {
        setAllTasks(initialTasks)
      })
  }, [])

  const toggleTaskStatusFor = (id) => {
    const task = allTasks.find(task => task.id === id)
    const changedTask = { ...task, done: !task.done }

    taskService
      .updateTask(id, changedTask)
      .then(returnedTask => {
        setAllTasks(allTasks.map(task => task.id !== id ? task : returnedTask))
      })
      .catch(error => {
        setErrorMessage(`Task "${task.name}" was already deleted from the server!`)
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
        setAllTasks(allTasks.filter(t => t.id !== id))
      })
  }

  const addTask = (event) => {
    event.preventDefault()

    if (newTask.length < 4) {
      setErrorMessage('Todo name must contain at least 4 characters!')
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      return
    }

    const taskObject = {
      name: newTask,
      date: new Date().toISOString(),
      done: false,
    }

    taskService.createTask(taskObject).then(returnedTasks => {
      setAllTasks(allTasks.concat(returnedTasks))
      setNewTask('')
    })
  }

  const deleteTaskFor = (id) => {
    taskService.deleteTask(id).then(returnedTasks => {
      setAllTasks(allTasks.filter(t => t.id !== id))
    }).catch(error => {
      setErrorMessage(`Task was already deleted from the server!`)
      setTimeout(() => {
        setErrorMessage(null)
      }, 5000)
      setAllTasks(allTasks.filter(t => t.id !== id))
    })
  }

  const handleTaskChange = (event) => {
    setNewTask(event.target.value)
  }

  // Show & hide tasks
  const tasksToShow = showAll ? allTasks : allTasks.filter(task => task.done)


  return (
    <div className="wrapper">

      <header>Todo App</header>
      <Notification message={errorMessage} />

      <div className="inputField">
        <form onSubmit={addTask}>
          <input
            value={newTask}
            onChange={handleTaskChange}
            placeholder="Create a new todo..."
          />
          <button type="submit" className="btn">add</button>
        </form>
      </div>

      <ul className="todoList">
        {tasksToShow.map(task =>
          <Task
            key={task.id}
            task={task}
            toggleTaskStatus={() => toggleTaskStatusFor(task.id)}
            deleteTask={() => deleteTaskFor(task.id)}
          />
        )}
      </ul>

      <div className="footer">
        <button className="btn" onClick={() => setShowAll(!showAll)}>
          show {showAll ? 'done' : 'all'}
        </button>
      </div>

    </div>
  )
}

export default App 