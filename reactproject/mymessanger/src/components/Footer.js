import React from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import emojiicon from '../images/emojiicon.png'
import sendicon from '../images/sendicon.png'
import conversation from '../reducer/conversation';
import axios from 'axios'
import { AddNewMessages } from '../action/conversation';


export default class Footer extends React.Component {
    constructor(){
        super()
        this.state = {
          openEmoji:false,
          newMessage :'',
          token: window.localStorage.getItem('token')
         }
    }

    onChangeText(e){
      this.setState({newMessage: e.target.value})    
    }

    sendNewMessage(){ 
    //  this.props.dispatch(AddNewMessages(this.state.newMessage)) 
      let fdata = new FormData()
      fdata.append('token',this.state.token )
      fdata.append('conversation_id', this.props.convId )
      fdata.append('text', this.state.newMessage )

      axios.post('https://api.paywith.click/conversation/create/',fdata)
        .then((response) => {      
          console.log('messssage:::::',response);

          this.setState({newMessage:''})
        })
        .catch((error) => {
          console.log('Footer Error:::::',error);
        }); 
    }
  
    handlePress =(e) => {
      if(e.key === 'Enter'){   
        let fdata = new FormData()
        fdata.append('token',this.state.token )
        fdata.append('conversation_id', this.props.convId )
        fdata.append('text', this.state.newMessage )

        axios.post('https://api.paywith.click/conversation/create/',fdata)
          .then((response) => {      
            console.log('messssage:::::',response);
            this.setState({newMessage:''})
          })
          .catch((error) => {
            console.log('Footer Error:::::',error);
          }); 
       }
    }

    addEmoji = (e) => {
      //console.log(e.unified)
      if (e.unified.length <= 5){
        let emojiPic = String.fromCodePoint(`0x${e.unified}`)
        this.setState({
          newMessage: this.state.newMessage + emojiPic
        })
      }else {
        let sym = e.unified.split('-')
        let codesArray = []
        sym.forEach(el => codesArray.push('0x' + el))
        //console.log(codesArray.length)
        //console.log(codesArray)  // ["0x1f3f3", "0xfe0f"]
        let emojiPic = String.fromCodePoint(...codesArray)
        this.setState({
          newMessage: this.state.newMessage + emojiPic
        })
      }
    }

    emojiHandleClick() {
      if( this.state.openEmoji){
        this.state.openEmoji= false
      }else{
        this.state.openEmoji= true
      }
      this.setState({openEmoji: this.state.openEmoji})  
    }

    render () {
      return (
        <div className='footer'>
          <div className='emojiContainer'>
            { this.state.openEmoji ?
              <span className='emojipick'>
                <Picker onSelect={this.addEmoji} />
              </span> :
              <div style={{ height: '427px'}}></div>
            } 
            <img className='emoji' src={emojiicon} onClick={ () => this.emojiHandleClick()} />      
          </div>
          <input 
            className='inputmessage' 
            placeholder='...پیام خود را وارد کنید' 
            value={this.state.newMessage}
            onChange={(e)=> this.onChangeText(e)}
            onKeyPress={(e) => this.handlePress(e)}/>
          <img className='send' src={sendicon} onClick={ () => this.sendNewMessage()} />
        
          
      </div> )
    }
}