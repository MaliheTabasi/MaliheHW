import React from 'react'


export default class ChatScreen extends React.Component {
  constructor(){
    super()
    this.state= {
      messages : []
    }
  }
  render () {
    console.log ('chatscreen.props', this.props)
    return (
        <div className='screen'>
          {this.props.messages.map((item,index)=>{
          if (item.id===1){
            return(
              
              <div  className='sender'>
                <span className='sentmessage'>{this.props.newMessage}</span>
              </div>
            )
          } else{
            return (
              <div className='reciever'>
                <span className='recievedmessage'>{this.props.newMessage}></span>
              </div>
            )
           }
          }  
          )}
         </div>
     )
  }
}

 