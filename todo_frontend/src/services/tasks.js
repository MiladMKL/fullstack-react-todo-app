import axios from 'axios'

const baseUrl = '/api/tasks'

const getAllTasks = () => {
  const request = axios.get(baseUrl)
  return request.then((response) => response.data)
}

const createTask = (newObject) => {
  const request = axios.post(baseUrl, newObject)
  return request.then(response => response.data)
}

const updateTask = (id, newObject) => {
  const request = axios.put(`${baseUrl}/${id}`, newObject)
  return request.then(response => response.data)
}

const deleteTask = (id) => {
  const request = axios.delete(`${baseUrl}/${id}`)
  return request.then(response => response.data)
}

export default { getAllTasks, createTask, updateTask, deleteTask }