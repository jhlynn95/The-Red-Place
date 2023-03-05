import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import About from './pages/About';
import Menu from './pages/Menu';
import Catering from './pages/Catering';
import Contact from './pages/Contact';
import Home from './pages/Home';
import Header from './components/Header';
import Footer from './components/Footer';
import Login from './pages/Login';
import SignUp from './pages/SignUp';

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path='/' element={<About />} />
          <Route path='/menu' element={<Menu />} />
          <Route path='/catering' element={<Catering />} />
          <Route path='/contact' element={<Contact />} />
          <Route path='home' element={<Home />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
