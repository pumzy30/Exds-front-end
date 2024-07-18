import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCircleUser, faEnvelope, faLocationDot, faLock, faPhone} from '@fortawesome/free-solid-svg-icons'
import img1 from '../assets/signup.png';
import '../scss/main.scss'

function Signup() {
  return(
    <>
    <div className='form-section'>
          <div className='form-heading'>
            <img src={img1}/>
          <h1>Create Account</h1>
        <p>Sign up to get started</p>
        </div>
        <br></br>
      <form>
        <div className='details-div'>
          <span className='icon'><FontAwesomeIcon icon={faCircleUser} /></span>
        <input type='text' className='name' id='name' placeholder='Name'></input>
        </div>

        <div className='details-div'>
          <span className='icon'><FontAwesomeIcon icon={faCircleUser} /></span>
          <input type='text' className='surname' id='surname' placeholder='Surname'></input>
        </div>

        <div className='details-div'>
          <span className='icon'><FontAwesomeIcon icon={faLocationDot} /></span>
          <input type='text' className='address' id='address' placeholder='Address'></input>
        </div>

        <div className='details-div'>
          <span className='icon'><FontAwesomeIcon icon={faEnvelope} /></span>
          <input type='email' className='email' id='email' placeholder='Email Address'></input>
        </div>
        <div className='details-div'>
          <span className='icon'><FontAwesomeIcon icon={faPhone} /></span>
          <input type='text' className='contacts' id='contacts' placeholder='Contact details'></input>
        </div>

        <div className='details-div'>
          <span className='icon'><FontAwesomeIcon icon={faLock} /></span>
          <input type='password' className='password' id='password' placeholder='Password'></input>
        </div>

        <button type='submit' className='btn btn-block'>Sign Up</button>
      </form>
    </div>
    </>
  )
}

export default Signup
