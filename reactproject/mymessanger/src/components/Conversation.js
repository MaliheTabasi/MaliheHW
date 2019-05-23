import React from 'react'
import profilepic from '../images/profilepic.jpg'

export default class Conversation extends React.Component {
  render () {
    return (
      <div className='conv'>
        
        <div className='proficcontainer'>
          <img className='profpic' src={profilepic} />
        </div>
        <div className='content'>  
          <div className='eachline'>     
            <span className='name'>
              {this.props.name}
            </span>
            <span className='lastmessagedate'>
              {this.props.date}
            </span>                   
          </div>
          <div className='eachline'>
            <span className='latestmessage'>
              {this.props.latestMessage}
            </span>
            {/* {this.props.numberofunseen===0 } */}
            <span className='numberofunseen'>
              {this.props.numberofunseen}
            </span>
          </div>
         </div>
      </div>
    )
  }
}
