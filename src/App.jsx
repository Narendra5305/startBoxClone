import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import RegisterForm from './pages/signup'
import Navbar from './component/navbar'
import Home from './pages/home'
import Footer from './component/footer'


import {
  BrowserRouter as Router,
 
  Routes,
  Route
} from "react-router-dom";
import Login from './pages/signin'





function App() {
  const [count, setCount] = useState(0)

  return (
    <Router>
      <Navbar/>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signin" element={<Login/>}/>
          <Route path="/signup" element={<RegisterForm/>}/>
        </Routes>
      <Footer/>
    </Router>
  )
}

export default App
