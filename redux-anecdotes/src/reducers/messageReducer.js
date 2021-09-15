
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

export const setNotification = (message, time) => {
    return async dispatch => {
        dispatch(setMessage(message))
        setTimeout( () => {
            dispatch(removeMessage())
        }, time * 1000)
    }
}

export default messageReducer
