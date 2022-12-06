import React from 'react'
import '../SignUp/Default.css';
import homepic from '../../images/home.png'
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';

const Login = () => {
  const navigate = useNavigate();

  const navigateSignUp = event => {
    navigate('/');
  }
  return (
    <section className='firstStep'>
      <form className='mt-5 items'>
        <div className="set-image">
          <img src={logo} alt="" />
          <img className='back' src={homepic} alt="" />
        </div>
        <div className="content">
          <h2 className='signup-title'> Log in Form</h2>
          <div className="input-field">
            <input type="email" placeholder='Write Email Address' /><br /><br />
            <input type="password" placeholder='Write Password' /><br />
            {/* validation */}
            <div className="validation-message">
              <div>Your password must be 8 characters</div>
            </div>
          </div><br /><br />
          <div className="next-step">
            <button type="submit" className="btn btn-primary">Log in</button>
          </div>
          <div className="have-account mt-5">
            <p>Don't have an account? <span onClick={navigateSignUp}>SIGNUP HERE</span></p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default Login