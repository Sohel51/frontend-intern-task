import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Footer.css';

const Footer = () => {
    const navigate = useNavigate();

    const navigateAttendance = event => {
        navigate('/attendance');
    };
    const navigateSignUp = event => {
        navigate('/');
    };
    return (
        <footer className='mt-5'>
            <hr />
            <div className="attendance mt-2">
                <button onClick={navigateAttendance} type="submit" className="btn btn-primary">Attendance Sheet</button>
            </div>
        </footer>
    )
}

export default Footer
