import React from 'react'
import 'emoji-mart/css/emoji-mart.css'
import { Picker } from 'emoji-mart'
import emojiicon from '../images/emojiicon.png'
import sendicon from '../images/sendicon.png'
import {addNewMessage} from '../action/conversation'


export default class Footer extends React.Component {
    constructor(){
        super()
        this.state = {
          openEmoji:false,
          newMessage :'',
         }
    }
    onChangeText(e){
      this.setState({newMessage: e.target.value})
    }
    sendNewMessage(){
      this.props.dispatch(addNewMessage(this.state.newMessage))
      this.setState({newMessage:''})
    }
    handlePress =(e) => {
      if(e.key === 'Enter'){
        this.props.dispatch(addNewMessage(this.state.newMessage))
        this.setState({newMessage:''})
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
          <div>
            { this.state.openEmoji &&
              <span className='emojipick'>
                <Picker onSelect={this.addEmoji} />
              </span>
            }
            
            <img className='emoji' src={emojiicon} onClick={ () => this.emojiHandleClick()} />      
          </div>
          <input 
            className='inputmessage' 
            placeholder='پیام خود را وارد کنید' 
            value={this.state.newMessage}
            onChange={(e)=> this.onChangeText(e)}
            onKeyPress={(e) => this.handlePress(e)}/>
          <img className='send' src={sendicon} onClick={ () => this.sendNewMessage()} />
        
          
      </div> )
    }
}