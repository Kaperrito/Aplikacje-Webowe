import { useState } from 'react'
import { useEffect } from 'react'

function App() {
  const [rowery, setRowery] = useState([])
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  return (
    <>
    <div className='container mt-4'>
      <h1>Wypożyczalnia rowerów</h1>
    </div>
    </>
  )
}

export default App
