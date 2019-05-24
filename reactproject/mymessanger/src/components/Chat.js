import React from 'react'
import Header from '../components/Header'
import ChatScreenContainer from '../container/ChatScreenContainer'
import FooterContainer from '../container/FooterContainer'
import HeaderContainer from '../container/HeaderContainer';


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
        <HeaderContainer/>
        <ChatScreenContainer />
        <FooterContainer  />
      </div>
    )
  }
}

// newMessage = {this.state.newMessage}
// getNewMessage={(newMessage) => this.getNewMessage(newMessage)}