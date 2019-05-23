import {connect} from 'react-redux'
import  ChatScreen from '../components/ChatScreen'


const mapStateToProps = state => { 
    return {
        newMessage: state.newMessage,
        messages: state.messages
    }
}

const mapDispatchToProps = dispatch =>{
    return {
       dispatch : dispatch
    }
} 

const ChatScreenContainer = connect (   
    mapStateToProps,
    mapDispatchToProps
)(ChatScreen)

export default ChatScreenContainer