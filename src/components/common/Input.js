import React from 'react'

const Input = ({ name, value, placeholder, onChange }) => {
    return (
        <input
            type="text"
            id={name}
            name={name}
            value={value}
            onChange={onChange}
            className='form-control'
            placeholder={placeholder}
        />
    )
}

export default Input