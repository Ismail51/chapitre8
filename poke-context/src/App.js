import React from 'react';
import { Routes, Route, NavLink} from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';


function App() {
  return (
    <div>
          <NavLink to ='/'>Home</NavLink>
          <NavLink to ='/Login'>Login</NavLink>
          <h1>relaaax</h1>
          <Routes>
            <Route path='/' element={<Home/>}></Route>
            <Route path='/Login' element={<Login/>}></Route>
          </Routes>
    </div>
  );
}

export default App;