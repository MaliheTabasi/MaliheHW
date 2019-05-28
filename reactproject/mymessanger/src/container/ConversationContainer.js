import { connect } from 'react-redux'
import Conversation from '../components/Conversation'

const mapStateToProps = state => {
  return {
    messages: state.messages
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const ConversationContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Conversation)
export default ConversationContainer
