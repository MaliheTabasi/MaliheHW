import React from 'react'
import logo from '../images/hendoone.png'
import '../App.css'
import Background from '../images/2.jpg'
import validate from '../validation/validateFunction'
import axios from 'axios'

var sectionStyle = {
  width: '100%',
  height: '100%',
  backgroundImage: `url(${Background})`,
  position: 'absolute'
}

export default class Signup extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      reTypePassword: '',
      error: {
        email: null,
        password: null,
        reTypePassword: null
      },
      rePassError: null
    }
  }

  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick () {
    var emailError = validate('email', this.state.email)
    var passwordError = validate('password', this.state.password)
    var reTypePasswordError = validate('reTypePassword', this.state.reTypePassword)
    this.setState({ ...this.state, error: { ...this.state.error, email: emailError, password: passwordError, reTypePassword: reTypePasswordError } }, () => {
      if (this.state.password === this.state.reTypePassword) {
        if ((this.state.error.email == null) && (this.state.error.password == null) && (this.state.error.reTypePassword == null)) {
          let data = {
            email: this.state.email,
            password: this.state.password
          }
          axios.post('https://api.paywith.click/auth/signup/', data)
            .then(function (response) {
              console.log('response::::', response)
              window.localStorage.setItem('token', response.data.token)
              window.localStorage.setItem('id', response.data.id)
            })
            .catch(function (error) {
              console.log('error:::::', error)
            })
        }
        this.setState({ rePassError: null })
      } else {
        this.setState({ rePassError: '.رمزهای وارد شده مشابه نیستند. لطفا دقت نمایید' })
      }
    })
  }
  render () {
    return (

      <div className='App' >
        <section style={sectionStyle}>
          <div className='container'>
            <img className='logo' src={logo} />
            <p className='welcome'>به هندونه خوش اومدید</p>
            <p>لطفا ایمیل و رمز عبور خود را انتخاب و سپس وارد نمایید</p>
            <input name='email'
              className='input1'
              placeholder='ایمیل'
              onChange={(e) => this.handleChange(e)} />
            {
              this.state.error.email !== null && <p className='error'>{this.state.error.email}</p>
            }
            <input
              name='password'
              className='input1'
              placeholder='رمز عبور'
              type='password'
              onChange={(e) => this.handleChange(e)} />
            {
              this.state.error.password !== null && <p className='error'>{this.state.error.password}</p>
            }
            <input
              name='reTypePassword'
              className='input1'
              placeholder='رمز عبور را دوباره وارد نمایید'
              type='password'
              onChange={(e) => this.handleChange(e)} />
            {
              this.state.error.reTypePassword !== null && <p className='error'>{this.state.error.reTypePassword}</p>
            }
            { this.state.rePassError && <p className='error'>{this.state.rePassError}</p>}
            <button className='submit' onClick={() => this.handleClick()} >ثبت نام </button>
          </div>
        </section>
      </div>

    )
  }
}
