import React from 'react'
import profilepic from '../images/profilepic.jpg'

export default class Header extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }
  render () {
    return (
      <div className='header'>
        <img className='headerprofpic' src={this.props.user.avatar_url} />
        <span>{this.props.user.email}</span>
      </div>
    )
  }
}
