import React from 'react'
import './Ipoteka.css'
import { NavLink } from 'react-router-dom'
import { PersonId, PersonInfo } from '../Data/Data'

const Ipoteka = () => {

    function log() {
        let info = {};
        let inputs = document.querySelectorAll('input');
        let id;
        do {
            id = Math.floor(Math.random() * 10);
        } while (PersonId.includes(id))

        info["id"] = id;
        localStorage.setItem("personId", id);

        inputs.forEach((element) => {
            if(!element.value == ""){
                info[element.name] = element.value;
            }
            else{
                element.style.borderBlockColor = "red"
            }
        });

        PersonInfo.push(info);
        PersonId.push(id);
    }

    return (<div className='ipoteka'>
        <form action="">
            <label htmlFor="">
                <span>Ad</span>
                <input type="text" name='ad' />
            </label>
            <label htmlFor="">
                <span>Soyad</span>
                <input type="text" name='soyad' />
            </label>
            <label htmlFor="">
                <span>Ata Adi</span>
                <input type="text" name='ataAdi' />
            </label>
            <label htmlFor="">
                <span>Fin Kod</span>
                <input type="text" name='finKod' />
            </label>
            <label htmlFor="">
                <span>Seria</span>
                <input type="text" name='seriya' />
            </label>
            <label htmlFor="">
                <span>Yasayis Yeri</span>
                <input type="text" name='yasasiyYeri' />
            </label>
            <label htmlFor="unvan2">
                <span>Qeydiyyat</span>
                <input type="text" name='qeydiyyat' />
            </label>
            <label htmlFor="dogum tarixi">
                <span>Dogum Tarixi</span>
                <input type="date" name='dogumTarixi' />
            </label>
        </form>
        <NavLink onClick={log} to={'/shexsi-melumatlar'}   >Davam Et</NavLink>
    </div>

    )

}

export default Ipoteka