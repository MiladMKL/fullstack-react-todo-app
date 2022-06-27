require('dotenv').config()
const express = require('express')
const app = express()
const Task = require('./models/task')
const cors = require('cors')

app.use(cors())
app.use(express.static('build'))


const requestLogger = (request, response, next) => {
  console.log('Method:', request.method)
  console.log('Path:', request.path)
  console.log('Body:', request.body)
  console.log('---:')
  next()
}

app.use(express.json())
app.use(requestLogger)

// For resetting tasks
const initialTasks = [
  {
    name: 'learn HTML',
    date: new Date(),
    done: false
  },
  {
    name: 'learn CSS',
    date: new Date(),
    done: false
  },
  {
    name: 'learn Javascript ❤️',
    date: new Date(),
    done: false
  }
]


app.get('/', (request, response) => {
  response.send('<h1>Hello, World!</h1>')
})

app.post('/api/tasks', (request, response, next) => {
  const body = request.body

  if (!body.name) {
    return response.status(400).json({ error: 'content missing' })
  }

  const newTask = new Task({
    name: body.name,
    done: body.done || false,
    date: new Date(),
  })

  // Save new task with MongoDB save() method
  newTask.save().then(savedTask => {
    response.json(savedTask)
  })
    .catch(error => next(error))
})

app.get('/api/tasks', async (request, response) => {

  // Reset tasks
  await Task.deleteMany({})
  let taskObject = new Task(initialTasks[0])
  await taskObject.save()
  taskObject = new Task(initialTasks[1])
  await taskObject.save()
  taskObject = new Task(initialTasks[2])
  await taskObject.save()

  Task.find({}).then(tasks => {
    response.json(tasks)
  })
})

app.delete('/api/tasks/:id', (request, response, next) => {
  Task.findByIdAndRemove(request.params.id)
    .then(() => {
      response.status(204).end()
    })
    .catch(error => next(error))
})

app.get('/api/tasks/:id', (request, response, next) => {
  Task.findById(request.params.id)
    .then(task => {
      if (task) {
        response.json(task)
      } else {
        response.status(404).end()
      }
    })
    .catch(error => next(error))
})

// Toggling done
app.put('/api/tasks/:id', (request, response, next) => {
  const body = request.body

  const task = {
    name: body.name,
    done: body.done,
  }

  Task.findByIdAndUpdate(
    request.params.id, task, { new: true })
    .then(updatedTask => {
      response.json(updatedTask)
    })
    .catch(error => next(error))
})

const unknownEndpoint = (request, response) => {
  response.status(404).send({ error: 'unknown endpoint' })
}

app.use(unknownEndpoint)

const errorHandler = (error, request, response, next) => {
  console.error(error.message)

  if (error.name === 'CastError') {
    return response.status(400).send({ error: 'malformatted id' })
  } else if (error.name === 'ValidationError') {
    return response.status(400).json({ error: error.message })
  }

  next(error)
}

// this has to be the last loaded middleware.
app.use(errorHandler)

const PORT = process.env.PORT
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`)
})



