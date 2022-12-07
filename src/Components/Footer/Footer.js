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
                <button onClick={navigateSignUp} type="submit" className="btn btn-primary">Let's Start</button>
            </div>
            <div className="message mt-3">
                <h5><span>Note: </span> For some work i was go in my hometown. That's why i completed the task today. I try my best to complete the task. But one issue i can't solve. That's <span>User Authentication With FireBase</span> before that i just learned it in one page signup auth. but here's 3 page that's new for me. But i tried in my way google it in the end of the day i can't solve that clearly. I think if i get a chance in your company Inshallah i can solve that issue & learn more.</h5>
            </div>
        </footer>
    )
}

export default Footer