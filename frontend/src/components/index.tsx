import { useState } from 'react'
import './index.css'
import linkedin_icon from '../assets/linkedin.png'
import email_icon from '../assets/email.svg'
import user_icon from '../assets/profile.svg'
import password_icon from '../assets/password.svg'

const SignUp = () => {

    const [action,setAction] = useState("Sign Up");

    return (
        <div className='container'>
            <img src={linkedin_icon} alt=""/>
            <div className='Header'>
                <div className='text'>{action}</div>
            </div>
            <div className='inputs'>
                <div className='input'>
                    <img src={user_icon} alt=""/>
                    <input type="text" placeholder='Name'/>
                </div>
                <div className='input'>
                    <img src={email_icon}  alt=""/>
                    <input type="email" placeholder='Email'/>
                </div>
                <div className='input'>
                    <img src={password_icon}  alt=""/>
                    <input type="password" placeholder='Password'/>
                </div>
            </div>
            <div className='forgot-password'>Forgotten Password? <span>Click Here!</span></div>
            <div className='submit-container'>
                <div className={action==='Login'?'submit gray':'submit'} onClick={()=>{setAction('Sign Up')}}>Sign Up</div>
                <div className={action==='Sign Up'?'submit gray':'submit'} onClick={()=>{setAction('Login')}}>Login</div>
            </div>
        </div>
    )
}

export default SignUp