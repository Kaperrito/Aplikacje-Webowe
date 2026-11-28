import { useState } from 'react'
import {zdjeciaStartowe} from './zdjecia.js'

const NAZWY_KATEGORII = {1:'Kwiaty', 2:'Zwierzęta', 3:'Samochody'}
const KATEGORIE = [1, 2,3]

function App() {
  const [zdjecia, setZdjecia] = useState(zdjeciaStartowe)
  const [aktywneKategorie, setAktywneKategorie] = useState(KATEGORIE)
  const widoczne = zdjecia.filter(x => aktywneKategorie.includes(x.category))

  function przelaczKategorie(kategoria) {
    setAktywneKategorie(aktywne =>
      aktywne.includes(kategoria) ? aktywne.filter(x => x !== kategoria) : [...aktywne, kategoria]
    )
  }

  return (
   <>
   <div className='container mt-4'>
    <h1>Kategorie zdjęć</h1>

    <div className="d-flex flex-wrap gap-3 mb-3">
        {KATEGORIE.map(kategoria => (
          <div className="form-check form-switch" key={kategoria}>
            <input className="form-check-input" type="checkbox" role="switch" id={`kategoria-${kategoria}`} checked={aktywneKategorie.includes(kategoria)} onChange={() => przelaczKategorie(kategoria)}/>
            <label className="form-check-label" htmlFor={`kategoria-${kategoria}`}>{NAZWY_KATEGORII[kategoria]}</label>
          </div>
        ))}
      </div>

    <div className='row g-3'>
    {widoczne.map(zdjecie=>(
      <div key={zdjecie.id} className='col-12 col-sm-6 col-md-4'>
        <img src={zdjecie.filename} alt={zdjecie.alt} className='img-fluid'></img>
      </div>
    ))}
    </div>
   </div>
   </>
  )
}

export default App
