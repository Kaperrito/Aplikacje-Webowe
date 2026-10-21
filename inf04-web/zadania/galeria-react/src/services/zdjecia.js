let zdjecia = null
export async function pobierzZdjecia() {
  if (zdjecia) return zdjecia
    const odpowiedz = await fetch('/photos.json')
  if (!odpowiedz.ok) throw new Error('Blad serwera: ' + odpowiedz.status)
    zdjecia = await odpowiedz.json()
    return zdjecia
}

export async function pobierzZdjecie(id){
  const lista = await pobierzZdjecia()
  return lista.find(x =>x.id ===Number(id)) ?? null
}

export function usunZdjecie(id) {
  zdjecia = zdjecia.filter(x => x.id !== id)
  return zdjecia
}
export function przelaczUlubione(id) {
  zdjecia = zdjecia.map(x => (x.id === id ? { ...x, favorite: !x.favorite } : x))
  return zdjecia
}

export function dodajZdjecie(nowe){
  const noweId = Math.max(...zdjecia.map(x => x.id)) + 1
  zdjecia = [...zdjecia, { ...nowe, id: noweId, favorite: false }]
  return zdjecia
}
