import React, {useState} from 'react'
import Accordion from './components/Accordion';
import Search from './components/Search';
import Dropdown from './components/Dropdown';

const items = [
    {
        title: 'What is react?',
        content: 'A frontend JS library'
    },
    {
        title: 'Why use react?', 
        content: 'My fav lib'
    },
    {
        title: 'How to use react',
        content: 'By making usable components'
    }
];

const colors = [
    {
        label: 'Green Color',
        value: 'green'
    },
    {
        label: 'Red Color',
        value: 'red'
    },
    {
        label: 'Blue color',
        value: 'blue'
    }
]

const App = () => {

    const [selectedColor, setColor] = useState(colors[0]);
    const [showDropdown, setShowDropdown] = useState(true);
    return (
        <div>
            <button onClick = {() =>setShowDropdown(!showDropdown)}>Toggle Dropdown</button>
            { showDropdown ? <Dropdown 
                colors = {colors}
                selectedColor = {selectedColor}
                setColor = {setColor}
            /> : null}
        </div>);
}

export default App;
