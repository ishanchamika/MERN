import './App.css';
import MainPage from './pages/MainPage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Register from './pages/Register';

function App() 
{
  return (
    <div className="App">
    <BrowserRouter>
      <Routes>
        <Route path='/login' element = {<MainPage/>}></Route>
        <Route path='/register' element = {<Register/>}></Route>
      </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
