import React, { useEffect, useState } from 'react'
import { mainBoxes } from '../../Data/Data'
import './Boxes.css'

const Boxes = () => {
    const [arr1, setArr1] = useState([]);
    const [changeNumber, setChangeNumber] = useState(0);

    useEffect(() => {
        const newArray = mainBoxes.slice(0, 3);
        setArr1(newArray);
    }, []);

    const change = () => {
        setChangeNumber(changeNumber + 1);
    }

    return (
        <div className='boxes'>

            {
                arr1.map((e) => {
                    return <div key={e.id} className='boxes-child'>
                        <span>{e.ad}</span>
                        <p>{e.p}</p>
                        <button onClick={change}>click</button>
                        <span>{changeNumber}</span>
                    </div>
                })
            }

        </div>
    )
}

export default Boxes