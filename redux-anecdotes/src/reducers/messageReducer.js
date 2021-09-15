
const messageReducer = ( state = '', action) => {
    switch(action.type) {
        case 'REMOVE_MESSAGE':
            return ''
        case 'SET_MESSAGE':
            return action.message
        default:
            return state
    }
}

export const removeMessage = () => {
    return {
        type: 'REMOVE_MESSAGE'
    }
}

export const setMessage = (message) => {
    return {
        type: 'SET_MESSAGE',
        message
    }
}

export default messageReducer
