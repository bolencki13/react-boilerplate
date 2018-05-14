import React from 'react'
import { shallow } from 'enzyme'

import App from './'

describe('components/app', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(
      <MockStore>
        <App/>
      </MockStore>
    )

    expect(wrapper).toMatchSnapshot()
  })
})
