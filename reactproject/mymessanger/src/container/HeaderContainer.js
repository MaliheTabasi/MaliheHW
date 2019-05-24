import {connect} from 'react-redux'
import  Header from '../components/Header'

const mapStateToProps = state => ({ 
    
        user: state.user

})

const mapDispatchToProps = dispatch =>({
    dispatch : dispatch
})

const  HeaderContainer = connect (
    mapStateToProps,
    mapDispatchToProps
)( Header)
export default  HeaderContainer