import React, { useEffect, useState } from 'react'
import { films } from '../Data/Data';
import { NavLink } from 'react-router-dom';
import './Work.css'

const Work = () => {
  const [newArray, setNewArray] = useState([]);

  useEffect(() => {
    const sliceFilms = films.slice(0, 4);
    setNewArray(sliceFilms);
  }, [])
  return (
    <div className='work-area'>
      <div className='works'>
        {
          newArray.map((e) => {
            return <div key={e.id}>
              <span>{e.name}</span>
              <span>{e.director}</span>
              <span>{e.duration}</span>
            </div>
          })
        }
      </div>
      <NavLink to={'/all-works'} >see more</NavLink>
    </div>
  )
}
export default Work