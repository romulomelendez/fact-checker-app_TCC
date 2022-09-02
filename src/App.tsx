import { useState } from 'react'

export const App: React.FC = () => {

  const [search, setSearch] = useState('')

  const handleFactNews = () => {

    try {
      fetch(import.meta.env.VITE_BASE_API_URL + `${search}` + '&key=' + import.meta.env.VITE_API_KEY)
      .then(response => response.json())
      .then(data => console.log(data))
    }
    catch (err){
      console.error(err)
    }

  }

  return (
    <>
      <input type="text" placeholder="Search" value={ search } onChange={ e => setSearch(e.target.value) } />
      <button onClick={ handleFactNews }>CHECK</button>
    </>
  )

}