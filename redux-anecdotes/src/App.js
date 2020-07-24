import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { voteAnecdote } from './reducers/anecdoteReducer'
import AnecdoteForm from './components/AnecdoteForm'
import AnecdoteList from './components/AnecdoteList'

const App = () => {
  const anecdotes = useSelector(state => state)

  anecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
  return (
    <div>
      <h2>Anecdotes</h2>
      <AnecdoteList anecdotes = {anecdotes}/>
      <h2>create new</h2>
      <AnecdoteForm />
    </div>
  )
}

export default App