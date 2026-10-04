import { useState } from 'react'
import './App.css'
import Navbar from './components/navbar'
import CategoryBar from './components/categoryBar'
import Gallery from './components/gallery'
import Footer from './components/Footer'
import AddPhotoModal from './components/AddPhotomodal'
import FiltersOffcanvas from './components/FilterOffCanvas'
import photos from './data/photos.json'

function App() {
  const [zdjecia,setZdjecia] = useState(photos)
  const [aktywnaKategoria,setAktywnaKategoria] = useState('wszystkie')
  const widoczne = aktywnaKategoria === "wszystkie" ? zdjecia : zdjecia.filter(x => x.category === aktywnaKategoria)
  return (
    <>
      <Navbar />
      <header className="container py-4 py-lg-5">
        <div className="row align-items-center g-3">
          <div className="col-12 col-lg-8">
            <h1 className="mb-2">Galeria zdjęć</h1>
              <p className="lead text-body-secondary mb-0">
                Zdjęcia z wypraw w góry, nad morze i po mieście. Wybierz kategorię,
                żeby zawęzić widok— albo powiększ zdjęcie, które Ci się spodoba.
              </p>
          </div>
          <div className="col-12 col-lg-4">
            <div className="d-flex flex-wrap gap-2 justify-content-lg-end">
              <button type="button" className="btn btn-outline-secondary" data-bs-toggle="offcanvas" data-bs-target="#panelFiltrow">Filtry</button>
              <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#dodajZdjecie">Dodaj zdjęcie</button>
            </div>
          </div>
        </div>
      </header>

      <main className="container">
        <CategoryBar aktywna = {aktywnaKategoria} onWybierz={setAktywnaKategoria} />
        {widoczne.length === 0 && (
          <div className='alert alert-warning'>Nie znaleziono zdjęć tej kategorii</div>
        )}
        <Gallery zdjecia = {widoczne}/>
      </main>
      <Footer />
      <AddPhotoModal />
      <FiltersOffcanvas aktywna={aktywnaKategoria} onWybierz={setAktywnaKategoria}/>
    </>
  )
}

export default App
