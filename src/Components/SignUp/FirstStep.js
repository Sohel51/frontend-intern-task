import React from 'react'
import './Default.css';
import homepic from '../../images/home.png'
import logo from '../../images/logo.png'
import { useNavigate } from 'react-router-dom';

const FirstStep = () => {
    const navigate = useNavigate();

    const navigateLogin = event => {
        navigate('/login');
    };

    const navigateContact = event => {
        navigate('/contact');
    };

    const handleFnameBlur = event =>{
        console.log(event.target.value);
    }

    const handleLnameBlur = event =>{
        console.log(event.target.value);
    }


    return (
        <section className='firstStep'>
            <form className='mt-5 items'>
                <div className="set-image">
                    <img src={logo} alt="" />
                    <img className='back' src={homepic} alt="" />
                </div>
                <div className="content">
                    <h2 className='signup-title'> SignUp Form</h2>
                    <div className="input-field">
                        <input onBlur={handleFnameBlur} type="text" placeholder='Write First Name' /><br /><br />
                        <input onBlur={handleLnameBlur} type="text" placeholder='Write Last Name' />
                    </div><br /><br />
                    <div className="next-step">
                        <button type="submit" class="btn btn-primary" onClick={navigateContact}>Next Step</button>
                    </div>
                    <div className="have-account mt-5">
                        <p>Already have an account? <span onClick={navigateLogin}>LOGIN HERE</span></p>
                    </div>
                </div>
            </form>
        </section>
    );
};

export default FirstStep;