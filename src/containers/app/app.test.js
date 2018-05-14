import React from 'react'
import { shallow } from 'enzyme'

import App from './'

describe('containers/home', () => {
  it('should match snapshot', () => {
    const wrapper = shallow(<App/>)

    expect(wrapper).toMatchSnapshot()
  })
})
