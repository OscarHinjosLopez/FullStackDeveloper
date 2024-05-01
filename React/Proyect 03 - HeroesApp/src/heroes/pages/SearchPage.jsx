import { useLocation, useNavigate } from 'react-router-dom';
import { useForm } from '../../hooks/useForm'
import { HeroCard } from '../components/Index'
import { getHeroesByName } from '../helpers/Index';



import queryString from 'query-string';
import { useMemo } from 'react';



export const Search = () => {

  const navigate = useNavigate();
  const location = useLocation();


  const { q = '' } = queryString.parse(location.search)


  const { searchText, onInputChange } = useForm({
    searchText: q,

  });
  const heros = getHeroesByName(searchText)


  const onSearchSubmit = (e) => {
    e.preventDefault()
    // if (searchText.trim().length <= 1) return

    navigate(`?q=${searchText.toLowerCase().trim()}`)


  }


  return (
    <>
      <h1>Search</h1>
      <hr />
      <div className="row">
        <div className="col-5">
          <h4>Searching</h4>
          <hr />
          <form onSubmit={onSearchSubmit}>
            <input
              type="text"
              placeholder="search hero..."
              className="form-control"
              name="searchText"
              autoComplete="off"
              value={searchText}
              onChange={onInputChange} />
            <button className="btn btn-outline-primary mt-1">Search</button>
          </form>
        </div>
        <div className="col-7">
          <h4>Results</h4>
          <hr />
          {
            (q === '')
            ? <div className="alert alert-info"> search hero</div>
            : (heros.length === 0) && <div className="alert alert-danger"> No hero with <b>{q}</b></div>
            

          }
         
          
          <div className='mx-5'>
            {
              heros.map(hero => (

                <HeroCard key={hero.id} {...hero} />

              ))
            }
          </div>


        </div>
      </div>
    </>
  )
}
