import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({label, options, selectedOption, setSelectedOption}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target)) return;
            setOpen(false);
        };
        document.body.addEventListener('click',onBodyClick)
        return () =>  {document.body.removeEventListener('click', onBodyClick)};
    }, [])

    const renderList = options.map((data, index) => {
        return data.label !== selectedOption.label ? (
            <div 
                key={index} 
                className='item'
                onClick={() => {
                    setSelectedOption(data)}}>
                {data.label}
            </div>
        ) : null;
    })
    return (
        <div ref = {ref} className='ui form'>
            <div className='field'>
                <label className="label">{label}</label>
                <div 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    onClick={() =>{
                        setOpen(!open)}}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selectedOption.label}</div>
                        <div className={ `menu ${open ? 'visible transition' : ''}`}>{renderList}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Dropdown;