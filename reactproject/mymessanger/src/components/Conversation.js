import React from 'react'
import profilepic from '../images/profilepic.jpg'
import axios from 'axios'
import { saveChatScreenMessages } from '../action/conversation'
import { UserToHeader } from '../action/conversation'
import { saveConversationId } from '../action/conversation'

export default class Conversation extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      token: window.localStorage.getItem('token')
    }
  }

  handleConversation (e) {
    this.props.dispatch(UserToHeader(this.props.user))

    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('conversation_id', this.props.convId)
    fdata.append('size', 50)
    const roundDate = Math.round(new Date().getTime() / 1000)
    fdata.append('date', roundDate)

    axios.post('https://api.paywith.click/conversation/details/', fdata)
      .then(response => {
        this.props.dispatch(saveChatScreenMessages(response.data.data.messages))

      // console.log('messsssssssssssssssssss',response.data.data.messages)
      })
      .catch(error => {
        console.log('error conversation', error)
      })

    const convID = this.props.convId
    this.props.dispatch(saveConversationId(convID))
  }

  render () {
    return (
      <div className='conv'
        onClick={(e) => this.handleConversation(e)}>

        <div className='proficcontainer'>
          <img className='profpic' src={this.props.avatar} />
        </div>
        <div className='content'>
          <div className='eachline'>
            <span className='name'>
              {this.props.name}
            </span>
            <span className='lastmessagedate'>
              {this.props.date.slice(0, 10)}
            </span>
          </div>
          <div className='eachline'>
            <span className='latestmessage'>
              {this.props.latestMessage}
            </span>
            {/* {this.props.numberofunseen===0 } */}
            <span className='numberofunseen'>
              {this.props.numberOfUnseen}
            </span>
          </div>
        </div>
      </div>
    )
  }
}
