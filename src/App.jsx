import { useState, useEffect } from 'react'
import axios from "axios"


function App() {

  const [actresses, setActresses] = useState([]);

  const fetchActresses = () => {
    axios.get('https://lanciweb.github.io/demo/api/actresses/').then((response) => {
      setActresses(response.data);
    })
  }

  return (
    <>
      <div className="btn btn-primary" onClick={fetchActresses}>CARICA LA PAGINA</div>
    </>
  )
}

export default App
