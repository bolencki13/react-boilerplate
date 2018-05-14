import reducer, { kDefaultState } from './'
import { kIdentifiers } from 'redux/actions/helloWorld'

describe('Projects reducer', () => {
  const initialState = kDefaultState

  it(`Should handle ${kIdentifiers.HELLO_WORLD_UPDATE}`, () => {
    expect(reducer(initialState, {type: kIdentifiers.HELLO_WORLD_UPDATE, payload: 'some value'})).toEqual({
      ...initialState,
      value: 'some value',
      error: null
    })
  })

  it(`Should handle ${kIdentifiers.HELLO_WORLD_FAILED}`, () => {
    expect(reducer(initialState, {type: kIdentifiers.HELLO_WORLD_FAILED, payload: new Error('An error')})).toEqual({
      ...initialState,
      error: new Error('An error')
    })
  })
})
