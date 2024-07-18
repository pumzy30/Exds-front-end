import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faEnvelope, faLock, faArrowLeft} from '@fortawesome/free-solid-svg-icons'
import { Link } from 'react-router-dom';
import img1 from '../assets/signup.png';
import '../scss/main.scss'

function Login(){
    return(
        <>
        <div className='login-section'>
          <div className='form-heading'>
            <img src={img1}/>
          <h1>Hi! Welcome Back.</h1>
        <p>Login to your account.</p>
        </div>
        <br></br>
        <form>
            <div className='details-div'>
        <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
        <input type='email' className='email' id='email' placeholder='Email Address'></input>
            </div>

            <div className='details-div'>
        <span className='icon'><FontAwesomeIcon icon={faLock} /></span>
        <input type='password' className='password' id='password' placeholder='Password'></input>
            </div>

            <button type='submit' className='btn-login'>Login</button>
        </form>
        <p>Don't have an account?</p>
        </div>
        </>
    )
}

export default Login
