import React, { useContext } from 'react'
import Navbar from './components/navbar/Navbar'
import Home from './pages/home/Home'
import Single from './pages/single/Single'
import Write from './pages/write/Write'
import Settings from './pages/settings/Settings'
import Login from './pages/login/Login'
import Register from './pages/register/Register'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Context } from './context/Context'
import About from './pages/about/About'

function App() {
  const { user } = useContext(Context)
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/register' element={user ? <Home /> : <Register />} />
          <Route path='/login' element={user ? <Home /> : <Login />} />
          <Route path='/write' element={user ? <Write /> : <Register />} />
          <Route path='/settings/:id' element={user ? <Settings /> : <Register />} />
          <Route path='/post/:id' element={<Single />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </Router>
      <ToastContainer />
    </>
  )
}

export default App