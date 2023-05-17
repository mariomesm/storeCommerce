import { useState } from 'react'
import './App.css'
import Navbar from './pages/Home/navbar'
import Main from './pages/Home/main'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Navbar/>
      <Main/>
    </>
  )
}

export default App
