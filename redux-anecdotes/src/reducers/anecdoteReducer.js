
const reducer = (state = [], action) => {
  console.log('state now: ', state)
  console.log('action', action)
  
  switch(action.type) {
    case 'VOTE':
      const id = action.data.id
      const anecdote = state.find(a => a.id === id)
      const changedAnecdote = {
        ...anecdote,
        votes: anecdote.votes + 1
      }
      return state.map(a => a.id === id ? changedAnecdote : a)
    case 'NEW_ANECDOTE':
      return [...state, action.data]
    case 'START':
      return action.data
    default: return state
  }
}

export const initialize = (anecdotes) => {
  return {
    type: 'START',
    data: anecdotes
  }
}

export const createAnecdote = (data) => {
  return {
    type: 'NEW_ANECDOTE',
    data,
    }
}


export const vote = (id) => {
  return {
    type: 'VOTE',
    data: { id }
  }
}

export default reducer