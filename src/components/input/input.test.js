import React from 'react'
import { shallow } from 'enzyme'

import Input from './'

describe('components/input', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MockStore>
        <Input text="some text"/>
      </MockStore>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
