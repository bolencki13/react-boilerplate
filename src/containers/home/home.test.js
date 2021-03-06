import React from 'react'
import { shallow } from 'enzyme'

import HomePage from './'

describe('containers/home', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MockStore>
        <HomePage/>
      </MockStore>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
