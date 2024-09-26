
import { Outlet } from 'react-router-dom'
import './App.css'
import NavBar from './components/sharedComponents/NavBar'
import Footer from './components/sharedComponents/Footer'

function App() {

  return (
    <>
    <NavBar/>
    <Outlet/>
    <Footer/>
    </>
  )
}

export default App
