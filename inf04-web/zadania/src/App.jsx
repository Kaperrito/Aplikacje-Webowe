import { useState } from 'react'
import {zdjeciaStartowe} from './zdjecia.js'

function App() {
  const [count, setCount] = useState(0)

  return (
   <>
   <div className='container mt-4'>
    <h1>Kategorie zdjęć</h1>
   </div>
   </>
  )
}

export default App
