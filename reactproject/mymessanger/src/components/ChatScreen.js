import React from 'react'

export default class ChatScreen extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      myId: window.localStorage.getItem('id'),
      messages: []
    }
  }

  render () {
    return (

      <div className='screen'>
        <div className='scroll'>
          {console.log(' chat screen heeeeeeeere', this.props)}
          {this.props.messages.map((item, index) => {
            if (item.sender.id == this.state.myId) {
              return (
                <div className='sender'>
                  <span className='sentmessage'>{item.text}</span>
                </div>
              )
            } else {
              return (
                <div className='reciever'>
                  <span className='recievedmessage'>{item.text}</span>
                </div>
              )
            }
          }
          )}
        </div>
      </div>

    )
  }
}
