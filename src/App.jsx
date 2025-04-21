import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import CurrencyPage from './pages/CurrencyPage.jsx'
import TitleContainer from './components/TitleContainer.jsx'
import './App.css'

function App() {

  return (
    <>
      <Router>
        <div className="main-container">
          <TitleContainer/>
          <NavBar />
          <Routes>
            <Route path="/currency_conversion" element={<CurrencyPage/>}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
