import React, { useEffect } from 'react'
import './person.css'
import { NavLink } from 'react-router-dom'
import { PersonInfo } from '../Data/Data'

const Person = () => {

    function logSecond() {
        let secondInfo = {}
        PersonInfo.forEach((e) => {
            if (e.id == localStorage.getItem('personId')) {
                let inputs = document.querySelectorAll('input');
                inputs.forEach(element => {
                    secondInfo[element.name] = element.value
                });

                Object.assign(e, secondInfo);
            }
        });
        console.log(PersonInfo);
    }

    return (<div className='person'>
        <form action="">
            <label htmlFor="">
                <span>Aile Uzvlerinin Sayi</span>
                <input type="number" name='AileUzvlerininSayi' />
            </label>
            <label htmlFor="">
                <span>Ayliq Gelir</span>
                <input type="number" name='AyliqGelir' />
            </label>
            <label htmlFor="">
                <span>Ayliq Isiq pulu</span>
                <input type="number" name='AyliqIsiqpulu' />
            </label>
            <label htmlFor="">
                <span>Ayliq Qaz pulu</span>
                <input type="number" name='AyliqQazpulu' />
            </label>
            <label htmlFor="">
                <span>Ayliq Su pulu</span>
                <input type="number" name='AyliqSupulu' />
            </label>
            <label htmlFor="">
                <span>Ayliq Xerc</span>
                <input type="text" name='AyliqXerc' />
            </label>
        </form>
        <NavLink  onClick={logSecond} to={''}>Davam Et</NavLink>
    </div>
    )
}

export default Person