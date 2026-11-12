import { useState } from 'react'
import {ksiazkiStartowe} from './ksiazki.js'

const GATUNKI = [...new Set(ksiazkiStartowe.map(k => k.gatunek))]

function App() {
  const [ksiazki,setKsiazki] = useState(ksiazkiStartowe)
  const [aktywnyGatunek, setAktywnyGatunek] = useState('wszystkie')

  const widoczne = aktywnyGatunek === 'wszystkie'? ksiazki: ksiazki.filter(k => k.gatunek === aktywnyGatunek)

  function przelaczUlubiona(id) {
    setKsiazki(ksiazki.map(k => (k.id === id ? { ...k, ulubiona: !k.ulubiona } : k)))
  }
  return (
    <>
      <div className='container mt-4'>
        <h1>Biblioteka</h1>

     <div className="d-flex flex-wrap gap-2 mb-3">
        <button type="button" className={`btn btn-outline-primary${aktywnyGatunek === 'wszystkie' ? ' active' : ''}`} onClick={() => setAktywnyGatunek('wszystkie')}>Wszystkie</button>
        {GATUNKI.map(gatunek => (
          <button key={gatunek} type="button" className={`btn btn-outline-primary${aktywnyGatunek === gatunek ? ' active' : ''}`} onClick={() => setAktywnyGatunek(gatunek)}>{gatunek} </button>
        ))}
      </div>
      <p className="text-body-secondary">Wyświetlono {widoczne.length} z {ksiazki.length} ksiażek</p>

      <div className='row g-3'>
        {widoczne.map(ksiazka=>(
        <div key={ksiazka.id} className='col-12 col-md-4'> 
          <div className={`card h-100 ${ksiazka.dostepna ? 'border-success' : 'border-danger'}`}>
            <div className='card-body'>
              <h3 className='card-title h5'>{ksiazka.tytul}</h3>
              <button type="button" className="btn btn-link p-0 fs-4" onClick={() => przelaczUlubiona(ksiazka.id)}>{ksiazka.ulubiona ? '★' : '☆'}</button>
              <p className='text-body-secondary mb-1'>{ksiazka.autor}</p>
              <span className={`badge text-bg-${ksiazka.dostepna ? 'success' : 'danger'}`}>{ksiazka.dostepna ? 'Dostępna' : 'Wypożyczona'}</span>
            </div>
          </div>
        </div>
        ))}
        
      </div>
      </div>
    </>
  )
}

export default App
