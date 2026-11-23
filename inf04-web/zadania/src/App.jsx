import { useState } from 'react'
import {Routes, Route, Link} from 'react-router-dom'
import {wydarzenia} from './wydarzenia.js'

function ListaWydarzenPage(){
  return(
    <div className='container mt-4'>
      <h1>Wydarzenia i koncerty</h1>
      <div className='row g-3'>
        {wydarzenia.map(wydarzenie =>(
          <div key={wydarzenia.id} className='col-12 col-md-4'>
            <div className='card h-100'>
              <div className='card-body'>
                <h3 className='card-title h5'>{wydarzenie.nazwa}</h3>
                <p className='text-body-secondary mb-2'>{wydarzenie.miasto} - {wydarzenie.data}</p>
                <Link to={`wydarzenie/${wydarzenie.id}`} className='btn btn-outline-primary btn-sm'>Szczegóły</Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

function SzczegolyWydarzeniaPage(){
  return <div className='container mt-4'>Szczegóły wydarzenia</div>
}

function App() {
  const [count, setCount] = useState(0)

  return (
    <Routes>
      <Route path='/' element={<ListaWydarzenPage />} />
      <Route path='/wydarzenie:id' element={<SzczegolyWydarzeniaPage />} />
    </Routes>
  )
}

export default App
