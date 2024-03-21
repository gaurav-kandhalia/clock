import { useState } from 'react'

import './App.css'
import Home from './components/pages/Home/home'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
    <section className='min-h-screen flex justify-center items-center'>
    <Home/>
    </section>

 </>

  )
}

export default App
