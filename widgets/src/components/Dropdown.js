import React, { useState, useEffect, useRef } from 'react'

const Dropdown = ({colors, selectedColor, setColor}) => {

    const [open, setOpen] = useState(false);
    const ref = useRef();

    useEffect(() => {
        const onBodyClick = (event) => {
            if(ref.current.contains(event.target))
            return;
            setOpen(false);
        };
        document.body.addEventListener('click',onBodyClick)
        return document.body.removeEventListener('click', onBodyClick);
    }, [])

    const renderList = colors.map((data, index) => {
        return data.label !== selectedColor.label ? (
            <div 
                key={index} 
                className='item'
                onClick={() => {
                setColor(data)}}>
                {data.label}
            </div>
        ) : null;
    })
    return (
        <div ref = {ref} className='ui form'>
            <div className='field'>
                <label className="label">Select a color</label>
                <div 
                    className={`ui selection dropdown ${open ? 'visible active' : ''}`}
                    onClick={() =>{
                        setOpen(!open)}}>
                        <i className="dropdown icon"></i>
                        <div className="text">{selectedColor.label}</div>
                        <div className={ `menu ${open ? 'visible transition' : ''}`}>{renderList}</div>
                </div>
            </div>
            
        </div>
    )
}

export default Dropdown;