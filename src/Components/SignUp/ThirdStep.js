import React, { useState } from 'react'
import './Default.css';
import homepic from '../../images/home.png'
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';


const ThirdStep = () => {
  const navigate = useNavigate();

  const navigateLogin = event => {
    navigate('/login');
  }
  const navigateContact = event => {
    navigate('/contact');
  };

  // final submit
  const [password, setPassword] = useState('');

  const handlePasswordBlur = event => {
    setPassword(event.target.value);
  }

  const handleFormSubmit = event => {
    console.log('form submitted', password);
    event.preventDefault();
  }

  return (
    <section className='firstStep'>
      <form onSubmit={handleFormSubmit} className='mt-5 items'>
        <div className="set-image">
          <img src={logo} alt="" />
          <img className='back' src={homepic} alt="" />
        </div>
        <div className="content">
          <h2 className='signup-title'> SignUp Form</h2>
          <div className="input-field">
            <input onBlur={handlePasswordBlur} type="password" placeholder='Write Password' /><br />
            {/* validation */}
            <div className="validation-message">
              <div>Your password must be 8 characters</div>
            </div>
          </div><br /><br />
          <div className="next-step">
            <button type="submit" className="btn back" onClick={navigateContact}>Back</button>
            <button type="submit" class="btn btn-primary">Sign Up</button>
          </div>
          <div className="have-account mt-5">
            <p>Already have an account? <span onClick={navigateLogin}>LOGIN HERE</span></p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default ThirdStep