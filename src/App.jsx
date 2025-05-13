import { useState } from 'react'
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
      <div className="container">
        <div className="row">
          <div className="col-12 text-center"><h1>react-api</h1></div>
        </div>
        <div className="row">
          <div className="col-12">
            <div className="btn btn-primary mb-3" onClick={fetchActresses}>LOAD THE PAGE</div>
          </div>
        </div>
        <div className="row g-4">
          {actresses.map((actress) => {
            return <div key={`actress ${actress.id}`} className="col-12 col-md-6 col-lg-4">
              <div className="card d-flex flex-row">
                <div className="card-image">
                  <img className='' src={actress.image} alt="" />
                </div>
                <div className="card-infos">
                  <p className='fw-bold'>{actress.name}</p>
                  <p>birth year : {actress.birth_year}</p>
                  <p>death year : {actress.death_year ? actress.death_year : "Still alive"}</p>
                  <p>actress nationality : {actress.nationality}</p>
                  <p>actress most famous movies : {actress.most_famous_movies}</p>
                  <p>actress awards : {actress.awards}</p>
                  <p>actress biography : {actress.biography}</p>
                </div>
              </div>
            </div>
          })}
        </div>
      </div>
    </>
  )
}

export default App
