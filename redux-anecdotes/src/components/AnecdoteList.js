import React from 'react'
import { useDispatch } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
const AnecdoteList = ({anecdotes}) =>

{
    anecdotes.sort((a, b) => (a.votes < b.votes) ? 1 : -1)
    const dispatch = useDispatch()
    const vote = (id) => {
      dispatch(voteAnecdote(id))
      console.log('vote', id)
    }
    return(
    anecdotes.map(anecdote =>
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote.id)}>vote</button>
            </div>
        </div>
    )
)}

export default AnecdoteList