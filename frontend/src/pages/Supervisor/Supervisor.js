import React from 'react'
import { Navigate, Link, Routes, Route, BrowserRouter } from 'react-router-dom'


function Supervisor() 
{
  const employeeData = [
    { EmpID: 1, Date: '2024-09-01', Name: 'John Doe', Weight: 75 },
    { EmpID: 2, Date: '2024-09-02', Name: 'Jane Smith', Weight: 68 },
    { EmpID: 3, Date: '2024-09-03', Name: 'Mike Johnson', Weight: 82 },
    { EmpID: 4, Date: '2024-09-04', Name: 'Emily Davis', Weight: 60 },
  ];

  return (
    <div className='supervisor'>
    <h1>Supervisor Page</h1>
      <Link to='/Add_details' className='pick'><button className='btn'>See Picker Details</button></Link>
      <div className='pickers'>
        <table>
          <thead>
            <th>Employee ID</th>
            <th>Worked Date</th>
            <th>Employee Name</th>
            <th>Picked Weight</th>
          </thead>

          <tbody>
            {employeeData.map((emp) => (
              <tr>
                <td>{emp.EmpID}</td>
                <td>{emp.Date}</td>
                <td>{emp.Name}</td>
                <td>{emp.Weight}</td>
                <td><button className='sub_btn'>Update</button></td>
                <td><button className='sub_btn'>Delete</button></td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default Supervisor