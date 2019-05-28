import React from 'react'
import '../App.css'
import validate from '../validation/validateFunction'
import profilePicture from '../images/profilepicture.png'
import logo from '../images/hendoone.png'
import { DatePicker } from 'react-advance-jalaali-datepicker'
import axios from 'axios'

class Profile extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      myId: window.localStorage.getItem('id'),
      token: window.localStorage.getItem('token'),
      firstName: '',
      lastName: '',
      phoneNumber: '',
      city: '',
      job: '',
      gender: 'female',
      birthday: '1396/05/15',
      marriage: 'single',
      bio: '',
      selectedFile: '',
      error: {
        firstName: null,
        lastName: null,
        phoneNumber: null
        // city:null,
        // job:null,
        // gender:null,
        // birthday:null,
        // marriage:null,
        // bio:null
      }
    }
    this.change = this.change.bind(this)
    this.handleChangeImage = this.handleChangeImage.bind(this)
  }
  change (unix, formatted) {
    // console.log(unix); // returns timestamp of the selected value
    //  console.log(formatted); // returns the selected value in the format you've entered
    this.setState({ birthday: formatted })
  }
  DatePickerInput (props) {
    return <input className='popo inputs' {...props} />
  }
  handleChange (e) {
    var name = e.target.name
    this.setState({ [name]: e.target.value })
    console.log(this.state)
  }
  handleClick () {
    var firstNameError = validate('firstName', this.state.firstName)
    var lastNameError = validate('lastName', this.state.lastName)
    var phoneNumberError = validate('phoneNumber', this.state.phoneNumber)
    this.setState({ ...this.state, error: { ...this.state.error, firstName: firstNameError, lastName: lastNameError, phoneNumber: phoneNumberError } },
      () => {
        if ((this.state.error.firstName == null) && (this.state.error.lastName == null) && (this.state.error.phoneNumber == null)) {
          let fdata = new FormData()
          fdata.append('token', this.state.token)
          fdata.append('description', this.state.bio)
          fdata.append('user_type', 'organization')
          fdata.append('phone_number', '989381442322')
          // fdata.append('avatar', this.state.selectedFile )
          fdata.append('location_lat', 43)
          fdata.append('location_long', -79)
          fdata.append('mobile_number', '98' + this.state.phoneNumber.slice(1))
          fdata.append('name', this.state.firstName + this.state.lastName)
          fdata.append('website', 'https://google.com/')
          fdata.append('country_code', 'CA')
          fdata.append('address', this.state.city)

          axios.post('https://api.paywith.click/auth/profile/', fdata)
            .then(function (response) {
              console.log('response::::', response)
            })
            .catch(function (error) {
              console.log('error:::::', error)
            })
        }
      }
    )
  }

  handleChangeImage (evt) {
    console.log('Uploading')
    var self = this
    console.log('here self', self)
    var reader = new FileReader()
    var file = evt.target.files[0]
    reader.readAsDataURL(file)
    reader.onload = function (upload) {
      self.setState({
        selectedFile: upload.target.result
      }, () => {
        console.log('Uploaded', self.state.selectedFile)
      })
    }
  }

  render () {
    return (

      <div className='profPage'>
        <div className='profPageContainer'>
          <div className='top'>
            <div className='profilePicturetext'>
              <input ref='file' type='file' name='file'
                className='upload-file'
                id='file'
                onChange={this.handleChangeImage}
                encType='multipart/form-data'
                required />
              {/* <img className='profilePicture'
                             src={ profilePicture}
                             onClick={this.handleChangeImage}
                             ref="file" type="file" name="file"
                             /> */}
              <p className='uploadProfPic' >لطفا عکس پروفایل خود را بارگذاری نماید</p>
            </div>
            <div className='inputtop'>
              <div className='inputLeft' >
                <div>
                  <input name='job' className='job inputs' onChange={(e) => this.handleChange(e)} />
                  <span className='spans'>:شغل</span>
                </div>
                <div>
                  <select name='gender' className='gender inputs' onChange={(e) => this.handleChange(e)}>
                    <option value='female'>خانوم</option>
                    <option value='male'>آقا</option>
                  </select>
                  <span className='spans'>:جنسیت</span>
                </div>
                <div style={{ display: 'flex' }}>
                  <DatePicker
                    inputComponent={this.DatePickerInput}
                    // placeholder="انتخاب تاریخ"
                    format='jYYYY/jMM/jDD'
                    onChange={this.change}
                    name='birthday'
                    preSelected={this.state.birthday}
                    // customClass='calender'
                    cancelOnBackgroundClick
                  />
                  <span className='spans'>:تاریخ تولد</span>
                </div>
                <div>
                  <select name='marriage' className='marriage inputs' onChange={(e) => this.handleChange(e)}>
                    <option value='single'>مجرد</option>
                    <option value='married'>متاهل</option>
                  </select>
                  <span className='spans'>:وضعیت تاهل</span>
                </div>
              </div>
              <div className='inputRight' >
                <div>
                  <input name='firstName' className='firstName inputs' onChange={(e) => this.handleChange(e)} />
                  <span className='spans'>:نام</span>
                  {
                    this.state.error.firstName !== null && <p className='error'>{this.state.error.firstName}</p>
                  }
                </div>
                <div>
                  <input name='lastName' className='lastName inputs' onChange={(e) => this.handleChange(e)} />
                  <span className='spans'>:نام خانوادگی</span>
                  {
                    this.state.error.lastName !== null && <p className='error'>{this.state.error.lastName}</p>
                  }
                </div>
                <div>
                  <input name='phoneNumber' className='phoneNumber inputs' onChange={(e) => this.handleChange(e)} />
                  <span className='spans'>:شماره تلفن همراه</span>
                  {
                    this.state.error.phoneNumber !== null && <p className='error'>{this.state.error.phoneNumber}</p>
                  }
                </div>
                <div>
                  <input name='city' className='city inputs' onChange={(e) => this.handleChange(e)} />
                  <span className='spans'>:شهر محل سکونت</span>
                </div>
              </div>
            </div>
          </div>
          <div className='bot'>
            <div className='bio'>
              <textarea name='bio' className='bioInput' placeholder='لطفا خود را توصیف کنید' onChange={(e) => this.handleChange(e)} />
              <span className='spans'>:درباره‌ی من</span>
            </div>
            <div className='logoProfileContainer'>
              <img className='logoProfile' src={logo} />
              <div className='hendoone'>
                <span>پیام رسان</span>
                <span> هندونه</span>
              </div>

            </div>
          </div>
          <div>
            <button className='profileSubmit' onClick={() => this.handleClick()} >ثبت اطلاعات</button>
          </div>
        </div>
      </div>
    )
  }
}

export default Profile
