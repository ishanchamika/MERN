import './App.css';
import MainPage from './pages/MainPage';
import Dashboard from './pages/Dashboard';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Register from './pages/Register';

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
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
