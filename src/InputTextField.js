import React, { Component } from 'react'

export default class InputTextField extends Component {
  render() {
    return (
      <div >
        <li>
          <label for="person-name">{this.props.label}</label>
          <input type="text" name={this.props.name}  onChange={ e => this.props.handleChange(e)}/>
        </li>
      </div>
    )
  }
}

