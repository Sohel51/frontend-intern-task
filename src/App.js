import { Route, Routes } from 'react-router-dom';
import './App.css';
import Attendance from './Components/Attendance/Attendance';
import Footer from './Components/Footer/Footer';
import Login from './Components/Login/Login';
import FirstStep from './Components/SignUp/FirstStep';
import SecondStep from './Components/SignUp/SecondStep';
import ThirdStep from './Components/SignUp/ThirdStep';


function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element={<FirstStep></FirstStep>}></Route>
        <Route path='/contact' element={<SecondStep></SecondStep>}></Route>
        <Route path='/password' element={<ThirdStep></ThirdStep>}></Route>
        <Route path='/login' element={<Login></Login>}></Route>
        <Route path='/attendance' element={<Attendance></Attendance>}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
