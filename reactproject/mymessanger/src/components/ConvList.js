import React from 'react'
import axios from 'axios'
import { saveConvList } from '../action/conversation'
import ConversationContainer from '../container/ConversationContainer'

export default class ConvList extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      conversationList: [],
      suggestedUsers: []
    }
    this.handleRequest = this.handleRequest.bind(this)
    this.handleClickFunction = this.handleClickFunction.bind(this)
  }

  componentDidMount () {
    this.handleRequest()
  }

  handleRequest () {
    const token = window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/', {
      params: {
        token: token
      }
    })
      .then(response => {
        this.props.dispatch(saveConvList(response.data.data.conversation_details))
        console.log('convlist:::::::', response.data.data.conversation_details)
      })
      .catch(error => {
        console.log('1111111111', error)
      })
  }

  handleChange (e) {
    // let data = {
    //   token: this.state.token ,
    //   query: e.target.value,
    //   size:4
    // }
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('query', e.target.value)
    fdata.append('size', 4)

    axios.post('https://api.paywith.click/explore/search/contacts/', fdata)
      .then((response) => {
        this.setState({ suggestedUsers: response.data.data.users })
      })
      .catch((error) => {
        console.log('1111111111', error)
      })
  }

  handleClickFunction (e, user) {
    let fdata = new FormData()
    fdata.append('token', this.state.token)
    fdata.append('user_id', user.id)

    axios.post('https://api.paywith.click/conversation/', fdata)
      .then((response) => {
        console.log('response printed', response)
      // this.setState({suggestedUsers:response.data.data.users} )
      })
      .catch((error) => {
        console.log('1111111111', error)
      })
  }

  render () {
    console.log('suggestedusers:::::', this.state.suggestedUsers)
    return (
      <div className='convlistclass'>
        <div className='searchContactContainer'>
          <input
            className='searchContact'
            placeholder='...جست و جوی مخاطبین'
            onChange={(e) => this.handleChange(e)}
          />

        </div>
        { this.state.suggestedUsers.map((user, index) => {
          return (
            <p className='suggestedContact' key={index}
              onClick={(e) => this.handleClickFunction(e, user)}><img src={user.avatar_url} className='suggestedAvatar' /> {user.email} {user.id}</p>
          )
        })}
        <div className='yourConvList'>
          <p style={{ margin: '5px' }}>لیست چت های شما</p>
        </div>
        <div className='scroll'>
          {this.props.conversationList.map((conversation, index) => {
            return (
              conversation.users.map((user, idx) => {
                if (user.id != this.state.myId) {
                  return (
                    <ConversationContainer
                      convId={conversation.id}
                      key={index}
                      name={user.email}
                      date={conversation.latest_message_date}
                      latestMessage={conversation.latest_message}
                      numberOfUnseen={conversation.unseen_messages.myId}
                      avatar={user.avatar_url}
                      user={user}
                    />
                  )
                }
              }
              )
            )
          }
          )
          }
        </div>
      </div>
    )
  }
}
