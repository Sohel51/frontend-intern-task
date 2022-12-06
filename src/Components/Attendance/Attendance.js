import React from 'react';
import './Attendance.css';
import logo from '../../images/logo.png'

const Attendance = () => {
  return (
    <section className='attendance'>
      <img src={logo} alt="" className='mt-5'/>
      <h2 className='title'>Attendance Information</h2>
      <div className="table-data mt-5">
        <table class="table">
          <thead>
            <tr>
              <th scope="col">Date</th>
              <th scope="col">Employee Name</th>
              <th scope="col">Status</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>11/7/16</td>
              <td>Otto</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>2/11/12</td>
              <td>Thornton</td>
              <td>Absent</td>
            </tr>
            <tr>
              <td>4/21/12</td>
              <td>Elaano Pana</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>8/15/17</td>
              <td>Wade Warnen</td>
              <td>Absent</td>
            </tr>
            <tr>
              <td>6/19/14</td>
              <td>Jacob Jonas</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>6/21/19</td>
              <td>Darlano Robertson</td>
              <td>Absent</td>
            </tr>
            <tr>
              <td>5/19/12</td>
              <td>Forlano Put</td>
              <td>Present</td>
            </tr>
            <tr>
              <td>5/7/16</td>
              <td>Brad Pitt</td>
              <td>Present</td>
            </tr>
          </tbody>
        </table>
      </div>
    </section>
  )
}

export default Attendance