import deepFreeze from 'deep-freeze'
import counterReducer from './reducer'

describe('unicafe reducer', () => {
  const initialState = {
    good: 0,
    ok: 0,
    bad: 0
  }

  test('should return a proper initial state when called with undefined state', () => {
    const state = {}
    const action = {
      type: 'DO_NOTHING'
    }

    const newState = counterReducer(undefined, action)
    expect(newState).toEqual(initialState)
  })

  test('good is incremented', () => {
    const action = {
      type: 'GOOD'
    }
    const state = initialState

    deepFreeze(state)
    const newState = counterReducer(state, action)
    expect(newState).toEqual({
      good: 1,
      ok: 0,
      bad: 0
    })
  })

  test('Can increment multiple times different feedbacks', () => {
    const action1 = {
      type: 'GOOD'
    }
    const action2 = {
      type: 'BAD'
    }
    const state = initialState

    deepFreeze(state)
    const state1 = counterReducer(state, action1)
    const state2 = counterReducer(state1, action1)
    const state3 = counterReducer(state2, action2)
    const newState = counterReducer(state3, action2)
    expect(newState).toEqual({
      good: 2,
      ok: 0,
      bad: 2
    })
  })

})