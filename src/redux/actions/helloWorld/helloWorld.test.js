import * as Actions from './'
import { kDefaultState } from 'redux/reducers/helloWorld'
import mockStore from 'redux/store.setupTest'

describe('Hello World Actions', () => {
  describe('update value', () => {
    it(`creates ${Actions.kIdentifiers.HELLO_WORLD_UPDATE} updating the value`, () => {
      const expectedActions = [{
        type: Actions.kIdentifiers.HELLO_WORLD_UPDATE,
        payload: 'some value'
      }]
      const store = mockStore(kDefaultState)

      return store.dispatch(Actions.updateValue('some value'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })

    it(`creates ${Actions.kIdentifiers.HELLO_WORLD_FAILED} an error is encountered`, () => {
      const expectedActions = [{
        type: Actions.kIdentifiers.HELLO_WORLD_FAILED,
        payload: new Error('error')
      }]
      const store = mockStore(kDefaultState)

      return store.dispatch(Actions.updateValue('error'))
        .then(() => {
          expect(store.getActions()).toEqual(expectedActions)
        })
    })
  })
})
