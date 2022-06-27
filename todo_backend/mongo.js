const mongoose = require('mongoose')

if (process.argv.length < 3) {
  console.log('Please provide the password as an argument: node mongo.js <password>')
  process.exit(1)
}

const password = process.argv[2]

const url = `mongodb+srv://dalimmkl:${password}@cluster0.9auw1.mongodb.net/reactTodoApp?retryWrites=true&w=majority`

const taskSchema = new mongoose.Schema({
  name: String,
  date: Date,
  done: Boolean,
})

const Task = mongoose.model('Task', taskSchema)

mongoose.connect(url).then(() => {
  console.log('connected')

  const task = new Task({
    name: 'learn HTML',
    date: new Date(),
    done: true,
  })

  return task.save()
})
  .then(() => {
    console.log('task saved!')
    return mongoose.connection.close()
  }).catch((err) => console.log(err))






