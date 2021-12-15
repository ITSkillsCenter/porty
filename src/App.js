import logo from './logo.svg';
import './App.css';
import Contact from './screens/Contact';
import HomePage from './screens/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './screens/SignUp';
import Splash from './screens/Splash';
import Completed from './screens/Completed';
import Login from './screens/Login';
import { userContext } from './context/userContext';
import { useState } from 'react';
import AccountCreated from './screens/AccountCreated';


function App() {
  const [jwt, setJwt]  = useState("");
  const [user, setUser]  = useState("");

  return (
    <userContext.Provider value={{jwt, setJwt, user, setUser}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Splash />} />
          <Route path="/success" element={<AccountCreated />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/home" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </userContext.Provider>
  );

}

export default App;
