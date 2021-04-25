import React, { useState } from 'react';
import Dropdown from './Dropdown';
import Converter from './Converter';

const options = [
    { 
        label: 'African',
        value: 'af'
    },
    {
        label: 'Arabic',
        value: 'ar'
    },
    {
        label: 'Hindi',
        value: 'hi'
    },
    {
        label: 'Dutch',
        value: 'nl'
    }
]
const Translate = () => {

    const [ selectedOption, setSelectedOption ] = useState(options[0]);
    const [ text, setText ] = useState('');

    return (
        <div>
            <Dropdown 
                label = 'Select a language'
                options = {options} 
                selectedOption = {selectedOption}
                setSelectedOption = {setSelectedOption}/>
            <div className='ui form'>
                <div className='field'>
                    <label>Enter text</label>
                    <input value={text} onChange={(e) => setText(e.target.value)}/>
                </div>
            </div>
            <br/>
            <div className='ui header'>
                <Converter language={selectedOption} text = {text} />
            </div>
        </div>
    )
}

export default Translate;
