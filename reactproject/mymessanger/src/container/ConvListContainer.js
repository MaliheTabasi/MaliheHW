import { connect} from 'react-redux'
import  ConvList from '../components/ConvList'
const mapDispatchToProps = dispatch =>({
    dispatch : dispatch
})
const mapStateToProps = state =>{ 
    return{
    ConvList: state.ConvList
    }
}

const ConvListContainer = connect (
    mapDispatchToProps
)(ConvList)
export default ConvListContainer