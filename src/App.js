import logo from './logo.svg';
import './App.css';
import Contact from './screens/Contact';
import HomePage from './screens/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';

function App() {


  return (

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
  );

}

export default App;
