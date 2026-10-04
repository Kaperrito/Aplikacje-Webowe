import { useState } from 'react'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div className="container mt-4">
        <h1>Galeria Zdjęć</h1>
      </div>
    </>
  )
}

export default App
