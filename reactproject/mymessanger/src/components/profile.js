import React from 'react'
import '../App.css'
import validate from '../validation/validateFunction'
import profilePicture from '../images/profilepicture.png'
import logo from './hendoone.png'

class Profile extends React.Component {
constructor(){
    super()
    this.state= {
        firstName: '',
        lastName: '',
        phoneNumber:'',
        city:'',
        job:'',
        gender:'',
        birthday:'',
        marriage:'',
        bio:'',
        error:{
            firstName: null,
            lastName: null,
            phoneNumber:null,
            city:null,
            job:null,
            gender:null,
            birthday:null,
            marriage:null,
            bio:null

        }
    }
}
handleChange(e) {
    var name = e.target.name
    this.setState({[name]: e.target.value})
    console.log(this.state)
}
handleClick(){
    var firstNameError= validate('firstName' , this.state.firstName)
    var lastNameError= validate('lastName' , this.state.lastName)
    this.setState({ ...this.state, error:{ ...this.state.error , firstName:firstNameError, lastName: lastNameError }}, ()=>{ console.log('emailerror',this.state.error)})
}

 render() {
    return(
        <div className='profPage'>
            <div className='profPageContainer'>
                <div className='top'>
                    <div className='profilePicturetext'>
                        <img className='profilePicture' src={ profilePicture}/>
                        <p className='uploadProfPic' >لطفا عکس پروفایل خود را بارگذاری نماید</p>
                    </div>
                    <div className='inputtop'>
                        <div className='inputLeft' >
                            <div>
                                <input name='job' className='job inputs' onChange={(e)=>this.handleChange(e)}/>
                                <span className='spans'>:شغل</span>  
                            </div> 
                            <div>
                                <select name='gender' className='gender inputs' onChange={(e) => this.handleChange(e)}>
                                    <option value="female">خانوم</option>
                                    <option value="male">آقا</option>
                                </select>
                                <span className='spans'>:جنسیت</span>
                            </div>
                            <div>
                                <input name='birthday' className='birthday inputs' onChange={(e) => this.handleChange(e)}/>
                                <span className='spans'>:تاریخ تولد</span>  
                            </div> 
                            <div>
                                <select name='marriage' className='marriage inputs' onChange={(e) => this.handleChange(e)}>
                                    <option value="single">مجرد</option>
                                    <option value="married">متاهل</option>
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
                                <input name='lastName' className='lastName inputs' onChange={(e) => this.handleChange(e)}/>
                                <span className='spans'>:نام خانوادگی</span> 
                                {
                                 this.state.error.lastName !== null && <p className='error'>{this.state.error.lastName}</p>
                                 } 
                            </div>
                            <div>
                                <input name='phoneNumber ' className='phoneNumber inputs' onChange={(e) => this.handleChange(e)}/>
                                <span className='spans'>:شماره تلفن همراه</span> 
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
                        <textarea name='bio' className='bioInput' placeholder='لطفا حداکثر در 700 کاراکتر خود را توصیف کنید' onChange={(e) => this.handleChange(e)}/>
                        <span className='spans'>:درباره‌ی من</span>
                    </div>
                    <div className='logoProfileContainer'>
                        <img className='logoProfile' src={logo}/>     
                        <div className='hendoone'>
                            <span>پیام رسان</span>
                            <span> هندونه</span>  
                        </div>
 
                    </div>
                </div>
                <div>
                    <button className='profileSubmit' onClick={ ()=>this.handleClick() } >ثبت اطلاعات</button>
                </div>
            </div>
        </div>
    )
   }
}

export default Profile