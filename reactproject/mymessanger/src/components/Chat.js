import React from 'react'
import profilepic from '../images/profilepic.jpg'
import ChatScreenContainer from '../container/ChatScreenContainer'
import FooterContainer from '../container/FooterContainer'


export default class Chat extends React.Component {
  constructor(){
    super()
    this.state= {
      newMessage :'',
    }
  }
  // getNewMessage(newMessage){
  //   console.log("i am here", newMessage)
  //   this.setState({newMessage: newMessage})
  // }

  render () {
    return (
      <div className='chatcontainer'>
        <div className='header'>
          <img className='profpic' src={profilepic} />
          <span>zahra</span>
        </div>
        <ChatScreenContainer />
        <FooterContainer  />
      </div>
    )
  }
}

// newMessage = {this.state.newMessage}
// getNewMessage={(newMessage) => this.getNewMessage(newMessage)}