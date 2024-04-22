// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import { Outlet } from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
  <>
  {/* <div><h1>hello app </h1></div> */}
  {/* <nav>site logo in app </nav> */}
  <Navbar/>
  <Outlet/>
  {/* about */}
  </>
  )
}

export default App
