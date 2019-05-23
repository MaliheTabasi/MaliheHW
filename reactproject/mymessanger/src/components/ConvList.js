import React from 'react'
import Conversation from './Conversation'
import axios from 'axios'
import conversation from '../action/conversation'

export default class ConvList extends React.Component {
  constructor(){
    super()
    this.state={
      myId: window.localStorage.getItem('id'),
      ConvList: [
        {name:'علیرضا',
        date:'3/2',
        latestMessage:'salamm000000000000000000000000000000000000000000000000000000000000mm',
        numberofunseen:'50000002'
      },
      {
        name:'رضوان',
        date:'دیروز',
        latestMessage:'سلام',
        numberofunseen:'10'
      },
      {
        name:'Malihetabasi',
        date:'5/3',
        latestMessage:'hi',
        numberofunseen:'0'
      },
      {name:'علیرضا',
        date:'3/2',
        latestMessage:'salammmmhfjdchgxgcfxgfxtgsxghhhhhhhhhhhhhhhhhherwwwwwwwwwwwwwwwwwwwwwwwwwwwwwhhhhhhhhhhgfzfxgtrzgfxzthmgsxrf',
        numberofunseen:'50'
      }
    ]
    }
  }

  // componentDidMount(){
  //   const token=window.localStorage.getItem()
  //   axios.get('https://api.paywith.click/conversation/',{
  //     params: {
  //       token: token
  //     }
  //   })
  //   .then(function (response) {
  //     console.log('convlist::::', response.data);
  //     this.setstate({ConvList: response.data.data.conversation_details})
    
  //   })
  //   .catch(function (error) {
  //     console.log('error:::::',error);
  //   }); 
  // }
   
  render () {
    return (
      <div className='convlistclass'>
        {this.state.ConvList.map((conversation, index)=>{
          return(
            <Conversation
              key={index}       
              name={conversation.name}
              date={conversation.date}
              latestMessage={conversation.latestMessage.length>50 ? conversation.latestMessage.slice(0,50) : conversation.latestMessage}
              numberofunseen={conversation.numberofunseen}
            />
           )     
        })
       }  
       </div>
    )
  }
}
