import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setMessage, removeMessage } from '../reducers/messageReducer'

const AnecdoteList = () => {
    const anecdotes = useSelector(state => state.anecdotes)
    const dispatch = useDispatch()

    const addVote = (anecdote) => {
        dispatch(vote(anecdote.id))
        dispatch(setMessage(`you voted "${anecdote.content}"`))
        setTimeout(() => {
            dispatch(removeMessage())
        }, 5000)
    }

    return (
        <div>
            <h2>Anecdotes</h2>
                {anecdotes.sort((a,b) => b.votes - a.votes).map(anecdote =>
                <div key={anecdote.id}>
                    <div>
                    {anecdote.content}
                    </div>
                    <div>
                    has {anecdote.votes}
                    <button onClick={() => addVote(anecdote)}>vote</button>
                    </div>
                </div>
                )}
        </div>
    )
}

export default AnecdoteList