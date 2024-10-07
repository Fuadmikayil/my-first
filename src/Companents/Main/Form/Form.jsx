import React from 'react'
import './Form.css'

const Form = () => {
    return (
        <div className='form-box'>
            <form action="">
                <input type="text" name="" id="" placeholder='name:' />
                <input type="text" placeholder='surname: ' />
                <textarea name="" id="" placeholder='about you:'></textarea>
                <button>Send</button>
            </form>
        </div>
    )
}

export default Form