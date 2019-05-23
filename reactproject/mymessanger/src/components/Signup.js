import React from 'react'
import logo from './hendoone.png'
import '../App.css'
import Background from '../images/2.jpg'
import validate from '../validation/validateFunction'

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
      Email: '',
      Password: '',
      reTypePassword: '',
      error:{
        email:null,
        password:null,
        reTypePassword:null
      }
    }
  }


  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
  }

  handleClick () {
    var emailError = validate('email', this.state.email)
    var passwordError= validate('password', this.state.password)
    var reTypePasswordError= validate('reTypePassword', this.state.reTypePassword)
    this.setState({...this.state, error: {...this.state.error, email:emailError, password: passwordError, reTypePassword: reTypePasswordError}})
  }
  render () {
    return (

      <div className='App' >
        <section style={sectionStyle}>
          <div className='container'>
            <img className='logo' src={logo} />
            <p className='welcome'>به هندونه خوش اومدید</p>
            <p>لطفا ایمیل و رمز عبور خود را انتخاب و سپس وارد نمایید</p>
            <input name='Email' className='input1' placeholder='ایمیل' onChange={(e) => this.handleChange(e)} />
            {
              this.state.error.email !== null && <p className='error'>{this.state.error.email}</p>
            }
            <input name='Password' className='input1' placeholder='رمز عبور' type='password' onChange={(e) => this.handleChange(e)} />
            {
              this.state.error.password !== null && <p className='error'>{this.state.error.password}</p>
            }
            <input name='reTypePassword' className='input1' placeholder='رمز عبور را دوباره وارد نمایید' type='password' onChange={(e) => this.handleChange(e)} />
            {
              this.state.Password = this.state.reTypePassword && <p className='error'>رمزهای وارد شده متفاوتند.</p>
            }
                        {
              this.state.error.reTypePassword !== null && <p className='error'>{this.state.error.reTypePassword}</p>
            }
            <button className='submit' onClick={() => this.handleClick()} >ثبت نام </button>
          </div>
        </section>
      </div>

    )
  }
}
