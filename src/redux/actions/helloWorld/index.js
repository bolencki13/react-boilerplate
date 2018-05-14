export const kIdentifiers = {
  HELLO_WORLD_UPDATE: 'HELLO_WORLD_UPDATE',
  HELLO_WORLD_FAILED: 'HELLO_WORLD_FAILED'
}

export function updateValue (value) {
  return (dispatch) => {
    return Promise.resolve()
      .then(() => {
        if (value.toLowerCase() === 'error') {
          throw new Error(value)
        } else {
          dispatch({type: kIdentifiers.HELLO_WORLD_UPDATE, payload: value})
        }
      })
      .catch((error) => dispatch({type: kIdentifiers.HELLO_WORLD_FAILED, payload: error}))
  }
}
