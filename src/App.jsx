import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NavBar from './components/NavBar.jsx'
import CurrencyPage from './pages/CurrencyPage.jsx'
import TitleContainer from './components/TitleContainer.jsx'
import MainPage from './pages/mainPage.jsx'
import LengthPage  from './pages/LengthPage.jsx'
import './App.css'
function App() {

  return (
    <>
      <Router>
        <div className="main-container">
          <TitleContainer/>
          <NavBar />
          <Routes>
            <Route path="/main_page" element={<MainPage />}></Route>
            <Route path="/currency_conversion" element={<CurrencyPage/>}></Route>
            <Route path="/length_conversion" element={<LengthPage />}></Route>
          </Routes>
        </div>
      </Router>
    </>
  )
}

export default App
