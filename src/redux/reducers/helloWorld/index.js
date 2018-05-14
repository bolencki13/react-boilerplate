import { kIdentifiers } from 'redux/actions/helloWorld/'

export const kDefaultState = {
  value: 'Hello World!',
  error: null
}

export default (state = kDefaultState, action) => {
  if (!action || (action && !action.type)) return state

  switch (action.type) {
    case kIdentifiers.HELLO_WORLD_UPDATE: {
      return {
        ...state,
        value: action.payload,
        error: null
      }
    }
    case kIdentifiers.HELLO_WORLD_FAILED: {
      return {
        ...state,
        error: action.payload
      }
    }
    default: {
      return state
    }
  }
}
