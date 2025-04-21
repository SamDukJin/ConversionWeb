import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import CurrencyPage from './pages/CurrencyPage.jsx'
import TitleContainer from './components/TitleContainer.jsx'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Router>
        <div className="main-container">
          <TitleContainer/>
          <NavBar />
          <Routes>
            <Route path="/currency" element={<CurrencyPage/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
