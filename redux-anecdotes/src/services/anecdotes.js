import axios from 'axios'

const baseUrl = 'http://localhost:3001/anecdotes'

const getAll = async () => {
  const response = await axios.get(baseUrl)
  return response.data
}
const createNew = async (content, votes = 0) => {
  const object = {content, votes}
  const response = await axios.post(baseUrl, object)
  return response.data
}
const update = async (id, anecdote) => {
  const request = axios.put(`${baseUrl}/${id}`, anecdote)
  const response = await request
  return response.data
}
export default { 
  getAll,
  createNew,
  update
}