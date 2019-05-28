import { connect } from 'react-redux'
import ConvList from '../components/ConvList'

const mapStateToProps = state => {
  return {
    conversationList: state.conversationList
  }
}

const mapDispatchToProps = dispatch => ({
  dispatch: dispatch
})

const ConvListContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(ConvList)
export default ConvListContainer
