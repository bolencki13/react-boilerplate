import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import Input from 'components/input'
import * as HelloWorldActions from 'redux/actions/helloWorld'

class HomePage extends Component {
  constructor (props) {
    super(props)

    this.onInputChange = this.onInputChange.bind(this)
  }

  onInputChange (newValue) {
    return this.props.dispatch(HelloWorldActions.updateValue(newValue))
  }

  render () {
    return (
      <div>
        <h1>Hello world!</h1>
        <Input text={this.props.value} onChange={(newValue) => this.onInputChange(newValue)}/>
        <p>{this.props.value}</p>
      </div>
    )
  }
}

HomePage.propTypes = {
  dispatch: PropTypes.func,
  value: PropTypes.string
}

export default connect((store) => {
  return store.HelloWorld
})(HomePage)
