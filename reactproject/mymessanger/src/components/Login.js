import React from 'react'
import logo from '../images/hendoone.png'
import emailicon from '../images/emailicon.png'
import '../App.css'
import validate from '../validation/validateFunction'
import { Link } from 'react-router-dom'
import axios from 'axios'

class Login extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      clicked: false,
      error: {
        email: null,
        password: null
      }
    }
  }

  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick () {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    this.setState({ ...this.state, error: { ...this.state.error, email: emailError, password: passwordError } }, () => {
      console.log('emailerror', this.state.error)
      if (this.state.error.password == null && this.state.error.email == null) {
        return (
          axios.post('https://api.paywith.click/auth/signin/', {
            email: this.state.email,
            password: this.state.password
          })
            .then(function (response) {
              console.log('response::::', response)
              window.localStorage.setItem('token', response.data.data.token)
              window.localStorage.setItem('id', response.data.data.profile.id)
            })
            .catch(function (error) {
              console.log('error:::::', error)
            })

        )
      }
    })
  }

  render () {
    return (
      <div className='App'>
        <div className='container'>
          <img className='logo opacity' src={logo} />
          <p className='welcome opacity'>به هندونه خوش اومدید</p>
          <p>لطفا وارد حساب کاربری خود شوید</p>
          <div className='emailiconcontainer'>
            <input name='email' className='input1 opacity' placeholder='ایمیل' onChange={(e) => this.handleChange(e)} />
            {/* <div className='emailicon' >
              <img style={{ width: '20px' }} src={emailicon} />
            </div> */}
            {
              this.state.error.email !== null && <p className='error'>{this.state.error.email}</p>
            }
          </div>
          <input name='password' className='input1 opacity' placeholder='رمز عبور' type='password' onChange={(e) => this.handleChange(e)} />
          {
            this.state.error.password !== null && <p className='error'>{this.state.error.password}</p>
          }
          <button
            className='submit opacity'
            onClick={() => this.handleClick()} >ورود </button>

          <div className='notuser opacity'>
            <span> اگر حساب کاربری ندارید</span>
            <Link className='link' to='./Signup'>این‌جا</Link>
            <span>کلیک کنید</span>
          </div>
        </div>
      </div>
    )
  }
}

export default Login
