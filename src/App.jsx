import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import HomePage from './components/HomePage'
import Services from './components/Services'
import About from './components/About'
import Contact from './components/Contact'

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/HomePage" element={<HomePage />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/AboutMe" element={<About />} />
         <Route path="/Contact" element={<Contact />} />
        
      </Routes>
    </Router>
  )
}

export default App