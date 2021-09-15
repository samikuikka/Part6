import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { vote } from '../reducers/anecdoteReducer'
import { setNotification } from '../reducers/messageReducer'

const AnecdoteList = () => {
    const filter = useSelector(state => state.filter).toLowerCase()
    const anecdotes = useSelector(state => {
        if(filter) {
            return state.anecdotes.filter(anecdote => {
                return anecdote.content.toLowerCase().includes(filter)
            })
        }
        return state.anecdotes
    })
    const dispatch = useDispatch()

    const addVote = (anecdote) => {
        dispatch(vote(anecdote))
        dispatch(setNotification(`you voted "${anecdote.content}"`, 3))
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