import { useState } from 'react'
import {przepisyStartowe} from './przepisy.js'

function App() {
  const [count, setCount] = useState(0)
  const [przepisy, setPrzepisy] = useState(przepisyStartowe)
  return (
    <>
    <div className='container mt-4'>
      <h1>Książka przepisów</h1>
    </div>
    </>
  )
}

export default App
