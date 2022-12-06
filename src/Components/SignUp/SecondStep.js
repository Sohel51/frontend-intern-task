import React, { useState } from 'react'
import './Default.css';
import homepic from '../../images/home.png'
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';

const SecondStep = () => {
  // sending the data
  const [email, setEmail] = useState('');

  const handleEmailBlur = event => {
    setEmail(event.target.value);
  }
  
  const navigate = useNavigate();

  const navigateLogin = event => {
    navigate('/login');
  }
  const navigatePassword = event => {
    navigate('/password');
    console.log('Email Submitted', email);
    event.preventDefault();
  };
  const navigateSignUp = event => {
    navigate('/');
  }
  return (
    <section className='firstStep'>
      <form onSubmit={navigatePassword} className='mt-5 items'>
        <div className="set-image">
          <img src={logo} alt="" />
          <img className='back' src={homepic} alt="" />
        </div>
        <div className="content">
          <h2 className='signup-title'> SignUp Form</h2>
          <div className="input-field">
            <input type="number" placeholder='+880' /><br /><br />
            <input onBlur={handleEmailBlur} type="email" placeholder='Write Email Address' />
          </div><br /><br />
          <div className="next-step">
            <button type="submit" className="btn back" onClick={navigateSignUp}>Back</button>
            <button type="submit" className="btn btn-primary" onClick={navigatePassword}>Next Step</button>
          </div>
          <div className="have-account mt-5">
            <p>Already have an account? <span onClick={navigateLogin}> LOGIN HERE</span></p>
          </div>
        </div>
      </form>
    </section>
  )
}

export default SecondStep