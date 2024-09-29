import './App.css';
import MainPage from './pages/MainPage';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route, Navigate, Router } from 'react-router-dom';
import Register from './pages/Register';
import Supervisor from './pages/Supervisor/Supervisor';
import Adddetails from './pages/Supervisor/Adddetails';
import Updatedetails from './pages/Supervisor/Updatedetails';
import Picker_register from './pages/Supervisor/Picker_register';
import Navbar from './Navbar';
import Sidebar from './Sidebar';

function App() 
{
  return (
    <div className="App">

    <BrowserRouter>
    {/* <Navbar />
    
    <Sidebar /> */}
      <Routes>
        <Route path='/' element = {<MainPage/>}></Route>
        <Route path='/login' element = {<MainPage/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/dashboard' element = {<Dashboard/>}></Route>
        <Route path='/supervisor' element = {<Supervisor/>}></Route>
        <Route path='/Add_details' element = {<Adddetails/>}></Route>
        <Route path='/updatedetails' element = {<Updatedetails />}></Route>
        <Route path='/pickerRegister' element = {<Picker_register />}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
