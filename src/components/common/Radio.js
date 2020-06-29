import React from 'react'

const Radio = ({ name, label, option, onChange }) => {
    return (
        <div className="form-check">
            <input
                type='radio'
                id={name}
                name={name}
                value={name}
                checked={option === name}
                onChange={onChange}
                className='form-check-input'
            />

            <label className='orm-check-label' htmlFor={name}>
                { label }
            </label>
        </div>
    )
}

export default Radio