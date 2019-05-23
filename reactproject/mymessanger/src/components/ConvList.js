import React from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import { saveConvList } from '../action/conversation'

export default class ConvList extends React.Component {
  constructor(props){
    super(props)
    this.state={
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      conversationList: [
      //   {name:'علیرضا',
      //   date:'3/2',
      //   latestMessage:'salamm000000000000000000000000000000000000000000000000000000000000mm',
      //   numberofunseen:'50000002'
      // }
    ],
    suggestedUsers:[]
    }
    this.handleRequest=this.handleRequest.bind(this)

  }
  
  componentDidMount(){
    this.handleRequest()
  }
   

  handleRequest()  {
    const token=window.localStorage.getItem('token')
    axios.get('https://api.paywith.click/conversation/',{
      params: {
        token: token
      }
    })
    .then(response => {
      this.props.dispatch(saveConvList(response.data.data.conversation_details))
    })
    .catch(error => {
      console.log('1111111111',error);
    }); 
  }

  handleChange(e) {
    // let data = {
    //   token: this.state.token ,
    //   query: e.target.value,
    //   size:4
    // }
    let fdata = new FormData()
    fdata.append('token',this.state.token )
    fdata.append('query', e.target.value )
    fdata.append('size', 4 )

    axios.post('https://api.paywith.click/explore/search/contacts/',fdata)
    .then((response) => {
      console.log('response',response);
      this.setState({suggestedUsers:response.data.data.users} )
    })
    .catch((error) => {
      console.log('1111111111',error);
    }); 
  }


   
  render () {
    return (
      <div className='convlistclass'>
        <div className='searchContactContainer'>
          <input 
          className ='searchContact'
          placeholder ='...جست و جوی مخاطبین'
          onChange = {(e)=> this.handleChange(e)}
          />
        </div>
        { this.state.suggestedUsers.map((user, index) => {
            return(
              <p className='suggestedContact'><img src={user.avatar_url} className='suggestedAvatar' /> {user.email}</p>
            )
        })}
        
        {this.props.conversationList.map((conversation, index)=>{
          return(
            conversation.users.map((user, idx) => {
              if(user.id != this.state.myId) {
                return(
                  <Conversation
                    key={index}       
                    name={user.name}
                    date={conversation.latest_message_date}
                    latestMessage={conversation.latest_Message.length>50 ? conversation.latest_Message.slice(0,50) : conversation.latestMessage}
                    numberOfUnseen={conversation.unseen_messages}
                    avatar= {user.avatar_url}
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
    )
  }
}
