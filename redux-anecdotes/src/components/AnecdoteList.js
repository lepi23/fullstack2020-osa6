import React from 'react'
import { useDispatch, connect } from 'react-redux'
import { voteAnecdote } from '../reducers/anecdoteReducer'
import {setNotification } from '../reducers/notificationReducer'

const AnecdoteList = (props) =>
{
    const dispatch = useDispatch()
    const anecdotes = props.anecdotes
    anecdotes.sort((a, b) => (a.votes <= b.votes) ? 1 : -1)

    const vote = (anecdote) => {
      dispatch(voteAnecdote(anecdote))
      dispatch(setNotification(`you voted ${anecdote.content}`, 5))
    }
    return(
    anecdotes.map(anecdote =>
        <div key={anecdote.id}>
            <div>
                {anecdote.content}
            </div>
            <div>
                has {anecdote.votes}
                <button onClick={() => vote(anecdote)}>vote</button>
            </div>
        </div>
    )
)}

const mapStateToProps = (state) => {
    return {
      anecdotes: state.anecdotes,
      notification: state.notification,
    }
  }
  const ConnectedAnecdoteList = connect(mapStateToProps)(AnecdoteList)
  
  export default ConnectedAnecdoteList