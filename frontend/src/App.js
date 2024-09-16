import './App.css';
import MainPage from './pages/MainPage';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';
import Supervisor from './pages/Supervisor/Supervisor';
import Adddetails from './pages/Supervisor/Adddetails';

function App() 
{
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/' element = {<MainPage/>}></Route>
        <Route path='/login' element = {<MainPage/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
        <Route path='/dashboard' element = {<Dashboard/>}></Route>
        <Route path='/supervisor' element = {<Supervisor/>}></Route>
        <Route path='Add_details' element = {<Adddetails/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
