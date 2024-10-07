import React, { useState } from 'react'
import { films } from '../Data/Data'
import './Work.css'
import { useEffect } from 'react'

const AllWorks = () => {
    const [sortedFilms, setSortedFilms] = useState([]);
    useEffect(() => {
        const newFilms = films.sort((a, b) => a.duration - b.duration);
        setSortedFilms(newFilms);
    }, []);
    return (
        <div className='work-area'>
            <div className='works all-work'>
                {
                    sortedFilms.map((e) => {
                        return <div key={e.id} >
                            <span>{e.name}</span>
                            <span>{e.director}</span>
                            <span>muddet: {e.duration} deq</span>
                        </div>
                    })
                }
            </div>
        </div>
    )
}

export default AllWorks