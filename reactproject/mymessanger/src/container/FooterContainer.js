import { connect} from 'react-redux'
import  Footer from '../components/Footer'


const mapStateToProps = state =>{ 
    return{
        convId : state.convId
    }
}

const mapDispatchToProps = dispatch =>({
    dispatch : dispatch
})

const FooterContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)(Footer)
export default FooterContainer