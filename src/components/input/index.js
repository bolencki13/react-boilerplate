import React, { Component } from 'react'
import PropTypes from 'prop-types'
import FormParser from 'utils/formParser'

class Input extends Component {
  constructor (props) {
    super(props)

    this.onChange = this.onChange.bind(this)
  }

  onChange (event) {
    if (event) event.preventDefault()

    this.props.onChange(FormParser(event))
  }

  render () {
    return (
      <div>
        <input type="text" value={this.props.text} onChange={(event) => this.onChange(event)}/>
      </div>
    )
  }
}

Input.propTypes = {
  text: PropTypes.string,
  onChange: PropTypes.func
}

export default Input
